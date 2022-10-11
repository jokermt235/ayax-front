<script>

export default {
    name: 'filterBlock',
    props: {
        main: Boolean
    }, 
}

</script>


<template lang="pug">
    div
        template(v-if="main")
            .main-title.title
                h1  Поможем <a href="#">продать</a> и купить недвижимость
            .main-banner--img 
                img(src="images/pages/kupit-zhilye/banner-form.jpg")
        template(v-else)
            h1(style="font-size: 30px") Продажа квартир в Краснодаре
</template>

