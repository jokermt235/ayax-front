<script> 
import Layout from "../components/layout/layout"; 
import container from '../components/layout/container.vue'

export default {
  name: 'singleprofile',
  components: {
    Layout,  
    container, 
  },
  props: {
    name: String,
    position: String,
    photo: String,
    phone: String,
    map: String,
    office: Array,
    addressLink: String,
    addressText: String,
    addressStreet: String,
    text: String,
    personId: Number
  },
  data() {
        return {
          
        }
    }
}
</script>

<template lang="pug">
    Layout 
        container
            .row
                .person-info.col-12.col-md-9
                    h1.person--name Александр Григорьевич Кутченко
                    p.person--position Директор
                    a(href='tel:7777777777').preson--tel + 7777777777
                    .person-office
                        p.person--title Офис
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d288658.4805101189!2d37.105356096494056!3d55.582094688282126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2z0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8!5e0!3m2!1sru!2sua!4v1636011631178!5m2!1sru!2sua" width="840" height="177" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    .person-address.text
                        a(href="https://www.ayax.ru/kontakty/administratsiya-ayaks/") Администрация «АЯКС»
                        p ул. Рашпилевская, 179/1, 7 эт 
                        a(href='tel:7777777777') + 7777777777
                    
                    .text
                        p.person--title О сотруднике
                        p В 1998 году стал заниматься бизнесом и вместе с партнерами создал, а главное возглавил риэлторскую компанию «АЯКС». Главная черта — безумно люблю Краснодар.
                    
                    .person-connect
                        p.person--title Написать 
                        .flex
                            span.internal-news--btn
                                    span Написать директору
                            span.internal-news--btn
                                    span Оставить отзыв
                .col-12.col-md-3
                    .person-photo
                        img(src="https://www.ayax.ru/upload/resize_cache/main/ec4/300_300_1/ec45878e989f82e860ba15d05acbeb53.png")
</template>