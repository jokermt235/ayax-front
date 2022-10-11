<script>

import container from '../../layout/container'
import ProductCard from '../product-card/product-card'

export default {
    components: {
    ProductCard,
    container,

    },
    props: {
        productItems: Array,
        tabsProduct: Array,
        title: String,
        nobanner: Boolean,
        flatView: Boolean
    },


    data() {
        return {
            tabActive: 0,

        }
    },
    methods: {
        changeSlider: function(index) {
            this.tabActive = index
        }
    },
    mounted() {
        // console.log(  this.productItems)
        // console.log(  this.tabsProduct)
        // console.log(  this.flatView)


    },
}
</script>
<template lang="pug">
.section.section-nopadding.section-objects
    .container
        .row
            .col
                h2.title {{ title }}
    container(extraClassRow="row-cols-4" v-if="tabsProduct" extraClass="section-nopadding")
        .consultation
            template(v-if="tabsProduct")
                .consultation-tab
                    ul.consultation-tab--list
                        template(v-for="(item, index) in tabsProduct")
                            li.consultation-tab--name(@click="changeSlider(index)" :class="index === tabActive ? 'active' : '' ") {{ item }}
    container(:extraClassRow="flatView ? 'row-cols-md-4 gy-4' : 'row-cols-1 gy-4' " v-for="(products, index) in productItems" :key="index" v-if="index === tabActive" )
        template(v-for="(single,index) in products.prod")
            ProductCard(
                :sliderId="index"
                :viewType="flatView"
                :prodname="single.name"
                :price="single.price"
                :cost="single.cost"
                :mortgage="single.mortgage"
                :square="single.square"
                :floor="single.floor"
                :place="single.place"
                :productPhotos="single.photos"
            )
        .col.col-12.col-lg-3(v-if="!nobanner")
            .product-card.product-card--banner(:class="flatView ? '' : 'product-strip--banner' ")
                .product-card--img
                    img(src="/images/pages/kupit-zhilye/cottage-1.jpg" alt="")
                .product-card--name
                    span Не нашли нужного варианта?
                .product-card--text
                    span Подберем до 20 объектов по вашим параметрам
                a(href="" target="_blank").product-card--btn
                    span Связаться с риэлтором
        //- template(v-for="(item, index) in productItems" v-if="index === tabActive")
            //- .consultation-slider(:data-tab-slider="index" )
                //- Slider(v-if="index === tabActive" :sliderOptions="sliderOptions" :slides="item.slider" :sliderId="index" arrowClass="consult-arrow")
        .col-12.flex.justify-content-center(v-if="!nobanner")
            a(:href="productItems[tabActive].link" class="internal-news--btn btn--wide") Ещё {{productItems[tabActive].totalItems}} объекта
</template>
