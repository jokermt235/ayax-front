<script> 
export default {
    props: {
        links: Array,
        title: String,
        absolute: Boolean,
    }
}  

</script>


<template lang="pug">

    .breadcrumbs(:class="absolute ? 'breadcrumbs-absolute' : ''")
        .container.p-mob-10
            a(href="/") Главная
            template(v-if="links")
                a(:href="item.path" v-for="(item, index) in links" :key="index") {{ item.name }}
            span {{ title }}
</template>