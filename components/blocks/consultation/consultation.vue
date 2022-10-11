<script>
// import func from 'vue-editor-bridge'
import Form from '../form/form.vue'
import Slider from '../slider/slider'
// import { tabs, tab } from "vue-material-tabs";

export default {
  components: {
        Form,
        Slider,
        // tabs,
        // tab,
    },
    props: {
        tabsSlider: Array,
        consultationTitle: String,
        consultationText: String,
        title: String,
        scrollClass: {
            type: String,
            default: ''
        },
    },
     computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },


    data() {
        return {
            tabActive: 0,
            inputs: [
                {
                    name: 'call-name',
                    title: 'Имя',
                    required: false
                },
                {
                    name: 'call-tel',
                    title: 'Телефон',
                    type: 'phone',
                    required: true
                }
            ],
            checkboxes: [
                {
                    name: 'agree',
                    title: 'Даю согласие на обработку персональных данных в соответствии с ',
                    link: 'some.com',
                    linkText: 'политикой конфиденциальности',
                }

            ],

            sliderOptions: {
                slidesPerView: 1,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }
            },
            sendConsultRequest : {
                submitButtonOnClick : ()=>{
                    this.sendUserConsult();
                }
            },
        }
    },
    methods: {
        changeSlider: function(index) {
            this.tabActive = index
        },
        sendUserConsult(){
            let call = {
                agreement : document.querySelector("input[name=agree]").value === 'on' ? 1 : 0 ,
                name : document.querySelector("input[name=call-name]").value,
                employee_id : document.querySelector(".swiper-slide-active").getAttribute("id") / 1,
                category_id : this.tabsSlider[this.tabActive].id,
                phone : document.querySelector("input[name=call-tel]").value,
                url : window.location.href
            };
            this.$store.dispatch('consultclient/add', call);
        }
    }
}
</script>
<template lang="pug">
section.section.section_padding
    .container
        h2.consultation--title {{ title }}
        .consultation
            template(v-if="tabsSlider")
                .consultation-tab
                    ul.consultation-tab--list
                        template(v-for="(item, index) in tabsSlider")
                            li.consultation-tab--name(@click="changeSlider(index)" :class="index === tabActive ? 'active' : '' ") {{ item.name }}
            .consultation-box
                .consultation-list
                    .consultation-item
                        .consultation-left
                            template(v-for="(item, index) in tabsSlider")
                                .consultation-slider(:data-tab-slider="index" :class="index === tabActive ? 'active' : '' ")
                                    Slider(v-if="index === tabActive" :sliderOptions="sliderOptions" :slides="item.request_consultation_employee"  :sliderId="index + 'consult'" arrowClass="consult-arrow")
                        .consultation-right
                            .consultation-form
                                .banner-form(:class='scrollClass')
                                    .banner-form--title
                                        h3 {{ consultationTitle }}
                                    .banner-form--text
                                        p {{ consultationText }}
                                    Form(:inputs="inputs" :checkboxes="checkboxes" horizontal :submitButton="sendConsultRequest")
</template>
