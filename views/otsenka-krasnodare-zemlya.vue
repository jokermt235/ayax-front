<script>
import container from '../components/layout/container'
import Layout from "../components/layout/layout"
import Banner from '../components/blocks/banner/banner.vue'
import Awards from '../components/blocks/awards/awards.vue'
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
        Awards,
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
            fetchedText: '<div class="seo-text" style="max-width: 900px; margin: 0 auto;"><p><em>Оценка земли в Краснодаре</em> – важное мероприятие, поскольку, если рыночную стоимость квартир и домов легко узнать в различных каталогах и можно получить представление о каких-то среднерыночных показателях, то стоимость земли иногда отличается в разы, даже когда сравнивают в одной локации. Допустим, вы изучите самостоятельно базы объявлений, но быстро обнаружите, что усредненные цены на участки вывести трудно. И это в случае, если просто собираетесь покупать или продавать землю.</p><p>Оценить <a title="Купить земельный участок в Краснодаре по доступной цене" href="https://www.ayax.ru/kupit-zemelnyj-uchastok/">земельный участок</a> часто нужно при разделении бизнеса, судебных разбирательствах, когда нужны официальные бумаги от надежных оценщиков.</p><p>Для проведения <em>оценки земельных участков в Краснодаре</em> необходимы:</p><ul><li>правоустанавливающие и правоподтверждающие документы на оцениваемое имущество;</li><li>кадастровый паспорт земельного участка;</li><li>документ, подтверждающий отсутствие или наличие обременений (выписка ЕГРП).</li></ul><p>Звоните в наш <a title="Поможем оценить недвижимость в Краснодаре" href="/otsenka-krasnodare/">отдел оценки</a>, проконсультируем по всем вопросам!</p></div>',
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
            Breadcrumbs(title="Земельные участки"  :links="breadcrumbs")
            Banner(src='/images/otsenkakrasnodare-zemlya.jpg' title='Земельные участки' bannerBlur text="Актуальная стоимость вашего участка" :bannerBtns="bannerBtns")
            container
                .title
                    h2 Оценка земли в Краснодаре
                .text( v-html="fetchedText" )
            Awards( :awardsItems="awardsItems")
            container
                .col
                    a(href="/test.pdf" download target="_blank" class="btn-download btn btn-default")
                        span Скачать прайс-лист
                        span (PDF 0.07 Мб)
            container
                .big-form.scroll-block
                    Form(:inputs="inputs" :checkboxes="checkboxes" title="Отправьте заявку прямо сейчас" subtitle="Заполните форму, и наш сотрудник свяжется с Вами в ближайшее время.")
            mapContactTwo(hideTime2 title="Мы находимся по адресу" place="ул. Рашпилевская, 179/1, 8 этаж, офис 802" tel="+7 988 461-15-51"  place2="ул. Советов, 42, 2 этаж, офис 219" tel2One="+7 (8617) 30-10-51" tel2Two="+7 918 971-81-66")
</template>
