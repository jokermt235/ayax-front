<script>
import container from '../components/layout/container'
import Layout from "../components/layout/layout"
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'
import ProductCard from '../components/blocks/product-card/product-card'

export default {
    name: 'App',
    components: {
        Breadcrumbs,
        container,
        Layout,
        ProductCard
    },
    props: {
        title: String,

    },
    data() {
        return {
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
        }
    }
}
</script>

<template lang="pug">
    Layout
        Breadcrumbs(title="Избранное")
        container(extraClass="p-mob")
            .title
                h2.p-mob-10 Избранные объекты
            .col-12
                p.comparison-delete Ваш список будет удален в течении 24 часов. Авторизуйтесь или зарегистрируйтесь, чтобы сохранить вашу работу.
            .row(class='row-cols-sm-3 row-cols-lg-4 gy-4')
                template(v-for="(single,index) in productItems")
                    ProductCard(
                        :sliderId="index"
                        :viewType="true"
                        :prodname="single.name"
                        :price="single.price"
                        :cost="single.cost"
                        :mortgage="single.mortgage"
                        :square="single.square"
                        :floor="single.floor"
                        :place="single.place"
                        :productPhotos="single.photos"
                )
</template>
