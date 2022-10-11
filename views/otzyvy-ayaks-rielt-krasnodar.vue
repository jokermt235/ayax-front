<script>
import Layout from "../components/layout/layout";
import container from '../components/layout/container.vue'
import pagination from '../components/blocks/pagination/pagination'
import Form from '../components/blocks/form/form'
import Reviews from '../components/blocks/reviews/reviews'
import Banner from '../components/blocks/banner/banner.vue'
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'
import bannerSelects from '../components/blocks/bannerSelect/bannerSelects.vue'


export default {
  name: 'singleprofile',
  components: {
    Layout,
    pagination,
    Reviews,
    Banner,
    Breadcrumbs,
    Form,
    container,
    bannerSelects,
  },
  props: {
  },
  data() {
        return {
            inputs: [
                {
                    name: 'review-name',
                    title: 'Контакное лицо',
                    required: true
                },
                {
                    name: 'review-usertext',
                    title: 'Ваш отзыв',
                    inputTextarea: true,
                    required: true

                },
                {
                    name: 'review-rating',
                    title: 'Оценка',
                    rating: true,
                    required: true

                },
                {
                    name: 'review-email',
                    title: 'Email',
                    type: 'email',
                    required: true
                },
                {
                    name: 'review-phone',
                    title: 'Телефон',
                    type: 'number',
                    required: true
                },
            ],
            checkboxes: [
                {
                    name: 'review-agree',
                    title: 'Даю согласие на обработку персональных данных в соответствии с ',
                    link: 'some.com',
                    linkText: 'обработку персональных данных',
                }
            ],
            fetchedText: '<div class="seo-text"><h2>Отзывы о агентстве недвижимости «АЯКС»: читаем и оставляем свой</h2><p>Если вы хотите поблагодарить или высказаться о том или ином сотруднике&nbsp;агентства недвижимости «АЯКС»,оставьте&nbsp;отзыв, он не останется непрочитанным. За 22 года мы прошли долгий и сложный путь развития исамообразования. Сейчас в Краснодаре открыто 23 офиса по работе с клиентами, в которых&nbsp;за год проводитсяболее 11000 сделок с недвижимостью.</p><p>Есть какие-то пожелания или предложения&nbsp;тоже пишите, мы обязательно примем информацию к сведению – этоважно.</p><p style="text-align: right;"><img width="473" alt="Отзывы о АН Аякс" src="/images/pages/reviews/reviews-page-bg.png"height="605" title="Отзывы о АН Аякс" align="right"><br></p><h2>Где еще можно посмотреть отклики?</h2><p>Мнения клиентов можно увидеть, как на нашем сайте, так и набрав в Яндексе или Гугл "<em>аякс краснодар отзывы</em>". Вы увидите блок, в котором&nbsp;есть оценки каждого офиса и разные сайты, на которых естьоценка работы компании.</p><h2>Почему нужно оставить отзыв</h2><p>Ваши отклики&nbsp;это результат работы нашего агентства недвижимости. На их основе мы делаем аналитику,исправляем ошибки и просто радуемся за тех, кому помогли купить или продать <a title="Каталог жилья от АЯКСА" href="/kupit-zhilye/">жилье в Краснодаре</a>.</p><p>Мы благодарим каждого клиента&nbsp;кто выразил свое мнение о качестве предоставляемых нами услуг.</p></div>',
            sendRequestButton : {
                submitButtonOnClick : ()=>{
                    this.sendRequest();
                }
            },
        }
    },
    mounted() {
        let params = new URLSearchParams(window.location.search);
        let payload = {};
        if(params.get("office")){
            payload.office = params.get("office");
        }
        if(params.get("employee")){
            payload.employee = params.get("employee");
        }
        this.$store.dispatch('reviews/list', payload);
        this.$store.dispatch('office/officeList');
        this.$store.dispatch('employee/list');

    },
    methods: {
        sendRequest(){
            let call = {
                agreement : document.querySelector("input[name=review-agree]").value === 'on' ? 1 : 0 ,
                email :document.querySelector("input[name=review-email]").value, 
                name : document.querySelector("input[name=review-name]").value,
                text : document.querySelector("input[name=review-usertext]").value,
                employee : document.querySelector("input[name=review-name]").value,
                rating : document.querySelector("input[name=review-name]").value,
                phone : document.querySelector("input[name=review-phone]").value,
                url : window.location.href
            };
            this.$store.dispatch('call/send', call);
        }
    },
    computed : {
        reviewsItem(){
            return this.$store.getters['reviews/records'].map(item=>{
                let months = ["Январь","Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
                let date = new Date(item.updated_at);
                console.log(date);
                return {
                    day   : date.getDate() < 10 ? "0" + date.getDate() : date.getDate(),
                    month : months[date.getMonth()],
                    name  : item.name,
                    title : item.employee.full_name,
                    text  : item.text,
                }
            });
        },
        selectsForm(){
            let items = this.$store.getters['employee/items'].map(item=>item.full_name); 
            return [...new Set(items)];
        },
        offices(){
            return this.$store.getters['office/records'].map(item=>{ return  { label : item.name, id : item.id }});
        },
        selects(){
            return this.$store.getters['employee/selects'];
        }
    }
}
</script>

<template lang="pug">
Layout
    Breadcrumbs(title="Отзывы")
    Banner(src="images/review-bg.jpg")
        bannerSelects(:selects="selects" selected="Выбор офиса" :offices="offices" label="ntss")
    Reviews(:reviewsItem="reviewsItem" reviewClasses="row-cols-lg-3" reviewTitle="Отзывы о агентстве недвижимости «АЯКС»")
    container
        .text( v-html="fetchedText" )
    container
        .big-form
            Form(:inputs="inputs" :checkboxes="checkboxes" :selects="selectsForm" :submitButton="sendRequestButton" selectPlaceholder="Выберите сотрудника" title="Отправьте ваш отзыв прямо сейчас")
</template>
