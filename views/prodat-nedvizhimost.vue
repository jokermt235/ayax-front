<script>
import Layout from "../components/layout/layout";
import Banner from '../components/blocks/banner/banner.vue'
import container from '../components/layout/container'
import Awards from '../components/blocks/awards/awards.vue'
import Profitably from '../components/blocks/profitably/profitably.vue'
import Form from '../components/blocks/form/form.vue'
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'

export default {
    name: 'App',
    components: {
        Banner,
        container,
        Awards,
        Layout,
        Form,
        Breadcrumbs,
        Profitably
    },
    props: {
        title: String,

    },
    data() {
        return {
            awardsItems: [
                {
                    name: 'Продажа жилой недвижимости (на вторичном рынке)	',
                    description: '3% от итоговой стоимости объекта, но не менее 100 тыс.руб.'
                },
                {
                    name: 'Продажа коммерческой недвижимости',
                    description: 'при стоимости объекта до 50 млн. руб. - 3%, свыше 50 млн.руб. - 6%'
                },
            ],
            fetchedText: '<div class="seo-text"><p>Чтобы продать недвижимость в Краснодаре, не обязательно обладать специальными навыками. Достаточно следовать определенным принципам и правилам.</p><p>Часто на сайтах объявлений нет практически никакой информации, разве что тип и цена. Чтобы сегодня успешно продать жилье, этого явно недостаточно.</p><p>Обычно самостоятельная <a title="Продажа квартир" href="/kvartiry/">продажа квартиры</a> проходит сложно, рекомендуем не пренебрегать услугами профильных специалистов. Если вам понадобится оперативная консультация, позвоните или напишите нам! В агентстве недвижимости "АЯКС" вы найдете ответы на любые вопросы, связанные с недвижимым имуществом.</p></div>',
            profitablyItem: [
                {
                    name: 'Свяжитесь с нами',
                    text: 'Позвоните или оставьте заявку на сайте и мы вам перезвоним'

                },
                {
                    name: 'Приходите на встречу',
                    text: 'Наш агент встретит вас с готовой аналитикой в одном из 25 офисов и поможет составить индивидуальный план продажи'
                },
                {
                    name: 'Наймите эксперта',
                    text: 'Заключите соглашение о сотрудничестве и оплатите услуги только по факту выполненной работы'
                },
                {
                    name: 'Предпродажная подготовка',
                    text: 'Мы обеспечим профессиональную фотосъемку, премиальное продвижение* вашего объекта недвижимости на 48 рекламных площадках партнеров и в результате приведем больше покупателей'
                },
                {
                    name: 'Презентация потенциальным покупателям',
                    text: 'Обеспечим безопасный показ объекта по согласованному с вами графику. Ваш персональный агент будет предоставлять вам полную информацию о ходе продажи'

                },
                {
                    name: 'Есть покупатель – поможем договориться',
                    text: 'Согласовываем условия, сроки и стоимость сделки'
                },
                {
                    name: 'Получите задаток',
                    text: 'Вы заключаете с покупателем предварительный договор и получаете задаток за объект'
                },
                {
                    name: 'Сделка',
                    text: 'Заключается основной договор и производится расчет'
                }
            ],
            inputs: [
                {
                    name: 'sale-email',
                    title: 'Email',
                    type: 'email',
                    required: true
                },
                {
                    name: 'sale-phone',
                    title: 'Телефон',
                    type: 'number',
                    required: true
                },
                {
                    name: 'sale-name',
                    title: 'Контакное лицо',
                    required: true
                },
                {
                    name: 'sale-usertext',
                    title: 'Дополнительная информация',
                    inputTextarea: true
                },
            ],
            checkboxes: [
                {
                    name: 'sale-agree',
                    title: 'Даю согласие на обработку персональных данных в соответствии с ',
                    link: 'some.com',
                    linkText: 'обработку персональных данных',
                }
            ],
            bannerBtns: [
                {
                    path: '#',
                    title: 'Подать заявку',
                    class: 'js-scroll-form'
                }
            ],
            //selects: ['Квартира','Дом' ],
            sendRequestButton : {
                submitButtonOnClick : ()=>{
                    this.sendRequest();
                }
            }
        }
    },
    mounted(){
        this.$store.dispatch('estate/list');
    },
    methods : {
        sendRequest(){
            let text = document.querySelector("form .vs__selected").innerText;
            let id = this.$store.getters['estate/records'].find(element =>element.name === text.trim()).id;
            let data = {
                agreement : document.querySelector("input[name=sale-agree]").value === 'on' ? 1 : 0 ,
                name : document.querySelector("input[name=sale-name]").value,
                estate_type_id : id,
                phone : document.querySelector("input[name=sale-phone]").value,
                email : document.querySelector("input[name=sale-email]").value,
                comment : document.querySelector("textarea[name=sale-usertext]").value,
                url : window.location.href
            };
            this.$store.dispatch('realty/send', data);
        }
    },
    computed : {
        selects(){
            return this.$store.getters['estate/records'].map(
                item=>item.name
            );
        }
    }
}
</script>

<template lang="pug">
    Layout
        Breadcrumbs(title="Продать недвижимость")
        Banner( src='/images/sell-bg.jpg' title='Продать недвижимость в Краснодаре'  text= 'Сколько стоит моё жильё?' :bannerBtns="bannerBtns" bannerBlur title29 )
        container
            .text( v-html="fetchedText" )
        Profitably(:profitablyItem="profitablyItem" title="8 шагов к успешной продаже")
        container
            .big-form.scroll-block
               Form(:inputs="inputs" 
               :checkboxes="checkboxes"
               :submitButton="sendRequestButton"
               :selects="selects" selectPlaceholder="Что продаёте?" 
               selectTitle="Что продаёте?" title="Отправьте заявку прямо сейчас" subtitle="Продаете недвижимость?" subText=" Оставьте заявку, и наш менеджер свяжется с вами в ближайшее время.")
        Awards( :awardsItems="awardsItems")
</template>
