<script>

export default {
    props: {
        title: String,
        returnItems: Array
    },
    components: {

    }
}
</script>

<template lang="pug">

    .col
        .specialist-history--box(v-for="item in returnItems")
            .specialist-history--img
                img(:src="item.image", alt="")
            .specialist-history--info
                .specialist-history--name
                    span {{item.name}}
                .specialist-history--skill
                    span {{item.skill}}
                .specialist-history--text(v-html="item.text")
</template>
