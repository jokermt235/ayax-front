<script>
import container from '../../layout/container.vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'  


export default {
    props: {
        title: String,
        profitablyItem: Array,
        classes: String,
        nomargin: Boolean,
        small: Boolean,
        big: Boolean,
        vertical: Boolean,
        extraClass: String
    },
    components: {
        container,
        swiper,
        swiperSlide
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    data() {
        return {
            rowClasses: 'row-cols-4',
            itemsClasses: '',
            isMob: false,
            sliderOptions: {
                slidesPerView: 1.1, 
                spaceBetween: 10,
                pagination: {
                    el: '#paginationProfi',
                    type: 'bullets',
                    clickable: true
                },
            },
        }
    },
    mounted() {
        if(this.classes) {
            this.rowClasses = this.classes
        }
        if(this.vertical) {
            this.itemsClasses += ' profitably-box--vertical'
        }
        if(this.big) {
            this.itemsClasses += ' profitably-box--big'
        }
        if(this.small) {
            this.itemsClasses += ' profitably-box--small'
        }
                if($(window).width() < 992) {
            this.isMob = true;
        }
    },
    methods: {
        changeTabService: function(index) {
            this.tabActive = index
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
    //- container(extraClass="profitably")
    container(:class="extraClass")
        .col(v-if="!vertical")
            .profitably-title.title(:class="nomargin ? 'm-0' : '' ")
                h3 {{ title || "Почему вам выгодно работать с нами?" }}
        .row.gy-3.service-agency(:class="rowClasses")
            .col-12(v-if="!isMob" v-for="(item, index) in profitablyItem" class="col-sm-6 col-lg-3")
                .profitably-box(:class="itemsClasses")
                    .profitably-number {{ index + 1}}
                    .profitably-info
                        .profitably-name(v-if="item.name")
                            p {{ item.name }}
                        .profitably-text
                            p {{ item.text }}
            template(v-if="isMob") 
                swiper(:options="sliderOptions" )
                    swiper-slide.slider-fast-item(v-for="(item, index) in profitablyItem"  :key="item.id") 
                        div(class="col-12 col-sm-12 col-xl-4" )
                            .profitably-box(:class="itemsClasses")
                                .profitably-number {{ index + 1}}
                                .profitably-info
                                    .profitably-name(v-if="item.name")
                                        p {{ item.name }}
                                    .profitably-text
                                        p {{ item.text }}
                .swiper-pagination.swiper-pag-mob#paginationProfi
</template>
