<script>
import container from '../components/layout/container'
import Layout from "../components/layout/layout";
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'

export default {
    name: 'App',
    components: {
        Layout,
        Breadcrumbs,
        container
    },
    data() {
        return {
             breadcrumbs: [
                {
                    name: 'Акции',
                    path: '/ipotaktsii'
                }
            ],
            stock: '/images/pages/internal-stocks/1.png',
            fetchedText: 'Интересуетесь ипотечными программами? Не знаете в какой банк обратиться, чтобы одобрили под низкий процент? Агентство недвижимости «АЯКС» решило за вас эти проблемы. Ипотека в Краснодаре стала более доступной благодаря нашим партнерским договоренностям с более чем 20 банками страны и более чем с 120 крупными, надежными застройщиками региона.',
            title: 'Выгоднее, чем потребительский кредит!'
        }
    }
}
</script>

<template lang="pug">
    Layout
        Breadcrumbs(title="Выгоднее, чем потребительский кредит!" :links="breadcrumbs")
        container
            .internal-stocks--detail
                .row
                    .col
                        .internal-stocks--title.title
                            h2 {{ title }}
                .row
                    .col.col-12.col-md-4.col-lg-4(v-if="stock")
                        .internal-stocks--img.internal-stocks--img_detail(v-if="stock")
                            img( :src="stock", :alt="title")
                    div(:class="stock ? 'col col-12 col-md-8 col-lg-8' : 'col col-12 col-md-8 col-lg-8'")
                        .internal-stocks--text(v-html="fetchedText" )

</template>
