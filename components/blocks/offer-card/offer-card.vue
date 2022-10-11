<script>

export default {
    props: {
        title: String,
        offerItems: Array
    },
    components: {

    }
}
</script>

<template lang="pug">
.row.row-cols-4.g-4
    .col(v-for="item in offerItems" class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3")
        .offer-card
            .offer-img
                img(:src="item.img", alt="")
            .offer-name
                span {{item.name}}
            .offer-text
                span {{item.text}}
</template>
