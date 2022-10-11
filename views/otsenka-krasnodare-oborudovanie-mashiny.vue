<script>
import container from '../components/layout/container'
import Layout from "../components/layout/layout"
import Banner from '../components/blocks/banner/banner.vue'
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
                    title: 'Машины и оборудование',
                    text: 'Оцениваем технику: легко и просто!',
                    btnName: 'Подать заявку'
                }
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
            fetchedText: '<div class="seo-text" style="max-width: 900px; margin: 0 auto;"><p>Оценка оборудования в Краснодаре весьма востребована среди представителей предпринимательского сообщества и у частных лиц. Некоторым нужно определить стоимость машины, технического состояния транспортного средства или какой-либо техники. Кто-то проводит внутренний аудит бизнеса и потому делает оценку стоимости машин и всего оборудования. Наши сотрудники занимаются не только <a title="Экспертная оценка недвижимости в &quot;АЯКС&quot;" href="/otsenka-krasnodare/">оценкой недвижимости</a>, но даже и бытовых приборов: у них богатый опыт.</p><p>Для проведения оценки машин и оборудования в Краснодаре необходимы:</p><ul><li>документация на оцениваемые объекты, включая договоры покупки или поставки, товарные накладные, соответствующие счета на оплату или чеки;</li><li>наименование каждого объекта;</li><li>указание страны и фирмы-производителя, марки, модели и серии, а также года выпуска;</li><li>перечень базовых технических характеристик, в том числе производительность, мощность, вес, размеры, пробег или грузоподъемность (в соответствии с техническими документами);</li><li>пометка о степени интенсивности эксплуатации и текущего состояния;</li><li>сведения об инвентарном номере, полной или остаточной балансовой стоимости оборудования на последнюю отчетную дату, в случае если объект находится в собственности юридического лица;</li><li>карточка учета юрлица.</li></ul></div>',
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
            Breadcrumbs(title="Машины и оборудование"  :links="breadcrumbs")
            Banner(src='/images/otsenkakrasnodare-oborudovaniemashiny.jpg' title='Машины и оборудование' bannerBlur text="Оцениваем технику: легко и просто!" :bannerBtns="bannerBtns")
            container
                .title
                    h2 Оценка машин и оборудования в Краснодаре
                .text( v-html="fetchedText" )
            container
                .big-form.scroll-block
                    Form(:inputs="inputs" :checkboxes="checkboxes" title="Отправьте заявку прямо сейчас" subtitle="Заполните форму, и наш сотрудник свяжется с Вами в ближайшее время.")
            mapContact(hideTime2 title="Мы находимся по адресу" place="ул. Рашпилевская, 179/1, 8 этаж, офис 802" tel="+7 988 461-15-51"  place2="ул. Советов, 42, 2 этаж, офис 219" tel2One="+7 (8617) 30-10-51" tel2Two="+7 918 971-81-66")
</template>
