<script>
import container from '../../layout/container.vue'

export default {
    props: {
        textItems: Array
    },
    components: {
        container
    }
}
</script>


<template lang="pug">
    container
        .row
            .col
                .text
                    p(v-for="item in textItems") {{ item.text }}
</template>

