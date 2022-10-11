<script>
import Input from './input/input.vue'
import Checkbox from './checkbox/checkbox.vue'
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";


export default {
    components: {
        Input,
        Checkbox,
    },
    props: {
        inputs: Array,
        checkboxes: Array,
        selects: Array,
        modal: Boolean,
        horizontal: Boolean,
        hideRequirementMess: Boolean,
        title: String,
        subtitle: String,
        selectPlaceholder: Array,
        subText: String,
        fileName: String,
        sendText: String,
        submitButton : Object,

    },
    data() {
        return {
            // selectTitle: null,
            selectType: null,
            inputsValues: null, 
        }
    },
    mounted(){
        Vue.component("v-select", vSelect);
        if(this.selects) {

            if(typeof this.selects[0] === 'object') {
                this.selectType = 'object'
            } else {
                this.selectType = 'string'
            }

        // console.log(this.selectType, this.selects)
        }

        // console.log(this.inputs)

        // if(this.inputs) { //создание объекта инпутов в зависимости от существующих инпутов
        //     const res = this.inputs.map((i, index) => this.inputs[index].name )
        //     this.inputsValues = res.reduce((acc,curr)=> (acc[curr]='',acc),{});

        //     console.log('this.inputsValues ' , this.inputsValues)
        // }
    },
    methods: {
        updateSelect(items, selected) {
          items.selected = selected
        },
        checkForm: function (e) {
            if (this.name && this.age) {
                return true;
            }

            this.errors = [];

            if (!this.name) {
                this.errors.push('Требуется указать имя.');
            }
            if (!this.age) {
                this.errors.push('Требуется указать возраст.');
            }

            e.preventDefault();
        },
        // send () {
        //     console.log('login ', this.inputsValues)
        //   },
        // getValue (data) {
        //     console.log('child component said login', data)
        // }
  },
}


</script>

<template lang="pug">
    .form-wrapper
        .form-title(v-if="title")
            h2 {{ title }}
        .form-subtitle(v-if="subText || subtitle")
            div(v-html="subtitle")
            div(v-html="subText")
        form.form(action="" @submit="checkForm" method="post")
            template(v-if="selects")
                template(v-if="selectType === 'string'")
                    v-select(:options="selects" :clearable="false" :placeholder="selectPlaceholder")
                template(v-if="selectType === 'object'")
                    template(v-for="(select, index) in selects")
                        template(v-if="typeof select[0] == 'string'")
                                v-select(:options="select" @input="() => updateSelect(select)" :clearable="false" :placeholder="selectPlaceholder[index]")
                        template(v-else)

                            //- v-select(:options="select" @input="() => updateSelect(select)" :clearable="false" :placeholder="selectPlaceholder[index]")
                            select.default-select
                                template(v-for="(select, index) in selects")
                                    template(v-for="group in select")
                                        optgroup(:label="group.label")
                                            template(v-for="option in group.options")
                                                option(:value="option") {{ option }}

            template(v-if="!horizontal")

                template(v-for="item in inputs")
                    Input(  :inputName="item.name"
                            :inputTitle="item.title"
                            :inputType="item.type"
                            :rating="item.rating"
                            :inputRequired="item.required"
                            :inputTextarea="item.inputTextarea")
                template(v-if="fileName")
                    .btn-download
                        div(class="btn btn-default")
                            span Загрузить резюме doc[x], txt, pdf
                            Input(  :inputName="fileName"
                                    inputTitle=""
                                    accept=".doc,.docs,.txt,.pdf"
                                    inputType="file")
                template(v-if="!hideRequirementMess")
                    .form-info
                        span.required *
                        |  Обязательные поля

                div(:class="modal ? '' : 'form-box'")
                    template(v-if="checkboxes")
                        template(v-for="item in checkboxes")
                            Checkbox(:checkboxName="item.name"
                                :checkboxText="item.title"
                                :checkboxLink="item.link"
                                :checkboxLinkText="item.linkText")
                    .form-submit(v-if="submitButton" :class="modal ? '' : 'btn-default'")
                        input(type="submit" :value="sendText || 'Отправить'" @click="submitButton.submitButtonOnClick")

            template(v-else)
                .form-box.form-box-horizontal
                    template(v-for="item in inputs")
                        Input(
                                :inputName="item.name"
                                :inputTitle="item.title"
                                :inputType="item.type"
                                :rating="item.rating"
                                :inputRequired="item.required"
                                :inputTextarea="item.inputTextarea")
                                //- :getVal = "getValue"
                    .form-submit(v-if="submitButton")
                        input(type="submit" :value="sendText || 'Отправить'" @click="submitButton.submitButtonOnClick")
                template(v-if="!hideRequirementMess")
                    .form-info
                        span.required *
                        |  Обязательные поля
                template(v-if="checkboxes")
                    template(v-for="item in checkboxes")
                        Checkbox(:checkboxName="item.name"
                            :checkboxText="item.title"
                            :checkboxLink="item.link"
                            :checkboxLinkText="item.linkText")

</template>
