<script>
import Layout from "../components/layout/layout";
import container from '../components/layout/container.vue'
import Banner from '../components/blocks/banner/banner.vue'
// import News from '../components/blocks/news/news'
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'
// import mapContact from "../components/blocks/mapContact/mapContact.vue"
import InternalNav from '../components/blocks/internal-nav/internal-nav'
import Consultation from '../components/blocks/consultation/consultation.vue'
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
Vue.component("v-select", vSelect);

const customLabels = {
    first: '',
    last: '',
    previous: '<',
    next: '>'
};

export default {
  name: 'App',
  components: {
    Layout,
    container,
    Banner,
    Breadcrumbs,
    InternalNav,
    Consultation
  },
  data() {
        return {
            selectsStage: ['первый этаж', 'средний этаж', 'последний этаж'],
            selectedStage: 'Выберите этаж',
            selects: [ '2-я Площадка', '40 лет Победы', '9-й километр', 'Авиагородок', 'Адыгея', 'аул Афипсип', 'аул Козет', 'аул Старобжегокай', 'аул Тахтамукай', 'аул Тугургой', 'Витаминкомбинат', 'Восточная промышленная зона', 'Восточно-Кругликовский', 'Гидростроителей', 'Горогороды', 'Горхутор', 'Дивный', 'ДНТ Знаменский', 'Дубинка', 'Западная промышленная зона', 'Западный Обход', 'ЗИП', 'имени Н.И. Вавилова', 'Ипподром', 'Казанский', 'Камвольно-суконный Комбинат', 'Кожзавод', 'Комсомольский', 'Краевая Клиническая Больница', 'Красная площадь', 'Молодёжный', 'Московский', 'Музыкальный', 'Немецкая Деревня', 'Новая Адыгея', 'Новознаменский', 'Новый', 'Отделение №1 ОПХ Колос', 'п. Агроном', 'п. Белозерный', 'п. Берёзовый', 'п. Дорожный', 'п. Зеленопольский', 'п. Знаменский', 'п. Индустриальный', 'п. Колосистый', 'п. Кочетинский', 'п. Краснодарский', 'п. Лазурный', 'п. Лорис', 'п. Новый', 'п. Перекатный', 'п. Победитель, п. Дружелюбный', 'п. Пригородный', 'п. Прикубанский', 'п. Прогресс', 'п. Российский', 'п. Трава', 'п. Украинский', 'п. Южный', 'п. Яблоновский', 'п. Ясенево', 'Пашковский', 'пгт. Афипский', 'пгт. Тлюстенхабль', 'Петра Метальникова', 'Плодородный', 'РИП', 'Ростовское Шоссе', 'Ростовское шоссе Дачи', 'с. Красносельское', 'с. Первореченское', 'Сады Калинина', 'Северный', 'Сельскохозяйственный Институт', 'Славянский', 'СНТ Аврора', 'СНТ Вишняки', 'СНТ Дружба', 'СНТ Зарождение', 'СНТ Излучина-Кубань', 'СНТ Нижний Казачий Хутор', 'СНТ Янтарный', 'Солнечный Город', 'Солнечный Остров', 'Сосновый Бор', 'СТ Агроном', 'СТ Дружба', 'СТ Дубки', 'СТ Завода Измерительных Приборов', 'СТ Краснодарсельэнергопроект', 'СТ Мелиоратор', 'СТ Надежда', 'СТ Седина', 'СТ Урожай', 'СТ Янтарь', 'ст. Васюринская', 'ст. Динская', 'ст. Елизаветинская', 'ст. Елизаветинская Дачи', 'ст. Кубанская Нива 1', 'ст. Кубанская Нива 2', 'ст. Марьянская', 'ст. Новотитаровская', 'ст. Пластуновская', 'ст. Старокорсунская', 'Табачная Фабрика', 'ТЭЦ', 'Учхоз Кубань', 'Фестивальный', 'х. Копанской', 'х. Ленина', 'х. Октябрьский', 'х. Осечки', 'х. Хомуты', 'Хлопчато-бумажный Комбинат', 'Центральная Усадьба', 'Центральный', 'Черёмушки', 'Школьный', 'Энем', 'ЭНКА', 'Юбилейный', 'Южное Сияние',],
            selected: 'Выберите район',
            newsItems:[
                {
                    day: '18',
					month: 'Октябрь',
					text: 'Акция для клиентов «АЯКС»: получите скидку на ипотечную ставку от ВТБ',
                    href: '/news-detail'
                },
                {
                    day: '18',
					month: 'Октябрь',
					text: 'Акция для клиентов «АЯКС»: получите скидку на ипотечную ставку от ВТБ',
                    href: '/news-detail'
                },
                {
                    day: '18',
					month: 'Октябрь',
					text: 'Акция для клиентов «АЯКС»: получите скидку на ипотечную ставку от ВТБ',
                    href: '/news-detail'
                },
                {
                    day: '18',
					month: 'Октябрь',
					text: 'Акция для клиентов «АЯКС»: получите скидку на ипотечную ставку от ВТБ',
                    href: '/news-detail'
                },
                {
                    day: '18',
					month: 'Октябрь',
					text: 'Акция для клиентов «АЯКС»: получите скидку на ипотечную ставку от ВТБ',
                    href: '/news-detail'
                },
                {
                    day: '18',
					month: 'Октябрь',
					text: 'Акция для клиентов «АЯКС»: получите скидку на ипотечную ставку от ВТБ',
                    href: '/news-detail'
                },
                {
                    day: '18',
					month: 'Октябрь',
					text: 'Акция для клиентов «АЯКС»: получите скидку на ипотечную ставку от ВТБ',
                    href: '/news-detail'
                },
            ],
            fetchedText: '<div class="seo-text"><p>Онлайн калькулятор – <a title="Услуга профессиональной оценки недвижимости" href="/otsenka-krasnodare/">оценка недвижимости</a> здесь и сейчас. Это очень просто и удобно, особенно, если решение о покупке или продаже вы приняли совсем недавно. Это означает, что вы пока не успели обратиться к специалистам и просто присматриваетесь к вариантам. Ошибиться тут тоже нельзя, потому что даже к опытному риэлтору стоит идти уже с примерным представлением о том, как будет проходить сделка.</p><p>Калькулятор жилья – способ определить, сколько стоит ваша собственность с учетом особенностей рынка. Это действительно качественная экспресс-служба: все данные анализирует специально созданная программа, и уже спустя несколько минут вы получаете достоверную информацию об объекте недвижимости, даже если ее предварительно не осматривали специалисты.</p><p>Дело в том, что оценка жилья онлайн позволяет максимально просто продать или купить объект, потому что, обращаясь в агентство, вы уже понимаете ценовую категорию и варианты торга. Особенно важно учитывать особенности сервиса: это приблизительная оценка, которая дает возможность общаться со "старожилами" рынка – теми, кто уже давно покупает или продает - на одном языке: вы сразу видите свою "точку отсчета", понимаете цены.</p><p>Расчет стоимости калькулятором жилья – тот базис, который сегодня необходим собственникам и покупателям, чтобы <a title="Качественная оценка домов в Краснодаре" href="/otsenka-krasnodare/doma/">оценить дома</a> или квартиры. Это простой инструмент, однако, он помогает легко ориентироваться на рынке недвижимости и избегать ситуаций, когда торг неуместен.</p><p>Рассчитать на калькуляторе оценку недвижимости онлайн проще простого. Отмечаем параметры, указываем район Краснодара, площадь, этаж, тип планировки – и программа подсчитывает среднерыночную цену вашего объекта недвижимости. Конечно, она пока приблизительная, но, по крайней мере, вы сможете узнать порядок цифр в режиме онлайн.</p></div>',
            breadcrumbs: [
                {
                    name: 'Оценка',
                    path: '/ipotekakrasnodare'
                }
            ],
            internalNavItems: [
                {
                    name: 'Сотрудники',
                    link: '/ipotechnyebrokery'
                },
                {
                    name: 'Акции',
                    link: '/ipotaktsii'
                },
                {
                    name: 'Новости',
                    link: '/news'
                },
                {
                    name: 'Онлайн оценка',
                    link: '/onlinerating'
                },
                {
                    name: 'Видео-связь',
                    link: '#'
                },
            ],
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
            // internalBrokery:[
            //     {
            //         src: cardImg,
            //         name: 'Ольга Владимировна Шмакова',
            //         post: 'Начальник ипотечного центра',
            //         tel: '+7 918 197-01-97',
            //     },
            //     {
            //         src: cardImg,
            //         name: 'Лидия Даниловна Слабченко',
            //         post: 'Отдел контроля качества',
            //         tel: '+7 918 197-01-97',
            //     },
            //     {
            //         src: cardImg,
            //         name: 'Лидия Даниловна Слабченко',
            //         post: 'Отдел контроля качества',
            //         tel: '+7 918 197-01-97',
            //     },
            //     {
            //         src: cardImg,
            //         name: 'Лидия Даниловна Слабченко',
            //         post: 'Отдел контроля качества',
            //         tel: '+7 918 197-01-97',
            //     },
            // ],
            pageOfItems: this.newsItems,
            customLabels
        }
    },

    methods: {
        onChangePage(pageOfItems) {
            // update page of items
            this.pageOfItems = pageOfItems;
        }
    }
}
</script>

