<script>
import container from '../../layout/container.vue'


export default {
    props: {
      title: String,
      formSection: Array

    },
    data(){
        return{

        }
    },
    components: {
        container,

    }
}
</script>
<template lang="pug">
    container
        .col-12
            .banner-form(v-for="item in formSection")
                .banner-form--title
                    h3 {{ item.title }}
                .banner-form--text
                    p {{ item.text }}
                form.form(action="")
                    .form-box
                        .form-input 
                            label
                                input(type="text" name="name")
                                span Имя
                                    .required *
                        .form-input
                            label
                                input(type="text" name="phone")
                                span Телефон
                                    .required *
                        .form-submit.btn-default
                            input(type="submit" value="Забронировать")
                    //- .form-info
                        p
                            .required *
                            |  Обязательные поля
                    .form-checkbox
                        label
                            .checkbox
                                input(type="checkbox")
                                span
                            span.checkbox-text Даю согласие на обработку персональных данных в соответствии с
                                a(href="#") политикой конфиденциальности
</template>


