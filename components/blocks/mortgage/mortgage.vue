<script>
import container from '../../layout/container.vue' 
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'  


export default {
    props: {
      title: String,
      mortgageItems: Array
    },
    data(){
        return{
            isMob: false, 
            sliderOptions: {
                slidesPerView: 1.1, 
                spaceBetween: 10,
                pagination: {
                    el: '#paginationMrtg',
                    type: 'bullets',
                    clickable: true
                },
            },
        }
    },
    components: {
        container,
                swiper,
        swiperSlide
    },
    mounted() {
        if($(window).width() < 992) {
            this.isMob = true;
        } 
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
}
</script>
<template lang="pug">
    container(extraClass="section_grey")
        .cottage-mortgage
            .row
                .col
                    .cottage-mortgage__title.title_m
                        h2 {{ title || 'Купить дом просто'}}
            template(v-if="isMob") 
                .row.row-cols-md-3.justify-content-center
                    swiper(:options="sliderOptions" )
                        swiper-slide.slider-fast-item.col-7.col-sm-6.col-lg-4(v-for="(item, index) in mortgageItems"  :key="item.id") 
  
                            a(:href="item.link").cottage-mortgage__card
                                span {{item.name}}
                .swiper-pagination.swiper-pag-mob#paginationMrtg
            template(v-else) 
                .row.row-cols-md-3.justify-content-center
                    .col-7.col-sm-6.col-lg-4(v-for="item in mortgageItems")
                        a(:href="item.link").cottage-mortgage__card
                            span {{item.name}}

</template>


