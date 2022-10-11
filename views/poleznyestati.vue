<script>
import Layout from "../components/layout/layout"; 
import container from '../components/layout/container.vue'
import Banner from '../components/blocks/banner/banner.vue' 
import News from '../components/blocks/news/news'
import NewsNav from '../components/blocks/news-nav/news-nav'
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'

export default {
  name: 'App',
  components: {
    Layout,
    container,
    Banner,
    News, 
    NewsNav, 
    Breadcrumbs,
  },
  data() {
        return {
            newsItems:[
                {
                    day: '18',
                    month: 'Октябрь',
                    text: 'Акция для клиентов «АЯКС»: получите скидку на ипотечную ставку от ВТБ',
                    href: '/news-detail'
                },
            ], 
            
            pageOfItems: this.newsItems,
            customLabels,
            // fetchedText: 'Интересуетесь ипотечными программами? Не знаете в какой банк обратиться, чтобы одобрили под низкий процент? Агентство недвижимости «АЯКС» решило за вас эти проблемы. Ипотека в Краснодаре стала более доступной благодаря нашим партнерским договоренностям с более чем 20 банками страны и более чем с 120 крупными, надежными застройщиками региона.',
 

        }
    },
    methods: {
        onChangePage(pageOfItems) { 
            this.pageOfItems = pageOfItems;
        }
    }
}

const customLabels = {
    first: '',
    last: '',
    previous: '<',
    next: '>'
};

</script>

<template lang="pug">
Layout 
    Breadcrumbs(title="Полезные статьи")
    .row
        .col
            .internal-news--title.title
                h1 Полезные статьи о недвижимости
    News(:newsItems="pageOfItems" title=" ")
    jw-pagination(:items="newsItems" @changePage="onChangePage" :pageSize='8' :labels="customLabels" )
    //- container
        .text( v-html="fetchedText" ) 
</template>
