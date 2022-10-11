<script>
import container from '../components/layout/container'
import Layout from "../components/layout/layout"
import Banner from '../components/blocks/banner/banner.vue'
import Awards from '../components/blocks/awards/awards.vue'
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
                    name: 'Оценка квартиры или комнаты в черте города Краснодара	',
                    description: 'от 4 000 до 5 000 рублей'
                },
                {
                    name: 'Оценка квартиры или комнаты за пределами города Краснодара',
                    description: 'от 4 000 до 5 000 рублей + дополнительно оплачиваются транспортные расходы'
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
            fetchedText: '<div class="seo-text" style="max-width: 900px; margin: 0 auto;"><p>Оценка квартиры в Краснодаре — востребованный сервис, поскольку у нас в городе ежегодно выставляют на продажу иприобретают десятки тысяч объектов. А оценка ведь нужна при <a title="Помощь в получении ипотеки в Краснодаре"href="/ipoteka-krasnodare/">оформлении ипотеки</a> — это как минимум; да и если нужно разделить имущество,изменить кадастровую цену и во многих других случаях.</p><p>Конечно, стоимость жилой недвижимости у нас сравнительно низкая, и меняется она довольно медленно. Только тутстарайтесь не забывать о локальных факторах: в некоторых районах или даже отдельных жилых комплексах ценоваядинамика нередко отличается от среднерыночной. Потому так важна актуализация <atitle="Продажа квартир в Краснодаре и крае" href="/kvartiry/">стоимости квартиры</a> или комнаты: нельзя нипереплатить (если вы покупаете), ни продешевить (если продаете). Когда буквально "каждый рубль на счету", безоценки и вовсе не обойтись.</p><p>Чтобы наши сотрудники провели оценку квартиры в Краснодаре или комнаты, вы должны подготовить пакет документов,а именно:</p><ul><li>правоустанавливающие и правоподтверждающие документы на оцениваемое имущество;</li><li>паспортные данные заказчика услуги и собственников жилья;</li><li>документы об обременении недвижимости (договоры ипотеки, залога, аренды);</li><li>кадастровый паспорт;</li><li>технический паспорт;</li><li>документально оформленные перепланировки (при их наличии).</li></ul><p>Специалисты агентство недвижимости "АЯКС" назовут самую точную цену вашей собственности, обращайтесь!</p></div>',
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
            Breadcrumbs(title="Квартиры и комнаты"  :links="breadcrumbs")
            Banner(src='/images/kvartiry-komnaty.jpg' title='Квартиры и комнаты' bannerBlur text="Оценить свою квартиру" :bannerBtns="bannerBtns")
            container
                .title
                    h2 Оценка квартир в Краснодаре
                .text( v-html="fetchedText" )
            Awards( :awardsItems="awardsItems")
            container
                .big-form.scroll-block
                    Form(:inputs="inputs" :checkboxes="checkboxes" title="Отправьте заявку прямо сейчас" subtitle="Заполните форму, и наш сотрудник свяжется с Вами в ближайшее время.")
            mapContact(hideTime2 title="Мы находимся по адресу" place="ул. Рашпилевская, 179/1, 8 этаж, офис 802" tel="+7 988 461-15-51"  place2="ул. Советов, 42, 2 этаж, офис 219" tel2One="+7 (8617) 30-10-51" tel2Two="+7 918 971-81-66")
</template>
