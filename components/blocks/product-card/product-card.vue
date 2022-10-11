<script>
import container from '../../layout/container'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
export default {
    props: {
        prodname: String,
        price: String,
        cost: String,
        mortgage: String,
        square: Number,
        floor: String,
        place : String,
        productPhotos: Array,
        sliderId: Number,
        arrowClass: String,
        viewType: Boolean,
        textProduct: String,
        id: Number
    },
    components: {
        container,
        swiper,
        swiperSlide,
    },
    data() {
        return {
            arrows: this.arrowClass,
            singleItem: null,
            slider: this.productPhotos,
            sliderOptions: {
                slidesPerView: 1,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
                pagination: {
                    el: '.swiper-pagination-'+this.sliderId,
                    type: 'bullets',
                    clickable: true
                },
            },
            activeCompare: false,
            activeFavorite: false,

        }
    },
    mounted() {
            if(this.slider === undefined) {
                this.slider = [{ photo: '/images/ayax/ayax-logo.svg'}]
                this.arrows = 'd-none';
                this.singleItem = 'flex align-items-center'
            }

            if(localStorage.getItem('itemsInCompare') != null && localStorage.getItem('itemsInCompare').includes(this.id)) {
                this.activeCompare = true
            }
            if(localStorage.getItem('itemsInFavorite') != null && localStorage.getItem('itemsInFavorite').includes(this.id)) {
                this.activeFavorite = true
            }

    },
    computed: {
          swiper() {
            return this.$refs.mySwiper.$swiper
      }
    },

    methods: {
        // toStore(toggle, id) {
        //     this.$emit('liveCompare', {
        //         'toggle': toggle,
        //         'id': id,
        //     })
        // },
        changeCompareQty(num) {
            const changeing = $(document).find('.header-top--link.icon-compare')
            let changeNum = +changeing.text()
            if(num) {
                changeing.text(changeNum + 1)
            } else {
                changeing.text(changeNum - 1)
            }
        },
        changeFavoriteQty(num) {
            const changeing = $(document).find('.header-top--link.icon-favorites')
            let changeNum = +changeing.text()
            if(num) {
                changeing.text(changeNum + 1)
            } else {
                changeing.text(changeNum - 1)
            }
        },
        toggleCompare(itemId) {
            if(localStorage.getItem('itemsInCompare')) {
                let inCompare = localStorage.getItem('itemsInCompare')
                const filtered = []
                if(inCompare.includes(itemId)) {
                    const storageIds = inCompare.split(',')
                    storageIds.map(item => {
                        if(item != itemId) {
                          filtered.push(item)
                        }
                    })
                    localStorage.setItem('itemsInCompare', filtered )
                    this.activeCompare = false
                    // toStore(false, itemId)
                    this.changeCompareQty(false)
                } else {
                    localStorage.setItem('itemsInCompare', inCompare + ',' + itemId )
                    this.activeCompare = true
                    // toStore(true, itemId)
                    this.changeCompareQty(true)
                }
            } else {
                localStorage.setItem('itemsInCompare', itemId + ',')
                this.activeCompare = true
                // toStore(true, itemId)
                this.changeCompareQty(true)
            }


        },
        toggleFavorite(itemId) {
            if(localStorage.getItem('itemsInFavorite')) {
                let inFavorite = localStorage.getItem('itemsInFavorite')
                const filtered = []
                if(inFavorite.includes(itemId)) {
                    const storageIds = inFavorite.split(',')
                    storageIds.map(item => {
                        if(item != itemId) {
                          filtered.push(item)
                        }
                    })
                    localStorage.setItem('itemsInFavorite', filtered )
                    this.activeFavorite = false
                    this.changeFavoriteQty(false)
                } else {
                    localStorage.setItem('itemsInFavorite', inFavorite + ',' + itemId )
                    this.activeFavorite = true
                    this.changeFavoriteQty(true)
                }
            } else {
                localStorage.setItem('itemsInFavorite', itemId + ',')
                this.activeFavorite = true
                this.changeFavoriteQty(true)
            }
        },
        openApartment() {

        }
    }

}
</script>

<template lang="pug">
.col(:data-id="id")
    template(v-if="viewType")
        .product-element
            .product-card--icon
                .btn--compare.product-card--compare(@click="toggleCompare(id)" :class="activeCompare ? 'active' : ''")
                .btn--save.product-card--fav(@click="toggleFavorite(id)" :class="activeFavorite ? 'active' : ''")
            a(href="/detail-apartments" target="_blank").product-card
                .product-card--slider
                    .product-card--views
                        span
                            img( src="images/eye.svg")
                        span 160
                    .product-card--crown
                        span
                            img( src="images/crown.svg")
                    .product-card--img(:class="singleItem")
                        swiper(:options="sliderOptions" )
                            swiper-slide.slider-item(v-for="slide in slider" :key="slide.id")
                                .slider-box(@click="$refs.apartmentLink.click()")
                                    img(:src="slide", :alt="prodname")
                            .slider-button.swiper-button-prev(slot="button-prev" :data-button-id="sliderId" :class="arrowClass")
                            .slider-button.swiper-button-next(slot="button-next" :data-button-id="sliderId" :class="arrowClass")

                .product-card--info
                    .product-card--name
                        //- p {{ id }}  
                        span {{ prodname }}
                    .product-card--price
                        span {{ price }}
                        span ₽
                    .product-card--cost
                        span {{ cost }}
                        span ₽/
                            sup м2
                    .product-card--mortgage
                        span Ипотека от
                        span {{ mortgage }}
                        span ₽/мес
                    .product-card--data
                        .product-card--square
                            span {{ square }} м²
                            span {{ floor }}
                    .product-card--place
                        span {{ place }}
                a(href="#").product-card--btn
                    span Связаться с риэлтором
    template(v-else)
        .product-element
            a(href="/detail-apartments" target="_blank").product-strip(:data-r="viewType")
                .product-images
                    .product-strip--slider
                        .product-strip--views
                            span
                                img( src="images/eye.svg")
                            span 160
                        .product-strip--crown
                            span Эксклюзивно в Ayax
                        .product-strip--img
                            swiper(:options="sliderOptions" )
                                swiper-slide.slider-item(v-for="slide in slider" :key="slide.id")
                                    .slider-box
                                        img(:src="slide", :alt="prodname")
                            .swiper-pagination(:class="'swiper-pagination-'+sliderId")
                .product-strip--descr
                    .product-strip--name
                        span {{ prodname }}
                    .product-strip--data
                        .product-strip--square
                            span {{ square }}
                            span {{ floor }}
                    .product-strip--place
                        span {{ place }}
                    .product-strip--text
                        span {{ textProduct }}
                .product-strip--info
                    .product-strip--price
                        span {{ price }}
                        span ₽
                    .product-strip--cost
                        span {{ cost }}
                        span ₽/м2
                    .product-strip--mortgage
                        span Ипотека от
                        span {{ mortgage }}
                        span ₽/мес
                    .product-strip--btn
                        span Связаться с риэлтором
            .product-strip--icon
                .product-strip--compare
                    .btn--compare.product-card--compare(@click="toggleCompare(id)" :class="activeCompare ? 'active' : ''")
                .product-strip--fav
                    .btn--save.product-card--fav(@click="toggleFavorite(id)" :class="activeFavorite ? 'active' : ''")
</template>
