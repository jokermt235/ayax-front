<script>
import Layout from "../components/layout/layout";
import container from '../components/layout/container.vue'
import Banner from '../components/blocks/banner/banner'
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'
 
export default {
  name: 'sertificates',
  components: {
    Layout,
    Banner, 
    Breadcrumbs,
    container,
  },
  props: {
  },
  data() {
    return {
        fetchedText: '<div class="seo-text"><p>Сертификаты для <a title="Информация об агентстве недвижимости &quot;АЯКС-Риэлт&quot;" href="/agentstvo-nedvizhimosti-krasnodar/">агентств недвижимости</a>&nbsp;имеют огромное значение. В городе работают не менее 3 000 риэлторов, на рынке представлены более 100 профильных компаний, потому выбирать нужно тщательно. А различные сертификаты и награды позволяют определить самых надежных представителей отрасли. У "АЯКС-Риэлт" сейчас уже свыше 30 различных дипломов, свидетельствующих о высокой квалификации персонала компании, прекрасной динамике развития бизнеса, активном участии в развитии и совершенствовании сектора риэлторских сервисов.</p><p>Будучи членом ТПП Краснодарского края, Российской Гильдии Риэлторов и других профорганизаций, сервис недвижимости "АЯКС" не только помогает развивать рынок недвижимости, но еще регулярно участвует в конференциях и форумах, получая доступ к наиболее современным инструментам и технологиям работы.</p><p>Наше агентство уже много раз становилось отраслевым лидером по различным показателям. Сервис недвижимости "АЯКС" неоднократно признавали лучшей брокерской компанией юга России и даже страны, а также отмечали в числе лучших работодателей Кубани. Основатель и руководитель "АЯКСа" Александр Кутченко также получил десятки разных дипломов и благодарственных писем от крупных компаний и профорганизаций. Кроме того, сайт ayax.ru назвали лучшим среди сетевых ресурсов региональных агентств недвижимости. На этой страничке вы можете ознакомиться с подробным перечнем наших достижений.</p></div>',
    }
  },
  mounted(){
    this.$store.dispatch('certificate/list');
  },
  computed : {
    galleries(){
      let items = [];
      items = this.$store.getters["certificate/records"].map(item=>{
        return {
          title: item.name, 
          imageList : item.certificate.map(item1=>{
            return {
              title : item1.name,
              images: [{w: 1200,h: 900, src: '/images/serttest.jpg', thumbnail: '/images/serttest.jpg' }]
            }
          })
        }
      });
      return items;
    }
  }
}
</script>

<template lang="pug">
Layout
    Breadcrumbs(title="Сертификаты и награды")
    Banner(title="Сертификаты и награды" src="images/certificates-bg.jpg")
    container
        .title
            h2 Сертификаты и награды "АЯКС"
        template(v-for="gallery in galleries")
            h2.gallery--title {{ gallery.title }}
            .gallery-sert.gallery.row.gy-4
                .col-12.col-sm-6.col-md-4.col-lg-3(v-for="(item, index) in gallery.imageList" :key="index")
                    vue-picture-swipe(:items="item.images")
                    p {{ item.title }}
    container
        .text( v-html="fetchedText" )
</template>
