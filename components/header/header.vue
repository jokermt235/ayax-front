<script>
import Menu from './menu/menu.vue'
import Modal from '../modal/modal.vue'
import Form from '../../components/blocks/form/form.vue'
import logo from '/images/ayax/ayax-logo.svg'
import Favorite from './favorite/favorite'
import Compare from './compare/compare'

export default {
    components: {
        Menu,
        Modal,
        Favorite,
        Compare,
        Form
    },
    data: function(){
        return{
            showMobileMenu: false,
            subscribeShow: false,
            loginShow: false,
            regShow: false,
            recallShow: false,
            isMob: false,
            recoverShow: false,
            logo: logo,
            subscribeInputs: [
                {
                    name: 'sub-name',
                    title: 'Имя',
                },
                {
                    name: 'sub-email',
                    title: 'Email',
                    type: 'email',
                    required: true
                }
            ],
            subscribeCheckboxes: [
                {
                    name: 'sub-agree',
                    title: 'Даю согласие на обработку персональных данных в соответствии с ',
                    link: 'some.com',
                    linkText: 'обработку персональных данных',
                }
            ],
            loginInputs: [
                {
                    name: 'login-name',
                    title: 'Ваш E-mail ',
                    required: true,
                    type: 'email'
                },
                {
                    name: 'login-pass',
                    title: 'Пароль ',
                    type: 'password',
                    required: true
                },
            ],
            recoverInputs: [
                {
                    name: 'rec-email',
                    title: 'Ваш E-mail ',
                    required: true,
                    type: 'email'
                },
            ],
            checkboxes: [
                {
                    name: 'agree',
                    title: 'Даю согласие на обработку персональных данных в соответствии с ',
                    link: 'some.com',
                    linkText: 'политикой конфиденциальности',
                }

            ],
            regInputs: [
                {
                    name: 'reg-email',
                    title: 'Ваш E-mail ',
                    required: true,
                    type: 'email'
                },
                {
                    name: 'reg-pass',
                    title: 'Пароль ',
                    type: 'password',
                    required: true
                },
                {
                    name: 'reg-surname',
                    title: 'Фамилия ',  
                },
                {
                    name: 'reg-name',
                    title: 'Имя ',  
                },
                {
                    name: 'reg-tel',
                    title: 'Телефон ',
                },
            ],
            recallInputs: [
                {
                    name: 'call-name',
                    title: 'Ваше имя ',  
                    required: true
                },
                {
                    name: 'call-tel',
                    title: 'Номер телефона ',
                    required: true
                },
            ],
            subscribeButton : {
                submitButtonOnClick : ()=>{
                    this.subscribe();
                }
            },
            recallButton : {
                submitButtonOnClick : ()=>{
                    this.callAdd();
                }
            },
            signinButton : {
                submitButtonOnClick : ()=>{
                    this.signin();
                }
            },
            signupButton : {
                submitButtonOnClick : ()=>{
                    this.signup();
                }
            },
            sendCodeButton : {
                submitButtonOnClick : ()=>{
                    this.sendCode();
                }
            },
        }
    },
    methods: {
        onSubscribe: function () {
            this.subscribeShow = !this.subscribeShow;
        },
        onLogin: function () {
            this.loginShow = !this.loginShow;
        },
        onReg: function () {
            this.regShow = !this.regShow;
        },
        onRecall: function () {
            this.recallShow = !this.recallShow;
        },
        onRecover: function () {
            this.loginShow = false;
            this.recoverShow = !this.recoverShow;
        },
        signup(){
            let user  = {
                agreement : document.querySelector("input[name=agree]").value === 'on' ? 1 : 0 ,
                email : document.querySelector("input[name=reg-email]").value,
                password : document.querySelector("input[name=reg-pass]").value,
                first_name :  document.querySelector("input[name=reg-name]").value,
                last_name : document.querySelector("input[name=reg-surname]").value,
                phone : document.querySelector("input[name=reg-tel]").value,
            };
            this.$store.dispatch('user/register', user);
        },
        signin(){
            let user = {
                login : document.querySelector("input[name=login-name]").value,
                password : document.querySelector("input[name=login-pass]").value
            };
            this.$store.dispatch('user/login', user); 
        },
        subscribe(){
            var date = new Date();
            let user = {
                agreement : document.querySelector("input[name=sub-agree]").value === 'on' ? 1 : 0 ,
                /*api_token (string) - токен авторизованного пользователя, если он сейчас авторизованн на сайте*/
                name : document.querySelector("input[name=sub-name]").value,
                email : document.querySelector("input[name=sub-email]").value,
                confirm : 1,
                confirm_date : date.toLocaleString(),
                url : window.location.href
            };
            this.$store.dispatch('user/subscribe', user);
        },
        sendCode(){
            let user = {
                email : document.querySelector("input[name=rec-email]").value,
            };
            this.$store.dispatch('user/send', user);
        },
        recover(){
            let user = {
                key : document.querySelector("input[name=password-key]").value,
                email : document.querySelector("input[name=recover-email]").value,
                password :ocument.querySelector("input[name=password-password]").value,
            };
            this.$store.dispatch('user/recover', user);
        },
        callAdd(){
            let call = {
                agreement : document.querySelector("input[name=agree]").value === 'on' ? 1 : 0 ,
                name : document.querySelector("input[name=call-name]").value,
                phone : document.querySelector("input[name=call-tel]").value,
                url : window.location.href
            };
            this.$store.dispatch('call/send', call);
        },
        user(){
            return $store.getters['user/getUser'];
        }
    },
    mounted() {
        if($(window).width() < 992) {
            this.isMob = true;
        } 
    },

}

