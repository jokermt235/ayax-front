<script>
import Banner from '../components/blocks/banner/banner.vue'
import container from '../components/layout/container.vue'
import Layout from "../components/layout/layout";
import Awards from '../components/blocks/awards/awards.vue'
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'
import Consultation from '../components/blocks/consultation/consultation.vue'
import mapContact from "../components/blocks/mapContact/mapContact.vue"
import benefitCard from '../components/blocks/internal-card/internal-card'
import Profitably from '../components/blocks/profitably/profitably.vue'
import InternalNav from '../components/blocks/internal-nav/internal-nav'


export default {
  name: 'App',
  components: {
    Layout,
    Breadcrumbs,
    Consultation,
    Banner,
    InternalNav,
    benefitCard,
    Profitably,
    container,
    Awards,
    mapContact
  },
  data() {
        return {
            pdfLink: '#',
            bannerBtns: [
                {
                    path: '#',
                    title: 'Подать заявку',
                    class: 'js-scroll-form'
                }
            ],
            internalNavItems: [
                {
                    name: 'Сотрудники',
                    link: '/yuristy-nedvizhimosti'
                },
                {
                    name: 'Новости',
                    link: '/yuristy-novosti'
                },
            ],
            profitablyItem: [
                {
                    text: 'Бесплатную консультацию! Всю информацию об условиях ипотеки и подробности расчетов;'
                },
                {
                    text: 'Бесплатную консультацию! Всю информацию об условиях ипотеки и подробности расчетов;'
                },
                {
                    text: 'Бесплатную консультацию! Всю информацию об условиях ипотеки и подробности расчетов;'
                },
                {
                    text: 'Бесплатную консультацию! Всю информацию об условиях ипотеки и подробности расчетов;'
                },
                {
                    text: 'Бесплатную консультацию! Всю информацию об условиях ипотеки и подробности расчетов;'
                },
                {
                    text: 'Бесплатную консультацию! Всю информацию об условиях ипотеки и подробности расчетов;'
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
            awardsItems: [
                {
                    name: 'Подготовка договора аренды/коммерческого найма, 1 объект',
                    description: 'от 3 000 рублей'
                },
                {
                    name: 'Подготовка документов для подписания договора купли-продажи в простой письменной форме и государственной регистрации права собственности земельного участка',
                    description: 'от 20 000 рублей'
                },
                {
                    name: 'Подготовка документов для подписания договора купли-продажи квартиры, гаражного бокса',
                    description: 'от 19 000 рублей'
                },
                {
                    name: 'Юридическая помощь в урегулировании конфликтных ситуаций	',
                    description: 'от 5 000 рублей'
                },
                {
                    name: 'Юридические консультации по действующему Законодательству РФ	',
                    description: 'от 500 рублей'
                },
                {
                    name: 'Юридические консультации по текущим сделкам	',
                    description: 'бесплатно'
                },
            ],
            internalCardItems: [
                {
                    name: 'Ольга Владимировна Шмакова',
                    post: 'Начальник ипотечного центра',
                    tel: '+7 918 197-01-97',
                    src: '/images/pages/ipoteka-krasnodare/internal-card-chel.png'
                }

            ],
            fetchedText: '<div class="seo-text"><p>Юридические услуги в Краснодаре предоставляют многие фирмы, однако из специализированных выделяется юрслужба "АЯКС": у нас одна из сильнейших практик в сфере недвижимости, имущественных отношений. Уже много лет мы оказываем помощь в урегулировании жилищных вопросов.</p><p>Юридические услуги становятся более востребованными у граждан, потому что местный рынок даже в кризисное время остается очень оживленным, здесь активно покупают и продают жилую недвижимость и <a title="База коммерческой недвижимости в Краснодаре и крае" href="/kommercheskaya-nedvizhimost/">коммерческие объекты</a>.</p><p>Наши специалисты предоставляют грамотные консультации всем желающим, а также помогают получить согласования различных учреждений.</p><p>Юридические услуги в Краснодаре часто интересны и тем, кто проживает в других регионах. В таких случаях мы консультируем в сети или по телефону, с нами <strong>можно работать удаленно</strong>.</p><p>Квалифицированные юристы – на вес золота. Мы постарались собрать лучших специалистов, которые в состоянии выполнить полный спектр работ по любым имущественным спорам и представлять заказчиков в суде в самых нетривиальных ситуациях. Трудности — наш конек! В агентстве недвижимости "АЯКС" ждут вашего звонка!</p></div>',
        }
  },
    mounted(){
        this.$store.dispatch('consultypes/httpFetch');
    },
    computed : {
        tabsSlider(){
            return this.$store.getters["consultypes/slides"];
        },
    },
}
</script>

<template lang="pug">
Layout
    Breadcrumbs(title="Юридические услуги")
    Banner(title="Юридические услуги в Краснодаре" title29 src="images/yurist-bg.jpg" text="Знаем закон со всех сторон" :bannerBtns="bannerBtns" bannerBlur noMargin)

    InternalNav( :internalNavItems="internalNavItems")

    section.section
        .container
            .row
                .col
                    .internal-menu
                        a(href="/yuridicheskie-uslugi-krasnodare/pereplanirovka-kvartir").internal-menu--link
                            span
                                img(src="/images/pages/yur-service/1.png", alt="")
                            span Оформление перепланировок
                        a(href="/kadastr-geodeziya/").internal-menu--link
                            span
                                img(src="/images/pages/yur-service/2.png", alt="")
                            span Отдел кадастра и геодезии
                        a(href="/yuridicheskie-uslugi-krasnodare/predstavitelstvo-sude/").internal-menu--link
                            span
                                img(src="/images/pages/yur-service/3.png", alt="")
                            span Отдел судебной защиты
                        a(href="/yuridicheskie-uslugi-krasnodare/soprovozhdenie-sdelok/").internal-menu--link
                            span
                                img(src="/images/pages/yur-service/4.png", alt="")
                            span Сопровождение сделок
    container
        .seo-text( v-html="fetchedText" )
    section.section
        .container
            .row
                .col
                    .internal-benefit.internal-prof
                        h2.title Шесть причин работать с нами
                        benefitCard( :internalCardItems="internalCardItems" )
                        .internal-benefit--info.internal-benefit--info_number
                            .row.gy-3
                                .col-12.col-md-6
                                        .profitably-box
                                            .profitably-number 1
                                            .profitably-info
                                                .profitably-text
                                                    p Многолетний опыт на страже ваших интересов
                                .col-12.col-md-6
                                        .profitably-box
                                            .profitably-number 2
                                            .profitably-info
                                                .profitably-text
                                                    p Минимизация ваших расходов
                                .col-12.col-md-6
                                        .profitably-box
                                            .profitably-number 3
                                            .profitably-info
                                                .profitably-text
                                                    p Широкая специализация решаемых задач
                                .col-12.col-md-6
                                        .profitably-box
                                            .profitably-number 4
                                            .profitably-info
                                                .profitably-text
                                                    p Быстрые сроки и экономия ваших сил и времени
                                .col-12.col-md-6
                                        .profitably-box
                                            .profitably-number 5
                                            .profitably-info
                                                .profitably-text
                                                    p Полная конфиденциальность
                                .col-12.col-md-6
                                        .profitably-box
                                            .profitably-number 6
                                            .profitably-info
                                                .profitably-text
                                                    p Стремление уладить споры мирным путем

    Awards( :awardsItems="awardsItems" subtitle="Размер комиссионного вознаграждения за <strong>юридические услуги</strong>:" )
        .row.justify-content-center
            a(href="/test.pdf" download target="_blank").btn-default.single-btn Скачать прайс-лист (PDF 1.83 Мб)
    Consultation(:tabs="[]" :tabsSlider="tabsSlider" title="Бесплатная консультация экспертов" consultationText="Мы даем бесплатную консультацию по любому интересующему вас вопросу. Оставьте ваш контакт, мы назначим время звонка и поможем вам принять рациональное решение." consultationTitle="Получите бесплатную консультацию" scrollClass="scroll-block")
    mapContact(hideTime title="Мы находимся по адресу" place="ул. Рашпилевская, 179/1, 7 этаж" tel="+7 988 461-17-17")
</template>
