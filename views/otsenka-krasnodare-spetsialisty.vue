<script>
import Layout from "../components/layout/layout";
import container from '../components/layout/container'
import InternalNav from '../components/blocks/internal-nav/internal-nav'
import InternalCard from '../components/blocks/internal-brokery/internal-brokery.vue'
import Reviews from '../components/blocks/reviews/reviews.vue'
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'
import mapContact from "../components/blocks/mapContact/mapContact2.vue"


// const exampleItems = [...Array(50).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));
export default {
    name: 'App',
    components: {
        container,
        InternalNav,
        Layout,
        InternalCard,
        Reviews,
        // VuePaginateAl,
        mapContact,
        Breadcrumbs,
    },
    methods: {},
    data() {
        return {
            // exampleItems,
            // pageOfItems: [],
            internalNavItems: [
                {
                    name: 'Сотрудники',
                    link: '/otsenka-krasnodare/spetsialisty'
                },
                {
                    name: 'Партнеры',
                    link: '/otsenka-krasnodare/otsenka-krasnodarepartnery'
                },
                {
                    name: 'Новости',
                    link: '/otsenka-krasnodare/otsenkakrasnodarenovosti'
                },
                {
                    name: 'Онлайн оценка',
                    link: '/otsenka-krasnodare/onlinerating'
                },
                {
                    name: 'Видео-связь',
                    link: '/otsenka-krasnodare#'
                },
            ],
            breadcrumbs: [
                {
                    name: 'Оценка',
                    path: '/ipotekakrasnodare'
                }
            ]

        }
    },
    mounted(){
        this.$store.dispatch('employee/list');
    },
    computed : {
        internalBrokery(){
            return this.$store.getters['employee/appraisals'];
        }
    }
}
</script>

<template lang="pug">
Layout
    Breadcrumbs(title="Сотрудники" :links="breadcrumbs")
    InternalNav( :internalNavItems="internalNavItems" marginBottom="30" title="12234")
    InternalCard(:internalBrokery="internalBrokery" title='Специалисты по оценке "АЯКС"')
    mapContact(hideTime2 title="Мы находимся по адресу" place="ул. Рашпилевская, 179/1, 8 этаж, офис 802" tel="+7 988 461-15-51"  place2="ул. Советов, 42, 2 этаж, офис 219" tel2One="+7 (8617) 30-10-51" tel2Two="+7 918 971-81-66")
</template>
