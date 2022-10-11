<script>
import Layout from "../components/layout/layout"; 
import container from '../components/layout/container.vue'
import Banner from '../components/blocks/banner/banner.vue'
import Stocks from '../components/blocks/stocks/stocks.vue'  
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'


export default {
  name: 'App',
  components: {
    Layout,
    container,
    Breadcrumbs,
    Banner,
    Stocks, 
  },
  data() {
        return {
            stocksItems:[
                {
                   src: '/images/pages/internal-stocks/3.png',
                   text: 'Выгоднее, чем потребительский кредит!',
                   href: '/skidki-nedvizhimost-krasnodara/potrebitelskiy-kredit'
                },
                { 
                    src: '/images/pages/internal-stocks/3.png',
                    text: 'Покупка жилья в ипотеку с 10% взносом!',
                    href: '/skidki-nedvizhimost-krasnodara/potrebitelskiy-kredit'
                },
                { 
                    src: '/images/pages/internal-stocks/3.png',
                    text: 'Процентные ставки по ипотеке снижены!',
                    href: '/skidki-nedvizhimost-krasnodara/potrebitelskiy-kredit'
                }
            ],
            fetchedText: 'Интересуетесь ипотечными программами? Не знаете в какой банк обратиться, чтобы одобрили под низкий процент? Агентство недвижимости «АЯКС» решило за вас эти проблемы. Ипотека в Краснодаре стала более доступной благодаря нашим партнерским договоренностям с более чем 20 банками страны и более чем с 120 крупными, надежными застройщиками региона.',


        } 
    }
}
</script>

<template lang="pug">
Layout 
    Breadcrumbs(title="Акции")
    Banner(title="Акции и скидки" src="/images/actions-bg.jpg")
    Stocks( :stocksItems="stocksItems")
    container
        .text( v-html="fetchedText" ) 
</template> 