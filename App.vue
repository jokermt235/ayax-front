<script>
import Layout from "./components/layout/layout";
import container from './components/layout/container'
import Breadcrumbs from './components/blocks/breadcrumbs/breadcrumbs.vue'
import Profitably from './components/blocks/profitably/profitably-tab.vue'
import Consultation from './components/blocks/consultation/consultation.vue'
import News from './components/blocks/news/news'
import ServiceAgency  from './components/blocks/service-agency/service-agency.vue'
import ProductTabs from "./components/blocks/product-tabs/product-tabs"
import FastTags from "./components/blocks/fast-tags/fast-tags.vue"
import Title from './components/layout/title'
import FilterMain  from "./components/blocks/filter/filter.vue"

export default {
    name: 'App',
    components: {
        container,
        Layout,
        Title,
        Breadcrumbs,
        Profitably,
        Consultation,
        News,
        ServiceAgency,
        ProductTabs,
        FastTags,
        FilterMain
    },
    props: {
        title: String,

    },
    data() {
        return {
            tabsProfit: ["Покупка", "Продажа"],
            tabsService: [ "Покупка" ,"Продажа"],
            tabProfit: ["Покупка" ,"Продажа"],
            fetchedText: '<div class="seo-text"><h2>Агентство недвижимости «Аякс»</h2><p>Мы – агентство, с которым выгодно продают, совершают обмены, арендуют или&nbsp;покупают недвижимость в Краснодаре и его пригороде. В базе&nbsp;более 10000 объявлений.</p><h3>Мы предлагаем:</h3><ul><li>быстрый подбор до 20&nbsp;предложений;</li><li>купить&nbsp;недвижимость на первичном рынке Краснодара без комиссии;</li><li>помощь в получении ипотеки под низкий %, грамотное использование материнского капитала;</li><li>проверку, оформление документов, оценку, сопровождение;</li><li>объекты от надежных, проверенных партнеров-застройщиков агентства;</li><li>скидки и бонусы от партнеров.</li></ul><h3>Как купить через АН «Аякс»?</h3><p>Всё просто. Шаг №1. Выбираете недвижимость, которую хотите купить,&nbsp;отправляете заявку. Сделать это можно по телефону, в онлайн-чате или отправив запрос в форме обратной связи. Агент&nbsp;перезвонит в течение 30 минут, назначит встречу.</p><p>Шаг №2. После подбора&nbsp;вариантов, осмотра на месте, выбора и достижения договоренности по цене,&nbsp;составляем&nbsp;документацию. Юристы&nbsp;ответят на вопросы.</p><p>Шаг №3. Сделка. После этапов подготовки остается только подписать договор с владельцем, провести оплату и забрать ключи.</p><p>Сделку вы можете заключить сами или, заказать&nbsp;в агентстве&nbsp;услугу "под ключ".</p><h2>Продаёте? Поможем решить задачу</h2><p>Сайт компании посещают более 180 000 пользователей за квартал. Эти люди интересуются недвижимым имуществом в самом городе, пригороде.</p><p>Что требуется для продажи:</p><ul><li>по запросу предоставить всю документацию;</li><li>предоставить доступ оценщику для осмотра&nbsp;(проводится бесплатно);</li><li>указать цену.</li></ul><p>После этого менеджеры проверят информацию. Пробьют документы и она будет выставлена на продажу. Отвечать на входящие звонки по объявлению будут наши специалисты.</p><p>Как видите, схема работы прозрачна. Нет никаких скрытых комиссий за квадратные метры покупаемые или продаваемые через агентство недвижимости в Краснодаре «Аякс», процесс заточен на получение результата по вашим условиям.</p></div>',
            cartTagItem:[
                {
                    tagTitle: 'Региональное партнерство',
                    img: 'https://www.ayax.ru/local/includes/tpl/images/bg-item-01.jpg'
                },
                {
                    tagTitle: 'Аренда недвижимости',
                    img: 'https://www.ayax.ru/local/includes/tpl/images/bg-item-02.jpg',
                    items: [
                        {
                            title: 'Студии',
                            link: '#',
                            qty: 123
                        },
                        {
                            title: '1 комнатные',
                            link: '#',
                            qty: 333
                        }
                    ]
                }
            ],
        }
    },
    mounted(){
        this.$store.dispatch('fastabs/httpFetch');
        this.$store.dispatch('estate/httpFetch', {best : 1});
        this.$store.dispatch('realty/list', {best : 1});
        this.$store.dispatch('consultypes/httpFetch');
    },
    computed :{
        fastTagsItem(){
            return this.$store.getters["fastabs/records"];
        },
        tabsProduct(){
            return this.$store.getters["estate/records"].map(item=>item.name_plural);
        },
        productItems(){
            return this.$store.getters["estate/tabs"];
        },
        tabsSlider(){
            return this.$store.getters["consultypes/slides"];
        },
    },
}
</script>

<template lang="pug">
Layout
    FilterMain(main)
    FastTags(:fastTagsItem="fastTagsItem" :cartTagItem="cartTagItem" title="Недвижимость в Краснодаре от АН Аякс")
    ProductTabs(:productItems="productItems" :tabsProduct="tabsProduct" title="Лучшие предложения" flatView)
    ServiceAgency( :tabsService="tabsService" title="Услуги агентства")
    Profitably(:tabsProfit="tabsProfit" title="Схема работы" extraClass="section_padding")
    Consultation(:tabsSlider="tabsSlider" title="Бесплатная консультация экспертов" consultationText="Мы даем бесплатную консультацию по любому интересующему вас вопросу. Оставьте ваш контакт, мы назначим время звонка и поможем вам принять рациональное решение." consultationTitle="Получите бесплатную консультацию")
    News(title="Новости агентства" sectionPadding="section_padding")
    container
        .text( v-html="fetchedText" )
</template>
