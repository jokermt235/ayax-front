<script>
import container from '../components/layout/container'
import Layout from "../components/layout/layout"
import Banner from '../components/blocks/banner/banner.vue'
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
                    title: 'Автотранспорт',
                    text: 'Актуальная стоимость вашего участка',
                    btnName: 'Подать заявку'
                }
            ],
            awardsItems: [
                {
                    name: 'Земли населенных пунктов коммерческого назначения, участок до 0,1 га	',
                    description: 'от 6 000 до 8 000 рублей'
                },
                {
                    name: 'Земли населенных пунктов, 1 участок более 5 га',
                    description: 'от 35 000 рублей'
                },
                {
                    name: 'Земли населенных пунктов, 1 участок до 0,1 га',
                    description: 'от 4 500 до 5 000 рублей'
                },
                {
                    name: 'Земли населенных пунктов, 1 участок от 0,1 га до 0,8 га',
                    description: 'от 8 000 до 15 000 рублей'
                },
                {
                    name: 'Земли населенных пунктов, 1 участок от 0,8 до 5 га',
                    description: 'от 15 000 до 30 000 рублей'
                },
                {
                    name: 'Земли сельскохозяйственного назначения, 1 участок',
                    description: 'от 35 000 до 40 000 рублей'
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
            fetchedText: '<div class="seo-text" style="max-width: 900px; margin: 0 auto;"><p>Нужна оценка автомобиля в Краснодаре? Мы оперативно проведем необходимые изыскания, поможем уточнить <a title="Оценка ущерба при ДТП в Краснодаре" href="/otsenka-krasnodare/dtp-ushcherb/">ущерб после ДТП</a>, сделаем все, чтобы продажа ТС принесла только выгоды! Кроме того, наше заключение будет принято любым судом, банком или страховщиком.</p><p>Независимая оценка автомобиля проходит обычно быстро, наши оценщики настолько хорошо ориентируются в рынке, марках, типах повреждений и амортизационных аспектах, что вы получите исключительно точные сведения и без проблем осуществите задуманное.</p><p>Чтобы оценить автотранспорт, нужно предоставить:</p><ul><li>паспорт заказчика (или реквизиты);</li><li>паспорт транспортного средства;</li><li>свидетельство о государственной регистрации транспортного средства.</li></ul><p>Для грамотной оценки авто в Краснодаре рекомендуем обратиться в наш отдел: позвонить или заполнить заявку онлайн. Мы уже ждем!</p></div>',
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
            Breadcrumbs(title="Автотранспорт"  :links="breadcrumbs")
            Banner(src='/images/otsenkakrasnodare-avtomobili.jpg' title='Автотранспорт' bannerBlur text="Определим цену вашего транспорта" :bannerBtns="bannerBtns")
            container
                .title
                    h2 Оценка автомобилей в Краснодаре
                .text( v-html="fetchedText" )
            container
                .big-form.scroll-block
                    Form(:inputs="inputs" :checkboxes="checkboxes" title="Отправьте заявку прямо сейчас" subtitle="Заполните форму, и наш сотрудник свяжется с Вами в ближайшее время.")
            mapContactTwo(hideTime2 title="Мы находимся по адресу" place="ул. Рашпилевская, 179/1, 8 этаж, офис 802" tel="+7 988 461-15-51"  place2="ул. Советов, 42, 2 этаж, офис 219" tel2One="+7 (8617) 30-10-51" tel2Two="+7 918 971-81-66")
</template>
