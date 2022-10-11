<script>
import Vue from 'vue'

Vue.component("modal", {
    template: ".modal",
});

export default {
    props: {
        visible: {
            type: Boolean,
            default: false,
            required: true,
            description: String,
            title: String,
        },
        title: String,
        description: String,
        modalClass: {
            type: String,
            default: ''
        },
    },

    methods: {
        closeModal () {
            this.$emit('toggleModal')
        }
   }
}
</script>

<template lang="pug">
.modal.fade#headerSubsctibe(tabindex="-1" v-if="visible"   )
    .modal-dialog(v-on:click.self="closeModal")
        .modal-content(:class='modalClass')
            .modal-header
                h5.modal-title {{ title }}
                span(v-on:click="closeModal" class="btn-close" data-modal-dismiss="headerSubsctibe" aria-label="Закрыть")
            .modal-body
                p {{ description }}
                slot
</template>
