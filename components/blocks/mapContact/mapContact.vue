<script>
import container from '../../layout/container.vue'

export default {
    props: {
        title: String,
        hideTime: Boolean,
        titleSmall: Boolean,
        twoPlace: Boolean,
        tel: String,
        place: String,
    },
    components: {
        container,
    },

}
</script>

<template lang="pug">
    section
        .container
            .row
                .col
                    .map-contact--box
                        template(v-if="titleSmall")
                            h1.title-small  {{ title }}
                        template(v-else)
                            .map-contact--title.title
                                h2  {{ title }}
                        .map-contact--wrap
                            .map-contact--place {{ place }}
                            a(v-if="tel" :href="'tel:' + tel").map-contact--tel {{ tel }}
                            .map-contact--time(v-if="!hideTime")
                                span пн-пт с 9:00 до 19:30
                                span сб. с 10:00 до 16:00

        .map-contact
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Af4b6e0d4e48d5b137f158f860a6f342d9412cd263267d090ee58d1e7350f569a&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>

</template>
