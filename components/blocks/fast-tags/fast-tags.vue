<script>
import container from '../../layout/container.vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'  

export default {
    props: {
        title: String,
        fastTagsItem: Array,
        cartTagItem: Array,
    },
    data() {
        return {
            isMob: false,
            sliderData: [...this.fastTagsItem, ...this.cartTagItem],
            sliderOptions: {
                slidesPerView: 1.1, 
                spaceBetween: 10,
                pagination: { 
                    el: '#paginationFast',
                    type: 'bullets',
                    clickable: true
                },
            },
            
        };
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
container(extraClass="section_padding")
    .fast-tags
        .row
            .col
                .fast-tags--title.title
                    h2 {{ title }}
        .fast-tags--row
            template(v-if="isMob") 
                swiper(:options="sliderOptions" )
                    swiper-slide.slider-fast-item(v-for="item in sliderData"  :key="item.id")
                        img(:src="item.img", :alt="item.name")
                        .fast-tags
                            .fast-tags--categories
                                span {{ item.tagTitle }}
                                span {{ item.tagTitleNum }}
                            .fast-tags--box
                                template(v-for="item2 in item.items")
                                    a(:href="item2.link").fast-tags--name
                                        span {{ item2.title }}
                                        span {{ item2.qty }}
                .swiper-pagination.swiper-pag-mob#paginationFast
            template(v-if="!isMob")
                .row.row-cols-3.gy-3.row-column
                    template(v-for="tag in fastTagsItem")
                        .col
                            .fast-tags 
                                .fast-tags--categories
                                    span {{ tag.tagTitle }}
                                    span {{ tag.tagTitleNum }}
                                .fast-tags--box
                                    template(v-for="item in tag.items")
                                        a(:href="item.link").fast-tags--name
                                            span {{ item.title }}
                                            span {{ item.qty }}

                .row.row-cols-1.row-column
                    template(v-for="cardTag in cartTagItem")
                        .col 
                            .tags-card
                                .tags-card--img
                                    img(:src="cardTag.img")
                                a(href="").tags-card--title
                                    span {{ cardTag.tagTitle }}
                                .tags-card--box(v-for="item in cardTag.items")
                                    a(href="")
                                        span {{ item.title }}
                                        span {{ item.qty }}
                
</template>
