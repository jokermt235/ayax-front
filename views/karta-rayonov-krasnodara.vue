<script>
import container from '../components/layout/container'
import Layout from "../components/layout/layout"
import mapContact from "../components/blocks/mapContact/mapContact.vue"
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'

export default {
    name: 'App',
    components: {
        container,
        Layout,
        Breadcrumbs,
        mapContact,
    },
    props: {
        title: String,

    },
    data() {
        return {
            fetchedText: '<div class="seo-text"><p><strong>Карта районов Краснодара</strong> с цветовыми обозначениями границ районов и микрорайонов, улиц и домов с номерами, позволяет быстро сориентироваться и получить полноценную информацию о самой локации, территории города и пригорода в целом.</p><p>Используя изменение масштаба, можно более четко определить границы районов, а клик по участку карты позволит познакомиться с выбранным районом подробнее. Подробный обзор, фотографии, инфраструктура, ну и конечно подборки недвижимости по микрорайонам. Вы сможете <a title="Все квартиры от Аякса" href="https://www.ayax.ru/kvartiry/">купить квартиру в Краснодаре</a> по выбранным требованиям.</p></div>',
            fetchedText2: '<p>Познакомьтесь с районами, выберете на карте Краснодара более подходящий, задайте интересующие вопросы, а мы не только вас проконсультируем, но и быстро подберем любую недвижимость.</p>',


        }
    },
    mounted(){
        this.$store.dispatch('district/list');
    },
    computed : {
        districts(){
            return this.$store.getters['district/records'];
        }
    }
}
</script>

<template lang="pug">
Layout
    Breadcrumbs(title="Карта районов Краснодара" )
    mapContact(title="Районы Краснодара на карте с улицами и домами" hideTime titleSmall) 
    container(extraClass="section-padding")
        .text( v-html="fetchedText" )
    container
        .districts
            ul.districts-list(style='display: grid;grid-template-columns: 1fr 1fr 1fr;')
                li.districts-item(v-for="(district, index) in districts")
                     .districts-box
                        .districts-name
                            span {{district.letter}}
                        a(v-for="item in district.items" :href="'karta-rayonov-krasnodara/' + item.url").districts-link {{item.name}}
                
                                            
    container
        .text( v-html="fetchedText2" )
</template>
