<script>
import container from '../../layout/container.vue'

export default {
    props: {
      title: String,
      pageNav: Array
    },
    components: {
        container
    }
}
</script>
<template lang="pug">
container(extraClass="section-nopadding")
  .seo-nav
    template(v-for="item in pageNav")
        a(:href="item.link" :data-nav-icon="item.icon" :target="item.blank ? '_blank' : '_self'").seo-link {{item.title}}
</template>
