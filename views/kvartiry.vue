<script>
import Layout from "../components/layout/layout";
import container from '../components/layout/container'
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'
import EyeImg from '../../assets/images/pages/apartments/eye.svg'
import ProductStrip from "../components/blocks/product-strip/product-strip.vue"
import Consultation from '../components/blocks/consultation/consultation.vue'
import Sorting  from "../components/blocks/sorting/sorting.vue"
import FilterMain  from "../components/blocks/filter/filter.vue"
import Apartments from "../components/blocks/apartments/apartments"

const customLabels = {
    first: '',
    last: '',
    previous: '<',
    next: '>'
};



export default {
    name: 'App',
    // props: {
    //     filter: Object | Array,
    // },
    props: {
    },
    components: {
        container,
        Layout,
        Breadcrumbs,
        EyeImg,
        Apartments,
        ProductStrip,
        Sorting,
        FilterMain,
        Consultation,
    },

    data() {
        return {
            isMob: false,
            showFilter: true,
            reset: false,
            scrollOverTop: false,
            customLabels,
            productItems: [
                {
                    name: '3-комнатная квартира, 72.1 м²',
                    datePublish: '01.03.2022',
                    price: '5 650 000',
                    cost: '78 363',
                    mortgage: '51 364',
                    square: 100,
                    floor: '4/24 этаж',
                    place: 'г. Краснодар, р-н Юбилейный, пр-кт Чекистов, 28',
                    photos: [
                        'https://learnenglishkids.britishcouncil.org/sites/kids/files/RS2271_Tree%20%28Summer%29%20col-web.jpg',
                        'https://learnenglishkids.britishcouncil.org/sites/kids/files/RS2271_Tree%20%28Summer%29%20col-web.jpg',
                        'https://learnenglishkids.britishcouncil.org/sites/kids/files/RS2271_Tree%20%28Summer%29%20col-web.jpg',
                    ]
                },
                {
                    name: '3-комнатная квартира, 72.1 м²',
                    datePublish: '02.03.2022',
                    price: '5 650 000',
                    cost: '78 363',
                    mortgage: '51 364',
                    square: 10,
                    floor: '4/24 этаж',
                    place: 'г. Краснодар',
                    photos: [
                        'https://learnenglishkids.britishcouncil.org/sites/kids/files/RS2271_Tree%20%28Summer%29%20col-web.jpg',
                        'https://learnenglishkids.britishcouncil.org/sites/kids/files/RS2271_Tree%20%28Summer%29%20col-web.jpg',
                    ]
                },
                {
                    name: '3-комнатная квартира, 72.1 м²',
                    datePublish: '04.03.2022',
                    price: '5 32132',
                    cost: '78 363',
                    mortgage: '51 364',
                    square: 90,
                    floor: '4/24 этаж',
                    place: 'г. Краснодар, р-н Юбилейный, пр-кт Чекистов, 28',
                    photos: [
                        'https://learnenglishkids.britishcouncil.org/sites/kids/files/RS2271_Tree%20%28Summer%29%20col-web.jpg',
                        'https://learnenglishkids.britishcouncil.org/sites/kids/files/RS2271_Tree%20%28Summer%29%20col-web.jpg',
                        'https://learnenglishkids.britishcouncil.org/sites/kids/files/RS2271_Tree%20%28Summer%29%20col-web.jpg',
                        'https://learnenglishkids.britishcouncil.org/sites/kids/files/RS2271_Tree%20%28Summer%29%20col-web.jpg',
                    ]
                },
                {
                    name: '3-комнатная квартира, 72.1 м²',
                    datePublish: '01.03.2022',
                    price: '5 123',
                    cost: '78 363',
                    mortgage: '51 364',
                    square: 90,
                    floor: '4/24 этаж',
                    place: 'г. Краснодар',
                    photos: [
                        'https://learnenglishkids.britishcouncil.org/sites/kids/files/RS2271_Tree%20%28Summer%29%20col-web.jpg',
                        'https://learnenglishkids.britishcouncil.org/sites/kids/files/RS2271_Tree%20%28Summer%29%20col-web.jpg',
                        'https://learnenglishkids.britishcouncil.org/sites/kids/files/RS2271_Tree%20%28Summer%29%20col-web.jpg',
                        'https://learnenglishkids.britishcouncil.org/sites/kids/files/RS2271_Tree%20%28Summer%29%20col-web.jpg',
                    ]
                }
            ],
            tabsSlider: [
               {
                   slider: [
                        {
                            id: 1,
                            name: 'Екатерина ',
                            position: 'Старший',
                            photo: 'images/pages/kupit-zhilye/consultation-chel.png',
                        },
                        {
                            id: 2,
                            name: 'Екатерина ',
                            position: 'Старший ',
                            photo: 'images/pages/kupit-zhilye/consultation-chel.png',
                        },
                        {
                            id: 3,
                            name: 'Екатерина',
                            position: 'Старший ',
                            photo: 'images/pages/kupit-zhilye/consultation-chel.png',
                        },
                    ],
               },
               {
                   slider: [
                        {
                            id: 1,
                            name: 'Екатерина Гаврилова',
                            position: 'Старший специалист',
                            photo: 'images/pages/kupit-zhilye/consultation-chel.png',
                        },
                        {
                            id: 2,
                            name: 'Екатерина Гаврилова',
                            position: 'Старший специалист',
                            photo: 'images/pages/kupit-zhilye/consultation-chel.png',
                        },
                        {
                            id: 3,
                            name: 'Екатерина Гаврилова',
                            position: 'Старший специалист',
                            photo: 'images/pages/kupit-zhilye/consultation-chel.png',
                        },
                    ],
               }
            ],
            toggleMap: false,
            flatView: false,
            fetchedText: ' ',
            sorting: [
              { name: 'dateup',    text: 'по дате (возрастание)' },
              { name: 'datedown', text: 'по дате (убывание)' },
              { name: 'priceup',   text: 'по цене (возрастание)' },
              { name: 'pricedown', text: 'по цене (убывание)' },
              { name: 'sizeup', text: 'по площади (возрастание)' },
              { name: 'sizedown', text: 'по площади (убывание)' }
            ],
            sortBy: null,
            pageOfItems: this.productItems,
        }
    },

    methods: {
        toggleFlatView(viewType) {
            this.flatView = viewType
        },
        changeMapVisibility() {
            this.toggleMap = !this.toggleMap
            // console.log(this.toggleMap)
        },
        getSorting(data) {
            this.sortBy = data
        },
        onChangePage(pageOfItems) {
            this.pageOfItems = pageOfItems;
        },
        showFilterHandler() {
            this.showFilter = true
        },
        hidedFilter() {
            this.showFilter = false
        },
        resetFilter() {
            this.reset = true
            setTimeout(() => (this.reset = false),200)
        },
        handleScroll (event) {
            var st = document.scrollingElement.scrollTop; 

            if(st > 43){
                this.scrollOverTop = true 
            } else {
                this.scrollOverTop = false
            }
        }
    },
    // mount() {
    // //  axios href http://ayax/api/news/list   api.php;
    // // this.pageOfItems = this.productItems
    // }
    mounted() { 
        if($(window).width() < 992) {
            this.isMob = true;
            this.showFilter = false
            this.flatView = true
        } 

    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    }, 
}

