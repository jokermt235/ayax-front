<script>
import container from '../components/layout/container'
import Layout from "../components/layout/layout"
import Banner from '../components/blocks/banner/banner.vue'
import Awards from '../components/blocks/awards/awards.vue'
import Form from '../components/blocks/form/form.vue'
import offerCard from '../components/blocks/offer-card/offer-card.vue'
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'
import mapContact from "../components/blocks/mapContact/mapContact.vue"


export default {
    name: 'App',
    components: {
        Banner,
        container,
        Awards,
        Layout,
        Breadcrumbs,
        Form,
        offerCard,
        mapContact
    },
    props: {
        title: String,

    },
    data() {
        return {
            sendButton : {
                submitButtonOnClick : ()=>{
                    this.sendRequest();
                }
            },
            inputs: [

                {
                    name: 'vacant-name',
                    title: 'Контакное лицо',
                    required: true
                },
                {
                    name: 'vacant-phone',
                    title: 'Телефон',
                    type: 'number',
                    required: true
                },

                {
                    name: 'vacant-email',
                    title: 'Email',
                    type: 'email',
                    required: true
                },
            ],
            checkboxes: [
                {
                    name: 'vacant-agree',
                    title: 'Даю согласие на обработку персональных данных в соответствии с ',
                    link: 'some.com',
                    linkText: 'обработку персональных данных',
                }
            ],
            fetchedText: '<div class="vacancies-list"><div class="vacancies-list__item "><div class="vacancies-list__item-info"><div class="vacancies-list__item-info_name">Риэлтор</div><div class="plaintext vacancies-list__item-info_text"><strong class="blue">КОМПАНИЯ "АЯКС" ПРИГЛАШАЕТ ВАС ПРИСОЕДИНИТЬСЯ К ДРУЖНОЙ КОМАНДЕ ПРОФЕССИОНАЛОВ!</strong> <strong style="font-size: 14px; color: #4AADFF; text-transform: uppercase; font-weight: normal; display: block; line-height: 24px;"> МЫ ГАРАНТИРУЕМ:</strong><ul><li>обучение сотрудников компании с привлечением лучших бизнес-тренеров в области недвижимости; </li><li>систему адаптации сотрудников; </li><li>высокий уровень дохода; </li><li>комфортные условия труда; </li><li>карьерный рост. </li></ul><br><a title="Работа риэлтором в Краснодаре" class="land" target="_blank" href="/rabota-rieltorom-krasnodare/">Подробнее о работе риэлтора</a>                    </div></div></div><div class="vacancies-list__item "><div class="vacancies-list__item-info"><div class="vacancies-list__item-info_name">Юрист</div><div class="plaintext vacancies-list__item-info_text"><strong style="font-size: 14px; color: #4AADFF; text-transform: uppercase; font-weight: normal; display: block; line-height: 24px;">ОБЯЗАННОСТИ:</strong><ul><li>юридическое сопровождение сделок (купля-продажа, дарение, мена);</li><li>составление договоров (купля-продажа, дарение, мена, аренда);</li><li>регистрация прав на недвижимое имущество (собственность, аренда, постоянное бессрочное пользование);</li><li>ведение исковой работы: принятие мер по соблюдению досудебного порядка урегулирования договорных споров; составление исковых заявлений, формирование искового материала и передача его в суды, изучение искового материала по искам к компании, ведение базы данных по исковой работе, представление интересов компании в судах;</li><li>ведение отчетности, сбор информации, аналитическая работа в области права;</li><li>консультирование сотрудников компании по различным правовым вопросам, оказание правовой помощи в составлении юридических документов.</li></ul><br><strong style="font-size: 14px; color: #4AADFF; text-transform: uppercase; font-weight: normal; display: block; line-height: 24px;"> ТРЕБОВАНИЯ:</strong><ul><li>высшее юридическое образование;</li><li>знание Гражданского, Жилищного, Семейного, Градостроительного и иных кодексов РФ;</li><li>опыт работы в государственных, муниципальных организациях приветствуется.</li></ul><br><strong style="font-size: 14px; color: #4AADFF; text-transform: uppercase; font-weight: normal; display: block; line-height: 24px;">МЫ ГАРАНТИРУЕМ:</strong><ul><li>поток клиентов;</li><li>обучение;</li><li>стабильность.</li></ul><br><strong style="font-size: 14px; color: #4AADFF; text-transform: uppercase; font-weight: normal; display: block; line-height: 24px;"> УСЛОВИЯ:</strong><ul><br><li>заработная плата: оклад+бонусы;</li><li>полная занятость;</li><li>офис в центре города.</li></ul>                    </div></div></div><div class="vacancies-list__item vacancies-list__item-last"><div class="vacancies-list__item-info"><div class="vacancies-list__item-info_name">Оператор Контакт-центра/Сотрудник Контакт-центра</div><div class="plaintext vacancies-list__item-info_text"><strong style="font-size: 14px; color: #4AADFF; text-transform: uppercase; font-weight: normal; display: block; line-height: 24px;">ОБЯЗАННОСТИ:</strong><ul><li>Обработка входящих звонков по стандартам компании;</li><li>Исходящие вызовы различной направленности;</li><li>Проведение телефонных переговоров;</li><li>Работа с базами данных, работа в CRM-системе;</li></ul><strong style="font-size: 14px; color: #4AADFF; text-transform: uppercase; font-weight: normal; display: block; line-height: 24px;"><br>ТРЕБОВАНИЯ:</strong><ul><li>Опыт работы с клиентами от 1 года;</li><li>Навыки делового общения, хорошая дикция, умение вести разговор, объяснять ясно и уверенно;</li><li>Образование: высшее или среднее;</li><li>Уверенные навыки работы с ПК;</li><li>Личные качества: позитивный настрой, внимательность, ответственность, организованность, гибкость</li></ul><br><strong style="font-size: 14px; color: #4AADFF; text-transform: uppercase; font-weight: normal; display: block; line-height: 24px;"> УСЛОВИЯ:</strong><ul><li>Качественное обучение на всех этапах работы</li><li>Профессиональное развитие и карьерный рост в крупной, стабильной компании</li><li>Гарантированно высокий доход</li><li>Обширная социальная программа</li><li>Технологичное персональное рабочее пространство</li></ul></div></div></div></div>',
            fetchedText2: '<div class="seo-text"><p>Вакансии рынка недвижимости Краснодара сегодня интересуют многих горожан, а также тех, кто планирует отправиться на постоянное место жительства на Кубань. Причина - активность местной стройиндустрии и одновременно повышенный спрос на <a title="Купить жилье в Краснодаре" href="/kupit-zhilye/">жилье</a> в локации. Наш край привлекателен для переезда, поэтому рынок недвижимости имеет практически неограниченный ресурс роста по продажам жилья. Получается, что работа агентом может приносить стабильный высокий доход.</p><p>Вот почему здесь многообразие объявлений о найме от профильных компаний. Важно уточнить, что в Краснодаре вакансия руководителя отдела продаж недвижимости встречается тоже часто, поскольку число строительных проектов неустанно растет, усиливается конкуренция. Соответственно, здесь постоянно требуются высококвалифицированные кадры.</p><p>Выходит, человек, пришедший в сферу недвижимости из другой отрасли и показавший хорошие результаты, может молниеносно подняться по карьерной лестнице.</p><p>"АЯКС" предлагает всем сотрудникам доступ к внушительной технологической и образовательной базе – у нас проходит <a title="Профессиональное обучение риэлторов в Краснодаре с нуля" href="/obuchenie-rieltorov-krasnodare/">обучение риэлторов в Краснодаре</a>. Компания непрерывно растет, мы открываем новые офисы. Потому у нас каждый имеет возможность пройти путь от рядового агента до руководителя офиса - нужно лишь учиться, стремиться к новым знаниям и, конечно же, продавать!</p></div>',
            offerItems:[
                {
                    img: '/images/pages/vakansii/1.jpg',
                    name: 'Стабильность',
                    text: 'Мы работаем на рынке недвижимости с 1998 года. Сегодня у нас 23 офиса продаж в Краснодаре. Основа нашей стратегии — расти и развиваться дальше.'
                },
                {
                    img: '/images/pages/vakansii/2.jpg',
                    name: 'Социальная защищенность',
                    text: 'Трудоустройство в соответствии  с ТК РФ. Ежегодные мед. обследования. Материальная поддержка сотрудников  в сложных жизненных  ситуациях.'
                },
                {
                    img: '/images/pages/vakansii/3.jpg',
                    name: 'Комфортные условия труда',
                    text: 'Наши офисы оснащены современной техникой, системой кондиционирования и приборами бактериальной защиты. Удобное зонирование рабочего пространства.'
                },
                {
                    img: '/images/pages/vakansii/4.jpg',
                    name: 'Единая корпоративная база недвижимости',
                    text: 'У нас есть все для удачного старта: база содержит более 30 000 объектов, выставленных на продажу. Ресурс доступен с первых дней работы.'
                },
                {
                    img: '/images/pages/vakansii/5.jpg',
                    name: 'Высокий уровень дохода',
                    text: 'Прогрессивная процентная ставка оплаты труда. Бонусы, денежные премии, поездки. Достигай цели вместе с нами! Открывай новые возможности!'
                },
                {
                    img: '/images/pages/vakansii/6.jpg',
                    name: 'Собственная школа "Start up',
                    text: 'Для быстрой адаптации новичков мы создали школу «Start up» и эффективную систему  наставничества. Активным людям результат гарантирован!'
                },
                {
                    img: '/images/pages/vakansii/7.jpg',
                    name: 'Бизнес-тренинги и курсы',
                    text: 'Система обучения начинающих и опытных агентов, развивающая личностный и профессиональный рост. С нами лучшие бизнес-тренеры. Стань профессионалом!'
                },
                {
                    img: '/images/pages/vakansii/8.jpg',
                    name: 'Гарантированный карьерный рост',
                    text: 'Горизонтальный рост – от стажера до старшего эксперта; вертикальный рост – от агента до руководителя офиса/отдела. Прояви свой талант!'
                },
                {
                    img: '/images/pages/vakansii/9.jpg',
                    name: 'Рекламная поддержка',
                    text: 'Каждый наш сотрудник может пользоваться рекламными возможностями компании бесплатно: заказывать листовки, баннеры, размещать объявления на сайтах и т.д.'
                },
                {
                    img: '/images/pages/vakansii/10.jpg',
                    name: 'Статусные корпоративные мероприятия',
                    text: 'Костюмированные новогодние праздники, шоу-программы ко дню рождения компании, спортивные турниры, походы. С нами жизнь интереснее!'
                },
                {
                    img: '/images/pages/vakansii/11.jpg',
                    name: 'Техническая поддержка',
                    text: 'Мы предоставляем сотрудникам корпоративную мобильную связь. Есть внутренний сайт для быстрого обмена информацией и внутренняя система управления.'
                },
                {
                    img: '/images/pages/vakansii/12.jpg',
                    name: 'Компания — чемпион! Люди — победители!',
                    text: 'В Краснодаре одна компания, признанная Российской Гильдией Риэлторов лидером на рынке недвижимости — это «АЯКС-Риэлт». Стань частью нашей команды!'
                },

            ]
        }
    },
    methods : {
        sendRequest(){
            let data = {
                agreement : document.querySelector("input[name=vacant-agree]").value === 'on' ? 1 : 0 ,
                phone : document.querySelector("input[name=vacant-phone]").value,
                name : document.querySelector("input[name=vacant-name]").value,
                email : document.querySelector("input[name=vacant-email]").value,
                url : window.location.href
            };
            this.$store.dispatch('vacancy/add', data);
        }
    }
}
</script>

<template lang="pug">
    Layout
        Breadcrumbs(title="Работа в компании")
        Banner(title="Старт новой карьеры" src="images/career-bg.jpg")
        container
            .title
                h2 Вакансии на рынке недвижимости Краснодара
            .text( v-html="fetchedText" )
            .text( v-html="fetchedText2" )
        container
            .big-form.scroll-block
                Form(:inputs="inputs" :checkboxes="checkboxes"
                 title="Хочу у вас работать" fileName="file" subtitle="Отправьте своё резюме, и мы постараемся вам помочь!"
                 :submitButton="sendButton")
        container
            .offer.offer-font
                .row
                    .col
                        .offer__title.title
                            h2 Мы предлагаем
                offerCard(:offerItems="offerItems")
        container
            .film
                .row
                    .col
                        .film-title.title
                            h2 Фильм о работе в компании "АЯКС"
                .row
                    .col
                        .film-box
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/ztq_APB2JSQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        mapContact(titleSmall hideTime title="Работа рядом с домом!" place="Выберите на карте офис для работы")
</template>
