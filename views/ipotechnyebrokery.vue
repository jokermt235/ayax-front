<script>
import Layout from "../components/layout/layout";
import container from '../components/layout/container'
import InternalNav from '../components/blocks/internal-nav/internal-nav'
import InternalCard from '../components/blocks/internal-brokery/internal-brokery.vue'
import Reviews from '../components/blocks/reviews/reviews.vue'
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'
import mapContact from "../components/blocks/mapContact/mapContact.vue"


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
        methods: {
                // goToFunction : function(n)
                // {
                //     console.log(n);
                // },
                // goToFuncWithData : function(n, data)
                // {
                //     console.log(n, data);
                // },
                // goToFuncWithMultipleData : function(n, data)
                // {
                //     console.log(n, data[0], data[1]);
                // },

            } ,
    data() {
        return {
            // exampleItems,
            // pageOfItems: [],
            internalNavItems: [
                {
                    name: 'Сотрудники',
                    link: '/ipotechnyebrokery'
                },
                {
                    name: 'Акции',
                    link: '/ipotaktsii'
                },
                {
                    name: 'Новости',
                    link: '/news'
                },
            ],
            internalBrokery:[
                {
                    src: '/images/pages/ipoteka-krasnodare/internal-card-chel.png',
                    name: 'Ольга Владимировна Шмакова',
                    post: 'Начальник ипотечного центра',
                    tel: '+7 918 197-01-97',
                },
                {
                    src: '/images/pages/ipoteka-krasnodare/internal-card-chel.png',
                    name: 'Ольга Владимировна Шмакова',
                    post: 'Начальник ипотечного центра',
                    tel: '+7 918 197-01-97',
                },
                {
                    src: '/images/pages/ipoteka-krasnodare/internal-card-chel.png',
                    name: 'Ольга Владимировна Шмакова',
                    post: 'Начальник ипотечного центра',
                    tel: '+7 918 197-01-97',
                },
                {
                    src: '/images/pages/ipoteka-krasnodare/internal-card-chel.png',
                    name: 'Ольга Владимировна Шмакова',
                    post: 'Начальник ипотечного центра',
                    tel: '+7 918 197-01-97',
                },
                {
                    src: '/images/pages/ipoteka-krasnodare/internal-card-chel.png',
                    name: 'Ольга Владимировна Шмакова',
                    post: 'Начальник ипотечного центра',
                    tel: '+7 918 197-01-97',
                },
                {
                    src: '/images/pages/ipoteka-krasnodare/internal-card-chel.png',
                    name: 'Ольга Владимировна Шмакова',
                    post: 'Начальник ипотечного центра',
                    tel: '+7 918 197-01-97',
                },
                {
                    src: '/images/pages/ipoteka-krasnodare/internal-card-chel.png',
                    name: 'Ольга Владимировна Шмакова',
                    post: 'Начальник ипотечного центра',
                    tel: '+7 918 197-01-97',
                }
            ],
            reviewsItem:[
                {
                    day: '18',
                    month: 'Октябрь',
                    title: 'Отзыв об Ольге Макагон',
                    text: 'Спасибо Татьянкиной Ольге, за очень хороший результат-куплен объект, который я и планировала купить. Ипотеку одобрили на хороших условиях-я довольна! Спасибо и всему ипотечному центру компании АЯКС за компетентных и оперативных сотрудников!',
                    name: 'Алексей'
                },
                {
                    day: '18',
                    month: 'Октябрь',
                    title: 'Отзыв об Ольге Макагон',
                    text: 'Спасибо Татьянкиной Ольге, за очень хороший результат-куплен объект, который я и планировала купить. Ипотеку одобрили на хороших условиях-я довольна! Спасибо и всему ипотечному центру компании АЯКС за компетентных и оперативных сотрудников!',
                    name: 'Алексей'
                },
                {
                    day: '18',
                    month: 'Октябрь',
                    title: 'Отзыв об Ольге Макагон',
                    text: 'Спасибо Татьянкиной Ольге, за очень хороший результат-куплен объект, который я и планировала купить. Ипотеку одобрили на хороших условиях-я довольна! Спасибо и всему ипотечному центру компании АЯКС за компетентных и оперативных сотрудников!',
                    name: 'Алексей'
                },
                {
                    day: '18',
                    month: 'Октябрь',
                    title: 'Отзыв об Ольге Макагон',
                    text: 'Спасибо Татьянкиной Ольге, за очень хороший результат-куплен объект, который я и планировала купить. Ипотеку одобрили на хороших условиях-я довольна! Спасибо и всему ипотечному центру компании АЯКС за компетентных и оперативных сотрудников!',
                    name: 'Алексей'
                },
                {
                    day: '18',
                    month: 'Октябрь',
                    title: 'Отзыв об Ольге Макагон',
                    text: 'Спасибо Татьянкиной Ольге, за очень хороший результат-куплен объект, который я и планировала купить. Ипотеку одобрили на хороших условиях-я довольна! Спасибо и всему ипотечному центру компании АЯКС за компетентных и оперативных сотрудников!',
                    name: 'Алексей'
                },
                                {
                    day: '18',
                    month: 'Октябрь',
                    title: 'Отзыв об Ольге Макагон',
                    text: 'Спасибо Татьянкиной Ольге, за очень хороший результат-куплен объект, который я и планировала купить. Ипотеку одобрили на хороших условиях-я довольна! Спасибо и всему ипотечному центру компании АЯКС за компетентных и оперативных сотрудников!',
                    name: 'Алексей'
                },
                {
                    day: '18',
                    month: 'Октябрь',
                    title: 'Отзыв об Ольге Макагон',
                    text: 'Спасибо Татьянкиной Ольге, за очень хороший результат-куплен объект, который я и планировала купить. Ипотеку одобрили на хороших условиях-я довольна! Спасибо и всему ипотечному центру компании АЯКС за компетентных и оперативных сотрудников!',
                    name: 'Алексей'
                },
                {
                    day: '18',
                    month: 'Октябрь',
                    title: 'Отзыв об Ольге Макагон',
                    text: 'Спасибо Татьянкиной Ольге, за очень хороший результат-куплен объект, который я и планировала купить. Ипотеку одобрили на хороших условиях-я довольна! Спасибо и всему ипотечному центру компании АЯКС за компетентных и оперативных сотрудников!',
                    name: 'Алексей'
                },
                {
                    day: '18',
                    month: 'Октябрь',
                    title: 'Отзыв об Ольге Макагон',
                    text: 'Спасибо Татьянкиной Ольге, за очень хороший результат-куплен объект, который я и планировала купить. Ипотеку одобрили на хороших условиях-я довольна! Спасибо и всему ипотечному центру компании АЯКС за компетентных и оперативных сотрудников!',
                    name: 'Алексей'
                },
                {
                    day: '18',
                    month: 'Октябрь',
                    title: 'Отзыв об Ольге Макагон',
                    text: 'Спасибо Татьянкиной Ольге, за очень хороший результат-куплен объект, который я и планировала купить. Ипотеку одобрили на хороших условиях-я довольна! Спасибо и всему ипотечному центру компании АЯКС за компетентных и оперативных сотрудников!',
                    name: 'Алексей'
                },
                                {
                    day: '18',
                    month: 'Октябрь',
                    title: 'Отзыв об Ольге Макагон',
                    text: 'Спасибо Татьянкиной Ольге, за очень хороший результат-куплен объект, который я и планировала купить. Ипотеку одобрили на хороших условиях-я довольна! Спасибо и всему ипотечному центру компании АЯКС за компетентных и оперативных сотрудников!',
                    name: 'Алексей'
                },
                {
                    day: '18',
                    month: 'Октябрь',
                    title: 'Отзыв об Ольге Макагон',
                    text: 'Спасибо Татьянкиной Ольге, за очень хороший результат-куплен объект, который я и планировала купить. Ипотеку одобрили на хороших условиях-я довольна! Спасибо и всему ипотечному центру компании АЯКС за компетентных и оперативных сотрудников!',
                    name: 'Алексей'
                },
                {
                    day: '18',
                    month: 'Октябрь',
                    title: 'Отзыв об Ольге Макагон',
                    text: 'Спасибо Татьянкиной Ольге, за очень хороший результат-куплен объект, который я и планировала купить. Ипотеку одобрили на хороших условиях-я довольна! Спасибо и всему ипотечному центру компании АЯКС за компетентных и оперативных сотрудников!',
                    name: 'Алексей'
                },
                {
                    day: '18',
                    month: 'Октябрь',
                    title: 'Отзыв об Ольге Макагон',
                    text: 'Спасибо Татьянкиной Ольге, за очень хороший результат-куплен объект, который я и планировала купить. Ипотеку одобрили на хороших условиях-я довольна! Спасибо и всему ипотечному центру компании АЯКС за компетентных и оперативных сотрудников!',
                    name: 'Алексей'
                },
                {
                    day: '18',
                    month: 'Октябрь',
                    title: 'Отзыв об Ольге Макагон',
                    text: 'Спасибо Татьянкиной Ольге, за очень хороший результат-куплен объект, который я и планировала купить. Ипотеку одобрили на хороших условиях-я довольна! Спасибо и всему ипотечному центру компании АЯКС за компетентных и оперативных сотрудников!',
                    name: 'Алексей'
                },
                                {
                    day: '18',
                    month: 'Октябрь',
                    title: 'Отзыв об Ольге Макагон',
                    text: 'Спасибо Татьянкиной Ольге, за очень хороший результат-куплен объект, который я и планировала купить. Ипотеку одобрили на хороших условиях-я довольна! Спасибо и всему ипотечному центру компании АЯКС за компетентных и оперативных сотрудников!',
                    name: 'Алексей'
                },
                {
                    day: '18',
                    month: 'Октябрь',
                    title: 'Отзыв об Ольге Макагон',
                    text: 'Спасибо Татьянкиной Ольге, за очень хороший результат-куплен объект, который я и планировала купить. Ипотеку одобрили на хороших условиях-я довольна! Спасибо и всему ипотечному центру компании АЯКС за компетентных и оперативных сотрудников!',
                    name: 'Алексей'
                },
                {
                    day: '18',
                    month: 'Октябрь',
                    title: 'Отзыв об Ольге Макагон',
                    text: 'Спасибо Татьянкиной Ольге, за очень хороший результат-куплен объект, который я и планировала купить. Ипотеку одобрили на хороших условиях-я довольна! Спасибо и всему ипотечному центру компании АЯКС за компетентных и оперативных сотрудников!',
                    name: 'Алексей'
                },
                {
                    day: '18',
                    month: 'Октябрь',
                    title: 'Отзыв об Ольге Макагон',
                    text: 'Спасибо Татьянкиной Ольге, за очень хороший результат-куплен объект, который я и планировала купить. Ипотеку одобрили на хороших условиях-я довольна! Спасибо и всему ипотечному центру компании АЯКС за компетентных и оперативных сотрудников!',
                    name: 'Алексей'
                },
                {
                    day: '18',
                    month: 'Октябрь',
                    title: 'Отзыв об Ольге Макагон',
                    text: 'Спасибо Татьянкиной Ольге, за очень хороший результат-куплен объект, который я и планировала купить. Ипотеку одобрили на хороших условиях-я довольна! Спасибо и всему ипотечному центру компании АЯКС за компетентных и оперативных сотрудников!',
                    name: 'Алексей'
                },
                                {
                    day: '18',
                    month: 'Октябрь',
                    title: 'Отзыв об Ольге Макагон',
                    text: 'Спасибо Татьянкиной Ольге, за очень хороший результат-куплен объект, который я и планировала купить. Ипотеку одобрили на хороших условиях-я довольна! Спасибо и всему ипотечному центру компании АЯКС за компетентных и оперативных сотрудников!',
                    name: 'Алексей'
                },
                {
                    day: '18',
                    month: 'Октябрь',
                    title: 'Отзыв об Ольге Макагон',
                    text: 'Спасибо Татьянкиной Ольге, за очень хороший результат-куплен объект, который я и планировала купить. Ипотеку одобрили на хороших условиях-я довольна! Спасибо и всему ипотечному центру компании АЯКС за компетентных и оперативных сотрудников!',
                    name: 'Алексей'
                },
                {
                    day: '18',
                    month: 'Октябрь',
                    title: 'Отзыв об Ольге Макагон',
                    text: 'Спасибо Татьянкиной Ольге, за очень хороший результат-куплен объект, который я и планировала купить. Ипотеку одобрили на хороших условиях-я довольна! Спасибо и всему ипотечному центру компании АЯКС за компетентных и оперативных сотрудников!',
                    name: 'Алексей'
                },
                {
                    day: '18',
                    month: 'Октябрь',
                    title: 'Отзыв об Ольге Макагон',
                    text: 'Спасибо Татьянкиной Ольге, за очень хороший результат-куплен объект, который я и планировала купить. Ипотеку одобрили на хороших условиях-я довольна! Спасибо и всему ипотечному центру компании АЯКС за компетентных и оперативных сотрудников!',
                    name: 'Алексей'
                },
                {
                    day: '18',
                    month: 'Октябрь',
                    title: 'Отзыв об Ольге Макагон',
                    text: 'Спасибо Татьянкиной Ольге, за очень хороший результат-куплен объект, который я и планировала купить. Ипотеку одобрили на хороших условиях-я довольна! Спасибо и всему ипотечному центру компании АЯКС за компетентных и оперативных сотрудников!',
                    name: 'Алексей'
                },
                                {
                    day: '18',
                    month: 'Октябрь',
                    title: 'Отзыв об Ольге Макагон',
                    text: 'Спасибо Татьянкиной Ольге, за очень хороший результат-куплен объект, который я и планировала купить. Ипотеку одобрили на хороших условиях-я довольна! Спасибо и всему ипотечному центру компании АЯКС за компетентных и оперативных сотрудников!',
                    name: 'Алексей'
                },
                {
                    day: '18',
                    month: 'Октябрь',
                    title: 'Отзыв об Ольге Макагон',
                    text: 'Спасибо Татьянкиной Ольге, за очень хороший результат-куплен объект, который я и планировала купить. Ипотеку одобрили на хороших условиях-я довольна! Спасибо и всему ипотечному центру компании АЯКС за компетентных и оперативных сотрудников!',
                    name: 'Алексей'
                },
                {
                    day: '18',
                    month: 'Октябрь',
                    title: 'Отзыв об Ольге Макагон',
                    text: 'Спасибо Татьянкиной Ольге, за очень хороший результат-куплен объект, который я и планировала купить. Ипотеку одобрили на хороших условиях-я довольна! Спасибо и всему ипотечному центру компании АЯКС за компетентных и оперативных сотрудников!',
                    name: 'Алексей'
                },
                {
                    day: '18',
                    month: 'Октябрь',
                    title: 'Отзыв об Ольге Макагон',
                    text: 'Спасибо Татьянкиной Ольге, за очень хороший результат-куплен объект, который я и планировала купить. Ипотеку одобрили на хороших условиях-я довольна! Спасибо и всему ипотечному центру компании АЯКС за компетентных и оперативных сотрудников!',
                    name: 'Алексей'
                },
                {
                    day: '18',
                    month: 'Октябрь',
                    title: 'Отзыв об Ольге Макагон',
                    text: 'Спасибо Татьянкиной Ольге, за очень хороший результат-куплен объект, который я и планировала купить. Ипотеку одобрили на хороших условиях-я довольна! Спасибо и всему ипотечному центру компании АЯКС за компетентных и оперативных сотрудников!',
                    name: 'Алексей'
                },
                                {
                    day: '18',
                    month: 'Октябрь',
                    title: 'Отзыв об Ольге Макагон',
                    text: 'Спасибо Татьянкиной Ольге, за очень хороший результат-куплен объект, который я и планировала купить. Ипотеку одобрили на хороших условиях-я довольна! Спасибо и всему ипотечному центру компании АЯКС за компетентных и оперативных сотрудников!',
                    name: 'Алексей'
                },
                {
                    day: '18',
                    month: 'Октябрь',
                    title: 'Отзыв об Ольге Макагон',
                    text: 'Спасибо Татьянкиной Ольге, за очень хороший результат-куплен объект, который я и планировала купить. Ипотеку одобрили на хороших условиях-я довольна! Спасибо и всему ипотечному центру компании АЯКС за компетентных и оперативных сотрудников!',
                    name: 'Алексей'
                },
                {
                    day: '18',
                    month: 'Октябрь',
                    title: 'Отзыв об Ольге Макагон',
                    text: 'Спасибо Татьянкиной Ольге, за очень хороший результат-куплен объект, который я и планировала купить. Ипотеку одобрили на хороших условиях-я довольна! Спасибо и всему ипотечному центру компании АЯКС за компетентных и оперативных сотрудников!',
                    name: 'Алексей'
                },
                {
                    day: '18',
                    month: 'Октябрь',
                    title: 'Отзыв об Ольге Макагон',
                    text: 'Спасибо Татьянкиной Ольге, за очень хороший результат-куплен объект, который я и планировала купить. Ипотеку одобрили на хороших условиях-я довольна! Спасибо и всему ипотечному центру компании АЯКС за компетентных и оперативных сотрудников!',
                    name: 'Алексей'
                },
                {
                    day: '18',
                    month: 'Октябрь',
                    title: 'Отзыв об Ольге Макагон',
                    text: 'Спасибо Татьянкиной Ольге, за очень хороший результат-куплен объект, который я и планировала купить. Ипотеку одобрили на хороших условиях-я довольна! Спасибо и всему ипотечному центру компании АЯКС за компетентных и оперативных сотрудников!',
                    name: 'Алексей'
                },

            ],
            breadcrumbs: [
                {
                    name: 'Сопровождение ипотеки',
                    path: '/ipotekakrasnodare'
                }
            ]

        }
    },

}
</script>

<template lang="pug">
Layout
    Breadcrumbs(title="Новости" :links="breadcrumbs")
    InternalNav( :internalNavItems="internalNavItems" marginBottom='64')
    InternalCard(:internalBrokery="internalBrokery")
    container
        Reviews(:reviewsItem="reviewsItem")

    mapContact
</template>
