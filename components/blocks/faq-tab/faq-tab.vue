<script>

import Form from '../form/form.vue'
import Slider from '../slider/slider'
import faq from '../faq/faq.vue'

export default {
  components: {
        Form,
        Slider,
        faq
    },
    props: {
        tabs: Array,
        faqTabs: Array,
        consultationTitle: String,
        consultationText: String,
        title: String
    },


    data() {
        return {
            tabActive: 0,
            isMob: false,
            filterFaq: '',
            faqTabWrapperClass: 'faq-tab-wrapper',
            faqClicked: false
        }
    },
    methods: {
        changeSlider: function(index) {
            this.tabActive = index
            // if(this.isMob && this.faqClicked) {
            //     this.faqClicked = true
            //     this.faqTabWrapperClass = 'faq-tab-wrapper active'
            // } else {
            //     this.faqClicked = false
            //     this.faqTabWrapperClass = 'faq-tab-wrapper'
            // }
        },
        toggleFaqMob() {
            if(this.isMob && this.faqClicked) {
                this.faqClicked = false
                this.faqTabWrapperClass = 'faq-tab-wrapper active'
            } else {
                this.faqClicked = true
                this.faqTabWrapperClass = 'faq-tab-wrapper'
            }
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
section.section
    .container
        .faq-big--box
            template(v-if="tabs")
                .faq-tab--list
                    div(@click="toggleFaqMob" :class="faqTabWrapperClass")
                        template(v-for="(item, index) in tabs")
                            span.faq-tab--item(@click="changeSlider(index)" :class="index === tabActive ? 'active' : '' ") {{ item }}
                    .faq-search
                        input(type="text" placeholder="Поиск" v-model="filterFaq" )
                .question__title.title
                    h2 Вопрос – ответ
                template(v-for="(item, index) in faqTabs")
                    .faq-info(:class="index === tabActive ? 'active' : '' ")
                        template(v-for="(fitem, i) in item.faq")
                            template(v-if="filterFaq != '' ? fitem.question.toLowerCase().includes(filterFaq.toLowerCase()) || fitem.answer.toLowerCase().includes(filterFaq.toLowerCase()) : true ")
                                faq(
                                    :filtered="filterFaq"
                                    :faq="fitem"
                                    :index="i"
                                    :key="i")
</template>
