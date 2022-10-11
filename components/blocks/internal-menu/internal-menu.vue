<script>
import container from '../../layout/container.vue'

export default {
    props: {
      title: String,
      internalMenuItems: Array,
    },
    components: {
        container
    }
}
</script>
<template lang="pug">
    container  
        .col-12.title(v-if="title")
            h3 {{ title }}
        .internal-menu(:style=" title ? 'margin-top: 0' : ''")
            a(v-for="item in internalMenuItems" :href="item.link" ).internal-menu--link
                span
                    img( :src="item.src", :alt="item.name")
                span {{ item.name }}

</template>
