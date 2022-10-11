<script>
import container from '../../layout/container.vue'
import Breadcrumbs from '../breadcrumbs/breadcrumbs'

export default {
    props: {
       bannerItems: Array,
       hideBlur: Boolean,
       bannerClass: String,
       breadcrumbTitle: String
    },
    components: {
        container,
        Breadcrumbs
    }
}
</script>

<template lang="pug">
    section.section.section_banner(:class="bannerClass ? bannerClass : '' ") 
        Breadcrumbs(v-if="breadcrumbTitle" :title="breadcrumbTitle" absolute)
        .banner.banner-callback(v-for="item in bannerItems")
            .banner-img(:class="hideBlur ? 'banner-no-blur': ''")
                img( :src="item.src", :alt="item.imgTitle")
            .banner-title.title.title_l
                h2 {{ item.title }}
            .banner-text
                p {{ item.text }}
            .banner-wrap(v-if="item.btnName")
                .banner-btn.btn.btn-white
                    span {{item.btnName }} 
            slot
</template>
