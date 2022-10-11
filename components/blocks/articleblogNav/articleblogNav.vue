<script>
import container from '../../layout/container.vue'


export default {
    props: {
      title: String,
      mortgageItems: Array
    },
    data(){
        return{

        }
    },
    components: {
        container,
    }
}
</script>
<template lang="pug">
    container
        .articleblog--title.title
            h1  Журнал АЯКС - статьи о недвижимости
        .articleblog--tab
            .articleblog--nav.active
                span Главная
            .articleblog--nav
                span Вторичка
            .articleblog--nav
                span Новостройки
            .articleblog--nav
                span Загородная
            .articleblog--nav
                span Уют в доме
            .articleblog--nav
                span Законодательство
</template>


