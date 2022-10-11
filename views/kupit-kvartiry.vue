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
            customLabels,
            /*productItems: [
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
            ],*/
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
            flatView: true,
            fetchedText: ' <h2>Поможем выгодно купить квартиру в Краснодаре</h2><p>Оставьте заявку на сайте, риэлтор перезвонит через 30 минут, уточнит требования и подберет до 10 похожих вариантов за 24 часа. С нами вы приобретете жильё быстрее и выгоднее, чем при самостоятельном поиске недвижимости.</p><p>Если что-то не понятно, есть вопросы – дадим бесплатную консультацию. Также организуем онлайн просмотр, поможем оформить бумаги на покупку&nbsp;в ипотеку с низким процентом и комфортными платежами.</p>',
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
            console.log(this.toggleMap)
        },
        getSorting(data) {
            this.sortBy = data
        },
        onChangePage(pageOfItems) {
            this.pageOfItems = pageOfItems;
        }
    },
    mounted(){
        this.$store.dispatch('realty/list', {"estate_id" : 1});
    },
    computed : {
        productItems(){
            return this.$store.getters["realty/records"];
        }
    }
}

</script>

<template lang="pug">
Layout(class="grey")
    Breadcrumbs
    FilterMain(class="main-apartments")
    container(extraClass="no-padding")
        .text( v-html="fetchedText" )
    Sorting(@toggleFlatView="toggleFlatView" @sortingData="getSorting" @getToggleMap="changeMapVisibility" :sorting="sorting")
    Apartments(:productItems="pageOfItems" :showMap="toggleMap" :flatView="flatView" :sortingApartments="sortBy")
    jw-pagination(:items="productItems" @changePage="onChangePage" :pageSize='8' :labels="customLabels" )
    //- ProductStrip
    Consultation(:tabsSlider="tabsSlider" consultationText="Мы даем бесплатную консультацию по любому интересующему вас вопросу. Оставьте ваш контакт, мы назначим время звонка и поможем вам принять рациональное решение." consultationTitle="Получите бесплатную консультацию")
    container
        .col
            .sort.sort--bottom
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
    container
        .text( v-html="fetchedText" )
</template>
