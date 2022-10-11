<script>
import Layout from "../components/layout/layout";
import container from '../components/layout/container.vue'
import Banner from '../components/blocks/banner/banner'
import Form from '../components/blocks/form/form'
import SliderPartner from '../components/blocks/slider/sliderPartner'
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'
import mapContact from "../components/blocks/mapContact/mapContact2.vue"
export default {
    name: 'partners',
    components: {
        Layout,
        Banner,
        SliderPartner,
        Breadcrumbs,
        Form,
        container,
        mapContact
    },
    props: {
    },

  data() {
        return {
            sliders: [
                {
                    title: 'Профессиональные сообщества',
                    sliderOptions: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                        navigation: {
                            nextEl: ".swiper-button-next[data-button-id='0']",
                            prevEl: ".swiper-button-prev[data-button-id='0']"
                        },
                        breakpoints: {
                            "640": {
                                "slidesPerView": 1,
                                "spaceBetween": 20
                            },
                            "768": {
                                "slidesPerView": 2,
                                "spaceBetween": 30
                            },
                            "1024": {
                                "slidesPerView": 3,
                                "spaceBetween": 40
                            }
                        }

                    },
                   partners: [
                        {
                            id: 1,
                            name: 'ООО «Перспектива-Новостройки»',
                            logo: 'images/pages/partners/region/1.png',
                        },
                        {
                            id: 2,
                            name: '«Краснополянское агентство недвижимости»',
                            logo: 'images/pages/partners/region/2.png',
                        },
                        {
                            id: 3,
                            name: 'АГЕНТСТВО НЕДВИЖИМОСТИ «КС ПЛЮС»',
                            logo: 'images/pages/partners/region/3.jpg',
                        },
                        {
                            id: 4,
                            name: 'Агентство недвижимости «Престиж»',
                            logo: 'images/pages/partners/region/4.png',
                        },
                        {
                            id: 5,
                            name: 'Агентство недвижимости «СОЮЗ Риелторов»',
                            logo: 'images/pages/partners/region/5.jpg',
                        },
                        {
                            id: 6,
                            name: 'Агентство недвижимости «Южный Город»',
                            logo: 'images/pages/partners/region/6.jpg',
                        },
                        {
                            id: 7,
                            name: 'АльянСити',
                            logo: 'images/pages/partners/region/7.jpg',
                        },
                        {
                            id: 8,
                            name: 'АН «Аревера»',
                            logo: 'images/pages/partners/region/8.png',
                        },
                        {
                            id: 9,
                            name: 'АН «Ваш Выбор»',
                            logo: 'images/pages/partners/region/9.jpg',
                        },
                        {
                            id: 10,
                            name: 'Группа компаний "Новосёл"',
                            logo: 'images/pages/partners/region/10.png',
                        },
                        {
                            id: 11,
                            name: 'ЗАО «Фирма Чекни»',
                            logo: 'images/pages/partners/region/11.jpg',
                        },
                        {
                            id: 12,
                            name: 'Компания «Дон-МТ-Недвижимость»',
                            logo: 'images/pages/partners/region/12.png',
                        },
                        {
                            id: 13,
                            name: 'ООО «АВЕНТИН-Недвижимость»',
                            logo: 'images/pages/partners/region/13.jpg',
                        },
                        {
                            id: 14,
                            name: 'ООО «Агентство Ризолит-Липецк»',
                            logo: 'images/pages/partners/region/14.jpg',
                        },
                        {
                            id: 15,
                            name: 'ООО «АН «ПРЕЗИДЕНТ»',
                            logo: 'images/pages/partners/region/15.jpg',
                        },
                        {
                            id: 16,
                            name: 'ООО «АН РБС»',
                            logo: 'images/pages/partners/region/16.jpg',
                        },
                        {
                            id: 17,
                            name: 'ООО «БЕСТ КРЫМ»',
                            logo: 'images/pages/partners/region/17.png',
                        },
                        {
                            id: 18,
                            name: 'ООО «Бизнес-Ангел»',
                            logo: 'images/pages/partners/region/18.jpg',
                        },
                        {
                            id: 19,
                            name: 'ООО «Департамент Таманской недвижимости»',
                            logo: 'images/pages/partners/region/19.jpg',
                        },
                        {
                            id: 20,
                            name: 'ООО «МИАРД-брокеридж»',
                            logo: 'images/pages/partners/region/20.jpg',
                        },                        {
                            id: 21,
                            name: 'ООО «ОНИКС-Недвижимость»',
                            logo: 'images/pages/partners/region/21.jpg',
                        },
                        {
                            id: 22,
                            name: 'ООО «РЕГИОН»',
                            logo: 'images/pages/partners/region/22.jpg',
                        },
                        {
                            id: 23,
                            name: 'ООО «Семья»',
                            logo: 'images/pages/partners/region/23.png',
                        },
                        {
                            id: 24,
                            name: 'Центр недвижимости "Алекс"',
                            logo: 'images/pages/partners/region/24.jpg',
                        },
                    ]
                },
                {
                    title: 'Банки-партнеры Ипотечного центра',
                    sliderOptions: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                        navigation: {
                            nextEl: ".swiper-button-next[data-button-id='1']",
                            prevEl: ".swiper-button-prev[data-button-id='1']"
                        },
                        breakpoints: {
                            "640": {
                                "slidesPerView": 1,
                                "spaceBetween": 20
                            },
                            "768": {
                                "slidesPerView": 2,
                                "spaceBetween": 30
                            },
                            "1024": {
                                "slidesPerView": 3,
                                "spaceBetween": 40
                            }
                        }
                    },
                    partners: [
                        {
                            id: 1,
                            name: 'АО «Россельхозбанк»',
                            logo: 'images/pages/partners/ipoteka/1.jpg',
                        },
                        {
                            id: 2,
                            name: 'КБ "Кубань Кредит" ООО',
                            logo: 'images/pages/partners/ipoteka/2.jpg',
                        },
                        {
                            id: 3,
                            name: 'ПАО «БАНК УРАЛСИБ»',
                            logo: 'images/pages/partners/ipoteka/3.jpg',
                        },
                        {
                            id: 4,
                            name: 'ПАО Банк «ФК Открытие»',
                            logo: 'images/pages/partners/ipoteka/4.jpg',
                        },
                        {
                            id: 5,
                            name: 'ПАО Сбербанк',
                            logo: 'images/pages/partners/ipoteka/5.png',
                        },
                        {
                            id: 6,
                            name: 'ПАО «АК БАРС» БАНК',
                            logo: 'images/pages/partners/ipoteka/6.png',
                        },
                        {
                            id: 7,
                            name: 'АО «Банк ЖилФинанс»',
                            logo: 'images/pages/partners/ipoteka/7.png',
                        },
                        {
                            id: 8,
                            name: 'ПАО Банк ВТБ',
                            logo: 'images/pages/partners/ipoteka/8.png',
                        },
                        {
                            id: 9,
                            name: 'ТКБ БАНК ПАО',
                            logo: 'images/pages/partners/ipoteka/9-1.jpg',
                        },
                        {
                            id: 10,
                            name: 'АО «Россельхозбанк»',
                            logo: 'images/pages/partners/ipoteka/9.jpg',
                        },
                        {
                            id: 11,
                            name: 'КБ «Кубань Кредит» ООО',
                            logo: 'images/pages/partners/ipoteka/10.jpg',
                        },
                        {
                            id: 12,
                            name: 'ЗАО «Райффайзенбанк»',
                            logo: 'images/pages/partners/ipoteka/11.jpg',
                        },
                        {
                            id: 13,
                            name: 'АО «КБ ДельтаКредит»',
                            logo: 'images/pages/partners/ipoteka/12.jpg',
                        },
                        {
                            id: 14,
                            name: 'ПАО Банк «Финансовая Корпорация Открытие»',
                            logo: 'images/pages/partners/ipoteka/13.png',
                        },
                        {
                            id: 15,
                            name: 'Банк ГПБ (АО)',
                            logo: 'images/pages/partners/ipoteka/14.png',
                        },
                        {
                            id: 16,
                            name: 'ОАО «Крайинвестбанк»',
                            logo: 'images/pages/partners/ipoteka/15.jpg',
                        },
                        {
                            id: 17,
                            name: 'АКБ «Абсолют Банк» (ПАО)',
                            logo: 'images/pages/partners/ipoteka/16.jpg',
                        },
                        {
                            id: 18,
                            name: '«Промсвязьбанк»',
                            logo: 'images/pages/partners/ipoteka/17.png',
                        },
                        {
                            id: 19,
                            name: 'ПАО «РОСБАНК»',
                            logo: 'images/pages/partners/ipoteka/18.jpg',
                        },
                        {
                            id: 20,
                            name: 'ОАО КБ «Центр-инвест»',
                            logo: 'images/pages/partners/ipoteka/19.jpg',
                        },

                    ]
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

            fetchedText: '<div class="seo-text"><p>На данный момент подразделение оценки "АЯКС" входит в число самых авторитетных профильных компаний Краснодара. Повышать уровень услуг нам позволяют не только высококвалифицированные специалисты и современные подходы к работе, но и постоянно растущий портфель партнерских соглашений. Сегодня мы взаимодействуем с крупнейшими банками, а также с Кубанским ипотечным агентством. В общей сложности наш отдел оценки является партнером <strong>около 30 организаций</strong>. Расширяя сотрудничество с участниками отрасли, <a title="История агентства недвижимости Краснодара АЯКС" href="/agentstvo-nedvizhimosti-krasnodar/">агентство недвижимости</a> "АЯКС" создает все более выгодные и комфортные продукты и услуги для клиентов.</p></div>',
        }
    }
}
</script>

<template lang="pug">
Layout
    Breadcrumbs(title="Партнеры компании")
    Banner(src="images/partners-bg.jpg" title="Дарим больше возможностей нашим клиентам")
    container
        .title
            h2 Партнеры отдела оценки "АЯКС"
        template(v-for="(slider, index) in sliders")
            SliderPartner(:sliderOptions="slider.sliderOptions" :slides="slider.partners" :sliderId="index" :title="slider.title")
    container
        .big-form.scroll-block
            Form(:inputs="inputs" :checkboxes="checkboxes" title="Хотите стать партнером?" subtitle="Заполните форму, и наш сотрудник свяжется с Вами в ближайшее время.")
    container
        .text( v-html="fetchedText" )
    mapContact(hideTime2 title="Мы находимся по адресу" place="ул. Рашпилевская, 179/1, 8 этаж, офис 802" tel="+7 988 461-15-51"  place2="ул. Советов, 42, 2 этаж, офис 219" tel2One="+7 (8617) 30-10-51" tel2Two="+7 918 971-81-66")

</template>
