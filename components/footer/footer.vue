<script>
import Menu from './menu/index'
import ModalCall from '../modal/modalCall.vue'

export default {
    components: {
        Menu,
        ModalCall
    },
    data: function(){
        return{
            callShow: false,
            menu: [
                {
                    name: 'Каталог квартир',
                    link: '#',
                },
                {
                    name: 'Новостройки',
                    link: '#',
                },
                {
                    name: 'Дома и домовладения',
                    link: '#',
                },
                {
                    name: 'Земельные участки',
                    link: '#',
                },
                {
                    name: 'Коммерция',
                    link: '#',
                },
                {
                    name: 'Аренда',
                    link: '#',
                },
            ],
            menu2: [
                {
                    name: 'Ипотечный центр',
                    link: '#',
                },
                {
                    name: 'Онлайн калькулятор',
                    link: '#',
                },
                {
                    name: 'Юридические услуги',
                    link: '#',
                },
                {
                    name: 'Риэлторские услуги',
                    link: '#',
                },
                {
                    name: 'Оценка недвижимости',
                    link: '#',
                },
                {
                    name: 'Программа лояльности',
                    link: '#',
                },
            ],
            menu3: [
                {
                    name: 'Карта Краснодара',
                    link: '#',
                },
                {
                    name: 'Вопрос-ответ',
                    link: '#',
                },
                {
                    name: 'Отзывы',
                    link: '#',
                },
                {
                    name: 'Сертификаты',
                    link: '#',
                },
                {
                    name: 'Политика конфиденциальности',
                    link: '#',
                },
                {
                    name: 'Региональное партнерство',
                    link: '#',
                }

            ]
        }
    },
    methods: {
        onCall: function () {
            this.callShow = !this.callShow;
        }
    }
}
</script>


<template lang="pug">

footer.footer
    .container.p-mob-10
        .footer-main
            .footer-main__left
                .footer-logo
                    a(href="/").logo
                        img(src="/images/ayax/ayax-logo.svg", alt="АЯКС")
                .footer-social
                    a(href="").footer-social--link.footer-social--fb
                        <svg>
                            <use xlink:href="/images/svg/footer/symbols.svg#svg-fb"></use>
                        </svg>
                    a(href="").footer-social--link.footer-social--vk
                        <svg>
                            <use xlink:href="/images/svg/footer/symbols.svg#svg-vk"></use>
                        </svg>
                    a(href="").footer-social--link.footer-social--inst
                        <svg>
                            <use xlink:href="/images/svg/footer/symbols.svg#svg-inst"></use>
                        </svg>
                    a(href="").footer-social--link.footer-social--odn
                        <svg>
                            <use xlink:href="/images/svg/footer/symbols.svg#svg-odn"></use>
                        </svg>
                    a(href="").footer-social--link.footer-social--youtube
                        <svg>
                            <use xlink:href="/images/svg/footer/symbols.svg#svg-youtube"></use>
                        </svg>
            .footer-main__right
                .footer-callback(type="button" data-bs-toggle="modal" data-bs-target="#headerSubsctibe" v-on:click="onCall")
                    span Заказать звонок
                a(href="tel:+78002345842").footer-tel
                    span 8 800 23 45 842
                    span Бесплатный звонок по РФ
        .footer-box
            Menu(:items="menu")
            Menu(:items="menu2")
            Menu(:items="menu3")
        .footer-info
            .footer-info--left
                .footer-reserved
                    span Вся информация, опубликованная на сайте, носит только информационный характер и не является публичной офертой, определяемой положениями ст. 437 ГК РФ. Все права защищены. При копировании материалов с сайта гиперссылка обязательна.
                .footer-search
                    form(action="/search" method="post").flex
                        input(type="text" placeholder="Введите запрос")
                        button
                            <i class="my-icon icon-arr-btn"></i>
            .footer-info--right
                .footer-copy
                    p © {{ new Date().getFullYear() }} ООО "АЯКС", 350020, Краснодар, ул. Рашпилевская, 179/1, 7 этаж, тел.: +7 (861) 297-00-00. Для регионов РФ 8 800 234-58-42
                .footer-map
                    a(href="/karta-sayta") Карта сайта
    ModalCall(:callShow="callShow" @toggleModalCall="onCall" title="Обратный звонок с сайта")
    .overlay_menu
</template>
