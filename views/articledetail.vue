<script>
import Layout from "../components/layout/layout";
import container from '../components/layout/container'
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'
import BlogItem from '../components/blocks/blogItem/blogItem'
import BlogFrom from '../components/blocks/blogBanner/blogBanner'
import BlogSoc from '../components/blocks/blogSoc/blogSoc'





export default {
    name: 'App',
    props: {
    },
    components: {
        container,
        Layout,
        Breadcrumbs,
        BlogItem,
        BlogFrom,
        BlogSoc,
    },
    data() {
        return {
                        blogItems: [ 
                {
                    blogDay: '1',
                    blogMonth: 'декабрь',
                    blogYear: '2021',
                    blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
                    blogViews: '1.3K',
                    blogShares: '125',
                    blogHash: '#законодательство',
                    blogLink: '/articledetail',
                    blogImage: 'https://picsum.photos/300',
                },
                {
                    blogDay: '2',
                    blogMonth: 'декабрь',
                    blogYear: '2021',
                    blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
                    blogViews: '1.3K',
                    blogShares: '125',
                    blogHash: '#законодательство',
                    blogLink: '/articledetail',
                    blogImage: 'https://picsum.photos/300',
                },
                {
                    blogDay: '3',
                    blogMonth: 'декабрь',
                    blogYear: '2021',
                    blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
                    blogViews: '1.3K',
                    blogShares: '125',
                    blogHash: '#законодательство',
                    blogLink: '/articledetail',
                    blogImage: 'https://picsum.photos/300',
                }, 
            ],
            fetchedText: '<p>Хотите купить квартиру в Краснодаре? В базе агентства Аякс подобраны только реальные объявления. Цены от&nbsp;<b>300 000</b>&nbsp;до&nbsp;<b>60 000 000</b>&nbsp;рублей. Средняя стоимость метра&nbsp;<b>75 329</b>&nbsp;руб.&nbsp; Есть квартиры площадью до&nbsp;<b>371</b>&nbsp;м². Лучшие предложения по Краснодару с адресами, фото, планировками и ценами. <b>Гарантируем юридическую безопасность сделки</b>.</p>',
        }
    },

}

</script>

<template lang="pug">
    Layout(classes="nopadding")
        Breadcrumbs
        container
            .col
                .articledetail
                    .articledetail-img
                        img(src="https://picsum.photos/700")
                    .articledetail-title.title
                        h1 Перепланировка в новостройках:  как можно и как нельзя
                    .articledetail-box
                        .articledetail-date
                            p 04
                            p
                                span января
                                span 2021
                        .articledetail-info
                            .articledetail-hash
                                span #законодательство
                            .articleblog-view
                                span
                                    img(src="images/articleblog/eye.svg")
                                span 1.3 К
                            .articleblog-share
                                span
                                    img(src="images/articleblog/share.svg")
                                span 125
        container
            .text( v-html="fetchedText" )
        container
            .col
                ul.articleblog-list.articleblog-list--reverse
                template(v-for="(item, index) in blogItems") 
                        //- li.articleblog-item(:class=" index % 4 ? ' articleblog-item--reverse' : ''" v-if="index % 2")
                        BlogItem(classes="articleblog-subitem"  :blogData="item")
                //-     li.articleblog-item.articleblog-item--reverse
                //-             BlogItem
                //-             ul.articleblog-sublist
                //-                 BlogItem
                //-                 BlogItem
                //-                 BlogSoc
                //-    BlogFrom

</template>
