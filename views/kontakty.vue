<script>
import container from '../components/layout/container'
import Layout from "../components/layout/layout"
import Form from '../components/blocks/form/form.vue'
import cardImg from '../../assets/images/pages/ipoteka-krasnodare/internal-card-chel.png'
import requisitesItem from '../components/blocks/requisites/requisites.vue'
import contactNav from '../components/blocks/contactNav/contactNav.vue'
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'
export default {
    name: 'App',
    components: {
        container,
        requisitesItem,
        Layout,
        Form,
        cardImg,
        Breadcrumbs,
        contactNav
    },
    props: {
        title: String,

    },
    data() {
        return {
            searchDefault: 'Администрация',
            selectPlaceholder: ['Выберите офис'],
            selectsActive: 0,
            inputs: [

                {
                    name: 'coop-email',
                    title: 'Email',
                    type: 'email',
                    required: true
                },
                {
                    name: 'coop-phone',
                    title: 'Телефон',
                    type: 'number',
                    required: true
                },
                {
                    name: 'coop-name',
                    title: 'Контакное лицо',
                    required: true
                },
                {
                    name: 'coop-usertext',
                    title: 'Дополнительная информация',
                    inputTextarea: true
                },
            ],
            checkboxes: [
                {
                    name: 'coop-agree',
                    title: 'Даю согласие на обработку персональных данных в соответствии с ',
                    link: 'some.com',
                    linkText: 'обработку персональных данных',
                }
            ],
            fetchedText: '<p>Покупка или продажа недвижимого имущества – важный шаг. Далеко не каждый владеет необходимыми знаниями, чтобы проверить юридическую безопасность, осуществить сделку на выгодных условиях. Для этого нужен тот, кто уже зарекомендовал себя среди риэлторов, а главное провел тысячи сложнейших переговоров.</p><p>«АЯКС» предоставляет риэлторские услуги по поиску, купле-продаже <a href="#">домов</a> и <a href="#">квартир</a>, обмену, аренде жилой, коммерческой недвижимости, земельных участков. Наша база содержит более 20 000 предложений для Краснодарского края.</p><h2>Тестовый заголовок</h2><ul><li><em>поможем определиться с&nbsp;жильём, подберем как на первичном, так и на вторичном рынках;</em></li><li><em>полную проверку с юридической точки зрения;</em></li><li><em>сопровождение сделки купли-продажи;</em></li><li><em>помощь в получении ипотечных займов под низкий процент;</em></li><li><em>риэлторские услуги без комиссионных сборов (если купить новостройку).</em></li></ul><p><h2>Тестовый заголовок</h2></p><ol><li><ins>поможем определиться с&nbsp;жильём, подберем как на первичном, так и на вторичном рынках;</ins></li><li><strong>полную проверку с юридической точки зрения;</strong></li><li><del>сопровождение сделки купли-продажи;</del></li><li>помощь в получении ипотечных займов под низкий процент;</li><li>риэлторские услуги без комиссионных сборов (если купить новостройку).</li></ol>',
            
            contactNav:[
                {
                    name: 'Ипотечный центр',
                    tel: '+7 988 461-16-16'
                },
                {
                    name: 'Ипотечный центр',
                    tel: '+7 988 461-16-16'
                },
                {
                    name: 'Ипотечный центр',
                    tel: '+7 988 461-16-16'
                },
                {
                    name: 'Ипотечный центр',
                    tel: '+7 988 461-16-16'
                }
            ],
            sendCooperateButton : {
                submitButtonOnClick : ()=>{
                    this.sendCooperation();
                }
            },
        }
    },
    mounted(){
        this.$store.dispatch('office/officeList');
    },
    computed : {
        selestcValues(){
            return this.$store.getters['office/records'];
        },
        selectsSearch(){
            if(this.selestcValues[this.selectsActive]){
                if(this.selestcValues[this.selectsActive]){
                    this.searchDefault = this.selestcValues[this.selectsActive].name;
                }else{
                    this.searchDefault = '';
                }
            }
            return this.selestcValues.map(item=>item.name);
        },
        selects(){
            return this.$store.getters['office/records'].map(item=>item.name);
        }
    },
    methods: {
        changeActiveSelects(val) {
            this.selectsActive = this.selectsSearch.indexOf(val)
        },
        sendCooperation(){
            let id = 0;
            let text = document.querySelector("form .vs__selected").innerText;
            id = this.$store.getters['office/records'].find(element =>element.name === text.trim()).id;
            let data = {
                agreement : document.querySelector("input[name=coop-agree]").value === 'on' ? 1 : 0 ,
                office_id : id,
                phone : document.querySelector("input[name=coop-phone]").value,
                name : document.querySelector("input[name=coop-name]").value,
                email : document.querySelector("input[name=coop-email]").value,
                comment : document.querySelector("textarea[name=coop-usertext]").value,
                url : window.location.href
            };
            this.$store.dispatch('cooperation/send', data);
        }
    }
}
</script>

<template lang="pug">
Layout
    Breadcrumbs(title="Контакты")
    .title Контакты агентства недвижимости "АЯКС"
    .map.map-contact--page
        container(v-if="selestcValues.length !=0")
            .map-box
                .single-select.flex.form-banner-select
                    v-select(:options="selectsSearch" v-model="searchDefault" :clearable="false" @input="changeActiveSelects")  
                .map-title
                    p {{ selestcValues[selectsActive].name }} 
                .map-place
                    p {{ selestcValues[selectsActive].address.full_address }}
                .map-time
                    span График работы:
                    span(v-html="selestcValues[selectsActive].schedule")
                a(v-for="phone in selestcValues[selectsActive].phone.filter(item=>item.category.key==='main')" :href="'tel:' + phone.phone").map-tel {{ phone.phone }}
                .map-img
                    img( :src="selestcValues[selectsActive].image")
                .map-copy
                    span Комиссия 3% от стоимости недвижимости, но не менее 100 тыс.руб.
                .map-btn.btn-default.js-scroll-form
                    span Написать нам

        <iframe v-if="selestcValues.length !=0" :src="`https://yandex.ru/map-widget/v1/?ll=${selestcValues[selectsActive].address.coordY},${selestcValues[selectsActive].address.coordX}&um=constructor%3Af4b6e0d4e48d5b137f158f860a6f342d9412cd263267d090ee58d1e7350f569a&amp;source=constructor`" width="100%" height="720" frameborder="0"></iframe>
    contactNav(:contactNav="contactNav")
    container
        requisitesItem
    container
        .big-form
            Form(:inputs="inputs" :selects="selects" 
            :selectPlaceholder="selectPlaceholder" :checkboxes="checkboxes" 
            title="Напишите нам прямо сейчас" 
            subtitle="Хотите сотрудничать с нами?" 
            subText="Оставьте заявку, и наш специалист свяжется с вами в ближайшее время." 
            :submitButton="sendCooperateButton")
</template>
