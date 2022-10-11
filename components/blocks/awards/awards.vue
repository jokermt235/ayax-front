<script>
import container from '../../layout/container.vue'

export default {
  props: {
      title: String,
      subtitle: String,
      awardsItems: Array
  },
  components: {
    container
  }
}
</script>
<template lang="pug">
container(extraClass="awards" extraClassRow="flex-column")
    .col
        .awards-title.title
            h3 {{ title || 'Стоимость услуг'}}
    .col(v-if="subtitle")
        .awards-subtitle
            p(v-html="subtitle")
    .col
        ul.awards-list
            li.awards-item(v-for="item in awardsItems")
                span.awards-name {{item.name}}
                span.awards-price {{item.description}}
    slot
</template>
