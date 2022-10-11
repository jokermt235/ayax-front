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
li.articleblog-subitem.articleblog-banner
    .articleblog-banner--img
        img(src="images/articleblog/articleblog-banner-bg.png")
    .articleblog-banner--name
        span Полезная рассылка
    .articleblog-banner--text
        span Подпишитесь на рассылку и получайте свежие материалы из нашего журнала
    form.articleblog-banner--form
        .articleblog-banner--input
            input(placeholder="email" type="text")
        .articleblog-banner--btn
            button Хочу получать рассылку
    .articleblog-banner--copy
        span При подписке вы принимаете условия пользовательского соглашения
</template>
