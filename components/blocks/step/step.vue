<script>
import container from '../../layout/container.vue'

export default {
    props: {
      title: String,
      stepItem: Array,
    },
    components: {
        container
    }
}
</script>
<template lang="pug">
    container(extraClass="section_step step")
        .row
            .col
                .step-title.title
                    h2 {{ title || "Как мы работаем?" }}
        .row
            .col
                ul.step-list
                    li.step-item(v-for="(item, index) in stepItem")
                        template(v-if="index % 2 === 0")
                            .step-box
                                .step-top
                                    .step-number
                                        span {{ item.name }}
                                    .step-icon
                                        img( :src="item.src", alt="")
                                .step-bottom(v-html="item.text")
                        template(v-else)
                            .step-box
                                .step-top
                                    .step-icon
                                        img( :src="item.src", alt="")
                                    .step-number
                                        span {{ item.name }}
                                .step-bottom(v-html="item.text")
</template>