<template lang="pug">
Layout
    Breadcrumbs(title="Онлайн оценка" :links="breadcrumbs")
    Banner(title="Оценить недвижимость онлайн" src="images/onlinerating.jpg" noMargin)
    InternalNav( :internalNavItems="internalNavItems" marginBottom='30')
    container
        .title
            h2 Калькулятор оценки недвижимости онлайн
        .text( v-html="fetchedText" )
        .onlinerating-message
            p В данный момент экспресс-оценка доступна только для квартир в городе Краснодар.
    .onlinerating-map
        .onlinerating-map--title
            span Выберите район местоположения объекта
        .onlinerating-map--box
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Af4b6e0d4e48d5b137f158f860a6f342d9412cd263267d090ee58d1e7350f569a&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
        container
            .onlineratin-calc
                ul.onlineratin-calc--list
                    li.onlineratin-calc--item
                        .onlineratin-calc--name
                            span Район
                        v-select(:options="selects" v-model="selected" :clearable="false")
                        //- .onlineratin.calc--input
                            //- .form-input
                                //- label
                                    input(type="text" name="name")
                                    span  Имя
                    li.onlineratin-calc--item
                        .onlineratin-calc--name
                            span Площадь
                        .onlineratin.calc--input
                            .form-input
                                label
                                    input(type="text" name="name")
                                    span  Укажите площадь
                    li.onlineratin-calc--item
                        .onlineratin-calc--name
                            span Этаж
                        v-select(:options="selectsStage" v-model="selectedStage" :clearable="false")
                        //- .onlineratin.calc--input
                            .form-input
                                label
                                    input(type="text" name="name")
                                    span  Выберите этаж
                    li.onlineratin-calc--item
                        .onlineratin-calc--name
                            span Тип планировки
                        .onlineratin.calc--input
                            .form-input
                                label
                                    input(type="text" name="name")
                                    span  Выберите тип планировки
                .onlineratin-calc--btn.btn-default
                    button Рассчитать
                .onlineratin-calc--varn
                    span *
                    span  Расчет стоимости объекта является примерным и может меняться от дополнительных факторов: состояние ремонта, наличие балкона, материал стен, тип дома, наличие мебели.
    Consultation(:tabs="tabs" :tabsSlider="tabsSlider" title="Бесплатная консультация экспертов" consultationText="Мы даем бесплатную консультацию по любому интересующему вас вопросу. Оставьте ваш контакт, мы назначим время звонка и поможем вам принять рациональное решение." consultationTitle="Получите бесплатную консультацию" scrollClass="scroll-block")

</template>
