<script>
import Input from '../form/input/input.vue'
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
Vue.component("v-select", vSelect);

export default {
    components: {
        Input,
    },
    props: {
        input: Object,
        selects: Array,
        selected: String,
    },
    data() {
        return {
            selectType: null
        }
    },
    mounted(){
        // if(this.selects) {

        // if(typeof this.selects[0] === 'object') {
        //     this.selectType = 'object'
        // } else {
        //     this.selectType = 'string'
        // }

        // console.log(this.selectType, this.selects)
        // }
    }
}


</script>

<template lang="pug">
form.form-banner-select.flex(action="")
    v-select(:options="selects" v-model="selected" :clearable="false")
    Input(  :inputName="input.name"
            :inputTitle="input.title"
            :inputRequired="input.required")
    .form-submit.btn-default
        input(type="submit" value="Искать")

</template>
