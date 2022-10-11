<script>
import container from '../components/layout/container'
import Layout from "../components/layout/layout"
import Banner from '../components/blocks/banner/banner.vue'
import Profitably from '../components/blocks/profitably/profitably.vue'
import Form from '../components/blocks/form/form.vue'
import defImg from '../../assets/images/pages/rieltorskie-uslugi/realtor-service-bg.jpg'
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'
import mapContact from "../components/blocks/mapContact/mapContact2.vue"


export default {
    name: 'App',
    components: {
        Banner,
        container,
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
                    title: 'Финансовый анализ предприятий',
                    text: 'Проанализируем состояние финансов',
                    btnName: 'Подать заявку',

                }
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
            fetchedText: '<div class="seo-text" style="max-width: 900px; margin: 0 auto;"><p>Финансовый анализ в Краснодаре — прерогатива крупных профильных компаний с сильным кадровым составом. К таковым и относится <a title="Оценка недвижимости в Краснодаре и крае от профессионалов" href="/otsenka-krasnodare/">отдел оценки недвижимости</a> "АЯКС". <strong>С 2003 года</strong> мы помогаем своим клиентам разбираться в микро- и макроээкономике, учитывать сотни факторов, выявлять достоинства и недостатки менеджмента, чтобы максимально точно определять: насколько эффективно функционирует предприятие, как управлять его активами и выстраивать бюджетную политику.</p><p>Согласитесь, это по плечу только суперпрофи, которые видят скрытые связи и могут выстраивать финмодели, опираясь на прочнейший фундамент из опыта, знаний и профессиональной интуиции. Чтобы бизнес развивался, без финансового анализа не обойтись.</p><p>Нам доверяют — мы анализируем! Ждем ваших заявок!</p></div>',
            bannerBtns: [
                {
                    path: '#',
                    title: 'Подать заявку',
                    class: 'js-scroll-form',
                },
                {
                    path: '#',
                    title: 'Видео-консультация'
                }
            ],
            breadcrumbs: [
                {
                    name: 'Оценка',
                    path: '/otsenka-krasnodare'
                }
            ],


        }
    },

}
</script>

<template lang="pug">
        Layout
            Breadcrumbs(title="Финансовый анализ предприятий" :links="breadcrumbs")
            Banner(src='/images/otsenka-krasnodare-finansovyi-analiz.jpg' title='Финансовый анализ предприятий' bannerBlur text="Проанализируем состояние финансов" :bannerBtns="bannerBtns")
            container
                .title
                    h2 Финансовый анализ в Краснодаре
                .text( v-html="fetchedText" )
            container
                .big-form.scroll-block
                    Form(:inputs="inputs" :checkboxes="checkboxes" title="Отправьте заявку прямо сейчас" subtitle="Заполните форму, и наш сотрудник свяжется с Вами в ближайшее время.")
            mapContact(hideTime2 title="Мы находимся по адресу" place="ул. Рашпилевская, 179/1, 8 этаж, офис 802" tel="+7 988 461-15-51"  place2="ул. Советов, 42, 2 этаж, офис 219" tel2One="+7 (8617) 30-10-51" tel2Two="+7 918 971-81-66")
</template>
