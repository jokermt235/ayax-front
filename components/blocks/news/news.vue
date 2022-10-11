<script>
import container from '../../layout/container.vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'  

export default {
    props: {
        title: String,
        btn: String,
        sectionPadding: String
    },
    components: {
        container,
        swiper,
        swiperSlide
    },
    data(){
        return{
            isMob: false, 
            sliderOptions: {
                slidesPerView: 1.2, 
                spaceBetween: 10,
                pagination: {
                    el: '#paginationNews',
                    type: 'bullets',
                    clickable: true
                },
            },
        }
    },
    methods: {
        changeTabService: function(index) {
            this.tabActive = index
        }
    },
    mounted() {
        if($(window).width() < 992) {
            this.isMob = true;
        }
        this.$store.dispatch('homenews/httpFetch');
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      },
      newsItems(){
        return this.$store.getters["homenews/records"];
      }
    },
}
</script>

<template lang="pug">
    container(:extraClass="sectionPadding")
        .internal-news
            .row
                .col
                    .internal-news--title.title
                        h2 {{ title || 'Новости ипотеки Краснодара'}}
            .row.row-cols-4.g-5
                template(v-if="isMob") 
                    swiper(:options="sliderOptions" )
                        swiper-slide.slider-news-item(v-for="(item, index) in newsItems" :key="index" )
                            .col-12.col-sm-6.col-md-6.col-lg-3
                                .internal-news--card
                                    .internal-news--date
                                        span {{ item.day }}
                                        span {{ item.month }}
                                    .internal-news--text
                                        p {{ item.text }}
                                    a( :href="item.href").internal-news--btn
                                        span {{ btn || 'Подробнее' }}        
                    .swiper-pagination.swiper-pag-mob#paginationNews
                template(v-else) 
                    .col-12.col-sm-6.col-md-6.col-lg-3(v-for="item in newsItems")
                        .internal-news--card
                            .internal-news--date
                                span {{ item.day }}
                                span {{ item.month }}
                            .internal-news--text
                                p {{ item.title }}
                            a( :href="item.href").internal-news--btn
                                span {{ btn || 'Подробнее' }}
</template>