</script>

<template lang="pug">
    Layout(class="grey")
        template(v-if="isMob")
            .filter-top(v-if="!showFilter" :class="scrollOverTop ? 'active' : '' ")
                span.filter-btn(@click="showFilterHandler")
                    span Фильтр
                span(@click="changeMapVisibility") {{ !toggleMap ? 'На карте' : 'Списком'  }}
        Breadcrumbs(title="Квартиры в Краснодаре")
        container(extraClass="no-padding")
            .text
                template(v-if="isMob")
                    <h1>Продажа квартир в Краснодаре</h1>
                template(v-else)
                //-     <h2>Поможем выгодно купить квартиру в Краснодаре</h2>
                //- <p>Оставьте заявку на сайте, риэлтор перезвонит через 30 минут, уточнит требования и подберет до 10 похожих вариантов за 24 часа. С нами вы приобретете жильё быстрее и выгоднее, чем при самостоятельном поиске недвижимости.</p><p>Если что-то не понятно, есть вопросы – дадим бесплатную консультацию. Также организуем онлайн просмотр, поможем оформить бумаги на покупку&nbsp;в ипотеку с низким процентом и комфортными платежами.</p>
        .filter-apartments(:class="showFilter ? 'filter-apartments-active' : '' ")
            template(v-if="isMob") 
                .filter-nav(v-if="showFilter")
                    span(@click="resetFilter") Сбросить
                    h2 Фильтр
                    .btn-close(@click="hidedFilter")
            FilterMain(class="section-nopadding main-apartments" :main="false" v-if="showFilter" :reset="reset")
        container(extraClass="section-nopadding")
            .text.text-apartments
                <p>Хотите купить квартиру в Краснодаре? В базе агентства Аякс подобраны только реальные объявления. Цены от&nbsp;<b>300 000</b>&nbsp;до&nbsp;<b>60 000 000</b>&nbsp;рублей. Средняя стоимость метра&nbsp;<b>75 329</b>&nbsp;руб.&nbsp; Есть квартиры площадью до&nbsp;<b>371</b>&nbsp;м². Лучшие предложения по Краснодару с адресами, фото, планировками и ценами. <b>Гарантируем юридическую безопасность сделки</b>.</p>        
        Sorting(@toggleFlatView="toggleFlatView" @sortingData="getSorting" @getToggleMap="changeMapVisibility" :sorting="sorting")
        Apartments(:productItems="pageOfItems" :showMap="toggleMap" :flatView="flatView" :sortingApartments="sortBy")
        jw-pagination(:items="productItems" @changePage="onChangePage" :pageSize='8' :labels="customLabels" )
        //- ProductStrip
        Consultation(:tabsSlider="tabsSlider" consultationText="Мы даем бесплатную консультацию по любому интересующему вас вопросу. Оставьте ваш контакт, мы назначим время звонка и поможем вам принять рациональное решение." consultationTitle="Получите бесплатную консультацию")
        container
            .col
                //- .sort.sort--bottom
                    .sort-fast--title
                        p Вместе с этим также ищут квартиры:
                    .sort-fast
                        ul.sort-fast--list
                            li.sort-fast--item
                                span до 1 миллиона
                            li.sort-fast--item
                                span В кирпичных домах
                            li.sort-fast--item
                                span На 1 этаже
                            li.sort-fast--item
                                span В Центре
                            li.sort-fast--item
                                span От застройщиков
                            li.sort-fast--item
                                span С ремонтом
                            li.sort-fast--item
                                span Жилые комплексы
                            li.sort-fast--item
                                span В строящихся домах
                .text
                    <h2>Поможем выгодно купить квартиру в Краснодаре</h2>
                    <p>Оставьте заявку на сайте, риэлтор перезвонит через 30 минут, уточнит требования и подберет до 10 похожих вариантов за 24 часа. С нами вы приобретете жильё быстрее и выгоднее, чем при самостоятельном поиске недвижимости.</p><p>Если что-то не понятно, есть вопросы – дадим бесплатную консультацию. Также организуем онлайн просмотр, поможем оформить бумаги на покупку&nbsp;в ипотеку с низким процентом и комфортными платежами.</p>
        //- container
        //-     .text( v-html="fetchedText" )
        .map.map-apartments(v-if="toggleMap" :class="scrollOverTop ? 'active' : '' ") MAP
</template>
