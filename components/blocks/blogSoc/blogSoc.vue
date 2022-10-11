<script> 

export default {
  components: { 
    },
    props: {
        classes: String, 
    }, 


    data() {
        return {
            tabActive: 0,
        }
    }, 
}
</script>
<template lang="pug"> 
li.articleblog-subitem.articleblog-banner.articleblog-nopadding
    .articleblog-banner--box
        .articleblog-banner--img
            img(src="images/articleblog/articleblog-banner-bg-2.svg")
        .articleblog-banner--name
            span Полезная рассылка
        .articleblog-banner--text
            span Подпишитесь на рассылку и получайте свежие материалы из нашего журнала
    .articleblog-banner--box.articleblog-banner--white
        .articleblog-banner--share
            span
                img(src="images/articleblog/banner-share.svg")
            span Поделитесь с другими, <br>нам будет приятно
        .articleblog-banner--social
            a(href="")
                img(src="images/articleblog/social-1.svg")
            a(href="")
                img(src="images/articleblog/social-2.svg")
            a(href="")
                img(src="images/articleblog/social-3.svg")
            a(href="")
                img(src="images/articleblog/social-4.svg")
</template>
