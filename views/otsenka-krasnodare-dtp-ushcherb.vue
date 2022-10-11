<script>
import container from '../components/layout/container'
import Layout from "../components/layout/layout"
import Banner from '../components/blocks/banner/banner.vue'
import Profitably from '../components/blocks/profitably/profitably.vue'
import Form from '../components/blocks/form/form.vue'
import defImg from '../../assets/images/pages/rieltorskie-uslugi/realtor-service-bg.jpg'
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'
import mapContactTwo from "../components/blocks/mapContact/mapContact2.vue"


export default {
    name: 'App',
    components: {
        Banner,
        container,
        Form,
        Profitably,
        Layout,
        Breadcrumbs,
        mapContactTwo
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
                    title: 'Земельные участки',
                    text: 'Актуальная стоимость вашего участка',
                    btnName: 'Подать заявку'
                }
            ],
            awardsItems: [
                {
                    name: 'Земли населенных пунктов коммерческого назначения, участок до 0,1 га	',
                    description: 'от 6 000 до 8 000 рублей'
                },
                {
                    name: 'Земли населенных пунктов, 1 участок более 5 га',
                    description: 'от 35 000 рублей'
                },
                {
                    name: 'Земли населенных пунктов, 1 участок до 0,1 га',
                    description: 'от 4 500 до 5 000 рублей'
                },
                {
                    name: 'Земли населенных пунктов, 1 участок от 0,1 га до 0,8 га',
                    description: 'от 8 000 до 15 000 рублей'
                },
                {
                    name: 'Земли населенных пунктов, 1 участок от 0,8 до 5 га',
                    description: 'от 15 000 до 30 000 рублей'
                },
                {
                    name: 'Земли сельскохозяйственного назначения, 1 участок',
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
            fetchedText: '<div class="seo-text" style="max-width: 900px; margin: 0 auto;"><p>Наши сотрудники проведут оценку ущерба в Краснодаре для любого типа имущества. Мы оперативно выясним, какая сумма понадобится для восстановления авто, пострадавшего при ДТП, подсчитаем убытки владельцев недвижимости при пожарах или затоплениях и так далее. Качественное "расследование" оценщиков особенно выгодно, когда вы нанесли кому-то ущерб: это даст возможность избежать лишних расходов, переплат.</p><p>Популярнейший запрос в этой части – независимая оценка после ДТП в Краснодаре. Тут много рисков; например, высока вероятность недополучить средства от страховщиков. Достоверные сведения о состоянии ТС и корректные подсчеты позволят минимизировать спорные моменты между участниками процесса.</p><p>Вам потребуется следующий перечень:</p><ul><li>паспорт;</li><li>ПТС;</li><li>свидетельство о государственной регистрации ТС;</li><li>справка о ДТП.</li></ul><p>Второй по числу обращений к нам – запрос на оценку помещения после затопления в Краснодаре. Это происходит с сотнями жильцов многоквартирных домов ежедневно. Ну и в бизнес-центрах подобные случаи нередки.</p><p>Что необходимо при проведении <a title="Независимая оценка недвижимости в Краснодаре в &quot;АЯКС&quot;" href="/otsenka-krasnodare/">оценки недвижимости в Краснодаре</a>:</p><ul><li>паспорт;</li><li>правоустанавливающие документы;</li><li>техническая документация;</li><li>акт об ущербе.</li></ul><p>Если хотите гарантированно покрыть причиненный вам ущерб на 100% либо, чтобы вы заплатили адекватную сумму сами, обязательно обращайтесь к оценщикам. "АЯКС" — лучший партнер, звоните!</p></div>',
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
            Breadcrumbs(title="Ущерб при ДТП, затоплениях и т.п."  :links="breadcrumbs")
            Banner(src='/images/otsenkakrasnodare-dtpushcherb.jpg' title='Ущерб при ДТП, затоплениях и т.п.' bannerBlur text="Оценить размер нанесенного ущерба" :bannerBtns="bannerBtns")
            container
                .title
                    h2 Оценка ущерба в Краснодаре
                .text( v-html="fetchedText" )
            container
                .big-form
                    Form(:inputs="inputs" :checkboxes="checkboxes" title="Отправьте заявку прямо сейчас" subtitle="Заполните форму, и наш сотрудник свяжется с Вами в ближайшее время.")
            mapContactTwo(hideTime2 title="Мы находимся по адресу" place="ул. Рашпилевская, 179/1, 8 этаж, офис 802" tel="+7 988 461-15-51"  place2="ул. Советов, 42, 2 этаж, офис 219" tel2One="+7 (8617) 30-10-51" tel2Two="+7 918 971-81-66")
</template>
