<script>

// import Input from '../form/input/input.vue'
// import "vue-select" from "vue-select";
// import "vue-select/dist/vue-select.css";
// Vue.component("v-select", vSelect);
// import vSelect from 'vue-select'
// import 'vue-select/dist/vue-select.css';
// import v2 from './v2.vue'


export default {
    components: {
    // vSelect
    // v2
    },
    props: {
        offices: Array,
        selects: Array,
        selected: String,
    },
    data() {
    return {
        selectType: null,
        defaultSelected: '(Все офисы)',
        result3: "",
        showSelect: false,
        office : "",
        employee : "",
        selectedAgent : '(Все агенты)',
    }
    },
    mounted(){
        document.querySelectorAll(".custom-select-item").forEach(el => el.addEventListener("click", function() {
            // console.log(el.textContent);
            document.querySelector('.custom-select__span').innerHTML = el.textContent;
        }));

    },
    methods: {
        changeReviewPerson(id) {
            $('.select-mask').val(id).trigger('change');
            console.log(id);
            let selects  = this.$props.selects;
            let element = null;
            this.employee = id;
            this.office = this.defaultSelected.id;
            for(let index in selects){
                element = selects[index].options.find(item=>item.value == id);
                if(element){
                    this.selectedAgent = element.text;
                }    
            }
        },
    },
}


</script>

<template lang="pug">
form.form-banner-select.flex.form-banner-select_reviews(action="")
    v-select(:options="offices" :clearable="false" v-model="defaultSelected")
    .custom-select__name(v-bind:class="{ active: showSelect }" v-on:click="showSelect = !showSelect")
        span.custom-select__span {{selectedAgent}}
        span.custom-select__svg
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" role="presentation" class="vs__open-indicator"><path d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"></path></svg>
        .custom-select
            <slot v-for="(item, i) in selects">
                .custom-select-group(:key="i" v-if="item.options")
                    p {{ item.label }}
                    span.custom-select-item(v-for="(subItem, i) in item.options" :key="i" :value="subItem.value" @click="changeReviewPerson(subItem.value)" ) {{ subItem.text }}
            </slot>
    input(type="hidden" name="office" v-model="defaultSelected.id")
    input(type="hidden" name="employee" v-model="employee")
    <div class="form-submit btn-default"><input type="submit" value="Искать"></div>
    //- <v2 :options="options3" v-model="selected" name="test">
    //-     <option disabled value="0">Select one</option>
    //- </v2>
</template>
