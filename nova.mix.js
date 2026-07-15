const mix = require('laravel-mix')
const webpack = require('webpack')
const path = require('path')

class NovaExtension {
  name() {
    return 'nova-extension'
  }

  register(name) {
    this.name = name
  }

  webpackPlugins() {
    return new webpack.ProvidePlugin({
      _: 'lodash',
    })
  }

  webpackConfig(webpackConfig) {
    webpackConfig.externals = {
      vue: 'Vue',
      // Nova 5 ships its UI primitives (Icon, Button, ...) as the runtime
      // global LaravelNovaUi (loaded by Nova's ui.js), not as a global Vue
      // component. Externalise the import so it resolves at runtime.
      'laravel-nova-ui': 'LaravelNovaUi',
    }

    webpackConfig.resolve.alias = {
      ...(webpackConfig.resolve.alias || {}),
      'laravel-nova': path.join(
        __dirname,
        './vendor/laravel/nova/resources/js/mixins/packages.js'
      ),
    }

    webpackConfig.output = {
      uniqueName: this.name,
    }
  }
}

mix.extend('nova', new NovaExtension())
