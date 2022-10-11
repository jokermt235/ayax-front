<script>
const customLabels = {
    first: '',
    last: '',
    previous: '<',
    next: '>'
};

export default {
    props: {
        title: String,
        reviewsItem: Array,
        reviewTitle: String,
        reviewClasses: String,
    },
     data() {
        return { 
            pageOfItems: this.reviewsItem,
            customLabels,
            classes: 'row row-cols-1 row-cols-md-3 gy-5 ' + (this.reviewClasses || 'row-cols-lg-4')
        };
    },
    methods: {
        onChangePage(pageOfItems) {
            // update page of items
            this.pageOfItems = pageOfItems;
        }
    }
}
</script>

<template lang="pug">
    .container
        .reviews
            .row
                .col
                    .reviews-title.title
                        h2 {{ reviewTitle || "Отзывы наших клиентов" }}
            div(:class="classes")
                .col(v-for=" (item, index) in pageOfItems ")
                    .reviews-card
                        .reviews-card--info
                            .reviews-card--date
                                span {{ item.day }}
                                span {{ item.month }}
                            .reviews-card--name  {{ item.title }}
                        .reviews-card--text
                            p {{ item.text }}
                            p {{ item.name }}
        jw-pagination(:items="reviewsItem" @changePage="onChangePage" :labels="customLabels" :pageSize="6")
</template> 
