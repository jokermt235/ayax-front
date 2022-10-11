<script>
import Layout from "../components/layout/layout";
import container from '../components/layout/container'
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'
import faq from '../components/blocks/faq/faq.vue'
import Consultation from '../components/blocks/consultation/consultation.vue'
import Calculator from "../components/blocks/calculator/calculator"

export default {
    name: 'App',
    props: {
    },
    components: {
        container,
        Layout,
        Breadcrumbs,
        faq,
        Consultation,
        Calculator
    },
    data() {
        return {

            fetchedText: '<p>Хотите купить квартиру в Краснодаре? В базе агентства Аякс подобраны только реальные объявления. Цены от&nbsp;<b>300 000</b>&nbsp;до&nbsp;<b>60 000 000</b>&nbsp;рублей. Средняя стоимость метра&nbsp;<b>75 329</b>&nbsp;руб.&nbsp; Есть квартиры площадью до&nbsp;<b>371</b>&nbsp;м². Лучшие предложения по Краснодару с адресами, фото, планировками и ценами. <b>Гарантируем юридическую безопасность сделки</b>.</p>',
            faqs:[
                {
                    question: 'Возможно ли оформление ипотеки без первоначального взноса?',
                    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor leo gravida tellus sapien, est luctus enim mauris. Augue risus pellentesque adipiscing volutpat bibendum pharetra, ac purus.',
                    open: false
                },
                {
                    question: 'Возможна ли покупка земельного участка в ипотеку?',
                    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor leo gravida tellus sapien, est luctus enim mauris. Augue risus pellentesque adipiscing volutpat bibendum pharetra, ac purus.',
                    open: false
                },
                {
                    question: 'Аккредитованы в банке?',
                    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor leo gravida tellus sapien, est luctus enim mauris. Augue risus pellentesque adipiscing volutpat bibendum pharetra, ac purus.',
                    open: false
                },
                {
                    question: 'Можете предварительно прикинуть стоимость объекта?',
                    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor leo gravida tellus sapien, est luctus enim mauris. Augue risus pellentesque adipiscing volutpat bibendum pharetra, ac purus.',
                    open: false
                }
            ],
            tabs: [ "Покупка" ,"Оценка","Юридические вопросы"],
        }
    },
    methods: {
        toggleOpen: function(index) {
            this.faqs = this.faqs.map((faq, i) => {
                if (index === i ) {
                    faq.open = !faq.open

                } else {
                    faq.open = false;
                }
                return faq;
            })
        }
    },
    mounted(){
        this.$store.dispatch('consultypes/httpFetch');
    },
    computed : {
        tabsSlider(){
            return this.$store.getters["consultypes/slides"];
        },
    },

}

</script>

<template lang="pug">
    Layout(classes="nopadding")
        Breadcrumbs(title="Сопровождение ипотеки")
        container(extraClass="section-hypotech")
            .col
                .hypothec
                    .hypothec-img
                        img(src="images/hypothec/bg.jpg")
                    .hypothec-title.title
                        h1  Ипотека <br>в Краснодаре
                    .hypothec-text
                        span Ипотечный центр Аякс, подберем самое выгодное предложение
                    .hypothec-btn.btn-default.js-scroll-form
                        button Подать заявку
        container
            .hypothec-nav
                .articleblog--tab
                    .articleblog--nav.active
                        a(href="/ipotechnyebrokery") Сотрудники
                    .articleblog--nav
                        a(href="/ipotaktsii") Акции
                    .articleblog--nav
                        a(href="/partners") Партнеры
                    .articleblog--nav
                        a(href="/news") Новости
                    .articleblog--nav
                        a(href="#") Уют в доме
                    .articleblog--nav
                        a(href="#") Ипотечний калькулятор
            .title
                h2 Акции
            .hypothec-col
                .col
                    .hypothec-stock
                        .hypothec-stock--img
                            img(src="https://picsum.photos/300")
                        .hypothec-stock--name
                            span Рефинансирование действующих кредитов
                        .hypothec-stock--btn.btn-default
                            button Перейти
                .col
                    .hypothec-stock
                        .hypothec-stock--img
                            img(src="https://picsum.photos/300")
                        .hypothec-stock--name
                            span Рефинансирование действующих кредитов
                        .hypothec-stock--btn.btn-default
                            button Перейти
                .col
                    .hypothec-stock
                        .hypothec-stock--img
                            img(src="https://picsum.photos/300")
                        .hypothec-stock--name
                            span Рефинансирование действующих кредитов
                        .hypothec-stock--btn.btn-default
                            button Перейти
            .btn-readmore.btn-readmore--stock
                button Смотреть все акции
        container
            .title
                h2 Ипотечный калькулятор
            //- .div-delete
            Calculator
        container(extraClass="section-special")
            .col
                .hypothec-special
                    .hypothec-special--img
                        img(src="images/hypothec/bg-features.jpg")
                    .hypothec-special--name
                        h2 Что получает клиент ипотечного центра?
                    .hypothec-special--info
                        span
                            img(src="images/hypothec/1.svg")
                        span Индивидуальный подбор программы с учетом возможностей клиентов
                    .hypothec-special--info
                        span
                            img(src="images/hypothec/2.svg")
                        span Предоставим скидку от банков-партнеров
                    .hypothec-special--info
                        span
                            img(src="images/hypothec/3.svg")
                        span Сопровождение на всех этапах сделки
                    .hypothec-special--info
                        span
                            img(src="images/hypothec/4.svg")
                        span Подача заявок по одному пакету документов
        container
            .col
                .hypothec-features
                    .hypothec-features--title.title
                        h2 Мы оформили более 10 000 ипотечных кредитов. Нам доверяют
                    ul.hypothec-features--list
                        li.hypothec-features--item
                            .hypothec-features--number 95%
                            .hypothec-features--name Нам одобряют до 95% заявок
                        li.hypothec-features--item
                            .hypothec-features--number 22
                            .hypothec-features--name Года на рынке недвижимости
                        li.hypothec-features--item
                            .hypothec-features--number №1
                            .hypothec-features--name В Краснодаре по объему ипотечных кредитов
        container
            .question
                .question-title.title
                    h2 Часто задаваемые вопросы
                ul.question-list
                    faq(
                        v-for="(faq, i) in faqs"
                        :faq="faq"
                        :index="i"
                        :key="i"
                        :open="faq.open"
                        @toggleOpen="toggleOpen")
        Consultation(:tabsSlider="tabsSlider" :tabs="[]" title="Бесплатная консультация экспертов" consultationText="Мы даем бесплатную консультацию по любому интересующему вас вопросу. Оставьте ваш контакт, мы назначим время звонка и поможем вам принять рациональное решение." consultationTitle="Получите бесплатную консультацию" scrollClass="scroll-block")
        container
            .text( v-html="fetchedText" )
</template>
