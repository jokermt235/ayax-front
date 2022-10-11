<script>

export default {
    props: {
        newNavItems: Array
    }, 
}
</script>

<template lang="pug">
.news-nav
    .container
        .row.justify-content-center
            template(v-for="item in newNavItems")
                a(:href="item.path" :class="item.active") {{ item.name }}
</template>