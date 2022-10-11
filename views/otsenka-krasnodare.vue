<script>
import container from '../components/layout/container'
import Layout from "../components/layout/layout"
import Banner from '../components/blocks/banner/banner.vue'
import Awards from '../components/blocks/awards/awards.vue'
import Profitably from '../components/blocks/profitably/profitably.vue'
import InternalNav from '../components/blocks/internal-nav/internal-nav'
import InternalMenu from '../components/blocks/internal-menu/internal-menu'
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'
import Consultation from '../components/blocks/consultation/consultation.vue'
import mapContact from "../components/blocks/mapContact/mapContact2.vue"
import benefitCard from '../components/blocks/internal-card/internal-card'

export default {
    name: 'App',
    components: {
        Banner,
        container,
        Awards,
        Breadcrumbs,
        Layout,
        InternalNav,
        Consultation,
        Profitably,
        InternalMenu,
        mapContact,
        benefitCard

    },
    props: {
        title: String,

    },
    data() {
        return {
            awardsItems: [
                {
                    name: 'Оценка стоимости квартиры в городе',
                    description: 'от 4 000 до 5 000 рублей'
                },
                {
                    name: 'Оценка стоимости квартиры за пределами города (+ транспортные расходы 750 р. за 100 км)',
                    description: 'от 4 000 до 5 000 рублей'
                },
                {
                    name: 'Оценка стоимости жилого дома, дачи в черте города',
                    description: 'от 8 000 до 12 000 рублей'
                },
                {
                    name: 'Оценка стоимости жилого дома, дачи в пригороде и районах края',
                    description: 'от 10 000 рублей'
                },
                {
                    name: 'Оценка стоимости земельного участка (стоимость зависит от назначения участка и его площади)',
                    description: 'от 4 000 рублей'
                },
                {
                    name: 'Оценка стоимости коммерческих и промышленных зданий (стоимость зависит от суммарной общей площади строений)',
                    description: 'от 10 000 рублей'
                },
                {
                    name: 'Оценка стоимости транспортных средств',
                    description: '2500-3000 рублей'
                },
                {
                    name: 'Оценка стоимости естественных (природных) водоемов',
                    description: '20 000 рублей'
                },
            ],
            fetchedText: '<div class="seo-text"><p>Грамотная оценка недвижимости в Краснодаре — комплексный, сложный сервис, который на должном уровне оказывают только крупные специализированные организации. Компетенции оценщиков включают юридические и финансовые аспекты, многие в этой сфере имеют экономическое образование.</p><p>В отделе оценки агентства недвижимости "АЯКС" трудятся дипломированные и сертифицированные профи, которые проводят высококачественную оценку недвижимости в Краснодаре и Краснодарском крае. Работники подразделения проведут экспертизу, помогут определить корректную стоимость вашего имущества и бизнеса, проанализируют активы и дадут советы по их продаже или, наоборот, приобретению.</p><p>Документы, которые выдаются нашим клиентам, юридически "удостоверяют" <a title="Купить квартиру в Краснодаре по доступной цене" href="/kvartiry/">стоимость квартиры</a> и других объектов, а также предприятий; их принимают в работу банках, судах, в ФНС и пр. На оценку недвижимости в Краснодаре цены вполне демократичные: чтобы получить заключение для оформления ипотеки, достаточно пяти тысяч рублей.</p></div>',
            textAbout: '<p>Если вам требуется оценочная компания в Краснодаре, наиболее логичный выбор — "АЯКС". У нас широкий профиль и сертифицированные специалисты высокой квалификации.</p><p>Мы обеспечиваем качественную оценку жилья, участков, оборудования, бизнеса, транспорта... Проще перечислить виды имущества, которые мы НЕ оцениваем, чем наоборот. Еще отдел оценки участвует в делах, где нужно определить ущерб, нанесенный тому или иному объекту или предмету, а также помогает улаживать споры, связанные с кадастровой ценой недвижимости. Интересное направление нашей деятельности — финансовая аналитика. Наши эксперты проводят квалифицированный финанализ предприятий любого масштаба.</p><p>Благодаря такой разноплановости наша оценочная компания заслужила репутацию универсального помощника, который не просто оказывает конкретные услуги, но и способен предложить комплексное решение для любых клиентов.</p>',
            internalNavItems: [
                {
                    name: 'Сотрудники',
                    link: '/otsenka-krasnodare/spetsialisty/'
                }, 
                {
                    name: 'Новости',
                    link: '/otsenkakrasnodarenovosti'
                },
                {
                    name: 'Онлайн оценка',
                    link: '/onlinerating'
                },
            ],
            internalMenuItems: [
                {
                    name: 'Квартиры и комнаты',
                    src: '/images/pages/otsenka/1.png',
                    link: '/otsenka-krasnodare/kvartiry-komnaty/'
                },
                {
                    name: 'Дома (коттеджи, таунхаусы, дачи)',
                    src: '/images/pages/otsenka/7.png',
                    link: '/otsenka-krasnodare/doma/'
                },
                {
                    name: 'Земельные участки',
                    src: '/images/pages/otsenka/2.png',
                    link: '/otsenka-krasnodare/zemlya/'
                },
                {
                    name: 'Ущерб при ДТП, затоплениях и т.п.',
                    src: '/images/pages/otsenka/8.png',
                    link: '/otsenka-krasnodare/dtp-ushcherb/'
                },
                {
                    name: 'Автотранспорт',
                    src: '/images/pages/otsenka/3.png',
                        link: 'otsenka-krasnodare/avtomobili/'
                },
                {
                    name: 'Бизнес',
                    src: '/images/pages/otsenka/9.png',
                    link: '/otsenka-krasnodare/biznes/'
                },
                {
                    name: 'Здания и сооружения',
                    src: '/images/pages/otsenka/4.png',
                    link: '/otsenka-krasnodare/zdaniya-sooruzheniya/'
                },
                {
                    name: 'Машины и оборудование',
                    src: '/images/pages/otsenka/10.png',
                    link: '/otsenka-krasnodare/oborudovanie-mashiny/'
                },
                {
                    name: 'Оспаривание стоимости участков ',
                    src: '/images/pages/otsenka/5.png',
                    link: '/otsenka-krasnodare/osparivanie-stoimosti-uchastkov/'
                },
                {
                    name: 'Судебная строит.-техн. экспертиза',
                    src: '/images/pages/otsenka/11.png',
                    link: '/otsenka-krasnodare/sudebnaya-ekspertiza/'
                },
                {
                    name: 'Переоценка основных фондов',
                    src: '/images/pages/otsenka/6.png',
                    link: '/otsenka-krasnodare/pereotsenka-osnovnyh-sredstv/'
                },
                {
                    name: 'Финансовый анализ предприятий',
                    src: '/images/pages/otsenka/12.png',
                    link: 'otsenka-krasnodare/finansovyi-analiz/'
                },

            ],
            profitablyItem: [
                {
                    number: '1',
                    text: 'Сомневаетесь, стоит ли продавать жилье или коммерцию'

                },
                {
                    number: '2',
                    text: 'Необходимо корректно оценить состояние объекта'
                },
                {
                    number: '3',
                    text: 'Кадастровая стоимость дома кажется вам некорректной'
                },
                {
                    number: '4',
                    text: 'Надо оценить ущерб, нанесенный имуществу в разных обстоятельствах'
                }
            ],
            benefitItems: [
                {
                    number: '1',
                    text: 'Бесплатную консультацию! Всю информацию об условиях ипотеки и подробности расчетов;'
                },
                {
                    number: '2',
                    text: 'Бесплатную консультацию! Всю информацию об условиях ипотеки и подробности расчетов;'
                },
                {
                    number: '3',
                    text: 'Бесплатную консультацию! Всю информацию об условиях ипотеки и подробности расчетов;'
                },
                {
                    number: '4',
                    text: 'Бесплатную консультацию! Всю информацию об условиях ипотеки и подробности расчетов;'
                },
                {
                    number: '5',
                    text: 'Бесплатную консультацию! Всю информацию об условиях ипотеки и подробности расчетов;'
                },
                {
                    number: '6',
                    text: 'Бесплатную консультацию! Всю информацию об условиях ипотеки и подробности расчетов;'
                }
            ],
            pdfLink: '#somefile',
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
            internalCardItems: [
                {
                    name: 'Ольга Владимировна Шмакова',
                    post: 'Начальник ипотечного центра',
                    tel: '+7 918 197-01-97',
                    src: '/images/pages/ipoteka-krasnodare/internal-card-chel.png'
                }

            ]

        }
    },
    mounted(){
        this.$store.dispatch('consultypes/httpFetch');
    },
    computed : {
        tabsSlider(){
            return this.$store.getters["consultypes/slides"];
        },
    }
}
</script>

