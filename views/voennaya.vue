<script>
import container from '../components/layout/container'
import Layout from "../components/layout/layout"
import Banner from '../components/blocks/banner/bannerBox.vue'
import Awards from '../components/blocks/awards/awards.vue'
import Profitably from '../components/blocks/profitably/profitably.vue'
import Form from '../components/blocks/form/form.vue'


export default {
    name: 'App',
    components: {
        Banner,
        container,
        Awards,
        Layout,
        Form,
        Profitably
    },
    props: {
        title: String,

    },
    data() {
        return {
            bannerItems: [
                {
                    src: 'images/voennaya.jpg',
                    imgTitle: '',
                    title: 'Ипотека для военных',
                    text: 'Лучшие условия для военных'
                }
            ],
            awardsItems: [
                {
                    name: 'Покупка жилой недвижимости (на вторичном рынке)',
                    description: '3% от итоговой стоимости объекта, но не менее 100 тыс.руб.'
                },
                {
                    name: 'Покупка объектов от застройщика',
                    description: 'без комиссии'
                },
                {
                    name: 'Покупка коммерческой недвижимости',
                    description: '0% (бесплатно) при выборе эксклюзивного объекта, 3% от стоимости при выборе обычного объекта'
                },
                {
                    name: 'Покупка коммерческой недвижимости',
                    description: '6% от стоимости объекта'
                },
            ],
            inputs: [

                {
                    name: 'email',
                    title: 'Email',
                    type: 'email',
                    required: true
                },
                {
                    name: 'phone',
                    title: 'Телефон',
                    type: 'number',
                    required: true
                },
                {
                    name: 'name',
                    title: 'Контакное лицо',
                    required: true
                },
                {
                    name: 'usertext',
                    title: 'Дополнительная информация',
                    inputTextarea: true
                },
            ],
            checkboxes: [
                {
                    name: 'agree',
                    title: 'Даю согласие на обработку персональных данных в соответствии с ',
                    link: 'some.com',
                    linkText: 'обработку персональных данных',
                }
            ],
            fetchedText: '<p>Покупка или продажа недвижимого имущества – важный шаг. Далеко не каждый владеет необходимыми знаниями, чтобы проверить юридическую безопасность, осуществить сделку на выгодных условиях. Для этого нужен тот, кто уже зарекомендовал себя среди риэлторов, а главное провел тысячи сложнейших переговоров.</p><p>«АЯКС» предоставляет риэлторские услуги по поиску, купле-продаже <a href="#">домов</a> и <a href="#">квартир</a>, обмену, аренде жилой, коммерческой недвижимости, земельных участков. Наша база содержит более 20 000 предложений для Краснодарского края.</p><h2>Тестовый заголовок</h2><ul><li><em>поможем определиться с&nbsp;жильём, подберем как на первичном, так и на вторичном рынках;</em></li><li><em>полную проверку с юридической точки зрения;</em></li><li><em>сопровождение сделки купли-продажи;</em></li><li><em>помощь в получении ипотечных займов под низкий процент;</em></li><li><em>риэлторские услуги без комиссионных сборов (если купить новостройку).</em></li></ul><p><h2>Тестовый заголовок</h2></p><ol><li><ins>поможем определиться с&nbsp;жильём, подберем как на первичном, так и на вторичном рынках;</ins></li><li><strong>полную проверку с юридической точки зрения;</strong></li><li><del>сопровождение сделки купли-продажи;</del></li><li>помощь в получении ипотечных займов под низкий процент;</li><li>риэлторские услуги без комиссионных сборов (если купить новостройку).</li></ol>',


        }
    }
}
</script>

<template lang="pug">
    Layout
        Banner( :bannerItems="bannerItems")
        container
            .text( v-html="fetchedText" )
        Awards( :awardsItems="awardsItems")
        container
            .big-form
                Form(:inputs="inputs" :checkboxes="checkboxes")
</template>
