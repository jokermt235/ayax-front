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
                    title: 'Оспаривание стоимости участков',
                    text: 'Оцениваем и устраняем переплаты',
                    btnName: 'Подать заявку'
                }
            ],
            awardsItems: [
                {
                    name: 'Оспаривание кадастровой стоимости, 1 участок	',
                    description: 'по договоренности сторон'
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
            fetchedText: '<div class="seo-text" style="max-width: 900px; margin: 0 auto;"><p>Оценка земельного участка для оспаривания кадастровой стоимости в Краснодаре весьма часто используется для корректировки размера налоговых выплат. Как многим известно, фискальные сборы напрямую зависят от показателя, указанного в бумагах по кадастру. Конечно, он должен приблизительно соответствовать рыночной цене, только на деле расхождения бывают велики. Потому нередко люди платят в госказну больше, чем нужно. Согласитесь, экономить на переоценке совсем не выгодно.</p><p>Чтобы недвижимость была беспроблемным и доходным активом, советуем проконсультироваться с опытными оценщиками нашей компании. Тем более, когда вы владеете производством или арендуете сельхозугодья. Это попросту обезопасит ваше предприятие. Также напомним, что оценка земли для оспаривания кадастровой стоимости еще требуется в судах при разных разбирательствах, получении наследства, когда надо уточнить ренту и так далее.</p><p>Для оценки и экспертизы <a title="Продажа земельных участков в Краснодаре и крае" href="https://www.ayax.ru/kupit-zemelnyj-uchastok/">земельных участков в Краснодаре</a> в целях оспаривания стоимости необходимы:</p><ul><li>правоустанавливающие и правоподтверждающие документы на оцениваемую собственность;</li><li>справка о балансовой стоимости (если собственник — юридическое лицо);</li><li>кадастровый паспорт недвижимого имущества;</li><li>кадастровая справка;</li><li>реквизиты заказчика (паспорт).</li></ul><p>Готовы помочь оспорить цену, просто обратитесь в агентство недвижимости "АЯКС"!</p></div>',
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
            Breadcrumbs(title="Оспаривание стоимости участков"  :links="breadcrumbs")
            Banner(src='/images/otsenkakrasnodare-osparivaniestoimosti.jpg' title='Оспаривание стоимости участков' bannerBlur text="Оцениваем и устраняем переплаты" :bannerBtns="bannerBtns")
            container
                .title
                    h2 Оспаривание кадастровой стоимости участков в Краснодаре
                .text( v-html="fetchedText" )
            Awards( :awardsItems="awardsItems")
            container
                .big-form.scroll-block
                    Form(:inputs="inputs" :checkboxes="checkboxes" title="Отправьте заявку прямо сейчас" subtitle="Заполните форму, и наш сотрудник свяжется с Вами в ближайшее время.")
            mapContact(hideTime2 title="Мы находимся по адресу" place="ул. Рашпилевская, 179/1, 8 этаж, офис 802" tel="+7 988 461-15-51"  place2="ул. Советов, 42, 2 этаж, офис 219" tel2One="+7 (8617) 30-10-51" tel2Two="+7 918 971-81-66")
</template>
