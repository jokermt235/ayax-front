
<script>
import container from '../../layout/container.vue'


export default {
    props: {
        title: String,
        contactNav: Array,
    },
    components: {
        container
    }
}
</script>
<template lang="pug">
    container(extraClassRow="gy-2")
        .col(v-for="item in contactNav" class="col-12 col-sm-12 col-md-6 col-lg-3")
            .contact-nav
                .contact-nav--name {{item.name}}
                .contact-nav--text
                    span Телефон:
                    span {{item.tel}}

</template>
