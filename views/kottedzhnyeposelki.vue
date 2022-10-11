<script>
import Layout from "../components/layout/layout";
import KottedzhItem from '../components/blocks/cards/KottedzItem'
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
    KottedzhItem,
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
                name: 'РАССРОЧКА 0%',
                link: 'ipoteka-krasnodare/'
            },
            {
                name: 'ИПОТЕКА ОТ 8,5%',
                link: 'ipoteka-krasnodare/'
            },
            {
                name: 'СКИДКИ И БОНУСЫ',
                link: 'programma-loyalnosti/'
            }
        ],
        formSection:[
            {
                title: 'Получите бесплатную консультацию',
                text: 'Мы даем бесплатную консультацию по любому интересующему вас вопросу. Оставьте ваш контакт, мы назначим время звонка и поможем вам принять рациональное решение.'
            }
        ],
        fetchedText: '<p style="text-align: justify;">Строительный рынок Юга растет с каждым годом, наращивая темпы развития, и одним из направлений является строительство современных коттеджных поселков.Своего рода, это настоящие архитектурные проекты в едином выдержанном стиле, спроектированные таким образом, что в них комфортно не только отдыхать, приезжая в отпуск, но и проживать круглый год.</p><p style="text-align: justify;">Если вы заняты поиском жилья и приоритетом является именно такой вариант недвижимости, мы предлагаем ознакомиться с популярными поселками данного типа.</p><p style="text-align: justify;">Все коттеджные поселки Краснодара и пригорода, выставленные на сайте сервиса недвижимости «АЯКС», имеют максимум полезной &nbsp;информации: о территории и улицах, продаваемых домах и ценах, указаны фото и схемы проездов. Со всем этим можно ознакомиться, перейдя на страницу выбранного поселка.</p><h2>Чем привлекательны коттеджные поселки в Краснодаре?</h2><p style="text-align: justify;">В первую очередь, это недвижимость на Юге России, что предполагает теплый и умеренный климат, который способствует комфортному круглогодичному проживанию. К тому же цены на коттеджные поселки Краснодара достаточно конкурентоспособные и одни из низких по ЮФО.</p><p style="text-align: justify;">Во вторых, это не просто поселение на пустом заброшенном месте. Это полноценный район, имеющий все необходимые коммуникации: свет, газ, электричество, водоснабжение и канализацию.</p><p style="text-align: justify;">В третьих, коттеджный поселок, это не только улицы и дома. Это развитая сеть инфраструктурных объектов, которые позволяют социально адаптироваться и неиспытывать какого-либо дискомфорта. Непосредственно в поселках или в шаговой доступности от них есть и школы и дет. сады, магазины и отделения банков и т.д.</p><p style="text-align: justify;">Помимо всего этого, у многих поселков, коттеджи в которых продает «АЯКС», закрытая территория с охраной, что повышает уровень безопасности жильцов. Это тоже немаловажно учитывать при выборе жилья.</p><p>Итак подобьем, так чем же привлекательны коттеджные поселки в городе Краснодар:</p><ul><li>современное проектирование; </li><li>наличие всех необходимых для проживания коммуникаций; </li><li>экологически чистые районы расположения поселков; </li><li>доступность социально значимых объектов; </li><li>повышенный уровень безопасности; </li><li>южный климат. </li></ul><h2>Как в агентстве недвижимости «АЯКС» осуществляется продажа домов в коттеджных поселках?</h2><p style="text-align: justify;">Все очень просто. Вы можете просмотреть всю информацию о интересующем Вас поселке как на сайте, так и приехав в любой удобный для Вас офис нашей компании. Специалисты ответят на интересующие вопросы и дадут профессиональную консультацию, связанную с желанием купить дом в коттеджном поселке.</p><p style="text-align: justify;">Какой бы вариант вы не выбрали, мы гарантируем, что все объекты, выставленные &nbsp;на продажу на ayax.ru, юридически чистые и сделка будет проведена в соответствии с законодательством РФ.</p><p style="text-align: justify;">Перед тем, как что-либо покупать, вам обязательно предложат осмотреть выбранный дом на месте, познакомиться с поселком воочию, чтобы убедиться во всем лично.</p><p>Наши специалисты подберут удобный вариант расчета за дом, это может быть:</p><ul><li>наличный расчет; </li><li>покупка в ипотеку; </li><li>покупка в рассрочку; </li><li>покупка с применением материнского капитала. </li></ul><p style="text-align: justify;">Программа приобретения жилья в коттеджных поселках составляется индивидуально для каждого клиента. У нас предусмотрены как скидки и &nbsp;спец. предложения, так и бонусы для наших клиентов.</p><p style="text-align: justify;">Кстати говоря, «АЯКС» &nbsp;не только помогает в подборе недвижимости и программ кредитования, но и предоставляет полный спектр услуг по сопровождению сделок под ключ, что дополнительно защищает наших клиентов от мошеннических схем на рынке недвижимого имущества.</p>',

      }
  }
}

</script>

<template lang="pug">
Layout(classes="section_grey")
    BannerBox(:bannerItems="bannerItems" bannerClass="banner-big banner-mob" breadcrumbTitle="Коттеджные поселки")
        .banner-form
            Form(:inputs="inputs" :checkboxes="checkboxes" sendText="Забронировать" horizontal hideRequirementMess)

    section.section.cottage
        .container
            .row
                .col
                    .cottage-mortgage__title.title_m
                        h2 Коттеджные поселки Краснодара
            .row.row-cols-1.row-cols-sm-2.row-cols-md-4.row-cols-12.g-md-4.g-0
                template(v-for="item in cottage")
                    KottedzhItem(:photo="item.photo"
                                :title="item.title"
                                :commission="item.commission"
                                :path="item.path"
                                :price="item.price")
    mortgage(:mortgageItems="mortgageItems")
    .col
        .cottage-mortgage__title.title_m.p-15
            h2 Оставить заявку на показ
    formSection(:formSection="formSection" )
    container
        .text(v-html="fetchedText")
</template>
