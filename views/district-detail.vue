<script>
import container from '../components/layout/container'
import Layout from "../components/layout/layout"
import Banner from '../components/blocks/banner/banner.vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import ProductCard from "../components/blocks/product-card/product-card.vue"
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'


export default {
    name: 'App',
    components: {
        Layout,
        Banner,
        container,
        Breadcrumbs,
        swiper,
        swiperSlide,
        ProductCard,
    },
    props: {
        title: String,

    },
    data() {
        return {
            activeTab: 'tab-1',
            swiperOptions: {
                slidesPerView: 3,
                spaceBetween: 10,

                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }
            },
            partners: [
                {
                    id: 1,
                    logo: 'https://www.ayax.ru/upload/iblock/624/624abbf167986c9baf14b5bb63d5cb8e.jpg',
                },
                {
                    id: 4,
                    logo: 'https://www.ayax.ru/upload/iblock/624/624abbf167986c9baf14b5bb63d5cb8e.jpg',
                },
                {
                    id: 3,
                    logo: 'https://www.ayax.ru/upload/iblock/624/624abbf167986c9baf14b5bb63d5cb8e.jpg',
                },
                {
                    id: 2,
                    logo: 'https://www.ayax.ru/upload/iblock/624/624abbf167986c9baf14b5bb63d5cb8e.jpg',
                },
            ],
            productItems: [
                {
                    name: '3-комнатная квартира, 72.1 м2',
                    price: '5 650 000',
                    cost: '78 363',
                    mortgage: '51 364',
                    square: '90 м²',
                    floor: '4/24 этаж',
                    place: 'г. Краснодар, р-н Юбилейный, пр-кт Чекистов, 28',
                }
            ],

        }
    },
    methods: {
        setActive(tab) {
            this.activeTab = tab
        },
        isActive(tab) {
            return this.activeTab === tab;
        }
    }
}
</script>

