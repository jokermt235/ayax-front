<script>
import container from '../../layout/container'
import Modal from '../../modal/modal.vue'
import Form from '../../blocks/form/form.vue'
 
export default {
    props: {
        main: Boolean,
        reset: Boolean,
        hideMap: {
            type: String,
            default: ''
        },
    },
    components: {
        Modal,
        Form,
        container, 
    },
    data() {
        return {
            filterNum: 0,
            isMob: false,
            isActive: false,
            openedFilter: null,
            toggleFilterMob: false,
            subscribeShow: false,
            loginInputs: [
                {
                    name: 'call-name',
                    title: 'Имя ',
                    type: 'text'
                },
                {
                    name: 'call-tel',
                    title: 'Телефон',
                    type: 'number',
                    required: true
                },
            ],
            subscribeCheckboxes: [
                {
                    name: 'agree',
                    title: 'Даю согласие на обработку персональных данных в соответствии с ',
                    link: 'some.com',
                    linkText: 'политикой конфиденциальности',
                }
            ],
            filterItems: [],
            filterBoxMore: false,
            openedFilterClass: '',
            activeFilters: ['Город','Район', 'Улица', 'Комнат', 'Стоимость', 'Площадь', 'Этаж', 'Ремонт', 'Балкон', 'Типы комнат', 'Материал стен'],
            fetchedFilters: null,
            staticFilters: null,
            filterText: [],
            selectedFilters : {},
            filter : {},
            dispatchers : [
                {
                    method : 'realtytab/loadFilter',
                    payload : {
                        url : 'realty/type/ownership/house/list',
                        filterParent : 'Дом',
                        filterChild : 'Тип',
                    }
                },
                {
                    method : 'realtytab/loadFilter',
                    payload : {
                        url : 'realty/type/balcony/list',
                        filterParent : false,
                        filterChild : 'Балкон',
                    }
                },
                {
                    method : 'realtytab/loadFilter',
                    payload : {
                        url : 'realty/type/wall/flat/list',
                        filterParent : 'Квартиры,Новостройки',
                        filterChild : 'Материал',
                    }
                },
                {
                    method : 'realtytab/loadFilter',
                    payload : {
                        url : 'realty/type/repair/flat/list',
                        filterParent : false,
                        filterChild : 'Ремонт',
                    }
                },
                {
                    method : 'realtytab/loadFilter',
                    payload : {
                        url : 'realty/type/repair/house/list',
                        filterParent : 'Дом',
                        filterChild : 'Ремонт',
                    }
                },
                {
                    method : 'realtytab/loadFilter',
                    payload : {
                        url : 'realty/type/room/count/house/list',
                        filterParent : 'Дом',
                        filterChild : 'Комнат',
                    }
                },
                {
                    method : 'realtytab/loadFilter',
                    payload : {
                        url : 'realty/type/room/count/flat/list',
                        filterParent : 'Квартиры,Новостройки',
                        filterChild : 'Комнат',
                    }
                },
                {
                    method : 'realtytab/loadFilter',
                    payload : {
                        url : 'realty/type/room/count/house/list',
                        filterParent : 'Дом',
                        filterChild : 'Комнат',
                    }
                },
                {
                    method : 'realtytab/loadFilter',
                    payload : {
                        url : 'realty/type/ownership/land/list',
                        filterParent : 'Участки',
                        filterChild : 'Тип',
                    }
                },
                {
                    method : 'realtytab/loadFilter',
                    payload : {
                        url : 'realty/type/bathroom/list',
                        filterParent : 'Дома',
                        filterChild : 'Санузел',
                    }
                },
                {
                    method : 'realtytab/loadFilter',
                    payload : {
                        url : 'realty/type/floor/total/house/list',
                        filterParent : 'Дома',
                        filterChild : 'Этажность',
                    }
                },
                {
                    method : 'realtytab/loadFilter',
                    payload : {
                        url : 'realty/type/gas/list',
                        filterParent : 'Дома',
                        filterChild : 'Газоснабжение',
                    }
                },
                {
                    method : 'realtytab/loadFilter',
                    payload : {
                        url : 'realty/type/target/list',
                        filterParent : 'Коммерция',
                        filterChild : 'Сделка',
                    }
                },
                {
                    method : 'realtytab/loadFilter',
                    payload : {
                        url : 'realty/type/category/commerce/list',
                        filterParent : 'Коммерция',
                        filterChild : 'Категория',
                    }
                },
                {
                    method : 'realtytab/loadFilter',
                    payload : {
                        url : 'realty/type/category/garage/list',
                        filterParent : 'Дома',
                        filterChild : 'Гараж',
                    }
                },
            ],
            subscribeButton : {
                submitButtonOnClick : ()=>{
                    this.subscribe();
                }
            },
        }
    },
    methods: {
        onSubscribe() {
            this.subscribeShow = !this.subscribeShow;
        },
        setSelectedNum(indexTop, filter, checked) {
            this.$store.dispatch('realtytab/fetchStreets', {id: filter.id, tab : this.filterNum, filterIndex : indexTop});
            this.filters[this.filterNum].checkedInputs = Object.assign(this.filters[this.filterNum].checkedInputs ,{[this.openedFilter]: checked.target.checked ? +this.filters[this.filterNum].checkedInputs[this.openedFilter] + 1 || 1 : +this.filters[this.filterNum].checkedInputs[this.openedFilter] - 1 })    
        },
        toggleFilter(index, filterName, target) {
            if(target.classList[1] == 'active' || target.parentNode.classList[1] == 'active') { //если клик на сам дропдаун или его детей и дропдаун уже активен
                this.openedFilterClass = '' //скрыть дропдаун
                this.openedFilter = null
            } else { 
                this.openedFilter = index
                 if(filterName === 'Район' || filterName ===  'Улица' ) { //если нужн широкий дропдаун
                    this.openedFilterClass = 'active wide'
                } else {
                    this.openedFilterClass = 'active'
                }
            }
        },

        documentClick(e){ //скрыть, если клик вне дропдауна
            let el = this.$refs.filterDropdown[0].className.split(' ')[0]
            // console.log(el)
            let target = e.target
            if ( el != target.classList[0] &&
                 el != target.parentNode.classList[0] &&
                !target.parentNode.classList.contains('filter-name') &&
                !target.parentNode.classList.contains('custom-checkbox') &&
                !target.parentNode.classList.contains('filter-inputs') &&
                !target.parentNode.classList.contains('filter-list') &&
                !target.parentNode.classList.contains('filter-list-search') ) {
              this.openedFilterClass = ''
            }
        },

        toggleMoreFilters() { 
            this.filterBoxMore = !this.filterBoxMore
        },

        changeFilter(index,filterFilters) {
            this.filterNum = index
            this.activeFilters = filterFilters
            this.fetchedFilters = this.filters[index].fetchedFiltersItem
            this.staticFilters = this.filters[index].staticFiltersItem 
            this.filterBoxMore = false
            
            if($(window).width() < 992) {
                this.toggleFilterMob = false
                $(".filter-choice-wrapper").slideUp();
            }
        },
        navigate(){
            let _form = document.querySelector("form[class='filter']");
            console.log(_form);
            _form.setAttribute('action',this.filters[this.filterNum].route);
            _form.submit();
            //this.$router.push({ path: this.filters[this.filterNum].route, query : this.activeFilters });
            //document.location.reload(true);
        },
        subscribe(){
            let call = {
                agreement : document.querySelector("input[name=agree]").value === 'on' ? 1 : 0 ,
                /*api_token (string) - токен авторизованного пользователя, если он сейчас авторизованн на сайте*/
                name : document.querySelector("input[name=call-name]").value,
                phone : document.querySelector("input[name=call-tel]").value,
                url : window.location.href
            };
            this.$store.dispatch('call/send', call);
        },

    },

    created () {
        document.addEventListener('click', this.documentClick)
    },
    destroyed () {
        document.removeEventListener('click', this.documentClick)
    },
    mounted() {
        this.$store.dispatch('realtytab/fetchRegeons');
        this.$store.dispatch('realtytab/fetchDistricts');
        this.dispatchers.forEach(item=>{
            this.$store.dispatch(item.method, item.payload);
        });
        this.fetchedFilters = this.filters[this.filterNum].fetchedFiltersItem
        this.staticFilters = this.filters[this.filterNum].staticFiltersItem

        if($(window).width() < 992) {
            this.isMob = true;
        } 

    },
    computed: {
        filteredItems() {
            return this.fetchedFilters[this.openedFilter]?.filter(c => {
              let filterText = this.filterText[this.openedFilter] ?? '';
               return c.name.toLowerCase().includes(filterText.toLowerCase())
             })

        },
        
        filters(){
            return this.$store.getters["realtytab/filters"];
        },
    },
    updated() {
        if(this.reset) {
            this.filters.map(item => item.checkedInputs = [])
            // console.log(this.reset)
            this.reset = false
        } else {
        }
    },
}
</script>

