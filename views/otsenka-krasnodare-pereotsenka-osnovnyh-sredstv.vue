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
                    name: 'perep-email',
                    title: 'Email',
                    type: 'email',
                    required: true
                },
                {
                    name: 'perep-phone',
                    title: 'Телефон',
                    type: 'number',
                    required: true
                },
                {
                    name: 'perep-name',
                    title: 'Контакное лицо',
                    required: true
                },
                {
                    name: 'perep-usertext',
                    title: 'Дополнительная информация',
                    inputTextarea: true
                },
            ],
            checkboxes: [
                {
                    name: 'perep-agree',
                    title: 'Даю согласие на обработку персональных данных в соответствии с ',
                    link: 'some.com',
                    linkText: 'обработку персональных данных',
                }
            ],
            fetchedText: '<div class="seo-text" style="max-width: 900px; margin: 0 auto;"><p>Переоценку основных средств в Краснодаре мы помогаем проводить <strong>уже 13 лет</strong>. Многие предприятия стали постоянными клиентами подразделения "АЯКС". Дело не только в нашем подходе к сервису. У нас накопилась настолько внушительная база данных о компаниях, что такой сложный процесс, как переоценка фондов, мы настроили, как часовой механизм.</p><p>Наши <a title="Специалисты по оценке в Краснодаре" href="/otsenka-krasnodare/spetsialisty/">оценщики недвижимости</a> решают важнейшие бизнес-задачи, такие как переоценка капитала, активов с последующим финансовым анализом, подготовка к продаже оборудования или разделение фондов, инвестиционного проекта.</p></div>',
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
            ],


        }
    }
}
</script>

<template lang="pug">
        Layout
            Breadcrumbs(title="Переоценка основных фондов" :links="breadcrumbs")
            Banner(src='/images/otsenkakrasnodare-pereotsenkaosnovnyhsredstv.jpg' title='Переоценка основных фондов' bannerBlur text="Пора переоценить активы бизнеса" :bannerBtns="bannerBtns")
            container
                .title
                    h2 Переоценка основных средств в Краснодаре
                .text( v-html="fetchedText" )
            container
                .big-form.scroll-block
                    Form(:inputs="inputs" :checkboxes="checkboxes" title="Отправьте заявку прямо сейчас" subtitle="Заполните форму, и наш сотрудник свяжется с Вами в ближайшее время.")
            mapContact(hideTime2 title="Мы находимся по адресу" place="ул. Рашпилевская, 179/1, 8 этаж, офис 802" tel="+7 988 461-15-51"  place2="ул. Советов, 42, 2 этаж, офис 219" tel2One="+7 (8617) 30-10-51" tel2Two="+7 918 971-81-66")
</template>
