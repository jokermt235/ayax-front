<script>
import Layout from "../components/layout/layout";
import container from '../components/layout/container.vue'
import Banner from '../components/blocks/banner/banner.vue'
import News from '../components/blocks/news/news'
import NewsNav from '../components/blocks/news-nav/news-nav'
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'

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
    Breadcrumbs,
    News,
    NewsNav,
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
            newNavItems: [
                {
                    path: '#',
                    name: 'Ипотека'
                },
                {
                    path: '#',
                    name: 'Компания'
                },
                {
                    path: '#',
                    name: 'Мероприятия'
                }
            ],
            pageOfItems: this.newsItems,
            customLabels,
            fetchedText: '<div class="seo-text"><p>Читайте свежие новости недвижимости Краснодара и страны на сайте агентства недвижимости "АЯКС"! Здесь собраны познавательные тематические материалы.</p><p>В своих статьях мы делимся разными лайфхаками для покупки или <a title="База жилья в Краснодаре и крае от &quot;АЯКС-Риэлт&quot;" href="/kupit-zhilye/">продажи жилья</a>, раскрываем нюансы работы агентов, пишем о важных законодательных изменениях и просто показываем красивые дома и квартиры.</p><p>Если вы хотите видеть самые интересные новости о жилой и коммерческой недвижимости, присоединяйтесь к нам! Отправляйте ссылки на понравившиеся статьи родным и друзьям. Давайте вместе создавать лучший блог риэлтора!</p></div>',
            // newsItems: null,
        }
    },
    methods: {
        onChangePage(pageOfItems) {
            this.pageOfItems = pageOfItems;
            // console.log(this.pageOfItems)
        },

    },
    mounted() {
        // axios
        //     .get ('https://ajax.sl/api/v1/news/list')
        //     .then(response => (this.newsItems = response.data));
        // console.log(this.pageOfItems) 
    }
}
</script>

<template lang="pug">
Layout
    //- .div {{ newsItems}}
    Breadcrumbs(title="Новости")
    Banner(title="Полезные новости о недвижимости" src="images/blog-bg.jpg")
    .container
        .internal-news--title.title
            h2 Новости недвижимости Краснодара
    NewsNav(:newNavItems="newNavItems")
    .news-wrapper
        News(:newsItems="pageOfItems" title=" ")
    jw-pagination(:items="newsItems" @changePage="onChangePage" :pageSize='8' :labels="customLabels" )
    container
        .text( v-html="fetchedText" )
</template>
