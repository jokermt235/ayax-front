<template lang="pug">
    section.section.section_banner(:class="classes")
        .banner.banner-default
            .banner-img(:class="noBlur ? 'banner-img-noblur' : ''")
                img(:src="src", :alt="imgAlt || title")
            .title.title_l(:class="title29 ? 'title29' : '' ")
                h2(v-html="title")
            .banner-text(v-if="text")
                p {{ text }}
            template(v-if="bannerBtns")
                .banner-wrap
                    .banner-btn.btn.btn-white(v-for="(item, index) in bannerBtns" @click="clicked" :key="index")
                        a(:href="item.path" :class="item.class") {{ item.title }}
            slot

</template>

<script>

export default {
  props: {
      src: String,
      title: String,
      imgAlt: String,
      text: String,
      title29: Boolean,
      bannerBtns: Array,
      bannerBlur: Boolean,
      noMargin: Boolean,
      noBlur: Boolean
  },
  data() {
      return {
          classes: ''
      }
  },
  mounted(){
      if(this.bannerBlur) {
          this.classes += "banner-blur "
      }
      if(this.noMargin) {
          this.classes += "m-0 "
      }
  },
  methods: {
        clicked () {
            this.$emit('openModal')
        }
   }
}
</script>
