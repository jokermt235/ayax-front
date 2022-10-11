<script>
import container from '../components/layout/container'
import Layout from "../components/layout/layout"
import Banner from '../components/blocks/banner/banner.vue'
import Awards from '../components/blocks/awards/awards.vue'
import Profitably from '../components/blocks/profitably/profitably.vue'
import Form from '../components/blocks/form/form.vue'
import defImg from '../../assets/images/pages/rieltorskie-uslugi/realtor-service-bg.jpg'
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'
import mapContact from "../components/blocks/mapContact/mapContact.vue"


export default {
    name: 'App',
    components: {
        Banner,
        container,
        Awards,
        Form,
        Profitably,
        Layout,
        Breadcrumbs,
        mapContact
    },
    props: {
        title: String,

    },
    data() {
        return {
            bannerItems: [
                {
                    src: defImg,
                    imgTitle: '',
                    title: 'Продать недвижимость в Краснодаре',
                    text: 'Сколько стоит моё жильё?',
                    btnName: 'Подать заявку'
                }
            ],
            awardsItems: [
                {
                    name: 'Абонентское обслуживание юридических лиц',
                    description: 'договорная/мес.'
                },
                {
                    name: 'Изготовление судебных документов',
                    description: 'от 3 000 рублей'
                },
                {
                    name: 'Изучение судебного дела в суде',
                    description: 'от 5 000 рублей'
                },
                {
                    name: 'Установление юридического факта с представительством в суде',
                    description: 'от 15 000 рублей'
                },
                {
                    name: 'Юридическая помощь в урегулировании конфликтных ситуаций',
                    description: 'от 5 000 рублей'
                },
                {
                    name: 'Юридические консультации по действующему Законодательству РФ	',
                    description: 'от 500 рублей'
                },
            ],
            inputs: [

                {
                    name: 'email',
                    title: 'Email',
                    type: 'email',
                    required: true
                },
                {
                    name: 'phone',
                    title: 'Телефон',
                    type: 'number',
                    required: true
                },
                {
                    name: 'name',
                    title: 'Контакное лицо',
                    required: true
                },
                {
                    name: 'usertext',
                    title: 'Дополнительная информация',
                    inputTextarea: true
                },
            ],
            checkboxes: [
                {
                    name: 'agree',
                    title: 'Даю согласие на обработку персональных данных в соответствии с ',
                    link: 'some.com',
                    linkText: 'обработку персональных данных',
                }
            ],
            fetchedText: '<div class="seo-text" style="max-width: 900px; margin: 0 auto;"><p>Кому можно доверить столь важную и сложную задачу?</p><p>Адвокатов и юристов много, конкуренция среди них очень высока. Подчас становится невозможно понять: кто же станет надежным партнером?</p><p>Качественная защита в суде либо споры, улаженные в досудебном порядке — вот так коротко можно описать функционал успешного юриста. Неукоснительное соблюдение интересов заказчика — вот что нужно людям, которые ищут хорошего судебного представителя.</p><p>Наши сотрудники готовы предоставить <a title="Квалифицированные юридические услуги в Краснодаре в АЯКС" href="/yuridicheskie-uslugi-krasnodare/">юридические услуги в Краснодаре</a>! Они приложат максимально усилий, чтобы решение суда вас устроило (но, скорее, постараются до него не доводить, чтобы не тратить лишние ресурсы).</p><p>Мы защитим вас в арбитражных спорах, но также в нашем портфолио — представительство в суде в Краснодаре по уголовным делам.</p><p>Все просто:</p><ol><li>Вы принимаете решение в пользу юридической службы "АЯКС".</li><li>Вы страхуете удачу, а наши юристы страхуют Вас.</li></ol><p>Ваше дело — это наше дело! Напишите или позвоните нам, мы поможем!</p></div>',
            bannerBtns: [
                {
                    path: '#',
                    title: 'Подать заявку',
                    class: 'js-scroll-form',
                }
            ],
            breadcrumbs: [
                {
                    name: 'Юридические услуги',
                    path: '/yuridicheskie-uslugi-krasnodare'
                }
            ]

        }
    }
}
</script>

<template lang="pug">
        Layout
            Breadcrumbs(title="Отдел судебной защиты" :links="breadcrumbs" )
            Banner(src='/images/predstavitelstvo-sude.jpg' title='Отдел судебной защиты' bannerBlur text="Защитим при любых спорах" :bannerBtns="bannerBtns")
            container
                .title
                    h2 Представительство в суде в Краснодаре
                .text( v-html="fetchedText" )
            Awards( :awardsItems="awardsItems")
            container
                .col
                    a(href="/test.pdf" download target="_blank" class="btn-download btn btn-default")
                        span Скачать прайс-лист
                        span (PDF 0.07 Мб)
            container
                .big-form.scroll-block
                    Form(:inputs="inputs" :checkboxes="checkboxes" title="Отправьте заявку прямо сейчас" subtitle="Заполните форму, и наш сотрудник свяжется с Вами в ближайшее время.")
            mapContact(hideTime title="Мы находимся по адресу" place="ул. Рашпилевская, 179/1, 7 этаж" tel="+7 988 461-17-17")
</template>
