<script>
import container from '../../layout/container.vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'  


export default {
    components: {
        container,
        swiper,
        swiperSlide
    },
    props: {
      title: String,
      serviceAgencyItems: Array,
      tabsProfit: Array,
    },
    data(){
        return{
            isMob: false, 
            sliderOptions: {
                slidesPerView: 1.1, 
                spaceBetween: 10,
                pagination: {
                    el: '#paginationProfi',
                    type: 'bullets',
                    clickable: true
                },
            },
            tabActive: 0,
            tabsServiceMain: [
               {
                    serviceTab: [
                        {
                            id: 1,
                            name: 'Экономия денег',
                            text: 'При сделках на первичном рынке, на ипотеке'

                        },
                        {
                            id: 2,
                            name: 'Приходите на встречу',
                            text: 'Наш агент встретит вас с готовой аналитикой в одном из 25 офисов и поможет составить индивидуальный план покупки'
                        },
                        {
                            id: 3,
                            name: 'Наймите эксперта',
                            text: 'Заключите соглашение о сотрудничестве. Услуги оплачиваются только по факту сделки'
                        },
                        {
                            id: 4,
                            name: 'Выбор лучших предложений',
                            text: 'В нашей базе 25 000 объектов, в том числе неопубликованные горящие предложения. Мы подберем для вас оптимальные варианты и поможем с ипотекой, рассрочкой, сертификатами и пр.'
                        },
                        {
                            id: 5,
                            name: 'Выбрали объект? Едем смотреть',
                            text: 'Мы разработаем для вас индивидуальный график просмотра объектов недвижимости'

                        },
                        {
                            id: 6,
                            name: 'Понравилось - поможем договориться',
                            text: 'Согласовываем условия, сроки и стоимость сделки с продавцом. Наши услуги оплачиваются только по факту сделки.'
                        },
                        {
                            id: 7,
                            name: 'Оформляем документы',
                            text: 'После полной юридической проверки вы заключаете с продавцом предварительный договор и вносите ему задаток за объект'
                        },
                        {
                            id: 8,
                            name: 'Сделка',
                            text: 'Заключается основной договор и производится полная оплата. Вы получаете документы и становитесь полноправным собственником'
                        }
                    ],
               },
               {
                    serviceTab: [
                                                {
                            id: 1,
                            name: 'Экономия денег',
                            text: 'При сделках на первичном рынке, на ипотеке'

                        },
                        {
                            id: 2,
                            name: 'Приходите на встречу',
                            text: 'Наш агент встретит вас с готовой аналитикой в одном из 25 офисов и поможет составить индивидуальный план продажи'
                        },
                        {
                            id: 3,
                            name: 'Наймите эксперта',
                            text: 'Заключите соглашение о сотрудничестве и оплатите услуги только по факту выполненной работы'
                        },
                        {
                            id: 4,
                            name: 'Предпродажная подготовка',
                            text: 'Мы обеспечим профессиональную фотосъемку, премиальное продвижение* вашего объекта недвижимости на 48 рекламных площадках партнеров и в результате приведем больше покупателей'
                        },
                        {
                            id: 5,
                            name: 'Презентация потенциальным покупателям',
                            text: 'Обеспечим безопасный показ объекта по согласованному с вами графику. Ваш персональный агент будет предоставлять вам полную информацию о ходе продажи'

                        },
                        {
                            id: 6,
                            name: 'Есть покупатель – поможем договориться',
                            text: 'Согласовываем условия, сроки и стоимость сделки'
                        },
                        {
                            id: 7,
                            name: 'Получите задаток',
                            text: 'Вы заключаете с покупателем предварительный договор и получаете задаток за объект    '
                        },
                        {
                            id: 8,
                            name: 'Сделка',
                            text: 'Заключается основной договор и производится расчет'
                        }
                    ],
               }
            ],
        }
    },

    methods: {
        changeTabService: function(index) {
            this.tabActive = index
        }
    },
    mounted() {
        if($(window).width() < 992) {
            this.isMob = true;
        } 
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
}
</script>
<template lang="pug">
    container(extraClass="section_padding")
        .service-agency
            .row
                .col
                    .service-agency--title.title_m
                        h2 {{ title || 'Купить дом просто'}}
            .row
                .col
                    template(v-if="tabsProfit")
                        .consultation-tab
                            ul.consultation-tab--list
                                template(v-for="(item, index) in tabsProfit")
                                    li.consultation-tab--name(@click="changeTabService(index)" :class="index === tabActive ? 'active' : '' ") {{ item }}
            template(v-for="(item, index) in tabsServiceMain")
                .row.row-cols-3.gy-4(:data-tab-service="index" :class="index === tabActive ? 'active' : '' " v-if="index === tabActive" :serviceId="index")
                    template(v-if="isMob") 
                        swiper(:options="sliderOptions" )
                            swiper-slide.slider-fast-item(v-for="(info, index) in item.serviceTab"  :key="info.id") 
                                div(class="col-12 col-sm-12 col-xl-4" )
                                    .profitably-box
                                        .profitably-number {{ index + 1}}
                                        .profitably-info
                                            .profitably-name(v-if="info.name")
                                                p {{ info.name }}
                                            .profitably-text
                                                p {{ info.text }}
                        .swiper-pagination.swiper-pag-mob#paginationProfi
                    template(v-else) 
                        .col-12(v-for="(info, index) in item.serviceTab" class="col-sm-6 col-md-2 col-md-3")
                            .profitably-box
                                .profitably-number {{ index + 1}}
                                .profitably-info
                                    .profitably-name(v-if="info.name")
                                        p {{ info.name }}
                                    .profitably-text
                                        p {{ info.text }}

</template>