<template lang="pug">
    Layout
        Breadcrumbs(title="Название Микрорайона")
        container(rowClass="px-4")
            .col-12.col-md-12.col-lg-9
                .box
                    .title-district.title
                        h3 Московский район Краснодара - карта, описание, фото
                .box
                    .district-detail--tab
                        .district-detail--name(@click="setActive('tab-1')" :class="{'active' : isActive('tab-1')}")  О районе
                        .district-detail--name(@click="setActive('tab-2')" :class="{'active' : isActive('tab-2')}")  Инфраструктура
                        .district-detail--name(@click="setActive('tab-3')" :class="{'active' : isActive('tab-3')}")  Тип недвижимости
                    .district-detail--content
                        .district-detail--descr(v-show="isActive('tab-1')") Московский микрорайон Краснодара – некогда просто жилой комплекс, а ныне – одна из самых густонаселенных локаций в столице. Постепенно он разросся до полноценного «спальника». Это территория новостроек в Прикубанском городском округе. Его принято ограничивать улицами Московской, Зиповской, Российской и Солнечной. Московский находится недалеко Зиповского кольца, прилегает в району кинотеатра «Аврора», а с другой стороны граничит с районом РИП.
                        .district-detail--descr(v-show="isActive('tab-2')") Также как курс на социально-ориентированный национальный проект способствует повышению качества экономической целесообразности принимаемых решений. Есть над чем задуматься: многие известные личности объявлены нарушающими общечеловеческие нормы этики и морали.
                        .district-detail--descr(v-show="isActive('tab-3')") Московский микрорайон Краснодара – некогда просто жилой комплекс, а ныне – одна из самых густонаселенных локаций в столице. Постепенно он разросся до полноценного «спальника». Это территория новостроек в Прикубанском городском округе. Его принято ограничивать улицами Московской, Зиповской, Российской и Солнечной. Московский находится недалеко Зиповского кольца, прилегает в району кинотеатра «Аврора», а с другой стороны граничит с районом РИП.
                .box.district-slider
                    swiper(:options="swiperOptions")
                        swiper-slide.slider-item.partner-logo-item(v-for="item in partners" :key="item.id")
                            img.slider-district--img(:src="item.logo")
                        .swiper-button-prev.partners-arrow(slot="button-prev")
                        .swiper-button-next.partners-arrow(slot="button-next")
                .col
                    .district-features
                        .district-features--box
                            .district-features--img
                                img(src="images/district/1.png")
                            .district-features--name
                                span Школы
                        .district-features--box
                            .district-features--img
                                img(src="images/district/2.png")
                            .district-features--name
                                span Детсады
                        .district-features--box
                            .district-features--img
                                img(src="images/district/3.png")
                            .district-features--name
                                span Магазины и ТЦ
                        .district-features--box
                            .district-features--img
                                img(src="images/district/4.png")
                            .district-features--name
                                span Парки и Скверы
                .box
                    .district-map
                        .title
                            h2 Карта микрорайона Молодежный с улицами, домами и объектами
                        .district-map--box
                            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Af6cfb5a850bcdbc1ee95282408c6aa1429e3b1ea03b1e979ff0c86a2382bddc7&amp;source=constructor" width="100%" height="450" frameborder="0"></iframe>
                .box
                    .col
                        .district-neighboring
                            .title Соседние районы
                            .text Вы можете перейти на страницу граничащего района и ознакомиться с его инфраструктурой, а также узнать, какие объекты недвижимости продаются там.
                            ul.district-neighboring--list
                                li.district-neighboring--item
                                    .district-neighboring--img
                                        img(src="https://www.ayax.ru/upload/iblock/624/624abbf167986c9baf14b5bb63d5cb8e.jpg")
                                    .district-neighboring--name
                                        span мкр. Северный
                                li.district-neighboring--item
                                    .district-neighboring--img
                                        img(src="https://www.ayax.ru/upload/iblock/624/624abbf167986c9baf14b5bb63d5cb8e.jpg")
                                    .district-neighboring--name
                                        span мкр. Северный
                                li.district-neighboring--item
                                    .district-neighboring--img
                                        img(src="https://www.ayax.ru/upload/iblock/624/624abbf167986c9baf14b5bb63d5cb8e.jpg")
                                    .district-neighboring--name
                                        span мкр. Северный
                                li.district-neighboring--item
                                    .district-neighboring--img
                                        img(src="https://www.ayax.ru/upload/iblock/624/624abbf167986c9baf14b5bb63d5cb8e.jpg")
                                    .district-neighboring--name
                                        span мкр. Северный
                .box
                    .col
                        .district-more
                            .title Вся недвижимость в Молодежном районе
                            ul.district-more--list
                                li.district-more--item
                                    .district-more--img
                                        img(src="https://www.ayax.ru/upload/iblock/624/624abbf167986c9baf14b5bb63d5cb8e.jpg")
                                    .district-more--name
                                        span мкр. Северный
                                li.district-more--item
                                    .district-more--img
                                        img(src="https://www.ayax.ru/upload/iblock/624/624abbf167986c9baf14b5bb63d5cb8e.jpg")
                                    .district-more--name
                                        span мкр. Северный
                                li.district-more--item
                                    .district-more--img
                                        img(src="https://www.ayax.ru/upload/iblock/624/624abbf167986c9baf14b5bb63d5cb8e.jpg")
                                    .district-more--name
                                        span мкр. Северный
                                li.district-more--item
                                    .district-more--img
                                        img(src="https://www.ayax.ru/upload/iblock/624/624abbf167986c9baf14b5bb63d5cb8e.jpg")
                                    .district-more--name
                                        span мкр. Северный
            .col-12.col-md-12.col-lg-3
                .flex-direction
                    //- ProductCard(:productItems="productItems")
                    .product-card
                        a(href="/detail-apartments" target="_blank").cover-link
                        .product-card--slider
                            .product-card--views
                                span
                                    img( src="images/eye.svg")
                                span 160
                            .product-card--crown
                                span
                                    img( src="images/crown.svg")
                            .product-card--img
                                img(src="http://placekitten.com/200/300")
                        .product-card--info
                            .product-card--name
                                p  id
                                span  prodname
                            .product-card--price
                                span  price
                                span ₽
                            .product-card--cost
                                span  cost
                                span ₽/
                                    sup м2
                            .product-card--mortgage
                                span Ипотека от
                                span  mortgage
                                span ₽/мес
                            .product-card--data
                                .product-card--square
                                    span  square  м²
                                    span  floor
                            .product-card--place
                                span  place
                        a(href="#").product-card--btn
                            span Связаться с риэлтором


</template>
