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
                    name: 'Подготовка договора аренды/коммерческого найма, 1 объект	',
                    description: 'от 3 000 рублей'
                },
                {
                    name: 'Подготовка документов для подписания договора купли-продажи жилого дома и земельного участка',
                    description: 'от 38 500 рублей'
                },
                {
                    name: 'Подготовка документов для подписания договора купли-продажи квартиры, гаражного бокса',
                    description: 'от 19 000 рублей'
                },
                {
                    name: 'Подготовка документов для приватизации квартиры на одного собственника с подачей документов на государственную регистрацию права собственности',
                    description: 'от 35 000 рублей'
                },
                {
                    name: 'Подготовка документов для снятия обременения (ипотека в силу закона)',
                    description: 'от 12 000 рублей'
                },
                {
                    name: 'Юридические консультации по текущим сделкам',
                    description: 'бесплатно'
                },
            ],
            inputs: [

                {
                    name: 'deal-email',
                    title: 'Email',
                    type: 'email',
                    required: true
                },
                {
                    name: 'deal-phone',
                    title: 'Телефон',
                    type: 'number',
                    required: true
                },
                {
                    name: 'deal-name',
                    title: 'Контакное лицо',
                    required: true
                },
                {
                    name: 'deal-usertext',
                    title: 'Дополнительная информация',
                    inputTextarea: true
                },
            ],
            checkboxes: [
                {
                    name: 'deal-agree',
                    title: 'Даю согласие на обработку персональных данных в соответствии с ',
                    link: 'some.com',
                    linkText: 'обработку персональных данных',
                }
            ],
            fetchedText: '<div class="seo-text" style="max-width: 900px; margin: 0 auto;"><p>Юридическое сопровождение сделок с недвижимостью в Краснодаре – это проверка "юридической чистоты" имущества (истории объекта, разного рода обременений, основания права собственности), а также консультации опытных специалистов при совершении регистрации права собственности.</p><p>В юридической службе проходят переговоры по всем видам сделок с недвижимостью в Краснодаре, в том числе с использованием механизмов <strong><a title="Программы ипотеки в Краснодаре" href="/ipoteka-krasnodare/">ипотеки</a>, субсидий, военного сертификата, материнского капитала</strong>.</p><p>Основные задачи:</p><ul><li>составление индивидуальных договоров купли-продажи;</li><li>проверка субъектов и объектов;</li><li>сбор бумаг для достижения ключевой цели, то есть заверение права собственности на недвижимость, которую выбрал покупатель;</li><li>архивирование документов в течение 3 лет с возможностью получения по запросу клиента необходимых сведений об их сделке;</li><li>консультирование и ведение переговоров с соблюдением интересов сторон в продолжение всего периода сотрудничества.</li></ul></div>',
            bannerBtns: [
                {
                    path: '#',
                    title: 'Подать заявку',
                    class: 'js-scroll-form'
                }
            ],
            breadcrumbs: [
                {
                    name: 'Юридические услуги',
                    path: '/yuridicheskie-uslugi-krasnodare'
                }
            ],
            sendRequestButton : {
                 submitButtonOnClick : ()=>{
                    this.sendRequest();
                }
            }
        }
    },
    methods : {
        sendRequest(){
            let data = {
                agreement : document.querySelector("input[name=deal-agree]").value === 'on' ? 1 : 0 ,
                name : document.querySelector("input[name=deal-name]").value,
                phone : document.querySelector("input[name=deal-phone]").value,
                email : document.querySelector("input[name=deal-email]").value,
                comment : document.querySelector("textarea[name=deal-usertext]").value,
                url : window.location.href
            };
            this.$store.dispatch('partner/send', data);
        }
    }
}
</script>

<template lang="pug">
        Layout
            Breadcrumbs(title="Сопровождение сделок" :links="breadcrumbs")
            Banner(src='/images/soprovozhdenie-sdelok.jpg' title='Сопровождение сделок' bannerBlur text="Юридическая помощь в любой момент" :bannerBtns="bannerBtns")
            container
                .title
                    h2 Сопровождение сделок с недвижимостью в Краснодаре
                .text( v-html="fetchedText" )
            Awards( :awardsItems="awardsItems")
            container
                .col
                    a(href="/test.pdf" download target="_blank" class="btn-download btn btn-default")
                        span Скачать прайс-лист
                        span (PDF 0.07 Мб)
            container
                .big-form.scroll-block
                    Form(:inputs="inputs" :checkboxes="checkboxes" title="Отправьте заявку прямо сейчас" 
                    subtitle="Заполните форму, и наш сотрудник свяжется с Вами в ближайшее время." 
                    :submitButton="sendRequestButton")
            mapContact(hideTime title="Мы находимся по адресу" place="ул. Рашпилевская, 179/1, 7 этаж" tel="+7 988 461-17-17")
</template>
