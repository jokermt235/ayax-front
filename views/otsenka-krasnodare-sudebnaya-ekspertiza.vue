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
                    title: 'Судебная строит.-техн. экспертиза',
                    text: 'Экспертная оценка для защиты прав',
                    btnName: 'Подать заявку'
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
            fetchedText: '<div class="seo-text" style="max-width: 900px; margin: 0 auto;"><p>Для проведения судебной экспертизы в Краснодаре имеет смысл обращаться только к компаниям с качественным портфолио и налаженными связями с профучреждениями. Чтобы экспертная оценка не вызывала сомнений в суде (например, при разделе имущества), следует искать профессионалов с отличной репутацией. А ведь именно так клиенты отзываются об отделе оценки "АЯКС"!</p><p>Мы помогаем даже с не самыми тривиальными задачами. Наши работники проводят экспертизу <a title="каталог домов на продажу" href="/kupit-dom-v-krasnodare/">стоимости домов в Краснодаре</a> и крае, определяют ее актуальность. Независимая строительная экспертиза нужна в самых разных ситуациях: иногда для суда или продажи собственности. В числе самых востребованных сервисов — экспертиза стоимости, в том числе, после всяческих форс-мажоров (новый дом затопило, усадка прошла неудачно и т.п.)</p><p>Наши сотрудники прошли сертификацию соответствия требованиям Системы сертификации Негосударственных судебных экспертов в РФ по следующим специальностям:</p><p>16.1. "Исследование строительных объектов и территории, функционально связанной с ними, с целью определения их стоимости". <br>16.3. "Исследование домовладений с целью установления возможности их реального раздела между собственниками в соответствии с условиями, заданными судом; разработка вариантов указанного раздела".</p><p>Для оценщиков "АЯКС" грамотная судебная строительно-техническая экспертиза уже прочно вошла в привычку!</p></div>',
            bannerBtns: [
                {
                    path: '#',
                    title: 'Подать заявку',
                    class: 'js-scroll-form'
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
            ]

        }
    }
}
</script>

<template lang="pug">
        Layout
            Breadcrumbs(title="Судебная строит.-техн. экспертиза" :links="breadcrumbs")
            Banner(src='/images/otsenkakrasnodare-sudebnayaekspertiza.jpg' title='Судебная строит.-техн. экспертиза' bannerBlur text="Экспертная оценка для защиты прав" :bannerBtns="bannerBtns")
            container
                .title
                    h2 Судебная строительно-техническая экспертиза в Краснодаре
                .text( v-html="fetchedText" )
            container
                .big-form.scroll-block
                    Form(:inputs="inputs" :checkboxes="checkboxes" title="Отправьте заявку прямо сейчас" subtitle="Заполните форму, и наш сотрудник свяжется с Вами в ближайшее время.")
            mapContact(hideTime2 title="Мы находимся по адресу" place="ул. Рашпилевская, 179/1, 8 этаж, офис 802" tel="+7 988 461-15-51"  place2="ул. Советов, 42, 2 этаж, офис 219" tel2One="+7 (8617) 30-10-51" tel2Two="+7 918 971-81-66")
</template>
