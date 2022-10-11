<script>
import container from '../../layout/container.vue'

export default {
    props: {
      title: String,
      stocksItems: Array,
      text: String
    },
    components: {
        container
    }
}
</script>


<template lang="pug">
    container
        .internal-stocks
            .row
                .col
                    .internal-stocks--title.title
                        h2 {{ title || "Акции по ипотеке в Краснодаре"}}
                    .awards-subtitle( v-html="text"  v-if="text" )
            .row.justify-content-center.gy-4
                .col.col-12.col-sm-6.col-md-4.col-lg-3(v-for="item in stocksItems")
                    a( :href="item.href").internal-stocks--box
                        .internal-stocks--img
                            img( :src="item.src", alt="")
                        .internal-stocks--name
                            p {{ item.text }}
</template>

