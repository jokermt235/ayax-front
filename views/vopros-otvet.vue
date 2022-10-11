<script>
import container from '../components/layout/container'
import Layout from "../components/layout/layout"
import Banner from '../components/blocks/banner/banner.vue'
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'
import FaqTabs from '../components/blocks/faq-tab/faq-tab.vue'
import Modal from '../components/modal/modal.vue'
import Form from '../components/blocks/form/form.vue'

export default {
    name: 'App',
    components: {
        Banner,
        container,
        Layout,
        Breadcrumbs,
        Modal,
        FaqTabs,
        Form,
    },
    data() {
        return {
            sendButton : {
                submitButtonOnClick : ()=>{
                    this.sendRequest();
                }
            },
            bannerBtns: [
                {
                    title: 'Задать вопрос',
                    link: '#'
                }
            ],
            faqShow: false,
            faqCheckboxes: [
                {
                    name: 'faq-agree',
                    title: 'Даю согласие на обработку персональных данных в соответствии с ',
                    link: 'some.com',
                    linkText: 'обработку персональных данных',
                }
            ],
            faqInputs: [
                {
                    name: 'faq-phone',
                    title: 'Номер телефона ', 
                    required: true
                },
                {
                    name: 'faq-email',
                    title: 'E-mail ', 
                    type: 'email'
                },
                {
                    name: 'faq-name',
                    title: 'Вопрос ', 
                    required: true,
                    inputTextarea: true
                },
            ],
        }
    },
    mounted(){
        this.$store.dispatch('question/list');
    },
    computed : {
        tabs(){
            return this.$store.getters['question/records'].map(item=>item.name);
        },
        faqTabs(){
            return this.$store.getters['question/records'].map(item=>{
                return {
                    faq : item.question.map(itemInner=>{
                        return {
                            id: itemInner.id,
                            question: itemInner.name,
                            answer: itemInner.value,
                            open: false
                        };
                    })
                }
            });
        }
    },
    methods: {
        onFaq: function () {
            this.faqShow = !this.faqShow;
        },
        sendRequest(){
            let data = {
                agreement : document.querySelector("input[name=faq-agree]").value === 'on' ? 1 : 0 ,
                phone : document.querySelector("input[name=faq-phone]").value,
                comment : document.querySelector("textarea[name=faq-name]").value,
                email : document.querySelector("input[name=faq-email]").value,
                url : window.location.href
            };
            this.$store.dispatch('question/send', data);
        }
    },
}
</script>

<template lang="pug">
Layout
    Breadcrumbs(title="Вопрос-ответ")
    Banner( :bannerBtns="bannerBtns" src="/images/vopros-otvet.jpg" title="FAQ" @openModal="onFaq" bannerBlur noMargin)
    container(extraClass="line")
        .question
            FaqTabs(:tabs="tabs" :faqTabs="faqTabs") 
    Modal(:visible="faqShow" @toggleModal="onFaq" title="Задать вопрос" )
        Form(:inputs="faqInputs" :checkboxes="faqCheckboxes" modal :submitButton="sendButton")

</template>

