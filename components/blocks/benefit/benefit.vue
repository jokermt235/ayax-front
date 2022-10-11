<script>
import container from '../../layout/container.vue'
import benefitCard from '../internal-card/internal-card'


export default {
    props: {
      title: String,
      benefitItems: Array,
    },
    data(){
        return{
            internalCardItems: [
                {
                    name: 'Ольга Владимировна Шмакова',
                    post: 'Начальник ипотечного центра',
                    tel: '+7 918 197-01-97',
                    src: '/images/pages/ipoteka-krasnodare/internal-card-chel.png'
                }

            ]
        }
    },
    components: {
        container,
        benefitCard
    }
}
</script>
<template lang="pug">
    container
        .row
            .col
                .internal-benefit
                    benefitCard( :internalCardItems="internalCardItems")
                    .internal-benefit--info
                        .internal-benefit--title.title
                            h3 Что получает клиент ипотечного центра?
                        ul.internal-benefit--list
                            li.internal-benefit--item(v-for="(item,index) in benefitItems")
                                .internal-benefit--number {{ index + 1 }}
                                .internal-benefit--text {{ item.text }}

</template>
