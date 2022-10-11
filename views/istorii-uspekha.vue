<script>
import Banner from '../components/blocks/banner/banner.vue'
import container from '../components/layout/container.vue'
import Layout from "../components/layout/layout";
import specialistHistory from "../components/blocks/return/return.vue"
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
    Banner,
    Breadcrumbs,
    container,
    specialistHistory,
  },
  data() {
        return {
            /*returnItems: [
                {
                    image: '/images/pages/ipoteka-krasnodare/internal-card-chel.png',
                    name: 'Акулов Владимир Геннадьевич',
                    skill: 'Эксперт',
                    text: '<p>В Краснодар переехал из Екатеринбурга в 2012 году: люблю тепло и солнце, близость к морю.</p><p>Первый раз проработал здесь с апреля 2013 года по апрель 2017 года. Прошел путь от стажера до старшего эксперта. Ярких моментов было много, но самое главное – когда решаешь вопросы своих клиентов и получаешь от них рекомендации, вот тогда и получаешь удовольствие от работы.</p><p>В Краснодар переехал из Екатеринбурга в 2012 году: люблю тепло и солнце, близость к морю.</p><p>Первый раз проработал здесь с апреля 2013 года по апрель 2017 года. Прошел путь от стажера до старшего эксперта. Ярких моментов было много, но самое главное – когда решаешь вопросы своих клиентов и получаешь от них рекомендации, вот тогда и получаешь удовольствие от работы.</p>'
                },
                {
                    image: '/images/pages/ipoteka-krasnodare/internal-card-chel.png',
                    name: 'Акулов Владимир Геннадьевич',
                    skill: 'Эксперт',
                    text: '<p>В Краснодар переехал из Екатеринбурга в 2012 году: люблю тепло и солнце, близость к морю.</p><p>Первый раз проработал здесь с апреля 2013 года по апрель 2017 года. Прошел путь от стажера до старшего эксперта. Ярких моментов было много, но самое главное – когда решаешь вопросы своих клиентов и получаешь от них рекомендации, вот тогда и получаешь удовольствие от работы.</p><p>В Краснодар переехал из Екатеринбурга в 2012 году: люблю тепло и солнце, близость к морю.</p><p>Первый раз проработал здесь с апреля 2013 года по апрель 2017 года. Прошел путь от стажера до старшего эксперта. Ярких моментов было много, но самое главное – когда решаешь вопросы своих клиентов и получаешь от них рекомендации, вот тогда и получаешь удовольствие от работы.</p>'
                }
            ],*/
            pageOfItems: this.returnItems,
            customLabels,
            fetchedText: '<div class="seo-text"><p>Найти хорошую <a title="Предлагаем работу риэлтором в компании &quot;АЯКС-Риэлт&quot;" href="/rabota-rieltorom-krasnodare/">работу</a> в Краснодаре сегодня вовсе не трудно, если ты нацелен на результат, постоянное саморазвитие. Стремление к успеху заложено во всех нас, и реализовать свой потенциал сегодня может каждый.</p><p>Понимая это, мы в агентстве недвижимости "АЯКС" стараемся создать такие условия для работы, чтобы человек любого возраста и профессии смог обучиться важнейшим навыкам и стать по-настоящему сильным специалистом в сфере недвижимости.</p><p>Мы помогаем, направляем сотрудников: проводим <a title="Бесплатное обучение риэлторов в Краснодаре" href="/obuchenie-rieltorov-krasnodare/">обучение</a>, развиваем наставничество в подразделениях, даем доступ к лучших технологиям и инструментам продаж. В "АЯКС" не существует границ для тех, кто действительно хочет добиться успеха: у нас многие стремительно проходят путь от агента по недвижимости до руководителя офиса.</p><p>Вы можете сами убедиться в этом: мы будем делиться историями наших сотрудников, которые своим примером вдохновляют коллег и построили головокружительную карьеру благодаря упорству и любви к профессии. И хотим, чтобы вы разделили эту любовь с нами!</p></div>',


        }
    },
    methods: {
        onChangePage(pageOfItems) {
            this.pageOfItems = pageOfItems;
        }
    },
    mounted(){
        this.$store.dispatch('employee/storyList', 1);
    },
    computed : {
        returnItems(){
            return this.$store.getters['employee/records'].map(item=>{
                if(item.employee){
                    if(item.employee.position){
                        return {
                            image: item.employee.image,
                            name:  item.employee.full_name,
                            skill: item.employee.position.name,
                            text: item.description,
                        };
                    }
                }
            }).filter(Boolean);
        }
    }
}
</script>

<template lang="pug">
Layout
    Breadcrumbs(title="Истории успеха")
    Banner(title="Истории успеха" src="images/success-bg.jpg")
    container
        .specialist-history
            .row
                .col
                    .specialist-history--title.title
                        h2 Истории успеха в компании "АЯКС"
                    .seo-text(v-html="fetchedText")
    container
        .specialist-history
            .row
                .col
                    .specialist-history--title.title
                        h2 Истории достижений лучших сотрудников
        specialistHistory(:returnItems="returnItems")
    jw-pagination(:items="returnItems" @changePage="onChangePage" :pageSize='8' :labels="customLabels" )
</template>
