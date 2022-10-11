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
                    link: '/spetsialisty'
                },
                {
                    name: 'Партнеры',
                    link: '/otsenka-krasnodarepartnery'
                },
                {
                    name: 'Новости',
                    link: '/otsenkakrasnodarenovosti'
                },
                {
                    name: 'Онлайн оценка',
                    link: '/onlinerating'
                },
                {
                    name: 'Видео-связь',
                    link: '#'
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
            fetchedText: '<div class="seo-text"><p>Новости оценки в Краснодаре и крае мы публикуем в данном разделе. Рекомендуем к прочтению свежие заметки и статьи об оценочной деятельности: сегодня всем, кто так или иначе причастен к этой отрасли, очень важно ориентироваться в многочисленных нюансах и новшествах. Будучи собственником бизнеса или недвижимости, вы легко найдете ответы на вопросы, связанные с изменениями к подходам и методам оценщиков, а также сможете оперативно отследить законодательные изменения.</p><p> Кадастровая оценка в целом интересна широкому кругу лиц, кроме того, здесь вы найдете статьи о <a title="Услуги оценки недвижимости в Краснодаре" href="/otsenka-krasnodare/">независимой оценке</a> (экспертизе).</p><p>Если у вас есть вопросы по тем или иным темам, затронутым в наших материалах, обязательно пишите или звоните специалистам компании: вас ждет подробная и грамотная консультация!</p></div>',
            breadcrumbs: [
                {
                    name: 'Оценка',
                    path: '/otsenka-krasnodare/'
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
    Banner(title="Всё, что нужно знать о рынке ипотеки" src="images/blog-bg.jpg")
    InternalNav( :internalNavItems="internalNavItems" marginBottom="30")
    News(:newsItems="pageOfItems" title="Новости оценки в Краснодаре")
    jw-pagination(:items="newsItems" @changePage="onChangePage" :pageSize='8' :labels="customLabels" )
    container
        .text( v-html="fetchedText" )
    mapContact(hideTime2 title="Мы находимся по адресу" place="ул. Рашпилевская, 179/1, 8 этаж, офис 802" tel="+7 988 461-15-51"  place2="ул. Советов, 42, 2 этаж, офис 219" tel2One="+7 (8617) 30-10-51" tel2Two="+7 918 971-81-66")
</template>
