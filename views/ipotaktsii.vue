<script>
import Layout from "../components/layout/layout"; 
import container from '../components/layout/container.vue'
import Banner from '../components/blocks/banner/banner.vue'
import Stocks from '../components/blocks/stocks/stocks.vue' 
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'
import mapContact from "../components/blocks/mapContact/mapContact.vue" 
import InternalNav from '../components/blocks/internal-nav/internal-nav'
export default {
  name: 'App',
  components: {
    Layout,
    container,
    Banner,        
    InternalNav,
    mapContact,
    Stocks,
    Breadcrumbs, 
  },
  data() {
        return {
            stocksItems:[
                {
                   src: 'https://www.ayax.ru/upload/resize_cache/iblock/71f/266_159_2/71fb2faa84452aee0355a101e87a4e26.png',
                   text: 'Выгоднее, чем потребительский кредит!',
                   href: '/ipotaktsii-detail'
                },
                {
                    src: 'https://www.ayax.ru/upload/resize_cache/iblock/71f/266_159_2/71fb2faa84452aee0355a101e87a4e26.png',
                    text: 'Покупка жилья в ипотеку с 10% взносом!',
                    href: '/ipotaktsii-detail'
                },
                {
                    src: 'https://www.ayax.ru/upload/resize_cache/iblock/71f/266_159_2/71fb2faa84452aee0355a101e87a4e26.png',
                    text: 'Процентные ставки по ипотеке снижены!',
                    href: '/ipotaktsii-detail'
                }
            ],
            internalNavItems: [
                {
                    name: 'Сотрудники',
                    link: '/ipotechnyebrokery'
                },
                {
                    name: 'Акции',
                    link: '/ipotaktsii'
                },
                {
                    name: 'Новости',
                    link: '/news'
                },
            ], 
            breadcrumbs: [
                {
                    name: 'Сопровождение ипотеки',
                    path: '/ipoteka-krasnodare'
                }
            ],
            fetchedText: 'Интересуетесь ипотечными программами? Не знаете в какой банк обратиться, чтобы одобрили под низкий процент? Агентство недвижимости «АЯКС» решило за вас эти проблемы. Ипотека в Краснодаре стала более доступной благодаря нашим партнерским договоренностям с более чем 20 банками страны и более чем с 120 крупными, надежными застройщиками региона.',

        }
    }
}
</script>

<template lang="pug">
Layout 
    Breadcrumbs(title="Акции" :links="breadcrumbs")
    Banner(title="Акции ипотечного центра" src="/images/actions-bg.jpg" noMargin)
    InternalNav( :internalNavItems="internalNavItems" marginBottom='30')
    Stocks( :stocksItems="stocksItems")
    container
        .text( v-html="fetchedText" ) 
    mapContact
</template>
