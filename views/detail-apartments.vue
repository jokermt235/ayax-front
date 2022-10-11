<script>
import Layout from "../components/layout/layout";
import container from '../components/layout/container'
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'
import EyeImg from '../../assets/images/pages/apartments/eye.svg'
import ProductCard from "../components/blocks/product-card/product-card.vue"
import ProductStrip from "../components/blocks/product-strip/product-strip.vue"
import Consultation from '../components/blocks/consultation/consultation.vue'
import Sorting  from "../components/blocks/sorting/sorting.vue" 
import Modal from '../components/modal/modal.vue'
import Form from '../components/blocks/form/form.vue'
import ProductTabs from "../components/blocks/product-tabs/product-tabs"
import Calculator from "../components/blocks/calculator/calculator"





export default {
    name: 'App',
    props: {
    },
    components: {
        Modal,
        container,
        Layout,
        Breadcrumbs,
        EyeImg,
        ProductCard,
        ProductStrip,
        ProductTabs,
        Sorting, 
        Consultation,
        Calculator,
        Form
    },
    data() {
        return {
            id: 32,
            isMob: false,
            flatInfo: {
                rooms: '1',
                squareAll: '32.21',
                squareLive: '12.23',
                squareKitchen: '10.1',
                floor: '2',
                floorAll: '10',

            },
            activeCompare: false,
            tabsProduct: [ "One" ,"Two"],
            activeFavorite: false,
            location: [
               {
                   name: 'Район',
                   value: 'г. Краснодар'
               },
               {
                   name: 'Район',
                   value: 'г. Краснодар',
                   link: '#'
               },
            ],
            chars: [
               {
                   name: 'Стены',
                   value: 'монолит'
               },
               {
                   name: 'Балкон',
                   value: 'Балкон + лоджия',
               },
               {
                   name: 'Стены',
                   value: 'монолит'
               },
               {
                   name: 'Балкон',
                   value: 'Балкон + лоджия',
               },
               {
                   name: 'Стены',
                   value: 'монолит'
               },
               {
                   name: 'Балкон',
                   value: 'Балкон + лоджия',
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
            gallery: [
                {src: "https://images.wisegeek.com/single-tree-against-blue-sky-on-green-grass.jpg", thumbnail: "https://images.wisegeek.com/single-tree-against-blue-sky-on-green-grass.jpg", w: 1200,h: 900},
                {src: "https://images.wisegeek.com/single-tree-against-blue-sky-on-green-grass.jpg", thumbnail: "https://images.wisegeek.com/single-tree-against-blue-sky-on-green-grass.jpg", w: 1200,h: 900},
                {src: "https://images.wisegeek.com/single-tree-against-blue-sky-on-green-grass.jpg", thumbnail: "https://images.wisegeek.com/single-tree-against-blue-sky-on-green-grass.jpg", w: 1200,h: 900},
                {src: "https://images.wisegeek.com/single-tree-against-blue-sky-on-green-grass.jpg", thumbnail: "https://images.wisegeek.com/single-tree-against-blue-sky-on-green-grass.jpg", w: 1200,h: 900},
                {src: "https://images.wisegeek.com/single-tree-against-blue-sky-on-green-grass.jpg", thumbnail: "https://images.wisegeek.com/single-tree-against-blue-sky-on-green-grass.jpg", w: 1200,h: 900},
                {src: "https://images.wisegeek.com/single-tree-against-blue-sky-on-green-grass.jpg", thumbnail: "https://images.wisegeek.com/single-tree-against-blue-sky-on-green-grass.jpg", w: 1200,h: 900},

            ],
            customCalculator: false,
            customPriceShow: false,
            onlineShow: false,
            customPriceInputs: [
                {
                    name: 'modal-rating',
                    title: 'Моя оценка',
                },
                {
                    name: 'modal-tel',
                    title: 'Телефон',
                    type: 'number',
                }
            ],
            customPriceCheckboxes: [
                {
                    name: 'modal-agree',
                    title: 'Даю согласие на обработку персональных данных в соответствии с ',
                    link: 'some.com',
                    linkText: 'политикой конфиденциальности',
                }
            ],
            onlineInputs: [
                {
                    name: 'online-name',
                    title: 'Имя',
                },
                {
                    name: 'online-tel',
                    title: 'Телефон',
                    type: 'number',
                }
            ],
            onlineCheckboxes: [
                {
                    name: 'online-agree',
                    title: 'Даю согласие на обработку персональных данных в соответствии с ',
                    link: 'some.com',
                    linkText: 'политикой конфиденциальности',
                }
            ],
            productItems: [ //не больше 4 в каждом!
                {
                    prod: [
                            {
                                name: '3-комнатная квартира, 72.1 м²',
                                price: '5 650 000',
                                cost: '78 363',
                                mortgage: '51 364',
                                square: 90,
                                floor: '4/24 этаж',
                                place: 'г. Краснодар, р-н Юбилейный, пр-кт Чекистов, 28',
                                photos: [
                                    '/images/pages/kupit-zhilye/cottage-1.jpg',
                                    '/images/pages/kupit-zhilye/cottage-1.jpg',
                                    '/images/pages/kupit-zhilye/cottage-1.jpg',
                                    '/images/pages/kupit-zhilye/cottage-1.jpg',
                                ]
                            },
                            {
                                name: '3-комнатная квартира, 72.1 м²',
                                price: '5 650 000',
                                cost: '78 363',
                                mortgage: '51 364',
                                square: 90,
                                floor: '4/24 этаж',
                                place: 'г. Краснодар',
                                photos: [
                                    '/images/pages/kupit-zhilye/cottage-1.jpg',
                                    '/images/pages/kupit-zhilye/cottage-1.jpg',
                                    '/images/pages/kupit-zhilye/cottage-1.jpg',
                                    '/images/pages/kupit-zhilye/cottage-1.jpg',
                                ]
                            }
                        ],
                    totalItems: 231,
                    link: '#'
                },
                {
                    prod: [
                            {
                                name: '3-комнатная квартира, 72.1 м²',
                                price: '5 32132',
                                cost: '78 363',
                                mortgage: '51 364',
                                square: 90,
                                floor: '4/24 этаж',
                                place: 'г. Краснодар, р-н Юбилейный, пр-кт Чекистов, 28',
                                photos: [
                                    '/images/pages/kupit-zhilye/cottage-1.jpg',
                                    '/images/pages/kupit-zhilye/cottage-1.jpg',
                                    '/images/pages/kupit-zhilye/cottage-1.jpg',
                                    '/images/pages/kupit-zhilye/cottage-1.jpg',
                                ]
                            },
                            {
                                name: '3-комнатная квартира, 72.1 м²',
                                price: '5 123',
                                cost: '78 363',
                                mortgage: '51 364',
                                square: 90,
                                floor: '4/24 этаж',
                                place: 'г. Краснодар',
                                photos: [
                                    '/images/pages/kupit-zhilye/cottage-1.jpg',
                                    '/images/pages/kupit-zhilye/cottage-1.jpg',
                                    '/images/pages/kupit-zhilye/cottage-1.jpg',
                                    '/images/pages/kupit-zhilye/cottage-1.jpg',
                                ]
                            }
                        ],
                    totalItems: 12333,
                    link: '#'
                }
            ],
            activeSocials: false,
            fetchedText: '<p>Хотите купить квартиру в Краснодаре? В базе агентства Аякс подобраны только реальные объявления. Цены от&nbsp;<b>300 000</b>&nbsp;до&nbsp;<b>60 000 000</b>&nbsp;рублей. Средняя стоимость метра&nbsp;<b>75 329</b>&nbsp;руб.&nbsp; Есть квартиры площадью до&nbsp;<b>371</b>&nbsp;м². Лучшие предложения по Краснодару с адресами, фото, планировками и ценами. <b>Гарантируем юридическую безопасность сделки</b>.</p>',
            moreDetailDescr: false,
            moreDetailLocation: false,
            moreDetailProperty: false,
            moreDetailMap: false,
            moreDetailSearch: false,
        }
    },
    methods: {
        openGallery(index) {
            document.querySelectorAll('.my-gallery figure')[index].click()
        },
        toggleSocials() {
            this.activeSocials = !this.activeSocials
        },
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
        showCustomPriceModal() {
            this.customPriceShow = !this.customPriceShow;
        },
        onlineModal() {
            this.onlineShow = !this.onlineShow;
        },
        showCalculator() {
            this.customCalculator = !this.customCalculator;
        },
        openMoreDescr: function() {
            this.moreDetailDescr = !this.moreDetailDescr;
            // some code to filter users
        },
        openMoreLocation: function() {
            this.moreDetailLocation = !this.moreDetailLocation;
            // some code to filter users
        },
        openMoreProperty: function() {
            this.moreDetailProperty = !this.moreDetailProperty;
            // some code to filter users
        },
        openMoreMap: function() {
            this.moreDetailMap = !this.moreDetailMap;
            // some code to filter users
        },
        openMoreSearch: function() {
            this.moreDetailSearch = !this.moreDetailSearch;
            // some code to filter users
        },


    },
    mounted() {
         if(localStorage.getItem('itemsInCompare') != null && localStorage.getItem('itemsInCompare').includes(this.id)) {
                this.activeCompare = true
            }
            if(localStorage.getItem('itemsInFavorite') != null && localStorage.getItem('itemsInFavorite').includes(this.id)) {
                this.activeFavorite = true
            }
            
        if($(window).width() < 992) {
            this.isMob = true;
        }
    } 
//     created() {
//       window.addEventListener('click', (e) => {
//         if (!this.$el.contains(e.target)){
//           this.activeSocials = false
//         }
//       })
//   },

}

</script>

<template lang="pug">
    Layout
        Breadcrumbs
        .container
            h1.product--title Product Title
        section.section
            .product-detail-gallery.detail-gallery
                .detail-gallery--left
                    .detail-gallery--special
                        .detail-gallery--btn.btn--save(@click="toggleFavorite(id)" :class="activeFavorite ? 'active' : ''")
                            span
                            span Сохранить
                        .detail-gallery--btn.btn--compare(@click="toggleCompare(id)" :class="activeCompare ? 'active' : ''")
                            span
                            span Сравнить
                        .detail-gallery--btn.btn--share(@click="toggleSocials")
                            span
                            span Поделиться
                            .share_btns(:class="activeSocials ? 'active' : ''")
                                a.share--vk(href="#")
                                a.share--fb(href="#")
                                a.share--ok(href="#")
                                a.share--ws(href="#")
                                a.share--tg(href="#")
                    .detail-gallery__img 
                        vue-picture-swipe(:items="gallery" :options="{showAnimationDuration: false, hideAnimationDuration: false}")

                .detail-gallery--right
                    .detail-gallery--col
                        p MAP
                    .detail-gallery--img(v-if="isMob")  
                        .detail-gallery--img(@click="openGallery(2)") 
                            img(:src="gallery[2].thumbnail")

                    .detail-gallery--img(@click="openGallery(3)")
                        .detail-gallery--before
                            span + {{ gallery.length - 3 }} фото
                        img(:src="gallery[3].thumbnail")
        container
            .product-detail
                .product-detail--left
                    .product-detail--bar.product-bar
                        .product-bar--wrap
                            .product-bar--box
                                span {{ flatInfo.rooms || " " }}
                                span Кол-во комнат
                            .product-bar--box
                                span {{ flatInfo.squareAll || " " }}
                                span Площадь общая, м2
                            .product-bar--box
                                span {{ flatInfo.squareLive || " " }}
                                span Площадь жилая, м2
                            .product-bar--box
                                span {{ flatInfo.squareKitchen || " " }}
                                span Площадь кухни, м2
                            .product-bar--box
                                span {{ flatInfo.floor || " " }}
                                span этаж из {{ flatInfo.floorAll || " " }}
                    .product-detail--descr(v-bind:class="{ active: moreDetailDescr }")
                        .product-detail--name( @click="openMoreDescr")
                            span Описание
                            span.product-detail--arrow
                                <svg viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.324289 0.262851C0.73139 -0.110342 1.36399 -0.0828386 1.73719 0.32428L12 11.5201L22.2628 0.324282C22.636 -0.0828375 23.2686 -0.11034 23.6757 0.262852C24.0828 0.636044 24.1103 1.26861 23.7371 1.67573L12.7372 13.6757C12.5477 13.8824 12.2803 14 12 14C11.7197 14 11.4523 13.8824 11.2629 13.6757L0.262888 1.67573C-0.110312 1.26861 -0.0828114 0.636043 0.324289 0.262851Z" fill="#666666"></path></svg>
                        .product-detail--text
                            span Продам однокомнатную квартиру в жилом комплексе «Лучезарный». Квартира в хорошем состоянии, теплая, уютная. Два балкона, огромная жилая комната! В квартире остается все новому владельцу.
                    .product-detail--location( v-bind:class="{ active: moreDetailLocation }" )
                        .product-detail--name( @click="openMoreLocation")
                            span Расположение
                            span.product-detail--arrow
                                <svg viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.324289 0.262851C0.73139 -0.110342 1.36399 -0.0828386 1.73719 0.32428L12 11.5201L22.2628 0.324282C22.636 -0.0828375 23.2686 -0.11034 23.6757 0.262852C24.0828 0.636044 24.1103 1.26861 23.7371 1.67573L12.7372 13.6757C12.5477 13.8824 12.2803 14 12 14C11.7197 14 11.4523 13.8824 11.2629 13.6757L0.262888 1.67573C-0.110312 1.26861 -0.0828114 0.636043 0.324289 0.262851Z" fill="#666666"></path></svg>
                        ul.product-detail--list
                            template(v-for="item in location")
                                li.product-detail--item
                                    .product-detail--subname
                                        span {{ item.name}}
                                    .product-detail--subtext.text
                                        template(v-if="item.link")
                                            a(:href="item.link") {{ item.value }}
                                        template(v-else)
                                            span {{ item.value }}
                    .product-detail--property( v-bind:class="{ active: moreDetailProperty }" )
                        .product-detail--name( @click="openMoreProperty")
                            span Характеристики
                            span.product-detail--arrow
                                <svg viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.324289 0.262851C0.73139 -0.110342 1.36399 -0.0828386 1.73719 0.32428L12 11.5201L22.2628 0.324282C22.636 -0.0828375 23.2686 -0.11034 23.6757 0.262852C24.0828 0.636044 24.1103 1.26861 23.7371 1.67573L12.7372 13.6757C12.5477 13.8824 12.2803 14 12 14C11.7197 14 11.4523 13.8824 11.2629 13.6757L0.262888 1.67573C-0.110312 1.26861 -0.0828114 0.636043 0.324289 0.262851Z" fill="#666666"></path></svg>
                        .product-detail--row
                            ul.product-detail--col.product-detail--list
                                template(v-for="item in chars")
                                    li.product-detail--item
                                        .product-detail--subname
                                            span {{ item.name}}
                                        .product-detail--subtext.text
                                            template(v-if="item.link")
                                                a(:href="item.link") {{ item.value }}
                                            template(v-else)
                                                span {{ item.value }}
                    .product-detail--map( v-bind:class="{ active: moreDetailMap }" )
                        .product-detail--name( @click="openMoreMap")
                            span На карте
                            span.product-detail--arrow
                                <svg viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.324289 0.262851C0.73139 -0.110342 1.36399 -0.0828386 1.73719 0.32428L12 11.5201L22.2628 0.324282C22.636 -0.0828375 23.2686 -0.11034 23.6757 0.262852C24.0828 0.636044 24.1103 1.26861 23.7371 1.67573L12.7372 13.6757C12.5477 13.8824 12.2803 14 12 14C11.7197 14 11.4523 13.8824 11.2629 13.6757L0.262888 1.67573C-0.110312 1.26861 -0.0828114 0.636043 0.324289 0.262851Z" fill="#666666"></path></svg>
                    .product-detail--property( v-bind:class="{ active: moreDetailSearch }" )
                        .product-detail--name( @click="openMoreSearch")
                            span Быстрый поиск
                            span.product-detail--arrow
                                <svg viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.324289 0.262851C0.73139 -0.110342 1.36399 -0.0828386 1.73719 0.32428L12 11.5201L22.2628 0.324282C22.636 -0.0828375 23.2686 -0.11034 23.6757 0.262852C24.0828 0.636044 24.1103 1.26861 23.7371 1.67573L12.7372 13.6757C12.5477 13.8824 12.2803 14 12 14C11.7197 14 11.4523 13.8824 11.2629 13.6757L0.262888 1.67573C-0.110312 1.26861 -0.0828114 0.636043 0.324289 0.262851Z" fill="#666666"></path></svg>
                        .product-detail--row
                            ul.product-detail--col.product-detail--list
                                li.product-detail--item
                                    a(href="#").product-search--link Все в мкр. Музыкальный
                                li.product-detail--item
                                    a(href="#").product-search--link Все в мкр. Музыкальный
                                li.product-detail--item
                                    a(href="#").product-search--link Все в мкр. Музыкальный
                .product-detail--right
                    .product-detail--params.product-params
                        .product-params--price
                            span 4 500 000
                            span ₽
                        span.product-params--offer(@click="showCustomPriceModal") Предложить свою цену
                        span.product-params--calc(@click="showCalculator")
                            span В ипотеку от 23 114 ₽/мес.

                        ul.product-params--list
                            li.product-params--item
                                .product-params--info
                                    span Цена за м
                                .product-params--meaning
                                    span 100 897 ₽
                            li.product-params--item
                                .product-params--info
                                    span Цена за м
                                .product-params--meaning
                                    span 100 897 ₽
                            li.product-params--item
                                .product-params--info
                                    span Цена за м
                                .product-params--meaning
                                    span 100 897 ₽
                            li.product-params--item
                                .product-params--info
                                    span Цена за м
                                .product-params--meaning
                                    span 100 897 ₽
                        button.product-params--btn.btn-default(@click="onlineModal")
                            span Записаться на онлайн-просмотр
                    .product-detail--internal
                        <div class="internal-card">
                            <a href="/single-profile" class="cover-link"></a>
                            <div class="internal-card--img">
                                <img src="/images/pages/ipoteka-krasnodare/internal-card-chel.png" alt="">
                            </div>
                            <div class="internal-card--info">
                                <div class="internal-card--name">
                                    <span>Ольга Владимировна Шмакова</span>
                                </div>
                                <div class="internal-card--post">
                                    <span>Начальник ипотечного центра</span>
                                    <a href="postLink">Офис</a>
                                </div>
                            </div>
                            <a href="tel:+79181970197" class="internal-card--tel">
                                <span></span>
                                <span>+7 918 197-01-97	</span>
                            </a>
                            form.form.form-single-page(action="" method="post").form-input
                                input(type="number" required placeholder="Телефон")
                                button(type="submit")
                        </div>
                    .product-detail--search.product-search
                        .product-search--name
                            span Быстрый поиск:
                        .product-search--name
                            span 1-комнатные квартиры
                        .product-search--box
                            a(href="#").product-search--link Все в мкр. Музыкальный
                            a(href="#").product-search--link Все в мкр. Музыкальный
                            a(href="#").product-search--link Все в мкр. Музыкальный
                            a(href="#").product-search--link Все в мкр. Музыкальный
                            a(href="#").product-search--link Все в мкр. Музыкальный
                            a(href="#").product-search--link Все в мкр. Музыкальный
                            a(href="#").product-search--link Все в мкр. Музыкальный
                            a(href="#").product-search--link Все в мкр. Музыкальный
                            a(href="#").product-search--link Все в мкр. Музыкальный
            .product-detail--mobile-btn
                button.product-params--btn.btn-default(@click="onlineModal")
                    span Связаться с риэлтором
        .container
            .product-similar
                .product-detail--name
                    span Похожие объекты
                ProductTabs(:productItems="productItems" :tabsProduct="tabsProduct" nobanner flatView)

        Modal(:visible="customCalculator"  @toggleModal="showCalculator" title="Ипотечный калькулятор" modalClass="modal-calc" )
            Calculator
        Modal(:visible="customPriceShow"  @toggleModal="showCustomPriceModal" title="Предложить свою цену" )
            Form(:inputs="customPriceInputs" hideRequirementMess horizontal :checkboxes="customPriceCheckboxes" modal subText="Торг - дело уместное при покупке недвижимости, просто предложите свою цену, мы с вами свяжемся.")
        Modal(:visible="onlineShow"  @toggleModal="onlineModal" title="Записаться на онлайн-просмотр" )
            Form(:inputs="onlineInputs" hideRequirementMess horizontal :checkboxes="onlineCheckboxes" modal subText="<p>Вас заинтересовал этот объект? Посмотрите на него в режиме реального времени!</p><p>Оставьте заявку на онлайн-просмотр, и наш специалист свяжется с вами&nbsp;<br>в ближайшее время для организации видео-показа.</p>")

</template>
