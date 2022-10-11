<script>
import Layout from "../components/layout/layout";
import container from '../components/layout/container.vue'
import Banner from '../components/blocks/banner/banner.vue'
import News from '../components/blocks/news/news'
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'
import InternalNav from '../components/blocks/internal-nav/internal-nav'
import mapContact from "../components/blocks/mapContact/mapContact2.vue"


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
    Breadcrumbs,
    InternalNav,
    mapContact
  },
  data() {
        return {
            internalNavItems: [
                {
                    name: 'Сотрудники',
                    link: '/yuristy-nedvizhimosti'
                },
                {
                    name: 'Новости',
                    link: '/yuristy-novosti'
                },
            ],
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
            pageOfItems: this.newsItems,
            customLabels,
            fetchedText: '<div class="seo-text"><p>Юридические статьи многим кажется очень сложными. Мы стараемся не просто собирать важную информацию, но и делать ее максимально доступной для широкого круга читателей. Очень трудно разбираться в документах — куда проще прочитать комментарии специалистов с разъяснениями или новости, которые раскрывают смысл тех или иных законодательных изменений.</p><p>Так что, если вас интересуют юридические новости, наш сайт станет прекрасным источником свежих и понятных материалов. <a title="Профессиональные юридические услуги в Краснодаре" href="/yuridicheskie-uslugi-krasnodare/">Юридические услуги</a> должны быть не только качественными, но и прозрачными: используйте статьи для решения своих задач и обязательно обращайтесь к юристам агентства недвижимости "АЯКС" за расширенной консультацией!</p></div>',
            breadcrumbs: [
                {
                    name: 'Юридические услуги',
                    path: '/ipotekakrasnodare'
                }
            ]

        }
    },
    methods: {
        onChangePage(pageOfItems) {
            this.pageOfItems = pageOfItems;
    // console.log(this.pageOfItems)
        }
    },
    mount() {
    //  axios href http://ayax/api/news/list   api.php;
    // console.log(this.pageOfItems)
    }
}
</script>

<template lang="pug">
Layout
    Breadcrumbs(title="Новости" :links="breadcrumbs")
    Banner(title="Недвижимость и закон: юридические тонкости" src="images/blog-bg.jpg")
    InternalNav( :internalNavItems="internalNavItems" marginBottom="30")
    News(:newsItems="pageOfItems" title="Юридические статьи и новости в Краснодаре")
    jw-pagination(:items="newsItems" @changePage="onChangePage" :pageSize='8' :labels="customLabels" )
    container
        .text( v-html="fetchedText" )
    mapContact(hideTime title="Мы находимся по адресу" place="ул. Рашпилевская, 179/1, 7 этаж" tel="+7 988 461-17-17")
</template>
