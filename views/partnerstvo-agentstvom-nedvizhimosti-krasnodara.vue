<script>
import container from '../components/layout/container'
import Layout from "../components/layout/layout"
import Banner from '../components/blocks/banner/banner.vue'
import Awards from '../components/blocks/awards/awards.vue'
import Form from '../components/blocks/form/form.vue'
import offerCard from '../components/blocks/offer-card/offer-card.vue'
import benefitCard from '../components/blocks/internal-card/internal-card'
import Step from '../components/blocks/step/step.vue'
import SliderPartner from '../components/blocks/slider/sliderPartner'
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'

export default {
    name: 'App',
    components: {
        Banner,
        container,
        Breadcrumbs,
        benefitCard,
        Awards,
        Step,
        Layout,
        Form,
        SliderPartner,
        offerCard
    },
    props: {
        title: String,

    },
    data() {
        return {
            internalCardItems: [
                {
                    name: 'Валерий Викторович Ливада',
                    post: 'Руководитель Центра регионального партнерства',
                    tel: '+7 989 124-44-00',
                    src: '/images/pages/agenstva/chel.png'
                }

            ],
            sliders: [
                {
                    title: 'Партнеры в регионах',
                    sliderOptions: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                        navigation: {
                            nextEl: ".swiper-button-next[data-button-id='0']",
                            prevEl: ".swiper-button-prev[data-button-id='0']"
                        },
                        breakpoints: {
                            "640": {
                                "slidesPerView": 1,
                                "spaceBetween": 20
                            },
                            "768": {
                                "slidesPerView": 2,
                                "spaceBetween": 30
                            },
                            "1024": {
                                "slidesPerView": 3,
                                "spaceBetween": 40
                            }
                        }

                    },
                    partners: [
                        {
                            id: 1,
                            name: 'ООО «Перспектива-Новостройки»',
                            logo: 'images/pages/partners/region/1.png',
                        },
                        {
                            id: 2,
                            name: '«Краснополянское агентство недвижимости»',
                            logo: 'images/pages/partners/region/2.png',
                        },
                        {
                            id: 3,
                            name: 'АГЕНТСТВО НЕДВИЖИМОСТИ «КС ПЛЮС»',
                            logo: 'images/pages/partners/region/3.jpg',
                        },
                        {
                            id: 4,
                            name: 'Агентство недвижимости «Престиж»',
                            logo: 'images/pages/partners/region/4.png',
                        },
                        {
                            id: 5,
                            name: 'Агентство недвижимости «СОЮЗ Риелторов»',
                            logo: 'images/pages/partners/region/5.jpg',
                        },
                        {
                            id: 6,
                            name: 'Агентство недвижимости «Южный Город»',
                            logo: 'images/pages/partners/region/6.jpg',
                        },
                        {
                            id: 7,
                            name: 'АльянСити',
                            logo: 'images/pages/partners/region/7.jpg',
                        },
                        {
                            id: 8,
                            name: 'АН «Аревера»',
                            logo: 'images/pages/partners/region/8.png',
                        },
                        {
                            id: 9,
                            name: 'АН «Ваш Выбор»',
                            logo: 'images/pages/partners/region/9.jpg',
                        },
                        {
                            id: 10,
                            name: 'Группа компаний "Новосёл"',
                            logo: 'images/pages/partners/region/10.png',
                        },
                        {
                            id: 11,
                            name: 'ЗАО «Фирма Чекни»',
                            logo: 'images/pages/partners/region/11.jpg',
                        },
                        {
                            id: 12,
                            name: 'Компания «Дон-МТ-Недвижимость»',
                            logo: 'images/pages/partners/region/12.png',
                        },
                        {
                            id: 13,
                            name: 'ООО «АВЕНТИН-Недвижимость»',
                            logo: 'images/pages/partners/region/13.jpg',
                        },
                        {
                            id: 14,
                            name: 'ООО «Агентство Ризолит-Липецк»',
                            logo: 'images/pages/partners/region/14.jpg',
                        },
                        {
                            id: 15,
                            name: 'ООО «АН «ПРЕЗИДЕНТ»',
                            logo: 'images/pages/partners/region/15.jpg',
                        },
                        {
                            id: 16,
                            name: 'ООО «АН РБС»',
                            logo: 'images/pages/partners/region/16.jpg',
                        },
                        {
                            id: 17,
                            name: 'ООО «БЕСТ КРЫМ»',
                            logo: 'images/pages/partners/region/17.png',
                        },
                        {
                            id: 18,
                            name: 'ООО «Бизнес-Ангел»',
                            logo: 'images/pages/partners/region/18.jpg',
                        },
                        {
                            id: 19,
                            name: 'ООО «Департамент Таманской недвижимости»',
                            logo: 'images/pages/partners/region/19.jpg',
                        },
                        {
                            id: 20,
                            name: 'ООО «МИАРД-брокеридж»',
                            logo: 'images/pages/partners/region/20.jpg',
                        },                        {
                            id: 21,
                            name: 'ООО «ОНИКС-Недвижимость»',
                            logo: 'images/pages/partners/region/21.jpg',
                        },
                        {
                            id: 22,
                            name: 'ООО «РЕГИОН»',
                            logo: 'images/pages/partners/region/22.jpg',
                        },
                        {
                            id: 23,
                            name: 'ООО «Семья»',
                            logo: 'images/pages/partners/region/23.png',
                        },
                        {
                            id: 24,
                            name: 'Центр недвижимости "Алекс"',
                            logo: 'images/pages/partners/region/24.jpg',
                        },
                    ]
                },


            ],

            stepItem: [
                {
                    name: 'Шаг 1',
                    text:   '<b>ЗАПОЛНИТЕ ФОРМУ</b><br>Наш специалист в ближайшее время перезвонит вам.',
                    src:   'images/pages/kupit-zhilye/icon-step-1.png'
                },
                {
                    name: 'Шаг 2',
                    text: '<b>ОБРАТНАЯ СВЯЗЬ</b><br>Мы высылаем вам на почту все необходимые документы.',
                    src:   'images/pages/kupit-zhilye/icon-step-5.png'
                },
                {
                    name: 'Шаг 3',
                    text: '<b>ПОДПИСАНИЕ ДОГОВОРА</b><br>Обмениваемся копией подписанного договор',
                    src:   'images/pages/kupit-zhilye/icon-step-3.png'
                },
                {
                    name: 'Шаг 4',
                    text: '<b>НАЧИНАЕМ СОТРУДНИЧАТЬ</b>',
                    src:   'images/pages/kupit-zhilye/icon-step-7.png'
                },
            ],
            inputs: [

                {
                    name: 'regional-email',
                    title: 'Email',
                    type: 'email',
                    required: true
                },
                {
                    name: 'regional-phone',
                    title: 'Телефон',
                    type: 'number',
                    required: true
                },
                {
                    name: 'regional-name',
                    title: 'Контакное лицо',
                    required: true
                },
                {
                    name: 'regional-usertext',
                    title: 'Дополнительная информация',
                    inputTextarea: true
                },
            ],
            checkboxes: [
                {
                    name: 'regional-agree',
                    title: 'Даю согласие на обработку персональных данных в соответствии с ',
                    link: 'some.com',
                    linkText: 'обработку персональных данных',
                }
            ],
            fetchedText: '<p>Партнерство с агентством недвижимости в Краснодаре сегодня интересует многих участников рынка по всей России.</p><p>Агентство недвижимости Аякс выстроило деловые связи уже более чем с 400 профильными компаниями страны, чтобы сделать <a title="Поиск жилья" href="/kupit-zhilye/">подбор жилья</a> на Кубани максимально комфортным для всех граждан РФ.</p><p>Наша компания зарекомендовала себя как опытного посредника, мы с легкостью подбираем объекты и проводим сделки как на первичном, так и на вторичном жилищном рынке недвижимости.</p><p>Чуть менее половины квартир и <a title="База домов" href="/kupit-dom-v-krasnodare/">домов в Краснодарском крае</a> покупают приезжие. А развитая партнерская сеть позволяет нам решать любые задачи. За годы работы нашими услугами воспользовались покупатели из Перми, Южно-Сахалинска, Москвы, Волгодонска, Ставрополя и десятков других городов.</p><p>Как стать партнером АН Аякс? Достаточно иметь желание открыто и прозрачно сотрудничать, быть надежным участником и стремиться к росту продаж вне зависимости от географии!</p>',
            fetchedText: '<div class="seo-text"><p>Партнерство с агентством недвижимости в Краснодаре сегодня интересует многих участников рынка по всей России.</p><p>Агентство недвижимости Аякс выстроило деловые связи уже более чем с 400 профильными компаниями страны, чтобы сделать <a title="Поиск жилья" href="/kupit-zhilye/">подбор жилья</a> на Кубани максимально комфортным для всех граждан РФ.</p><p>Наша компания зарекомендовала себя как опытного посредника, мы с легкостью подбираем объекты и проводим сделки как на первичном, так и на вторичном жилищном рынке недвижимости.</p><p>Чуть менее половины квартир и <a title="База домов" href="/kupit-dom-v-krasnodare/">домов в Краснодарском крае</a> покупают приезжие. А развитая партнерская сеть позволяет нам решать любые задачи. За годы работы нашими услугами воспользовались покупатели из Перми, Южно-Сахалинска, Москвы, Волгодонска, Ставрополя и десятков других городов.</p><p>Как стать партнером АН Аякс? Достаточно иметь желание открыто и прозрачно сотрудничать, быть надежным участником и стремиться к росту продаж вне зависимости от географии!</p></div>',
            sendRequestButton : {
                submitButtonOnClick : ()=>{
                    this.sendRequest();
                }
            },
        }
    },
    mounted(){
        this.$store.dispatch('partner/list', {"regional" : 1})
    },
    computed : {
        offerItems(){
            return this.$store.getters['partner/regionals'].map(item=>{
                return {
                    img  : item.image,
                    name : items.name,
                    text : ""
                } 
            });
        }
    },
    methods : {
        sendRequest(){
            let data = {
                agreement : document.querySelector("input[name=regional-agree]").value === 'on' ? 1 : 0 ,
                name : document.querySelector("input[name=regional-name]").value,
                phone : document.querySelector("input[name=regional-phone]").value,
                email : document.querySelector("input[name=regional-email]").value,
                comment : document.querySelector("textarea[name=regional-usertext]").value,
                url : window.location.href
            };

            this.$store.dispatch('partner/send', data);
        }
    }
}
</script>

