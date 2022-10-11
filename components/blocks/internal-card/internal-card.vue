<script> 
export default { 
    props: { 
        title: String,
        internalCardItems: Array,
    },
    data() {
        return {
            classes: ''
        }
    },
    mounted() {
        if(this.internalCardItems.length == 1) {
            this.classes = 'mt-0'
        }
    }
}
</script>

<template lang="pug">
    div
        .internal-benefit--card.internal-card(v-for="item in internalCardItems" :class="classes")
            .internal-card--img
                img( :src="item.src", alt="")
            .internal-card--info
                .internal-card--name
                    span {{ item.name }}
                .internal-card--post
                    span {{ item.post }}
                a(:href="'tel:'+item.tel").internal-card--tel {{ item.tel }}
</template>