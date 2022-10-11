<script>
import container from '../components/layout/container'
import Layout from "../components/layout/layout"
import Banner from '../components/blocks/banner/banner.vue'
import Awards from '../components/blocks/awards/awards.vue'
import Profitably from '../components/blocks/profitably/profitably.vue'
import Form from '../components/blocks/form/form.vue'
import defImg from '../../assets/images/pages/rieltorskie-uslugi/realtor-service-bg.jpg'
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'
import mapContactTwo from "../components/blocks/mapContact/mapContact2.vue"


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
        mapContactTwo
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
                    name: 'Оценка жилого дома или дачи в пригороде и районах края	',
                    description: 'от 10 000 рублей'
                },
                {
                    name: 'Оценка жилого дома или дачи в черте города Краснодара	',
                    description: 'от 8 000 до 12 000 рублей'
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
            fetchedText: '<div class="seo-text" style="max-width: 900px; margin: 0 auto;"><p>Провести оценку дома в Краснодаре бывает нужно в краткие сроки, а ведь этот тип недвижимости сложнее оценивать, чем квартиры: следует учитывать ряд индивидуальных факторов. Это и состояние коммуникаций, крыши, площадь участка и степень его обустройства. В общем, деталей множество. Особенно важно обратиться к экспертам, если ваш дом расположен в центре города, где в равной степени часто владельцы завышают или очень сильно занижают цены при продаже.</p><p>Если вам нужно оценить <a title="Каталог домов в Краснодаре и крае" href="/kupit-dom-v-krasnodare/">дом в Краснодаре</a>, необходимо подготовить пакет документов:</p><ul><li>правоустанавливающие и правоподтверждающие документы на оцениваемое имущество;</li><li>паспортные данные заказчика услуги и собственников жилья;</li><li>кадастровый паспорт;</li><li>информация об обременении недвижимости (договоры ипотеки, залога, аренды);</li><li>технический паспорт;</li><li>документально оформленные перепланировки (при их наличии).</li></ul><p>Сотрудники нашего отдела оценки сохранят ваши деньги в любом случае: оценку дома в Краснодаре стоит доверить нам.</p></div>',
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
            Breadcrumbs(title="Дома (коттеджи, таунхаусы, дачи)"  :links="breadcrumbs")
            Banner(src='/images/otsenka-krasnodaredoma.jpg' title='Дома (коттеджи, таунхаусы, дачи)' bannerBlur text="Оценка коттеджей, таунхаусов, дач" :bannerBtns="bannerBtns")
            container
                .title
                    h2 Оценка домов в Краснодаре
                .text( v-html="fetchedText" )
            Awards( :awardsItems="awardsItems")
            container
                .big-form.scroll-block
                    Form(:inputs="inputs" :checkboxes="checkboxes" title="Отправьте заявку прямо сейчас" subtitle="Заполните форму, и наш сотрудник свяжется с Вами в ближайшее время.")
            mapContactTwo(hideTime2 title="Мы находимся по адресу" place="ул. Рашпилевская, 179/1, 8 этаж, офис 802" tel="+7 988 461-15-51"  place2="ул. Советов, 42, 2 этаж, офис 219" tel2One="+7 (8617) 30-10-51" tel2Two="+7 918 971-81-66")
</template>
