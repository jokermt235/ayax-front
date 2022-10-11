

<script>
import container from '../../layout/container.vue'

export default {
    props: {
      title: String,
      partnersItems: Array
    },
    components: {
        container,
    },
    data() {
        return {
            visible: []
        }
    },
    methods: {
        toggleVisibility(index) {
            if(this.visible[index]) { 
                Vue.set(this.visible, index, false)
            } else {
                Vue.set(this.visible, index, true) 
            } 
        }
    },
    mounted() {
        // this.visible = this.partnersItems.map((i, index) => this.visible[index] = false)
    }
}
</script>


<template lang="pug">
    container
        .partners
            .row
                .col
                    .partners-title.title
                        h2 {{ title || 'Наши партнеры '}}
            .row(v-for="(partner, i) in partnersItems")
                .col
                    .partners-subtitle(@click="toggleVisibility(i)")
                        span.partners-subtitle--toggle(:class="visible[i] ? '' : 'active'") 
                        span {{ partner.title  }} 
                        span &nbsp;({{ partnersItems.length + 1  }})
                    ul.partners-list(v-if="!visible[i] ") 
                        li.partners-item(v-for="(item, index) in partner.items" :key="index" )
                            .partners-img
                                img( :src="item.img", :alt="item.name")
                            .partners-info
                                .partners-name {{ item.name }}
                                a( :href="item.href").partners-tel  {{ item.tel }}
                                .partners-place {{ item.place }}
                                .partners-speacial {{ item.speacial }}
                            .partners-sale
                                span {{ item.sale }}
                                span скидка
</template>

