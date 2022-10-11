<script>
import container from '../../layout/container.vue'

const href = window.location.pathname

export default {
    props: {
      title: String,
      internalNavItems: Array,
      marginBottom: String || 0
    },
    components: {
        container
    },
    data() {
        return {
            path: href.split('/').reverse('')[0]
        }
    }
}
</script>
<template lang="pug">
    container(extraClass="section_internal" :style="'margin-bottom:'+marginBottom+'px'")
        .row
            .col
                .internal-nav
                    a(v-for="item in internalNavItems" :href="item.link" :key="item.name" :class="path === item.link.split('/')[2] ? 'active': '' " ).internal-nav--link {{item.name }} 

</template>
