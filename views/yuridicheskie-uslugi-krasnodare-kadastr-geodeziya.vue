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
                    name: 'Вынос границ в натуру',
                    description: '8000 - 12000'
                },
                {
                    name: 'Изменение разрешенного использования',
                    description: '30000'
                },
                {
                    name: 'Межевание - раздел, объединение участков, уточнение границ',
                    description: '10000 - 20000'
                },
                {
                    name: 'Подготовка документов для ввода в эксплуатацию жилого дома (без получения разрешения на строительство)',
                    description: 'договорная'
                },
                {
                    name: 'Подготовка документов для подписания договора купли-продажи в простой письменной форме и государственной регистрации права собственности земельного участка',
                    description: 'от 20 000 рублей'
                },
                {
                    name: 'Подготовка документов для приватизации, выкупа земельного участка (до подачи документов в ДМС)',
                    description: 'от 100 000 рублей'
                },
                {
                    name: 'Присвоение адресов',
                    description: '15000'
                },
                {
                    name: 'Регистрация права на участок или дом',
                    description: '25000 - 45000'
                },
                {
                    name: 'Технический паспорт БТИ на дом',
                    description: '15000 - 25000'
                },
                {
                    name: 'Технический план на дом',
                    description: '10000 - 20000'
                },
                {
                    name: 'Технический план на квартиру на бумаге',
                    description: '5000 - 8000'
                },
            ],
            inputs: [

                {
                    name: 'kadastr-email',
                    title: 'kadastr-Email',
                    type: 'email',
                    required: true
                },
                {
                    name: 'kadastr-phone',
                    title: 'Телефон',
                    type: 'number',
                    required: true
                },
                {
                    name: 'kadastr-name',
                    title: 'Контакное лицо',
                    required: true
                },
                {
                    name: 'kadastr-usertext',
                    title: 'Дополнительная информация',
                    inputTextarea: true
                },
            ],
            checkboxes: [
                {
                    name: 'kadastr-agree',
                    title: 'Даю согласие на обработку персональных данных в соответствии с ',
                    link: 'some.com',
                    linkText: 'обработку персональных данных',
                }
            ],
            fetchedText: '<div class="seo-text" style="max-width: 900px; margin: 0 auto;"><p>Провести кадастровые работы — давно не проблема, профильных фирм здесь много. Но вот расширенный спектр услуг предлагают немногие. Это обусловлено сложностью подобной работы: постановка объектов на кадастровый учет, а также иные сопутствующие сервисы требуют не только сверхкомпетентного штата, но и налаженных партнерских связей с десятками профорганизаций.</p><p>"АЯКС" — тот редкий случай, когда в одной компании есть специалисты, знающие и умеющие все в свое сфере! Нужно межевание участков? "АЯКС"! Ищете профи для инженерно-геодезических изысканий в Краснодаре? Тоже к нам! Стоит уточнить: мы выполним и землеустроительные работы, и топографическую съемку.</p><p><a title="Юридические услуги в Краснодаре от профессионалов" href="/yuridicheskie-uslugi-krasnodare/">Юридические услуги</a>&nbsp;теперь нет необходимости искать по бесконечным справочникам и на порталах с объявлениями. Просто обратитесь к нам, и даже непростой вопрос по нашему профилю будет решен в короткие сроки. Эксперты в сфере геодезии, кадастрового учета и земельного законодательства ждут ваших заявок. Мы фактически предлагаем вам систему "единого окна"!</p></div>',
            bannerBtns: [
                {
                    path: '#',
                    title: 'Подать заявку',
                    class: 'js-scroll-form'
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
                agreement : document.querySelector("input[name=kadastr-agree]").value === 'on' ? 1 : 0 ,
                name : document.querySelector("input[name=kadastr-name]").value,
                phone : document.querySelector("input[name=kadastr-phone]").value,
                email : document.querySelector("input[name=kadastr-email]").value,
                comment : document.querySelector("textarea[name=kadastr-usertext]").value,
                url : window.location.href
            };

            this.$store.dispatch('partner/send', data);
        }
    }
}
</script>

<template lang="pug">
        Layout
            Breadcrumbs(title="Отдел кадастра и геодезии")
            Banner(src='/images/kadastr-geodeziya.jpg' title='Отдел кадастра и геодезии' title29 bannerBlur text="Кадастр и геодезия: решим любые вопросы!" :bannerBtns="bannerBtns")
            container
                .title
                    h2 Геодезические и кадастровые работы в Краснодаре
                .text( v-html="fetchedText" )
            Awards( :awardsItems="awardsItems")
            container
                .big-form.scroll-block
                    Form(:inputs="inputs" :checkboxes="checkboxes" title="Отправьте заявку прямо сейчас"
                        :submitButton="sendRequestButton"
                     subtitle="Заполните форму, и наш сотрудник свяжется с Вами в ближайшее время.")
            mapContact(hideTime title="Мы находимся по адресу" place="ул. Рашпилевская, 179/1, 7 этаж" tel="+7 988 461-17-17")
</template>
