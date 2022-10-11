<script>
import Layout from "../components/layout/layout";
// import KottedzhItem from '../components/blocks/cards/KottedzItem'
import container from '../components/layout/container.vue'
import dimg from '../../assets/images/pages/kupit-zhilye/banner-form.jpg'
import BannerBox from '../components/blocks/banner/bannerBox.vue'
import Form from '../components/blocks/form/form.vue'
import mortgage from '../components/blocks/mortgage/mortgage.vue'
import formSection from '../components/blocks/formSection/formSection.vue'

export default {
  name: 'App',
  components: {
    Layout,
    BannerBox,
    // KottedzhItem,
    container,
    mortgage,
    Form,
    formSection
  },
  data() {
      return {
        dimg: dimg,
        cottage: [
            {
                photo: 'https://www.ayax.ru/upload/resize_cache/iblock/c12/379_241_2/c1268a78f95523b733938abda2bc0e07.JPG',
                title: 'Золотой город',
                commission: '0',
                path: '/kottedzhnyeposelki-detail',
                price: 'от 3,1 млн. ₽',
            },
            {
                photo: 'https://www.ayax.ru/upload/resize_cache/iblock/296/379_241_2/2964ed3c43eae6ed141d919dcd74ef94.JPG',
                title: 'Золотой город',
                commission: '0',
                path: '#',
                price: 'от 3,1 млн. ₽',
            },

        ],
        bannerItems: [
            {
                src: '/images/pages/kupit-zhilye/banner-form.jpg',
                imgTitle: '',
                title: 'Коттеджные поселки Краснодара',
                text: 'Забронируй свой дом'
            }
        ],
        inputs: [
            {
                name: 'name',
                title: 'Имя',
                required: true
            },
            {
                name: 'phone',
                title: 'Телефон',
                type: 'number',
                required: true
            },
        ],
        checkboxes: [
            {
                name: 'agree',
                title: 'Даю согласие на обработку персональных данных в соответствии с ',
                link: 'some.com',
                linkText: 'политикой конфиденциальности',
            }
        ],
        mortgageItems:[
            {
                name: 'РАССРОЧКА 0%'
            },
            {
                name: 'ИПОТЕКА ОТ 8,5%'
            },
            {
                name: 'СКИДКИ И БОНУСЫ'
            }
        ],
        formSection:[
            {
                title: 'Получите бесплатную консультацию',
                text: 'Мы даем бесплатную консультацию по любому интересующему вас вопросу. Оставьте ваш контакт, мы назначим время звонка и поможем вам принять рациональное решение.'
            }
        ],
        fetchedText: '<p> Хотите купить жильё в Краснодаре? В этом разделе&nbsp;вы можете посмотреть базу бесплатных объявлений. Перейдя в нужный подраздел, вы найдете недвижимость, которая соответствуют критериям, независимо от того, дома это или&nbsp;квартиры.</p><p> АН «АЯКС» гарантирует актуальность, юридическую чистоту выставленных объектов. Мы поможем с поиском, с проверкой документов, с совершением сделки.</p><p> В самостоятельной покупке жилья нет ничего сложного, но нужно понимать и быть готовым к рискам, которые ожидают будущего владельца на любом из этапов сделки. Решение этих задач лучше поддается риэлторам работающим уже много лет.</p>',

      }
  }
}

</script>

<template lang="pug">
Layout(classes="section_grey")
    BannerBox(:bannerItems="bannerItems" bannerClass="banner-big" breadcrumbTitle="Коттеджные поселки")
        .banner-form
            Form(:inputs="inputs" :checkboxes="checkboxes" horizontal hideRequirementMess)

    section.section.cottage
        .container
            .row
                .col
                    .cottage-mortgage__title.title_m
                        h2 Коттеджный поселок «Николино Парк»
    section.section
        .container
            .row
                .cottage-gallery
                    .cottage-gallery--img
                        img(src="https://via.placeholder.com/550" alt="")
                    .cottage-gallery--img
                        img(src="https://via.placeholder.com/550" alt="")
                    .cottage-gallery--img
                        img(src="https://via.placeholder.com/450" alt="")
                    .cottage-gallery--img
                        img(src="https://via.placeholder.com/450" alt="")
                    .cottage-gallery--img
                        img(src="https://via.placeholder.com/450" alt="")
            .row
                .cottage-text Представляем один из самых популярных жилищных проектов кубанской столицы. Коттеджный поселок «Николино Парк» Краснодар: уютная безопасная жизнь с приставкой «эко».<br>Проект досконально продуман. Все современные стандарты здесь сочетаются с принципами сохранения окружающей среды. Экологичные стройматериалы, сотни деревьев на территории, парковки, укрытые специальными газонами, упор на энергосбережение, артезианская вода – все это делает «Николино Парк» идеальным местом для проживания. Здоровье – главное. Но его легко сберечь, даже не покидая пределы мегаполиса. От КП до центра города можно добраться очень быстро.<br>На огороженной охраняемой территории строят просторные коттеджи, квартал с таунхаусами (домами на несколько семей) и обустраивают участки – выбор недвижимости в КП «Николино Парк» очень богат. Экологически чистый кирпич, качественные керамика и древесина, хорошая предчистовая отделка. Покупатели получают только лучшее.<br>Также в проекте – торговые и развлекательные объекты, аллеи для прогулок, два больших теннисных корта, детский развивающий центр. И много, много зеленых зон. Выбирайте комфорт и экологию в Краснодаре: решение очевидно!
            .row
                .col-12.col-md-6.col-lg-3
                    .cottage-features
                        .cattage-features--name от 88 м2
                        .cattage-features--number от 3 300 000 ₽
                .col-12.col-md-6.col-lg-3
                    .cottage-features
                        .cattage-features--name от 115 м2
                        .cattage-features--number от 3 900 000 ₽
                .col-12.col-md-6.col-lg-3
                    .cottage-features
                        .cattage-features--name от 146 м2
                        .cattage-features--number от 4 290 000 ₽
                .col-12.col-md-6.col-lg-3
                    .cottage-features
                        .cattage-features--name от 201 м2
                        .cattage-features--number от 7 300 000 ₽
            .row
                .cottage-map
                    .map-contact
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Af4b6e0d4e48d5b137f158f860a6f342d9412cd263267d090ee58d1e7350f569a&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
    formSection(:formSection="formSection")
</template>