<template lang="pug">
    Layout
        Breadcrumbs(title="Региональное партнерство")
        Banner(title="Больше партнеров – шире география возможностей!" src="images/regionality-bg.jpg")
        container
            .title
                h2 Региональное партнерство
            .text( v-html="fetchedText" )
        container
            .offer
                .row
                    .col
                        //- .offer__title.title
                            h2 Мы предлагаем
                offerCard(:offerItems="offerItems")

        container(extraClassRow="gy-4")
            .col-12.col-md-3
                benefitCard(:internalCardItems="internalCardItems")
            .col-12.col-md-9
                .text.text-gray
                    p Компания "АЯКС" активно сотрудничает с агентствами недвижимости России, нам удалось наладить партнерские отношения с более чем 400 компаниями в разных регионах. Кроме того, мы взаимодействуем с агентствами из стран ближнего и дальнего зарубежья.<br> Всегда готовы оказать помощь нашим клиентам, надеемся на взаимовыгодное сотрудничество с участниками рынка!

        Step(:stepItem="stepItem" title="Стать партнером «АЯКС-Риэлт» просто")
        container
            template(v-for="(slider, index) in sliders")
                SliderPartner(:sliderOptions="slider.sliderOptions" :slides="slider.partners" :sliderId="index" :title="slider.title")
            .big-form
                Form(:inputs="inputs" 
                :checkboxes="checkboxes" 
                title="Отправьте заявку прямо сейчас" 
                subtitle="Заполните форму, и наш сотрудник свяжется с Вами в ближайшее время."
                :submitButton="sendRequestButton")

</template>
