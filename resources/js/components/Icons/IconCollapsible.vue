<template>
    <!--
      Nova 5's Icon takes the icon name via `name` and uses `type` only for the
      Heroicons variant (outline/solid/mini/micro). The `type`/`typeElse` props
      here still carry the icon name (chevron-up / chevron-down) so callers stay
      unchanged. viewBox/width/height are ignored by Nova 5's Icon (size follows
      the variant), so they are no longer forwarded.
    -->
    <Icon :name="value ? type : typeElse" type="outline" />
</template>
<script>
import { Icon } from 'laravel-nova-ui'

export default {
    components: { Icon },
    props: {
        value: {
            type: Boolean,
            default: false,
        },
        type: {
            type: String,
            default: 'chevron-up',
        },
        typeElse: {
            type: String,
            default: 'chevron-down'
        },
    },
}
</script>
