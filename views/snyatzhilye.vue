<script>
import Layout from "../components/layout/layout";
import Banner from '../components/blocks/banner/banner.vue'
import SingleNav from '../components/blocks/single-nav/singleNav.vue'
import container from '../components/layout/container.vue'
import Consultation from '../components/blocks/consultation/consultation.vue'
import Awards from '../components/blocks/awards/awards.vue'
import Docs from '../components/blocks/docs/docs.vue'
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'
import Title from '../components/layout/title'

export default {
    name: 'App',
    components: {
        Layout,
        Banner,
        SingleNav,
        container,
        Consultation,
        Awards,
        Docs,
        Title,
        Breadcrumbs
    },
    data() {
        return {
            tabs: ['Покупка','Аренда'],
            tabsSlider: [
               {
                   slider: [
                        {
                            id: 1,
                            name: 'Екатерина ',
                            position: 'Старший',
                            photo: 'images/pages/kupit-zhilye/consultation-chel.png',
                        },
                        {
                            id: 2,
                            name: 'Екатерина ',
                            position: 'Старший ',
                            photo: 'images/pages/kupit-zhilye/consultation-chel.png',
                        },
                        {
                            id: 3,
                            name: 'Екатерина',
                            position: 'Старший ',
                            photo: 'images/pages/kupit-zhilye/consultation-chel.png',
                        },
                    ],
               },
               {
                   slider: [
                        {
                            id: 1,
                            name: 'Екатерина Гаврилова',
                            position: 'Старший специалист',
                            photo: 'images/pages/kupit-zhilye/consultation-chel.png',
                        },
                        {
                            id: 2,
                            name: 'Екатерина Гаврилова',
                            position: 'Старший специалист',
                            photo: 'images/pages/kupit-zhilye/consultation-chel.png',
                        },
                        {
                            id: 3,
                            name: 'Екатерина Гаврилова',
                            position: 'Старший специалист',
                            photo: 'images/pages/kupit-zhilye/consultation-chel.png',
                        },
                    ],
               }
            ], 
            awardsItems: [
                {
                    name: 'Аренда коммерческой недвижимости',
                    description: '0% для арендаторов, 100% месячной арендной платы для арендодателей'
                },
                {
                    name: 'Аренда жилой недвижимости',
                    description: 'от 70 до 100% от ежемесячной арендной платы'
                },
            ],
            navItems: [
                {
                    title: 'Аренда квартир',
                    link: '/kvartiry',
                    icon: 'kvartiry'
                },
                {
                    title: 'Аренда домов',
                    link: '/kvartiry',
                    icon: 'doma'
                }
            ],
            fetchedText: '<div class="seo-text"><p>Снять жилье в Краснодаре, особенно на длительный срок, не так просто: предложений очень много, но спрос со стороны переезжающих в город огромен. Наиболее интересные варианты "разбирают" молниеносно. Уже много лет краевая столица остается центром притяжения для тысяч кубанцев и жителей других регионов. Сюда едут, чтобы работать, воспитывать детей, и, пока своего дома нет, большинство предпочитают аренду.</p><p>Из-за того что рынок в России пока не самый прозрачный, все чаще люди выбирают съемное жилье через агентство: так клиент получает доступ к актуальной и, что самое важное, реальной базе объектов (как известно, на досках объявлений много "фейков" для привлечения клиентов). Плюс ко всему, аренда жилья с помощью риэлтора безопаснее. Особенно, когда речь идет о сдаче объекта на длительный срок: есть гарантии, правильно составленный контракт – никто не выселит жильцов просто так, да и сами жильцы не исчезнут "в никуда". Также в договоре фиксируют стоимость – опять же, никаких сюрпризов для квартиросъемщика.</p><p>Цены на <a title="Снять квартиру в Краснодаре с помощью &quot;АЯКС-Риэлт&quot;" href="/snyat-kvartiru/">аренду квартир</a> в Краснодаре чуть меньше или равны средней заработной плате горожан. Однокомнатные в развитых районах обходятся примерно в 14-15 тысяч рублей, пустые новостройки на окраинах сдают и за 8-9 тысяч. Арендовать объекты вторичного рынка традиционно удобнее, но и дороже: скажем, если в доме есть вся бытовая техника и хороший ремонт, то съем жилья обойдется в 17-20 тыс. и более, если говорить об однушках. Кстати, жилая площадь не влияет на цены: в центре крошечные студии до 15 "квадратов" или комнаты в общежитиях до 13 кв.м. стоят столько же, сколько и полноценные квартиры.</p><p>Долгосрочная аренда недвижимости может обеспечить скидку, особенно большие дисконты дают собственники 3-4-комнатных квартир, которые труднее всего сдать одной семье.Обращайтесь в агентство недвижимости "АЯКС", чтобы снять жилье легко!</p></div>             ',
        }
    }
}
</script>

<template lang="pug">
Layout
    Breadcrumbs(title="Аренда недвижимости")
    Banner(title="Недвижимость в аренду" src="images/rent-bg.jpg")
    Title(title="Снять жилье в Краснодаре")
    SingleNav(:pageNav="navItems")
    container
        .text(v-html="fetchedText")
    Consultation(:tabs="tabs" title="Бесплатная консультация экспертов" consultationText="Мы даем бесплатную консультацию по любому интересующему вас вопросу. Оставьте ваш контакт, мы назначим время звонка и поможем вам принять рациональное решение." consultationTitle="Получите бесплатную консультацию" :tabsSlider="tabsSlider")
    Awards( :awardsItems="awardsItems")
    Docs(btnName='<b>Загрузить</b> <small class="attached-files__file_info">(pdf, 0.2 Мб)</small>' name="Договор аренды объекта недвижимости" text="Чтобы арендовать объект недвижимости и безопасно заключить сделку, необходимо подписать договор аренды (найма). Образец представлен ниже.")
</template>
