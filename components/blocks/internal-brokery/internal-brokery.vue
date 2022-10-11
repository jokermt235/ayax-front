<script>
import container from '../../layout/container.vue'


export default {
    props: {
        title: String,
        internalBrokery: Array,
    },
    components: {
        container
    }
}
</script>

<template lang="pug">
    container
        .internal-brokery
            .row
                .col
                    .internal-brokery--title.title
                        h1 {{ title || 'Ипотечные брокеры агентства недвижимости «АЯКС»'}}
                    .row.row-cols-4.g-4
                        .col.col-12.col-sm-6.col-md-4.col-lg-3(v-for="item in internalBrokery")
                            .internal-card
                                a(:href="item.personLink").cover-link
                                .internal-card--img
                                    .person-director(v-if="item.director")
                                    img( :src="item.src", alt="")
                                .internal-card--info
                                    .internal-card--name
                                        span {{ item.name }}
                                    .internal-card--post
                                        span {{ item.post }}
                                        a(v-if="item.postLink" :href="item.postLink") {{ item.postLinkText }}
                                a(:href="'tel:' + item.tel" v-if="item.tel").internal-card--tel
                                    span
                                    span {{ item.tel }}
</template>
