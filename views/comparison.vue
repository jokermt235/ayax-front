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
        ProductCard,
        Layout,
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
        Breadcrumbs(title="Сравнение")
        container
            .title.p-0
                h2.p-0 Списки сравнения
            .comparison.p-mob
                .comparison-left
                    .comparison-nav
                        a(href="/favorite").comparison-link Избранное
                        .comparison-number 2
                    .comparison-nav
                        a(href="/comparison").comparison-link Сравнение
                        .comparison-number 2
                    .comparison-nav
                        a(href="").comparison-link Фильтры
                        .comparison-number 2
                .comparison-right
                    p.comparison-delete Ваш список будет удален в течении 24 часов. Авторизуйтесь или зарегистрируйтесь, чтобы сохранить вашу работу.
                    .comparison-tab
                        p.comparison-tab--link  Коммерция (1)
                        p.comparison-tab--link  Квартиры (22)
                        p.comparison-tab--link  Участки (1)
                    <div class="user-compare-wrapper">
                        <div class="user-compare-table-wrapper">
                            <table class="user-compare-table js-compare-table">
                                <tbody>
                                    <tr>
                                        <td class="user-compare-table__param-td">
                                            <div class="user-compare-table__param-name"> Фотография
                                            </div>
                                        </td>
                                        <td valign="top">
                                            <a href="/zemelnye-uchastki/1010888281/" target="_blank" class="user-compare-table__image">
                                                <img src="https://via.placeholder.com/150" class="user-compare-table__img">
                                            </a>
                                            <a href="/zemelnye-uchastki/1010888281/" class="user-compare-table__link"> земельный участок ИЖС, Шаумян: (200 сот.) </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="user-compare-table__param-td">
                                            <div class="user-compare-table__param-name">Стоимость
                                            </div>
                                        </td>
                                        <td>
                                            <div class="user-compare-table__price user-compare-table__price_buy">15 000 000 ₽ </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="user-compare-table__param-td">
                                            <div class="user-compare-table__param-name">Населенный пункт
                                            </div>
                                        </td>
                                        <td> Шаумян </td>
                                    </tr>
                                    <tr>
                                        <td class="user-compare-table__param-td">
                                            <div class="user-compare-table__param-name">Район
                                            </div>
                                        </td>
                                        <td> — </td>
                                    </tr>
                                    <tr>
                                        <td class="user-compare-table__param-td">
                                            <div class="user-compare-table__param-name">Улица, дом
                                            </div>
                                        </td>
                                        <td> улица Школьная, 7 </td>
                                    </tr>
                                    <tr>
                                        <td class="user-compare-table__param-td">
                                            <div class="user-compare-table__param-name"> Код объекта </div>
                                        </td>
                                        <td>1010888281 </td>
                                    </tr>
                                    <tr>
                                        <td class="user-compare-table__param-td">
                                            <div class="user-compare-table__param-name">Тип участка </div>
                                        </td>
                                        <td>земельный участок ижс </td>
                                    </tr>
                                    <tr>
                                        <td class="user-compare-table__param-td">
                                            <div class="user-compare-table__param-name">Площадь участка, сотки </div>
                                        </td>
                                        <td>200 </td>
                                    </tr>
                                    <tr>
                                        <td class="user-compare-table__param-td">
                                            <div class="user-compare-table__param-name"> Фасад, м </div>
                                        </td>
                                        <td>200 </td>
                                    </tr>
                                    <tr>
                                        <td class="user-compare-table__param-td">
                                            <div class="user-compare-table__param-name"> Длина </div>
                                        </td>
                                        <td> — </td>
                                    </tr>
                                    <tr>
                                        <td class="user-compare-table__param-td">
                                            <div class="user-compare-table__param-name">Ширина </div>
                                        </td>
                                        <td> — </td>
                                    </tr>
                                    <tr>
                                        <td class="user-compare-table__param-td">
                                            <div class="user-compare-table__param-name">Забор </div>
                                        </td>
                                        <td> — </td>
                                    </tr>
                                    <tr>
                                        <td class="user-compare-table__param-td">
                                            <div class="user-compare-table__param-name">Въезд </div>
                                        </td>
                                        <td> — </td>
                                    </tr>
                                    <tr>
                                        <td class="user-compare-table__param-td">
                                            <div class="user-compare-table__param-name">Водоснабжение </div>
                                        </td>
                                        <td>центральное водоснабжение </td>
                                    </tr>
                                    <tr>
                                        <td class="user-compare-table__param-td">
                                            <div class="user-compare-table__param-name">Газоснабжение </div>
                                        </td>
                                        <td>по меже </td>
                                    </tr>
                                    <tr>
                                        <td class="user-compare-table__param-td">
                                            <div class="user-compare-table__param-name">Электроснабжение </div>
                                        </td>
                                        <td>да </td>
                                    </tr>
                                    <tr>
                                        <td class="user-compare-table__param-td">
                                        <div class="user-compare-table__param-name">Канализация </div>
                                        </td>
                                        <td>септик </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
            //- .row(class='row-cols-4 gy-4')
            //-     template(v-for="(single,index) in productItems")
            //-         ProductCard(
            //-             :sliderId="index"
            //-             :viewType="true"
            //-             :prodname="single.name"
            //-             :price="single.price"
            //-             :cost="single.cost"
            //-             :mortgage="single.mortgage"
            //-             :square="single.square"
            //-             :floor="single.floor"
            //-             :place="single.place"
            //-             :productPhotos="single.photos"
            //-     )
</template>
