<script> 
import routes from '../../../routes.js'

export default {
    data() {
    return {
        routes,
        isMob: false,
        activeSubmenu: false,
        isSubmenuActive: true,
        showOverlay: false,
        activeSubSubmenu: false,
        isSubSubmenuActive: true,
        location: '/' + window.location.pathname.split('/').reverse()[0], 
    }
  }, 
  methods: {
      disableMobSubMenu() {
          if(this.isMob) {
              this.activeSubmenu = null
              this.isSubmenuActive = true
          }
      },
      showSubmenu(index) {
          if(this.isMob) {
              this.activeSubmenu = index
              this.isSubmenuActive = false
          }
      },
      showSubSubmenu(index) {
          if(this.isMob) {
              if(this.activeSubSubmenu === index) {
                  this.activeSubSubmenu = null
                  this.isSubSubmenuActive = true
              } else {
                  this.activeSubSubmenu = index
                  this.isSubSubmenuActive = false
              } 
          }
      },

        onShowOverlay() {
            $('.overlay_menu').show()

        },
        onHideOverlay() {
            $('.overlay_menu').hide()

        }
  },
  mounted() {
    if($(window).width() < 992) {
        this.isMob = true;
    } 
},
}  

</script>


<template lang="pug">

    ul.menu

        li.menu-list(v-for="(item, index) in routes" @mouseover="onShowOverlay" @mouseleave="onHideOverlay" )
            template(v-if="isMob && item.name !='Контакты' && item.name !='Недвижимость'")
                span(@click="showSubmenu(index)" v-if="isSubmenuActive") {{ item.name }}
            template(v-else)
                template(v-if="item.name === 'Недвижимость'")
                    span(@click="showSubmenu(index)" v-if="isSubmenuActive")
                a(:href="item.path"  v-if="isSubmenuActive" :class="location === item.path ?' active' : ''" ) {{ item.name }}
            template(v-if="item.items")
                ul.submenu(:class="index === activeSubmenu ? 'active' : ''")
                    li.submenu-title-mob(@click="disableMobSubMenu" ) {{ item.name }}
                    li.submenu-list(v-for="(firstSub, indexSub) in item.items" )
                        //- template(v-if="location === item.path ? item.classes += ' active' : ''")
                        a(:href="firstSub.path" :data-nav-icon="firstSub.icon" :class=" 'submenu-link ' + firstSub.classes + (location === firstSub.path ? item.classes += ' active' : '')" ) {{ firstSub.name }}  
                        template(v-if="firstSub.items")
                            span.sumbenu--arrow(:class="isSubSubmenuActive ? '' : 'active'" @click="showSubSubmenu(indexSub)")
                            ul.submenu-sub(:class="indexSub === activeSubSubmenu ? 'active' : ''")
                                li.submenu-item(v-for="itemsub in firstSub.items")
                                    a(:href="itemsub.path" :class="location === itemsub.path ?' active' : ''" ) {{ itemsub.name }} 
        

</template>