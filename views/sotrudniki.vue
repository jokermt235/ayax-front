<script>
import benefitCard from '../components/blocks/internal-brokery/internal-brokery'
import container from '../components/layout/container.vue'
import Layout from "../components/layout/layout";
import Banner from '../components/blocks/banner/banner.vue'
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'
import bannerSelect from '../components/blocks/bannerSelect/bannerSelect.vue'
const customLabels = {
    first: '',
    last: '',
    previous: '<',
    next: '>'
};
export default {
  name: 'App',
  components: {
    Layout,
    Banner,
    benefitCard,
    Breadcrumbs,
    container,
    bannerSelect,
  },
  data() {
        return {
            input: {
                name: 'agent-name',
                title: 'Фамилия или имя',
                required: true,
            },
            pageOfItems: this.internalCardItems,
            customLabels,
            employee : '',
        }
    },
    methods: {
        onChangePage(pageOfItems) {
            this.pageOfItems = pageOfItems;
        }
    },
    mounted(){
        let payload;
        let params = new URLSearchParams(window.location.search);
        if(params.get('agent-name')){
            payload = {
                name : params.get("agent-name")
            }
        }
        this.$store.dispatch('employee/list', payload);
    },
    computed: {
        internalCardItems(){
            return this.$store.getters["employee/items"].map(item=>{
                return {
                    name: item.full_name,
                    post: item.position != null ?  item.position.name : 'Пусто',
                    tel:  item.phone ?? '',
                    src:  item.image,
                    personLink: 'person-link',
                    postLink: item.office !=null ?  item.office.url : 'Пусто',
                    postLinkText: item.office != null ? item.office.name : 'Пусто',
                    director : item.position != null ? item.position.name.includes('иректор') : false
                };
            });
        },
        selects(){
            return ['Все сотрудники', ...this.$store.getters["employee/items"].map(item=>item.full_name)];
        }
    }
}
</script>

<template lang="pug">
    Layout
        Breadcrumbs(title="Сотрудники ")
        Banner( src="images/employee-bg.jpg")
            bannerSelect(:selects="selects" :input="input" selected="Все сотрудники")
        benefitCard( :internalBrokery="pageOfItems" title="Сотрудники агентства")
        jw-pagination(:items="internalCardItems" @changePage="onChangePage" :pageSize='8' :labels="customLabels" )
</template>
