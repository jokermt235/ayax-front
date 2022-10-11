<script>
import container from '../../layout/container.vue'

export default {
    props: {
        title: String,
        text: String,
        name: String,
        docLink: String,
        btnName: String,
        addClass: {
            type: String,
            default: ''
        },
    },
    components: {
        container
    }
}
</script>
<template lang="pug">
container(extraClass="documents" extraClassRow="row-cols-1")
    .col
        .documents-title.title
            h3 {{ title || 'Документы'}}
    .col
        .documents-text {{ text || 'При подборе жилья и последующем просмотре подходящих вариантов необходимо заключить договор со специалистом. Ниже представлен образец для ознакомления.'}}
    .col
        .documents-info(:class="addClass") {{ name || 'Договор о возмездном оказании консультационных и маркетинговых услуг при поиске для приобретения объекта недвижимости'}}
    .col
        a(:href="docLink" target="_blank" v-html="btnName || 'Подробнее' " class="documents-btn btn btn-default")
</template>
