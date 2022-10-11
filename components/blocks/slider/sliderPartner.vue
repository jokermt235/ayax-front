<script> 
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'  

export default({
    components: {
        swiper,
        swiperSlide
    },
    props: {
        title: String,
        slides: Array,
        sliderOptions: Object,
        sliderId: Number
    }, 
    data() {
        return {
            isMob: false,
        }
    },
    mounted() { 
        if($(window).width() < 1024) {
            this.isMob = true; 
        } 
    },
 
})
</script>

<template lang="pug">
.partners-logo
    h3.partners-logo--title {{ title }}
    .partners-logo-items
        template(v-if="isMob") 
            .partner-logo-item(v-for="item in slides" :key="item.id")
                img.partner-logo--img(:src="item.image")
                h4.partner-logo--title  {{ item.name }} 
        template(v-else)
            swiper(:options="sliderOptions")
                swiper-slide.slider-item.partner-logo-item(v-for="item in slides" :key="item.id")
                    img.partner-logo--img(:src="item.image")
                    h4.partner-logo--title  {{ item.name }}
                .swiper-button-prev.partners-arrow(slot="button-prev" :data-button-id="sliderId")
                .swiper-button-next.partners-arrow(slot="button-next" :data-button-id="sliderId") 
</template>