<script>
export default {
    props: {
        title: String,
        reviewsItem: Array,
    },
    components: {
    }
}
</script>

<template lang="pug">
    .paginator
        .paginator-list
            .paginator-item 1
            .paginator-item 2
            .paginator-item ...
            .paginator-item 8
            .paginator-item 9
</template>