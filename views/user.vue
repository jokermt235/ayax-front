<script>
import container from '../components/layout/container'
import Layout from "../components/layout/layout"
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'
import ProductCard from '../components/blocks/product-card/product-card'

export default {
    name: 'App',
    components: {
        Breadcrumbs,
        container,
        ProductCard,
        Layout,
    },
    props: {
        title: String,

    },
    data() {
        return {
            posts:[

            ]
        }
    },
    async mounted() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await res.json();
        this.posts = posts;
    }
}
</script>

<template lang="pug">
    Layout
        Breadcrumbs(title="Сравнение")
        container
            .post(v-for=" post in posts" :key="post.id"  )
                h2 {{ post.title }}
                p {{ post.body }}
        container
            .title
                h2 Настройки профиля
            .comparison
                .comparison-left
                    .comparison-nav
                        a(href="").comparison-link Избранное
                        .comparison-number 2
                    .comparison-nav
                        a(href="").comparison-link Сравнение
                        .comparison-number 2
                    .comparison-nav
                        a(href="").comparison-link Фильтры
                        .comparison-number 2
                .comparison-right
                    .user-form
                        .user-input
                            label
                                .user-input--name
                                    span Email:
                                .user-input--field
                                    input
                        .user-input
                            label
                                .user-input--name
                                    span Фамилия:
                                .user-input--field
                                    input
                        .user-input
                            label
                                .user-input--name
                                    span Имя:
                                .user-input--field
                                    input
                        .user-input
                            label
                                .user-input--name
                                    span Отчетсво:
                                .user-input--field
                                    input
                        .user-input
                            label
                                .user-input--name
                                    span Телефон
                                .user-input--field
                                    input
                        .user-input
                            label
                                .user-input--name
                                    span Новый пароль
                                .user-input--field
                                    input
                    .user-btn.btn-default
                        button Сохранить
</template>
