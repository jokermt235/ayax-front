<script>
import Layout from '../components/layout/layout'
import Banner from '../components/blocks/banner/banner.vue'
import SingleNav from '../components/blocks/single-nav/singleNav.vue'
import container from '../components/layout/container.vue'
import Form from '../components/blocks/form/form.vue'
import Awards from '../components/blocks/awards/awards.vue'
import Profitably from '../components/blocks/profitably/profitably.vue'
import Step from '../components/blocks/step/step.vue'
import Docs from '../components/blocks/docs/docs.vue'
import Title from '../components/layout/title'
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'

export default {
  name: 'App',
  components: {
    Layout,
    Title,
    Banner,
    SingleNav,
    container,
    Form,
    Awards,
    Profitably,
    Step,
    Breadcrumbs,
    Docs,
  },
  data() {
        return {
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
            selects: ['Квартира','Дом' ],
            awardsItems: [
                {
                    name: 'Покупка жилой недвижимости (на вторичном рынке)',
                    description: '3% от итоговой стоимости объекта, но не менее 100 тыс.руб.'
                },
                {
                    name: 'Покупка объектов от застройщика',
                    description: 'без комиссии'
                },
                {
                    name: 'Покупка коммерческой недвижимости',
                    description: '0% (бесплатно) при выборе эксклюзивного объекта, 3% от стоимости при выборе обычного объекта'
                },
                {
                    name: 'Покупка коммерческой недвижимости',
                    description: '6% от стоимости объекта'
                },
            ],
            profitablyItem: [
                {
                    number: '1',
                    name: 'Экономия денег',
                    text: 'При сделках на первичном рынке, на ипотеке'

                },
                {
                    number: '2',
                    name: 'Снижение рисков',
                    text: 'Проверим и поможем правильно оформить документы'
                },
                {
                    number: '3',
                    name: 'Экономия времени',
                    text: 'Все вопросы решаются в режиме "единого окна"'
                },
                {
                    number: '4',
                    name: 'Бонусы',
                    text: 'Дарим скидки на товары и услуги при переезде'
                }
            ],
            fetchedText: '<p> Хотите купить жильё в Краснодаре? В этом разделе&nbsp;вы можете посмотреть базу бесплатных объявлений. Перейдя в нужный подраздел, вы найдете недвижимость, которая соответствуют критериям, независимо от того, дома это или&nbsp;квартиры.</p><p> АН «АЯКС» гарантирует актуальность, юридическую чистоту выставленных объектов. Мы поможем с поиском, с проверкой документов, с совершением сделки.</p><p> В самостоятельной покупке жилья нет ничего сложного, но нужно понимать и быть готовым к рискам, которые ожидают будущего владельца на любом из этапов сделки. Решение этих задач лучше поддается риэлторам работающим уже много лет.</p>',
            navItems: [
                {
                    title: 'Квартиры',
                    link: '/kvartiry',
                    icon: 'kvartiry'
                },
                {
                    title: 'Дома',
                    link: '/kvartiry',
                    icon: 'doma'
                },
                {
                    title: 'Новостройки',
                    link: '/kvartiry',
                    icon: 'novostroiki'
                },
                {
                    title: 'Недвижимость за рубежом',
                    link: '/kvartiry',
                    icon: 'zarubez'
                },
            ],
            stepItem: [
                {
                    name: 'Шаг 1',
                    text: 'Вы оставляете заявку, заполнив форму на нашем сайте, или сразу можете связаться с менеджером. Чем подробнее вы опишете требования к жилплощади, тем быстрее мы найдем для вас идеальное жилье.',
                    src:   'images/pages/kupit-zhilye/icon-step-1.png'
                },
                {
                    name: 'Шаг 2',
                    text: 'Менеджер компании подбирает варианты по индивидуальным параметрам и приглашает вас на встречу в офис.',
                    src:   'images/pages/kupit-zhilye/icon-step-2.png'
                },
                {
                    name: 'Шаг 3',
                    text: 'Выбираете то, что хотите посмотреть – менеджер договаривается о дате и времени просмотра с собственником.',
                    src:   'images/pages/kupit-zhilye/icon-step-3.png'
                },
                {
                    name: 'Шаг 4',
                    text: 'Вместе с менеджером отправляетесь на просмотр выбранного жилья. На данном этапе также можно организовать общение с собственниками, чтобы выбрать лучший вариант.',
                    src:   'images/pages/kupit-zhilye/icon-step-4.png'
                },
                {
                    name: 'Шаг 5',
                    text: 'Начинается сбор и подготовка документов для "выхода на сделку", согласуются все даты. К этому этапу необходимо иметь в распоряжении полную сумму задатка, его нужно перевести на счет или передать на руки владельцам.',
                    src:   'images/pages/kupit-zhilye/icon-step-5.png'
                },
                {
                    name: 'Шаг 6',
                    text: 'В итоге вы переводите полную сумму, завершая покупку согласно установленному порядку. После этого остается подписать договор купли-продажи. Все счастливы!',
                    src:   'images/pages/kupit-zhilye/icon-step-6.png'
                }
            ],
        }
    }
}
</script>

<template lang="pug">
Layout
    Breadcrumbs(title="Недвижимость")
    Banner(title="Недвижимость в АН «АЯКС»" src="/images/buy-bg.jpg")
    Title(title="Жильё в Краснодаре")
    SingleNav(:pageNav="navItems")
    container
        .text(v-html="fetchedText")
    container
        .big-form.scroll-block
            h2 Отправьте заявку прямо сейчас
            Form(:inputs="inputs" :checkboxes="checkboxes" :selects="selects" selectPlaceholder="Что хотите приобрести?")
    Awards(:awardsItems="awardsItems")
    Profitably(:profitablyItem="profitablyItem")
    Step(:stepItem="stepItem")
    Docs(btnName="<b>Загрузить</b> <small>(pdf, 0.2 Мб)</small>" docLink="#")
</template>