<template lang="pug">
container(:extraClass="main ? 'main-banner' : '' ")
    template(v-if="main")
        .main-title.title
            h1  Поможем <a href="#">продать</a> и купить недвижимость
        .main-banner--img
            img(src="images/pages/kupit-zhilye/banner-form.jpg")
    template(v-else)
        h1(style="font-size: 30px") Продажа квартир в Краснодаре
    .col
        .filter-choice(v-if="main")
            template(v-for="(item, index) in filters")
                .filter-choice--btn(:class="index === filterNum ? 'active' : ''" @click="changeFilter(index, item.filters)")
                    div(v-html="item.image")
                    <span>{{ item.name }}</span>
        form.filter
            .filter-box
                template(v-for="(item, indexTop) in filters[filterNum].filters")
                    .filter-dropdown(v-if="!item.more" :class="item.name === 'Комнат' || item.name === 'Стоимость' || item.name === 'Площадь' || item.name === 'Типы комнат' || item.name === 'Материал стен' || item.name === 'Материал' || item.name === 'Фасад' ? 'filter-dropdown--big' : ''")
                        .filter-name(@click="toggleFilter(indexTop, item, $event.target)" :class="indexTop === openedFilter ? openedFilterClass : ''" ref="filterDropdown")
                            span {{item.name}}
                            span.filter-selected(v-if="filters[filterNum].checkedInputs[indexTop]") {{filters[filterNum].checkedInputs[indexTop] }}
                            span.filter-dropdown-arrow
                                img(src="images/select-drop.svg")
                            //- показывать только нужный дропдаун
                            .filter-list
                                template
                                    .filter-list-search(v-if="item.fetchedFiltersItem.length !== 0 ")
                                        input(type="text" placeholder="Введите название" v-model="filterText[openedFilter]")
                                    template(v-for="(filter, index) in item.fetchedFiltersItem" )
                                        .filter-checkbox
                                            label.custom-checkbox
                                                <input type="checkbox"  :name="filter.name"  @change="setSelectedNum(indexTop, filter ,$event)">
                                                <span>{{ filter.name }}</span>
                                template
                                    template(v-for="(filter, index) in  item.staticFiltersItem")
                                        template(v-if="filter === 'price'")
                                            p стоимость
                                            .filter-inputs
                                                input(type="text" placeholder="стоимость от" name="filter-price-from")
                                                input(type="text" placeholder="до" name="filter-price-to")
                                        template(v-else-if="filter === 'space'")
                                            p общая
                                            .filter-inputs
                                                input(type="text" placeholder="общая от" name="filter-space-full")
                                                input(type="text" placeholder="до" name="filter-price-to")
                                            p жилая
                                            .filter-inputs
                                                input(type="text" placeholder="жилая от" name="filter-space-live")
                                                input(type="text" placeholder="до" name="filter-price-to")
                                            p кухни
                                            .filter-inputs
                                                input(type="text" placeholder="кухня от" name="filter-space-kitchen")
                                                input(type="text" placeholder="до" name="filter-price-to")
                                        template(v-else-if="filter === 'floor'")
                                            p этаж
                                            .filter-inputs
                                                input(type="text" placeholder="от" name="floor-from")
                                                input(type="text" placeholder="до" name="floor-to")
                                            p этажность
                                            .filter-inputs
                                                input(type="text" placeholder="от" name="floorfull-from")
                                                input(type="text" placeholder="до" name="floorfull-to")
                                        template(v-else-if="filter === 'area'")
                                            p Участок(сот.)
                                            .filter-inputs
                                                input(type="text" placeholder="от" name="floor-from")
                                                input(type="text" placeholder="до" name="floor-to")
                                        template(v-else-if="filter === 'facade'")
                                                p Метров
                                                .filter-inputs
                                                    input(type="text" placeholder="от" name="floor-from")
                                                    input(type="text" placeholder="до" name="floor-to")
                                        template(v-else)
                                            .filter-checkbox
                                                label.custom-checkbox
                                                    <input type="checkbox" :value="filter">
                                                    span {{ filter.name }}
                        
            .transition-group(v-if="filterBoxMore"  key="2")
                .filter-box
                    template(v-for="(item, indexTop) in filters[filterNum].filters")
                        .filter-dropdown(v-if="item.more" :class="item.name === 'Комнат' || item.name === 'Стоимость' || item.name === 'Площадь' || item.name === 'Типы комнат' || item.name === 'Материал стен'  || item.name === 'Материал' || item.name === 'Фасад' ? 'filter-dropdown--big' : ''")
                            .filter-name(@click="toggleFilter(indexTop, item, $event.target)" :class="indexTop === openedFilter ? openedFilterClass : ''" ref="filterDropdown")
                                span {{item.name}}
                                span.filter-selected(v-if="filters[filterNum].checkedInputs[indexTop]") {{filters[filterNum].checkedInputs[indexTop] }}
                                span.filter-dropdown-arrow
                                    img(src="images/select-drop.svg")
                                .filter-list
                                    template
                                        template(v-for="(filter, index) in  item.staticFiltersItem")
                                            template(v-if="filter === 'price'")
                                                p стоимость
                                                .filter-inputs
                                                    input(type="text" placeholder="стоимость от" name="filter-price-from")
                                                    input(type="text" placeholder="до" name="filter-price-to")
                                            template(v-else-if="filter === 'space'")
                                                p общая
                                                .filter-inputs
                                                    input(type="text" placeholder="общая от" name="filter-space-full")
                                                    input(type="text" placeholder="до" name="filter-price-to")
                                                p жилая
                                                .filter-inputs
                                                    input(type="text" placeholder="жилая от" name="filter-space-live")
                                                    input(type="text" placeholder="до" name="filter-price-to")
                                                p кухни
                                                .filter-inputs
                                                    input(type="text" placeholder="кухня от" name="filter-space-kitchen")
                                                    input(type="text" placeholder="до" name="filter-price-to")
                                            template(v-else-if="filter === 'floor'")
                                                p этаж
                                                .filter-inputs
                                                    input(type="text" placeholder="от" name="floor-from")
                                                    input(type="text" placeholder="до" name="floor-to")
                                                p этажность
                                                .filter-inputs
                                                    input(type="text" placeholder="от" name="floorfull-from")
                                                    input(type="text" placeholder="до" name="floorfull-to")
                                            template(v-else-if="filter === 'area'")
                                                p Участок(сот.)
                                                .filter-inputs
                                                    input(type="text" placeholder="от" name="floor-from")
                                                    input(type="text" placeholder="до" name="floor-to")
                                            template(v-else-if="filter === 'facade'")
                                                p Метров
                                                .filter-inputs
                                                    input(type="text" placeholder="от" name="floor-from")
                                                    input(type="text" placeholder="до" name="floor-to")
                                            template(v-else)
                                                .filter-checkbox
                                                    label.custom-checkbox
                                                        <input type="checkbox" :value="filter">
                                                        span {{ filter.name }}
                .filter-box.filter-box--check(key="1")
                    .filter-check--box
                        .filter-check--btn
                            <label>
                                <div class="checkbox">
                                    <input type="checkbox">
                                    <span class="checkbox-text">Вторичка</span>
                                </div>

                            </label>
                        .filter-check--btn
                            <label>
                                <div class="checkbox">
                                    <input type="checkbox">
                                    <span class="checkbox-text">В новостройке</span>
                                </div>
                            </label>
                        .filter-check--btn
                            <label>
                                <div class="checkbox">
                                    <input type="checkbox">
                                    <span class="checkbox-text">Первичка</span>
                                </div>

                            </label>
                    .filter-check--box
                        .filter-main--check
                            label.custom-checkbox
                                <input type="checkbox" :value="filter" :name="filter">
                                <span>Ипотека</span>
                        .filter-main--check
                            label.custom-checkbox
                                <input type="checkbox" :value="filter" :name="filter">
                                <span>В стряищихся домах</span>

            .filter-main
                .filter-main--left
                    .filter-main--check
                        <label>
                            <div class="checkbox">
                                <input type="checkbox">
                                    <span></span>
                            </div>
                            <span class="checkbox-text">продается только в АЯКС</span>
                        </label>
                .filter-main--right
                    .filter-main--check
                        <label>
                            <div class="checkbox">
                                <input type="checkbox">
                                    <span></span>
                            </div>
                            <span class="checkbox-text">продается только в АЯКС</span>
                        </label>
                    .filter-main--more(@click="toggleMoreFilters")
                        span
                            img(src="images/select-drop.svg")
                        span Расширенный поиск
                    .filter-main--map
                        span
                            img(src="images/point.svg")
                        span Показать на карте
                    .fitler-main--btn(@click="navigate")
                        a.btn.btn-default Показать
    template(v-if="main")
        .col-12
            a.best-reward(href="/novosti-nedvizhimosti-krasnodara/ayaks-poluchil-4-nagrady-na-mezhdunarodnom-kongresse-po-nedvizhimosti/")
                .best-reward--img
                    img(src="https://www.ayax.ru/images/prise.svg")
                .best-reward--text Лучшая региональная риэлторская компания
            .btn-banner-main.btn-default(v-on:click="onSubscribe")
                span Запись на онлайн-консультацию
        Modal(:visible="subscribeShow" @toggleModal="onSubscribe" title="Запись на онлайн-консультацию" )
            Form(:inputs="loginInputs" :checkboxes="subscribeCheckboxes" :submitButton="subscribeButton" modal horizontal subtitle=" Попробуйте онлайн-консультацию в деле!&nbsp;<br>Получите ответы на любые вопросы, связанные с недвижимостью.<br>Оставьте заявку, наш специалист свяжется с вами и согласует удобное для вас время." )
</template>
