<script>
import Vue from 'vue'
import StarRating from 'vue-star-rating'
// register modal component
Vue.component("Input", {
    template: ".form-input",
});

export default {
    components: {
        StarRating
    },
    props: {
        inputType: {
            type: String,
            default: 'text'
        },
        inputName: {
            type: String,
            default: 'someName',
            required: true
        },
        inputTitle: {
            type: String,
            default: '',
            required: true
        },
        inputRequired: {
            type: Boolean,
            default: false,
        },
        inputTextarea: {
            type: Boolean,
            default: false,
        },
        rating: {
            type: Boolean,
            default: false,
        },
    },

    data() {
        return {
            hasValue: false,
            activeInput: false,
            classes: 'form-input',
            selectedRating: 0
            // [this.inputName]: ''
            // errors: [],
            // name: null,
            // email: null,
            // phone: null,
            // password: null,
        }
    },

    methods: {
        changeValHandler (e) {
            this.hasValue = e.target.value
        },

        hasValueHandler: function() {
            if(this.hasValue) {
                this.activeInput = true
            } else {
                this.activeInput = false
            }
        },
         ratingChanged(num) {
            this.selectedRating = num
            // console.log(num)
        }
        // sendVal (e) {
        //     this.$emit('getVal', {
        //         [this.inputName]: e.target.value
        //     })
        // }
    },
    // methods: {
    // checkForm: function (e) {
    //   this.errors = [];

    //   if (!this.name && inputRequired) {
    //     this.errors.push('Укажите ' + inputTitle + '.');
    //   }
    //   if (!this.password && inputRequired) {
    //     this.errors.push('Укажите пароль.');
    //   }
    //   if (this.email && inputRequired) {
    //       if (!this.email) {
    //         this.errors.push('Укажите электронную почту.');
    //       } else if (!this.validEmail(this.email)) {
    //         this.errors.push('Укажите корректный адрес электронной почты.');
    //       }
    //   }
    //   if (this.phone && inputRequired) {
    //       if (!this.phone) {
    //         this.errors.push('Укажите номер телефона.');
    //       } else if (!this.validPhone(this.phone)) {
    //         this.errors.push('Укажите корректный номер телефона.');
    //       }
    //   }

    //   if (!this.errors.length) {
    //     return true;
    //   }

    //   e.preventDefault();
    // },
    // validEmail: function (email) {
    //   var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //   return re.test(email);
    // },
    // validPhone: function (phone) {
    //   var re = /^\+?[0-9]{3}-?([0-9]{7}|[0-9]-[0-9]{2}-[0-9]{2}-[0-9]{2}|[0-9]{3}-[0-9]{2}-[0-9]-[0-9])$/;
    //   return re.test(phone);
    // }
    // }
    mounted() {
        if(this.inputTextarea) {
            this.classes += ' form-textarea'
        }
        if(this.rating) {
            this.classes = 'form-rating'
        }
    }
}


</script>
<template lang="pug">
div(:class="classes")
    label(v-if="!rating")
        template(v-if="!inputTextarea")
            //- ValidationProvider(:name="inputName" :rules="inputRequired ? 'required': ''" v-slot="{ errors }")
            //- input(:type="inputType" :name="inputName" v-model="[this.inputName]" v-on:blur="hasValueHandler" v-on:change="changeValHandler")
            input(:type="inputType" :name="inputName" v-on:blur="hasValueHandler" v-on:change="changeValHandler" :required="inputRequired  ? true: false")
                //- span {{ errors[0] }}
        template(v-else)
            textarea(:name="inputName" v-on:blur="hasValueHandler" v-on:change="changeValHandler")
        span(:class="activeInput ? 'active' : ''") {{inputTitle}}
            template(v-if="inputRequired")
                .required *
    template(v-else)
        span {{inputTitle}}
            template(v-if="inputRequired")
                .required *
        //- template(v-for="(item, i) in 5" )
            //- ratingC(:value="index" :active="selectedRating >= 5 ? 'active': ''")
            //- .rating-item( :key="i")
                input(type="radio" :value="+(5 - i)" :name="inputName" v-on:change="ratingChanged(i+1)")
                span(:class="selectedRating <= i+1 ? 'active': ''")
            v-model="rating"
        <star-rating   :star-size="24" border-color="#3187c4" :border-width="1" inactive-color="#fff" active-color="#3187c4" :show-rating="false"></star-rating>


</template>
