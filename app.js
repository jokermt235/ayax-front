/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
 require('./bootstrap');
 import routes from './vue-routes'
 import Vuex from 'vuex';

 window.Vue = require('vue/dist/vue.js')
 window.Vuex = Vuex;

 Vue.use(Vuex);
 Vue.config.productionTip = true

 import JwPagination from 'jw-vue-pagination';

 Vue.component('jw-pagination', JwPagination);

 import VuePictureSwipe from 'vue-picture-swipe';

 Vue.component('vue-picture-swipe', VuePictureSwipe);
 Vue.component('App', require('./App.vue').default);
 Vue.component('kupitzhilye', require('./views/kupitzhilye.vue').default);
 Vue.component('kvartiry', require('./views/kvartiry.vue').default);
 Vue.component('ipotekakrasnodare', require('./views/ipotekakrasnodare.vue').default);
 Vue.component('snyatzhilye', require('./views/snyatzhilye.vue').default);
 Vue.component('kottedzhnyeposelki', require('./views/kottedzhnyeposelki.vue').default);
 Vue.component('detailskidki', require('./views/detailskidki.vue').default);
 Vue.component('programma-loyalnosti', require('./views/programma-loyalnosti.vue').default);
 Vue.component('rieltorskie-uslugi', require('./views/rieltorskie-uslugi.vue').default);
 Vue.component('skidkinedvizhimost-krasnodara', require('./views/skidkinedvizhimost-krasnodara.vue').default);
 Vue.component('novosti', require('./views/novosti.vue').default);
 Vue.component('prodat-nedvizhimost', require('./views/prodat-nedvizhimost.vue').default);
 Vue.component('ipotechnyebrokery', require('./views/ipotechnyebrokery.vue').default);
 Vue.component('ipotaktsii', require('./views/ipotaktsii.vue').default);
 Vue.component('ipotaktsii-detail', require('./views/detailskidki.vue').default);
 Vue.component('news-detail', require('./views/novosti-detail.vue').default);
 Vue.component('dlya-zhilya', require('./views/dlya-zhilya.vue').default);
 Vue.component('krym-pokupka-zhilya', require('./views/krym-pokupka-zhilya.vue').default);
 Vue.component('kommercheskayanedvizhimost', require('./views/kommercheskaya-nedvizhimost.vue').default);
 Vue.component('potrebitelskiy-kredit', require('./views/potrebitelskiy-kredit.vue').default);
 Vue.component('voennaya', require('./views/voennaya.vue').default);
 Vue.component('kredit-zalog-nedvizhimosti', require('./views/kredit-zalog-nedvizhimosti.vue').default);
 Vue.component('istorii-vozvrashcheniya', require('./views/istorii-vozvrashcheniya.vue').default);
 Vue.component('istorii-uspekha', require('./views/istorii-uspekha.vue').default);
 Vue.component('obuchenie-rieltorov-krasnodare', require('./views/obuchenie-rieltorov-krasnodare.vue').default);
 Vue.component('rabota-rieltorom-krasnodare', require('./views/rabota-rieltorom-krasnodare.vue').default);
 Vue.component('vakansii-nedvizhimosti-krasnodara', require('./views/vakansii-nedvizhimosti-krasnodara.vue').default);
 Vue.component('skidki-nedvizhimost-krasnodara', require('./views/skidki-nedvizhimost-krasnodara.vue').default);
 Vue.component('yuridicheskie-uslugi-krasnodare', require('./views/yuridicheskie-uslugi-krasnodare.vue').default);
 Vue.component('yuristynedvizhimosti', require('./views/yuristynedvizhimosti.vue').default);
 Vue.component('yuridicheskienews', require('./views/yuridicheskienews.vue').default);
 Vue.component('yuridicheskie-uslugi-krasnodare-pereplanirovka-kvartir', require('./views/yuridicheskie-uslugi-krasnodare-pereplanirovka-kvartir.vue').default);
 Vue.component('yuridicheskie-uslugi-krasnodare-kadastr-geodeziya', require('./views/yuridicheskie-uslugi-krasnodare-kadastr-geodeziya.vue').default);
 Vue.component('yuridicheskie-uslugi-krasnodare-predstavitelstvo-sude', require('./views/yuridicheskie-uslugi-krasnodare-predstavitelstvo-sude.vue').default);
 Vue.component('yuridicheskie-uslugi-krasnodare-soprovozhdenie-sdelok', require('./views/yuridicheskie-uslugi-krasnodare-soprovozhdenie-sdelok.vue').default);
 Vue.component('otsenka-krasnodare', require('./views/otsenka-krasnodare.vue').default);
 Vue.component('otsenka-krasnodare-spetsialisty', require('./views/otsenka-krasnodare-spetsialisty.vue').default);
 Vue.component('otsenkakrasnodarenovosti', require('./views/otsenkakrasnodarenovosti.vue').default);
 Vue.component('otsenka-krasnodare-kvartiry-komnaty', require('./views/otsenka-krasnodare-kvartiry-komnaty.vue').default);
 Vue.component('otsenka-krasnodare-doma', require('./views/otsenka-krasnodare-doma.vue').default);
 Vue.component('otsenka-krasnodare-zemlya', require('./views/otsenka-krasnodare-zemlya.vue').default);
 Vue.component('otsenka-krasnodare-dtp-ushcherb', require('./views/otsenka-krasnodare-dtp-ushcherb.vue').default);
 Vue.component('otsenka-krasnodare-avtomobili', require('./views/otsenka-krasnodare-avtomobili.vue').default);
 Vue.component('otsenka-krasnodare-biznes', require('./views/otsenka-krasnodare-biznes.vue').default);
 Vue.component('otsenka-krasnodare-zdaniya-sooruzheniya', require('./views/otsenka-krasnodare-zdaniya-sooruzheniya.vue').default);
 Vue.component('otsenka-krasnodare-oborudovanie-mashiny', require('./views/otsenka-krasnodare-oborudovanie-mashiny.vue').default);
 Vue.component('otsenka-krasnodare-osparivanie-stoimosti-uchastkov', require('./views/otsenka-krasnodare-osparivanie-stoimosti-uchastkov.vue').default);
 Vue.component('otsenka-krasnodare-sudebnaya-ekspertiza', require('./views/otsenka-krasnodare-sudebnaya-ekspertiza.vue').default);
 Vue.component('otsenka-krasnodare-pereotsenka-osnovnyh-sredstv', require('./views/otsenka-krasnodare-pereotsenka-osnovnyh-sredstv.vue').default);
 Vue.component('otsenka-krasnodare-finansovyi-analiz', require('./views/otsenka-krasnodare-finansovyi-analiz.vue').default);
 Vue.component('kontakty', require('./views/kontakty.vue').default);
 Vue.component('kachestvo-obsluzhivaniya-klientov-krasnodare', require('./views/kachestvo-obsluzhivaniya-klientov-krasnodare.vue').default);
 Vue.component('obrabotka-personalnyh-dannyh', require('./views/obrabotka-personalnyh-dannyh.vue').default);
 Vue.component('vopros-otvet', require('./views/vopros-otvet.vue').default);
 Vue.component('karta-rayonov-krasnodara', require('./views/karta-rayonov-krasnodara.vue').default);
 Vue.component('stati', require('./views/stati.vue').default);
 Vue.component('articledetail', require('./views/articledetail.vue').default);
 Vue.component('ipoteka-krasnodare', require('./views/ipoteka-krasnodare.vue').default);
 Vue.component('district-detail', require('./views/district-detail.vue').default);
 Vue.component('agentstvo-nedvizhimosti-krasnodar', require('./views/agentstvo-nedvizhimosti-krasnodar.vue').default);
 Vue.component('novosti-nedvizhimosti-krasnodara', require('./views/novosti-nedvizhimosti-krasnodara.vue').default);
 Vue.component('poleznyestati', require('./views/poleznyestati.vue').default);
 Vue.component('rieltory-krasnodara', require('./views/rieltory-krasnodara.vue').default);
 Vue.component('sotrudniki', require('./views/sotrudniki.vue').default);
 Vue.component('singleprofile', require('./views/singleprofile.vue').default);
 Vue.component('otzyvy-ayaks-rielt-krasnodar', require('./views/otzyvy-ayaks-rielt-krasnodar.vue').default);
 Vue.component('partnery-kompanii-nedvizhimosti-krasnodara', require('./views/partnery-kompanii-nedvizhimosti-krasnodara.vue').default);
 Vue.component('sertifikaty-agentstva-nedvizhimosti-krasnodara', require('./views/sertifikaty-agentstva-nedvizhimosti-krasnodara.vue').default);
 Vue.component('partnerstvo-agentstvom-nedvizhimosti-krasnodara', require('./views/partnerstvo-agentstvom-nedvizhimosti-krasnodara.vue').default);
 Vue.component('standards-of-ethics', require('./views/standards-of-ethics.vue').default);
 Vue.component('favorite', require('./views/favorite.vue').default);
 Vue.component('comparison', require('./views/comparison.vue').default);
 Vue.component('karta-sayta', require('./views/karta-sayta.vue').default);
 Vue.component('user', require('./views/user.vue').default);
 Vue.component('kottedzhnyeposelki-detail', require('./views/kottedzhnyeposelki-detail.vue').default);
 Vue.component('onlinerating', require('./views/onlinerating.vue').default);
 Vue.component('otsenka-krasnodarepartnery', require('./views/otsenka-krasnodarepartnery.vue').default);
 Vue.component('yuristy-nedvizhimosti', require('./views/yuristy-nedvizhimosti.vue').default);
 Vue.component('yuristy-novosti', require('./views/yuristy-novosti.vue').default);
 Vue.component('person-link', require('./views/person-link.vue').default);
 Vue.component('kupit-kvartiry',  require('./views/kupit-kvartiry.vue').default);
 Vue.component('kupit-dom',  require('./views/kupit-dom.vue').default);
 Vue.component('kupit-comerciyu',  require('./views/kupit-komerciyu.vue').default);
 Vue.component('kupit-novostroyku',  require('./views/kupit-novostroyku.vue').default);
 Vue.component('kupit-uchastok',  require('./views/kupit-uchastok.vue').default);

 import store from "./store";
 import VueRouter from 'vue-router';

 Vue.use(VueRouter);

 const app = new Vue({
   el: '#app',
   store: new Vuex.Store(store),
   router : new VueRouter({routes: routes, mode: 'history'}),
   data: {
     currentRoute: window.location.pathname
   },
   computed: {
     ViewComponent () {
       const matchingView = routes[this.currentRoute]
       return matchingView
         ? require('./' + matchingView + '.vue')
         : require('./views/404.vue')
     }
   },
 })