<template lang="pug">
Layout
    Breadcrumbs(title="Оценка")
    Banner(src="/images/otsenka-bg.jpg" title="Оценка имущества" title29 imgAlt="Оценка имущества" :bannerBtns="bannerBtns" bannerBlur noMargin)
    InternalNav( :internalNavItems="internalNavItems" marginBottom="30")
    InternalMenu(title="Оценка недвижимости в Краснодаре" :internalMenuItems="internalMenuItems")
    container
        .text( v-html="fetchedText" )
    Profitably(:profitablyItem="profitablyItem" title="Звоните или пишите нам, если" small)
    container
        .row
            .col
                .title
                    h3 Об отделе оценки "АЯКС"
                .internal-benefit
                    benefitCard( :internalCardItems="internalCardItems")
                    .internal-benefit--info
                        //- .internal-benefit--title.title
                        .text.text-small( v-html="textAbout" )
    Awards( :awardsItems="awardsItems" subtitle=" Размер комиссионного вознаграждения за <strong>оценочные услуги</strong>:")
        .row.justify-content-center
            a(href="/test.pdf" download target="_blank").btn-default.single-btn Скачать прайс-лист (PDF 1.83 Мб)
    Consultation(:tabs="[]" :tabsSlider="tabsSlider" title="Бесплатная консультация экспертов" consultationText="Мы даем бесплатную консультацию по любому интересующему вас вопросу. Оставьте ваш контакт, мы назначим время звонка и поможем вам принять рациональное решение." consultationTitle="Получите бесплатную консультацию" scrollClass="scroll-block")
    mapContact(hideTime2 title="Мы находимся по адресу" place="ул. Рашпилевская, 179/1, 8 этаж, офис 802" tel="+7 988 461-15-51"  place2="ул. Советов, 42, 2 этаж, офис 219" tel2One="+7 (8617) 30-10-51" tel2Two="+7 918 971-81-66")
</template>
