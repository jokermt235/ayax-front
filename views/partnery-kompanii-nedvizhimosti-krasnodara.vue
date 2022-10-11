<script>
import Layout from "../components/layout/layout";
import container from '../components/layout/container.vue'
import Banner from '../components/blocks/banner/banner'
import Form from '../components/blocks/form/form'
import SliderPartner from '../components/blocks/slider/sliderPartner'
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'

export default {
    name: 'partners',
    components: {
        Layout,
        Banner,
        SliderPartner,
        Breadcrumbs,
        Form,
        container,
    },
    props: {
    },

  data() {
        return {
            inputs: [

                {
                    name: 'mate-email',
                    title: 'Email',
                    type: 'email',
                    required: true
                },
                {
                    name: 'mate-phone',
                    title: 'Телефон',
                    type: 'number',
                    required: true
                },
                {
                    name: 'mate-name',
                    title: 'Контакное лицо',
                    required: true
                },
                {
                    name: 'mate-usertext',
                    title: 'Дополнительная информация',
                    inputTextarea: true
                },
            ],
            checkboxes: [
                {
                    name: 'mate-agree',
                    title: 'Даю согласие на обработку персональных данных в соответствии с ',
                    link: 'some.com',
                    linkText: 'обработку персональных данных',
                }
            ],

            fetchedText: '<div class="seo-text"><p>Для любой кубанской компании на рынке недвижимости партнеры в Краснодаре и других регионах страны обеспечивают мощное конкурентное преимущество. Тесное взаимодействие с разными участниками сектора не только позволяет удешевлять услуги и предлагать нестандартные выгодные решения для клиентов, но и дает безграничный ресурс развития.</p><p>Партнеры агентства недвижимости "АЯКС" - профессиональные некоммерческие партнерства, десятки банков, ипотечные центры, риэлторские агентства в разных городах, отраслевые медиа. Отметим, что мы дружим с торговыми фирмами (отделка, мебель, техника) и дизайнерскими бюро. Принцип простой: наши клиенты становятся также клиентами этих фирм и получают хорошие скидки.</p><p>Некоторые партнеры нашего сервиса недвижимости точечно работают с подразделениями: так, отдел оценки взаимодействует со многими банками по профилю, а ипотечный центр получает льготные ставки по <a title="Оформление ипотеки в Краснодаре" href="/ipoteka-krasnodare/">ипотеке в Краснодаре</a>.</p><p>От таких партнерских связей в выигрыше остаются все!</p></div>',
            sendRequestButton : {
                submitButtonOnClick : ()=>{
                    this.send();
                }
            },
        }
        
    },
    methods : {
        send(){
            let data = {
                agreement : document.querySelector("input[name=mate-agree]").value === 'on' ? 1 : 0 ,
                phone : document.querySelector("input[name=mate-phone]").value,
                name : document.querySelector("input[name=mate-name]").value,
                email : document.querySelector("input[name=mate-email]").value,
                comment : document.querySelector("textarea[name=mate-usertext]").value,
                url : window.location.href
            };
            this.$store.dispatch('partner/send', data);
        }
    },
    mounted(){
        let data  = {
            page : 1
        }
        this.$store.dispatch('partner/list', data);
    },
    computed : {
        sliders(){
            console.log("Sliders getters  working");
            return this.$store.getters['partner/partners'];
        }
    }
}
</script>

<template lang="pug">
Layout
    Breadcrumbs(title="Партнеры компании")
    Banner(src="images/partners-bg.jpg" title="Дарим больше возможностей нашим клиентам")
    container
        .title
            h2 Партнеры АН АЯКС
        template(v-for="(slider, index) in sliders")
            SliderPartner(:sliderOptions="slider.sliderOptions" :slides="slider.partners" :sliderId="0" :title="slider.title")
    container
        .big-form.scroll-block
            Form(:inputs="inputs" 
            :checkboxes="checkboxes"
             title="Хотите стать партнером?" 
             subtitle="Заполните форму, и наш сотрудник свяжется с Вами в ближайшее время."
             :submitButton="sendRequestButton")
    container
        .text( v-html="fetchedText" )
</template>
