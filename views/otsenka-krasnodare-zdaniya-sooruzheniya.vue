<script>
import container from '../components/layout/container'
import Layout from "../components/layout/layout"
import Banner from '../components/blocks/banner/banner.vue'
import Awards from '../components/blocks/awards/awards.vue'
import Profitably from '../components/blocks/profitably/profitably.vue'
import Form from '../components/blocks/form/form.vue'
import defImg from '../../assets/images/pages/rieltorskie-uslugi/realtor-service-bg.jpg'
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'
import mapContact from "../components/blocks/mapContact/mapContact2.vue"


export default {
    name: 'App',
    components: {
        Banner,
        container,
        Awards,
        Form,
        Profitably,
        Layout,
        Breadcrumbs,
        mapContact
    },
    props: {
        title: String,

    },
    data() {
        return {
            bannerItems: [
                {
                    src: defImg,
                    imgTitle: '',
                    title: 'Здания и сооружения',
                    text: 'Узнать цену недвижимости — легко!',
                    btnName: 'Подать заявку'
                }
            ],
            awardsItems: [
                {
                    name: 'Встроенные помещения площадью от 100 до 300 кв. м',
                    description: 'от 10 000 до 20 000 рублей'
                },
                {
                    name: 'Встроенные помещения площадью от 300 до 500 кв. м',
                    description: 'от 20 000 до 30 000 рублей'
                },
                {
                    name: 'Встроенные помещения площадью от 500 до 1 000 кв. м',
                    description: 'от 30 000 до 35 000 рублей'
                },
                {
                    name: 'Отдельно стоящие здания на з/у площадью от 100 до 300 кв. м',
                    description: 'от 15 000 до 25 000 рублей'
                },
                {
                    name: 'Отдельно стоящие здания на з/у площадью от 300 до 500 кв. м	',
                    description: 'от 25 000 до 35 000 рублей'
                },
                {
                    name: 'Отдельно стоящие здания на з/у площадью от 500 до 1 000 кв. м	',
                    description: 'от 35 000 до 40 000 рублей'
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
            fetchedText: '<div class="seo-text" style="max-width: 900px; margin: 0 auto;"><p>Оценку здания в Краснодаре мы проведем очень качественно: у нас в портфеле уже десятки крупных кейсов. Наш отдел работал со строителями инфраструктурных, коммерческих, <a title="Продажа офисов в Краснодаре и крае" href="/ofisy/">офисных объектов</a>. Оценка зданий и сооружений требует обширных компетенций от специалистов, потому нам так важно регулярно повышать уровень квалификации персонала.</p><p>Имея на руках сертификаты и дипломы различных профучреждений, наши оценщики могут иметь дело с заказами повышенной сложности: например, когда требуется оценить массив жилых зданий, физический износ, уточнить корректную стоимость логистических комплексов или мощных заводов. У нас есть решения на все случаи жизни!</p></div>',
            bannerBtns: [
                {
                    path: '#',
                    title: 'Подать заявку',
                    class: 'js-scroll-form'
                },
                {
                    path: '#',
                    title: 'Видео-консультация'
                }
            ],
            breadcrumbs: [
                {
                    name: 'Оценка',
                    path: '/otsenka-krasnodare'
                }
            ]

        }
    }
}
</script>

<template lang="pug">
        Layout
            Breadcrumbs(title="Здания и сооружения"  :links="breadcrumbs")
            Banner(src='/images/otsenkakrasnodare-zdaniyasooruzheniya.jpg' title='Здания и сооружения' bannerBlur text="Узнать цену недвижимости — легко!" :bannerBtns="bannerBtns")
            container
                .title
                    h2 Оценка зданий и сооружений в Краснодаре
                .text( v-html="fetchedText" )
            Awards( :awardsItems="awardsItems" subtitle="Оценка коммерческих и промышленных зданий; помещений; комплексов зданий, расположенных по одному адресу:")
            container
                .col
                    a(href="/test.pdf" download target="_blank" class="btn-download btn btn-default")
                        span Скачать прайс-лист
                        span (PDF 0.07 Мб)
                    .text
                        p
            container
                .big-form.scroll-block
                    Form(:inputs="inputs" :checkboxes="checkboxes" title="Отправьте заявку прямо сейчас" subtitle="Заполните форму, и наш сотрудник свяжется с Вами в ближайшее время.")
            mapContact(hideTime2 title="Мы находимся по адресу" place="ул. Рашпилевская, 179/1, 8 этаж, офис 802" tel="+7 988 461-15-51"  place2="ул. Советов, 42, 2 этаж, офис 219" tel2One="+7 (8617) 30-10-51" tel2Two="+7 918 971-81-66")
</template>
