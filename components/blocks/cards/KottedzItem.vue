<template lang="pug">
.col
    a(:href="path").cottage-link
        .cottage-photo
            img(:src="photo", alt="")
        .cottage-info
            .cottage-name
                span {{ title }}
            .cottage-price
                span {{ price }}
            .cottage-commission
                span 
                span Комиссия {{ commission }}%
        span.cottage-more Подробнее
</template>
<script> 

export default {
    props: {
        photo: String,
        title: String,
        commission: String, 
        path: String,
        price: String,
    }
}
</script>
