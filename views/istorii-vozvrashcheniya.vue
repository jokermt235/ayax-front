<script> 
import Banner from '../components/blocks/banner/banner.vue'
import container from '../components/layout/container.vue'
import Layout from "../components/layout/layout";
import specialistHistory from "../components/blocks/return/return.vue" 
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'

export default {
    name: 'App',
    components: {
        Layout, 
        Banner,
        Banner,
        container,
        Breadcrumbs,
        specialistHistory,
    },
    data() {
        return {
        }
    },
    mounted(){
        this.$store.dispatch('employee/storyList', 2);
    },
    computed : {
        returnItems(){
            return this.$store.getters['employee/records'].map(item=>{
                if(item.employee){
                    if(item.employee.position){
                        return {
                            image: item.employee.image,
                            name:  item.employee.full_name,
                            skill: item.employee.position.name,
                            text: item.description,
                        };
                    }
                }
            }).filter(Boolean);
        }
    }
}
</script>

<template lang="pug">
Layout
    Breadcrumbs(title="Истории возвращения")
    Banner(title="Истории возвращения" src="images/success-bg.jpg")
    container
        .specialist-history
            .row
                .col
                    .specialist-history--title.title
                        h2 Истории возвращения сотрудников в компанию
        specialistHistory(:returnItems="returnItems")
</template>