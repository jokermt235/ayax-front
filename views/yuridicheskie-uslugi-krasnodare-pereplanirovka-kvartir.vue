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
                    name: 'Оформление перепланировки квартиры',
                    description: 'от 70 000 рублей'
                },
                {
                    name: 'Перевод из жилого фонда в нежилой и обратно',
                    description: 'договорная'
                },
                {
                    name: 'Правовое оформление самовольных построек, пристроек (на предоставленном земельном участке)',
                    description: 'договорная'
                },
                {
                    name: 'Представительство в суде по вопросу признания строения пригодным для проживания',
                    description: 'от 30 000 рублей'
                },
                {
                    name: 'Раздел/объединение квартир/земельных участков',
                    description: 'договорная'
                },
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
            fetchedText: '<div class="seo-text" style="max-width: 900px; margin: 0 auto;"><p>Перепланировка квартиры в Краснодаре или каком-то другом городе — всегда непростая задача. Чтобы ее узаконить, придется собрать внушительный пакет бумаг, должным образом осуществить согласование, а также оформление всех изменений.</p><p>Впрочем, для юристов нашей компании узаконивание перепланировок — привычная работа. Для наших специалистов любое переустройство — знакомый процесс. Мы знаем, как превратить хорошее жилье в очень хорошее с наименьшими потерями денег, времени и, что важнее всего, без лишнего нервного напряжения.</p><p>Обычно те, кто уже решились перепланировать <a title="Все квартиры от АЯКС" href="/kvartiry/">квартиру в Краснодаре</a>, понимают, дешево не получится. Но мы предлагаем преобразовать вашу недвижимость без баснословных затрат: просто нужно все правильно и оперативно оформить.</p><p>Единственное, что не под силу нашим юристам, когда речь идет о перепланировке квартир в Краснодаре, они вряд ли сами смогут сделать ремонт! Хотя...</p><p>В общем, если вы задумали переустройство — звоните или пишите, к вашим услугам лучшие специалисты этой сферы, сотрудники юридической службы агентства недвижимости "АЯКС"!</p></div>',
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
                agreement : document.querySelector("input[name=perep-agree]").value === 'on' ? 1 : 0 ,
                name : document.querySelector("input[name=perep-name]").value,
                phone : document.querySelector("input[name=perep-phone]").value,
                email : document.querySelector("input[name=perep-email]").value,
                comment : document.querySelector("textarea[name=perep-usertext]").value,
                url : window.location.href
            };
            this.$store.dispatch('partner/send', data);
        }
    }
}
</script>

<template lang="pug">
        Layout
            Breadcrumbs(title="Оформление перепланировок" :links="breadcrumbs")
            Banner(src='/images/pereplanirovka-kvartir.jpg' title='Оформление перепланировок' bannerBlur text="Проектируем новую жизнь" :bannerBtns="bannerBtns")
            container
                .title
                    h2 Перепланировка квартир в Краснодаре
                .text( v-html="fetchedText" )
            Awards( :awardsItems="awardsItems")
            container
                .col
                    a(href="/test.pdf" download target="_blank" class="btn-download btn btn-default")
                        span Скачать прайс-лист
                        span (PDF 0.07 Мб)
            container
                .big-form.scroll-block
                    Form(:inputs="inputs" 
                    :checkboxes="checkboxes" title="Отправьте заявку прямо сейчас"
                     subtitle="Заполните форму, и наш сотрудник свяжется с Вами в ближайшее время."
                     :submitButton="sendRequestButton")
            mapContact(hideTime title="Мы находимся по адресу" place="ул. Рашпилевская, 179/1, 7 этаж" tel="+7 988 461-17-17")
</template>
