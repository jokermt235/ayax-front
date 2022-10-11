<script>
import Layout from '../components/layout/layout'
import Banner from '../components/blocks/banner/banner.vue'
import container from '../components/layout/container.vue'
import Docs from '../components/blocks/docs/docs.vue'
import Title from '../components/layout/title'
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'

export default {
    name: 'App',
    components: {
        Layout,
        Title,
        Breadcrumbs,
        Banner,
        container,
        Docs,
    },
    data() {
        return {
            fetchedText: '<div class="seo-text"><p>Обработка данных – важнейший функциональный элемент работы любой компании и в целом, клиентоориентированного бизнеса. Реалии таковы, что очень многие процессы: взаимодействие внутри фирм, коммуникации с банками, проведение сделок, требуют применения целых массивов конфиденциальных сведений.</p><p>В <a href="/agentstvo-nedvizhimosti-krasnodar/" title="История развития агентства недвижимости Краснодара">агентстве</a>&nbsp;недвижимости "АЯКС" действует отлаженная система обработки персональной информации, которая исключает ее нецелевое использование. Мы крайне бережно относимся к хранению сведений и контролируем все процессы, чтобы информацию использовали только в интересах клиентов.</p><p>Информационная обработка данных осуществляется строго в рамках Конституции Российской Федерации.</p> </div>',
        }
    }
}
</script>

<template lang="pug">
Layout
    Breadcrumbs(title="Обработка персональных данных " )
    Banner(title='Обработка персональных данных в "АЯКС"' title29 src="images/pdp-bg.jpg" bannerBlur)
    container(extraClass="no-padding")
        .text(v-html="fetchedText")
    Docs(btnName="<b>Загрузить</b> <small>(pdf, 13.65 Мб)</small>" docLink="https://www.ayax.ru/upload/iblock/d89/d89ea6cb3b664beb7ba0ac2b61f4072c.pdf" text="Политика конфиденциальности 2020" addClass="d-none")
</template>