</script>

<template lang="pug">
header.header
    .header-top
        .container
            .header-top-links.flex
                span.header-top--link.icon-subscribe(v-on:click="onSubscribe") Подписаться на рассылку
                template(v-if="!isMob")
                    Favorite
                    Compare                
                .header-top--link.icon-login(v-if="!user")
                    span(v-on:click="onLogin") Вход 
                    span &nbsp;/&nbsp; 
                    span(v-on:click="onReg") Регистрация
                .header-top--link.icon-login(v-else)
                    span {{user.name}}
                    .header-top--link.icon-placeholder-logout
                        span(v-on:click="logout") Выйти
    .header-content(v-bind:class="{ active: showMobileMenu }")
        .container
            .flex.align-items-center.justify-content-between
                a(href="/").logo
                    img(:src="logo", alt="АЯКС")

                Menu

                .call
                    a(href="#" @click="onRecall").call--top
                        <i class="my-icon icon-phone"></i>
                        | Позвонить мне
                    a(href="tel:88002345842").call--tel 8 800 23 45 842
                    p.call--time Ежедневно с 08:30 до 21:30
                template(v-if="isMob")
                    .header-mobile
                        a(href="tel:88002345842").call-mob
                            <i class="my-icon icon-phone"></i>
                        Favorite
                        Compare
                        .menu-toggle(
                            v-on:click="showMobileMenu = !showMobileMenu"
                            )
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15"><path fill="#000" fill-rule="evenodd" d="M0 0h17v3H0V0zm0 6h17v3H0V6zm0 6h17v3H0v-3z"></path></svg>
                .menu-mobile
                    .menu-close( v-on:click="showMobileMenu = !showMobileMenu")
                    Menu
                    .mobile-contact
                        p Мы на связи ежедневно
                        span с 8:30 до 21:30
                        a(href="tel:+88002345842") 8 800 23 45 842
                        .mobile-soc.flex
                            a(class="icon-fb" target="_blank" rel="nofollow" href="http://www.facebook.com/pages/Krasnodar/ayax.realty/126461500740230?ref=sgm")
                            a(class="icon-vk" target="_blank" rel="nofollow" href="http://vk.com/ayax.realty")
                            a(class="icon-inst" target="_blank" rel="nofollow" href="https://www.instagram.com/ayax.realty/")

    Modal(:visible="subscribeShow" @toggleModal="onSubscribe"
            title="Подписаться на рассылку"
            description="Подпишитесь на рассылку свежих предложений")
        Form(:inputs="subscribeInputs" :checkboxes="subscribeCheckboxes" modal :submitButton="subscribeButton")
    Modal(:visible="loginShow" @toggleModal="onLogin" title="Вход на сайт" )
        Form(:inputs="loginInputs" modal hideRequirementMess :submitButton = "signinButton")
        span.modal--link(v-on:click="onRecover") Забыли пароль?
    Modal(:visible="regShow" @toggleModal="onReg" title="Регистрация на сайте"  )
        Form(:inputs="regInputs" :checkboxes="checkboxes" modal sendText="Зарегистрироваться" :submitButton="signupButton")  
    Modal(:visible="recallShow" @toggleModal="onRecall" title="Обратный звонок с сайта")
        Form(:inputs="recallInputs" :checkboxes="checkboxes" modal horizontal hideRequirementMess :submitButton="recallButton")  
    Modal(:visible="recoverShow" @toggleModal="onRecover" title="Восстановить пароль"  )
        Form(:inputs="recoverInputs" modal hideRequirementMess sendText="Выслать код" :submitButton="sendCodeButton") 

</template>
