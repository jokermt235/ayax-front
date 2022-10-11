<script>
import Layout from "../components/layout/layout"; 
import container from '../components/layout/container.vue'
import Banner from '../components/blocks/banner/banner.vue' 
import News from '../components/blocks/news/news'
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'
import mapContact from "../components/blocks/mapContact/mapContact.vue" 
import InternalNav from '../components/blocks/internal-nav/internal-nav'

const customLabels = {
    first: '',
    last: '',
    previous: '<',
    next: '>'
};

export default {
  name: 'App',
  components: {
    Layout,
    container,
    Banner,
    News, 
    mapContact,  
    Breadcrumbs,
    InternalNav,
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
                {
                    day: '18',
					month: 'Октябрь',
					text: 'Акция для клиентов «АЯКС»: получите скидку на ипотечную ставку от ВТБ',
                    href: '/news-detail'
                },
                {
                    day: '18',
					month: 'Октябрь',
					text: 'Акция для клиентов «АЯКС»: получите скидку на ипотечную ставку от ВТБ',
                    href: '/news-detail'
                },
                {
                    day: '18',
					month: 'Октябрь',
					text: 'Акция для клиентов «АЯКС»: получите скидку на ипотечную ставку от ВТБ',
                    href: '/news-detail'
                },
                {
                    day: '18',
					month: 'Октябрь',
					text: 'Акция для клиентов «АЯКС»: получите скидку на ипотечную ставку от ВТБ',
                    href: '/news-detail'
                },
                {
                    day: '18',
					month: 'Октябрь',
					text: 'Акция для клиентов «АЯКС»: получите скидку на ипотечную ставку от ВТБ',
                    href: '/news-detail'
                },
                {
                    day: '18',
					month: 'Октябрь',
					text: 'Акция для клиентов «АЯКС»: получите скидку на ипотечную ставку от ВТБ',
                    href: '/news-detail'
                },
            ],
            fetchedText: 'Интересуетесь ипотечными программами? Не знаете в какой банк обратиться, чтобы одобрили под низкий процент? Агентство недвижимости «АЯКС» решило за вас эти проблемы. Ипотека в Краснодаре стала более доступной благодаря нашим партнерским договоренностям с более чем 20 банками страны и более чем с 120 крупными, надежными застройщиками региона.',
            breadcrumbs: [
                {
                    name: 'Юридические услуги',
                    path: '/yuridicheskieuslugikrasnodare'
                }
            ],
            internalNavItems: [
                {
                    name: 'Сотрудники',
                    link: '/yuristynedvizhimosti'
                }, 
                {
                    name: 'Новости',
                    link: '/yuridicheskienews'
                },
            ],
            pageOfItems: this.newsItems,
            customLabels
        }
    },
    
    methods: {
        onChangePage(pageOfItems) {
            // update page of items
            this.pageOfItems = pageOfItems;
        }
    }
}
</script>

<template lang="pug"> 
Layout 
    Breadcrumbs(title="Новости" :links="breadcrumbs")
    Banner(title="Всё, что нужно знать о рынке ипотеки" src="images/blog-bg.jpg" noMargin)
    InternalNav( :internalNavItems="internalNavItems" marginBottom='30')
    News(:newsItems="pageOfItems")
    jw-pagination(:items="newsItems" @changePage="onChangePage" :pageSize='8' :labels="customLabels")
    container
        .text( v-html="fetchedText" )  
    mapContact
</template>
