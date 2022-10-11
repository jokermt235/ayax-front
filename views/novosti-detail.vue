<script>
import container from '../components/layout/container'
import Layout from "../components/layout/layout"
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'


export default {
    name: 'App',
    components: {
        Layout,
        container,
        Breadcrumbs
    },
    props: {
        title: String,
        breadcrumbs: [
            {
                name: 'Новости',
                path: '/novosti-nedvizhimosti-krasnodara/'
            }
        ]

    },
    data() {
        return {


        }
    }
}
</script>

<template lang="pug">
    Layout
        Breadcrumbs(title="Новости"  :links="breadcrumbs")
        container
            .internal-news--detail
                .row
                .col
                    .internal-news--title.internal-news--title_detail.title
                        h1 Акция для клиентов АЯКС - скидка на ипотечную ставку от ВТБ
                        p
                            span 14 Сентября 2021 г.
                            span |
                            span АН «АЯКС»
                .col
                    .internal-news--text
                        p Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis vero autem nisi! Ipsa, nesciunt facilis expedita placeat magnam veritatis exercitationem labore at sit aspernatur sapiente atque minima sint error reprehenderit.
                        p Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptates est nostrum, id accusantium exercitationem, perferendis doloribus odio suscipit ut, eius laboriosam similique a. Vero distinctio dicta quam asperiores nesciunt.
                        p Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident tenetur temporibus vitae officiis odio quae architecto libero fugiat ducimus laboriosam maxime corrupti eos, fugit vel eius expedita? Porro, ullam quisquam.Iusto eius doloremque minima quo sequi aliquam? Inventore, sequi dolore. Harum deleniti veritatis aperiam ut dolore perferendis omnis repellendus, numquam eveniet officiis facere recusandae blanditiis dolor at consequuntur, ipsam sed?
                .col
                    h3 Понравилась статья? Расскажите друзьям!
</template>
