
<script>
import container from '../../layout/container.vue'


export default {
    props: {
        title: String,
        requisitesItem: Array,
    },
    components: {
        container
    }
}
</script>
<template lang="pug">
    .requisites
        .requisites__title.title
            h2 Реквизиты компании
        .requisites__box
            .requisites__name
                span  Форма
            .requisites__text
                span  ООО «АЯКС»
        .requisites__box
            .requisites__name
                span  Адрес:
            .requisites__text
                span  350020, г. Краснодар, ул. Рашпилевская, 179, корп. 1, помещение 17
        .requisites__box
            .requisites__name
                span  ИНН/КПП
            .requisites__text
                span  2308270130 / 230801001
        .requisites__box
            .requisites__name
                span  ОГРН
            .requisites__text
                span  1192375079885
        .requisites__box
            .requisites__name
                span  р/с
            .requisites__text
                span  40702810530000037365
        .requisites__box
            .requisites__name
                span  к/с
            .requisites__text
                span  30101810100000000602
        .requisites__box
            .requisites__name
                span  Банк
            .requisites__text
                span  ПАО Сбербанк
        .requisites__box
            .requisites__name
                span  БИК
            .requisites__text
                span  040349602
        .requisites__box
            .requisites__name
                span  Телефон
            .requisites__text
                a(href="tel:+78612970000")  8 (861) 297-00-00



</template>
