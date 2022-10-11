<template lang="pug">
.form-checkbox
    label
        .checkbox
            input(type="checkbox" :name="checkboxName" checked required)
            span
        .checkbox-text
            template {{checkboxText}}
            template(v-if="checkboxLink")
                a(:href="checkboxLink") {{checkboxLinkText}}


</template>
<script>
import Vue from 'vue'

// register modal component
Vue.component("Checkbox", {
    template: ".form-checkbox ",
});

export default {
    props: {
        checkboxName: {
            type: String,
            default: 'someName',
            required: true
        },
        checkboxText: String,
        checkboxLink: String,
        checkboxLinkText: String,
    },
}


</script>
