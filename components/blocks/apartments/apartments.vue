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
        flatView: Boolean,
        showMap: Boolean,
        sortingApartments: Object
    },

    data() {
        return {
            tabActive: 0, 
            isMob: false,
            items: this.productItems
        }
    }, 
    computed: {  
    },

    watch: { 
        sortingApartments: function() {
            switch(this.sortingApartments.data) {
                case 'dateup' :
                    // this.productItems.sort((a,b) => parseInt(b.split('').reverse().join('')).replaceAll('.', '') - parseInt(a.split('').reverse().join('')).replaceAll('.', '')) 
                    break;
                case 'datedown' :
                    break;
                case 'priceup' :
                    this.productItems.sort((a,b) => +b.price.replaceAll(' ', '') - +a.price.replaceAll(' ', '')) 
                    break;
                case 'pricedown' :
                    this.productItems.sort((a,b) => +a.price.replaceAll(' ', '') - +b.price.replaceAll(' ', '')) 
                    break;
                case 'sizeup' :
                    this.productItems.sort((a,b) => b.square - a.square) 
                    break;
                case 'sizedown' :
                    this.productItems.sort((a,b) => a.square - b.square) 
                    break;
            }
        }
    },
    mounted() { 
        if($(window).width() < 992) {
            this.isMob = true; 
        } 
    },
  }

</script>
<template lang="pug"> 
.container
    .row()
        .section-objects(:class="!showMap ? 'col-12' : 'col-6'")
            .row(:class=" !showMap ? flatView ? 'row-cols-sm-3 row-cols-lg-4 gy-4' : 'row-cols-1 gy-4' : 'row-cols-2 gy-4'")
                template(v-for="(single,index) in productItems")
                    ProductCard(
                        :id="index"
                        :sliderId="index"
                        :viewType="!showMap ? flatView : true"
                        :prodname="single.name"
                        :price="single.price"
                        :cost="single.cost"
                        :mortgage="single.mortgage"
                        :square="single.square"
                        :floor="single.floor"
                        :place="single.place"
                        :productPhotos="single.photos"
                    )
                .col
                    .product-card.product-card--banner(:class="showMap ? '' : 'product-strip--banner' ")
                        .product-card--img
                            img(src="/images/pages/kupit-zhilye/cottage-1.jpg" alt="")
                        .product-card--name
                            span Не нашли нужного варианта?
                        .product-card--text
                            span Подберем до 20 объектов по вашим параметрам
                        a(href="" target="_blank").product-card--btn
                            span Связаться с риэлтором
        
        .col-6(v-if="showMap && !isMob")
            .map
                p MAP
    
</template>
