<script>
import benefitCard from '../components/blocks/internal-brokery/internal-brokery'
import container from '../components/layout/container.vue'
import Layout from "../components/layout/layout";
import Banner from '../components/blocks/banner/banner.vue'
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'
import bannerSelect from '../components/blocks/bannerSelect/bannerSelect.vue'

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
    bannerSelect,
    container,
    benefitCard,
    Breadcrumbs,
    container,
  },
  data() {
        return {
            rieltorsWork: [
                {
                    image: '/images/pages/rieltors/2.jpg',
                    btnText: 'Вакансии агенства',
                    link: '/vakansii-nedvizhimosti-krasnodara/',
                    text: 'Чтобы стать частью дружного коллектива, достаточно заполнить заявку и прийти на собеседование. Готовы учиться и развиваться? Работа мечты станет вашей!',
                },
                {
                    image: '/images/pages/rieltors/3.jpg',
                    btnText: 'Работа риэлтором',
                    link: '/rabota-rieltorom-krasnodare/',
                    text: 'Здесь вы можете заполнить заявку на вакансию "Риэлтор". Расскажите о себе подробно: нам одинаково важны личностные и профессиональные качества претендентов!',
                },
                {
                    image: '/images/pages/rieltors/1.jpg',
                    btnText: 'Обучение риэлторов',
                    link: '/obuchenie-rieltorov-krasnodare',
                    text: 'В нашей компании можно получить дополнительное образование в сфере риэлторских услуг. Не работали с недвижимостью? Мы всему научим. Главное — захотеть!',
                },
            ],
            //selects: ['Все сотрудники', '1','2'],
            input: {
                name: 'agent-name',
                title: 'Фамилия или имя',
                required: true,
            },
            pageOfItems: this.internalCardItems,
            customLabels,
            fetchedText: '<div class="seo-text"><p>Наше агентство, это группа компаний в которой работают лучшие риэлторы Краснодара и Кубани. Агенты легкоориентируются в юридических, финансовых и других вопросах купли-продажи жилья и другого типа недвижимогоимущества.</p><p>Агенты по недвижимости за год проводят более 11000 сделок, это и покупка жилья, продажа, аренда и т. д. Выможете рассчитывать на:</p><ul><li>бесплатную консультацию;</li><li>быстрый подбор вариантов;</li><li>отсутствие предоплат;</li><li>риэлторское сопровождение;</li><li>низкий % комиссионных, а в некоторых случаях и 0%.</li></ul><p>Познакомиться с каждым риэлтором агентства недвижимости Аякс просто – перейдите на его страницу и там сможетеполучить информацию о человеке, сможете связаться с ним через сайт, оставить отзыв, посмотреть объекты, которыепродаются.</p><p>Мы уделяем много времени и сил на <a title="Все о обучении риэлторов в АЯКС-Риэлт" target="_blank" href="/obuchenie-rieltorov-krasnodare/">обучение агентов по недвижимости</a>, их профессиональный статус изнания последних тенденций рынка. Оставляйте отзывы о наших риэлторах, а служба внутреннего контроля приметмеры.</p></div>',
        }
    },
    methods: {
        onChangePage(pageOfItems) {
            this.pageOfItems = pageOfItems;
        }
    },
    mounted(){
        let payload = {
            type : 2
        };
        let params = new URLSearchParams(window.location.search);
        if(params.get("agent-name")){
            payload["name"] = params.get("agent-name");
        }
        this.$store.dispatch('employee/list', payload);
    },
    computed: {
        internalCardItems(){
            return this.$store.getters["employee/items"].map(item=>{
                return {
                    name: item.full_name,
                    post: item.position != null ?  item.position.name : 'Пусто',
                    tel:  item.phone ?? '',
                    src:  item.image,
                    personLink: 'person-link',
                    postLink: item.office !=null ?  item.office.url : 'Пусто',
                    postLinkText: item.office != null ? item.office.name : 'Пусто',
                    director : item.position != null ? item.position.name.includes('иректор') : false,
                };
            });
        },
        selects(){
            return ['Все сотрудники', ...this.$store.getters["employee/items"].map(item=>item.full_name)];
        }
    }
}
</script>

<template lang="pug">
    Layout
        Breadcrumbs(title="Риэлторы")
        Banner( src="images/employee-bg.jpg")
            bannerSelect(:selects="selects" :input="input" selected="Все сотрудники")
        benefitCard( :internalBrokery="pageOfItems" title="Риэлторы Краснодара ")
        jw-pagination(:items="internalCardItems" @changePage="onChangePage" :pageSize='8' :labels="customLabels" )
        container
            .text( v-html="fetchedText" )
        container(extraClassRow="gy-4")
            .rieltors-work--title.title
                h2 Узнайте о работе в компании
            template(v-for="item in rieltorsWork")
                .col.col-12.col-sm-6.col-md-4.col-lg-4
                    a(:href="item.link").rieltors-work--link
                        .rieltors-work--img
                            img(:src="item.image")
                        .rieltors-work--name
                            span {{ item.btnText }}
                        .rieltors-work--text
                            p {{ item.text }}

</template>
