<script> 
import Modal from './modal.vue'
import Form from '../../components/blocks/form/form.vue'
 

export default { 
    props: {
        callShow: Boolean,
        title: String
    },
    components: { 
        Modal,
        Form
    }, 
    data() {
        return {
            callInputs: [
                {
                    name: 'call-name-footer',
                    title: 'Ваше имя ',
                    required: true,
                    type: 'text'
                },
                {
                    name: 'call-tel-footer',
                    title: 'Номер телефона ',
                    type: 'text',
                    required: true
                },
            ], 
            checkboxes: [
                {
                    name: 'agree-footer',
                    title: 'Даю согласие на обработку персональных данных в соответствии с ',
                    link: 'some.com',
                    linkText: 'политикой конфиденциальности',
                }

            ],
            sendCallRequest : {
                submitButtonOnClick : ()=>{
                    this.sendUserCall();
                }
            },
        }
    }, 
    methods: { 
        onCall: function () {
            // this.callShow = false;
            this.$emit('toggleModalCall')
        },
        sendUserCall: function(){
            let call = {
                agreement : document.querySelector("input[name=agree-footer]").value === 'on' ? 1 : 0 ,
                name : document.querySelector("input[name=call-name-footer]").value,
                phone : document.querySelector("input[name=call-tel-footer]").value,
                url : window.location.href
            };
            this.$store.dispatch('call/send', call);
        }
    }, 
}
 
 
</script> 

<template lang="pug">
Modal(:visible="callShow" @toggleModal="onCall" :title="title" )
    Form(:inputs="callInputs" :checkboxes="checkboxes" horizontal modal :submitButton="sendCallRequest") 
</template>