<script>
import container from '../../layout/container.vue'

export default {
    props: {
        title: String,
        hideTime: Boolean,
        twoPlace: Boolean,
        tel: String,
        place: String,
        hideTime2: Boolean,
        twoPlace2: Boolean,
        tel2One: String,
        tel2Two: String,
        place2: String,
    },
    components: {
        container
    }
}
</script>

<template lang="pug">
    section
        .container
            .row
                .col
                    .map-contact--title.title
                        h2  {{ title }}
            .row
                .col-12.col-sm-6
                    .map-contact--box
                        .map-contact--wrap
                            .map-contact--place {{ place }}
                            a(:href="'tel:' + tel").map-contact--tel {{ tel }}
                            .map-contact--time(v-if="!hideTime")
                                span пн-пт с 9:00 до 18:00
                .col-12.col-sm-6
                    .map-contact--box
                        .map-contact--wrap
                            .map-contact--place {{ place2 }}
                            a(:href="'tel:' + tel2One").map-contact--tel {{ tel2One }}
                            a(:href="'tel:' + tel2Two").map-contact--tel {{ tel2Two }}
                            .map-contact--time(v-if="!hideTime2")
                                span пн-пт с 9:00 до 19:30
                                span сб. с 10:00 до 16:00

        .map-contact
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Af4b6e0d4e48d5b137f158f860a6f342d9412cd263267d090ee58d1e7350f569a&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
</template>
