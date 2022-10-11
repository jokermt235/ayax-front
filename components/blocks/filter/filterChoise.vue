<script>

export default {
    name: 'filterChoise',
    props: {
        main: Boolean,
        filters: Array,
        filterNum: Number,
    }, 
    data() {
        return {  
            toggleFilterMob: false,
        }
    },
    methods: {
        toggleContent() {
            if($(window).width() < 992) { 
                this.toggleFilterMob = !this.toggleFilterMob;
                    if (this.toggleFilterMob == true) {
                        $(".filter-choice-wrapper").slideDown();
                    } else {
                        $(".filter-choice-wrapper").slideUp();
                    } 
                }
        },
        changeFilter(index,filterFilters) {
            this.filterNum = index
            this.activeFilters = filterFilters
            this.fetchedFilters = this.filters[index].fetchedFiltersItem
            this.staticFilters = this.filters[index].staticFiltersItem
            
            if($(window).width() < 992) {
                this.toggleFilterMob = false
                $(".filter-choice-wrapper").slideUp();
            }
        },
    }
}

</script>


<template lang="pug">
    .filter-choice(v-if="main" )
        
        .filter-choice-mob-active(v-html="filters[filterNum].name" @click="toggleContent")
        .filter-choice-wrapper
            template(v-for="(item, index) in filters")
                .filter-choice--btn(:class="index === filterNum ? 'active' : ''" @click="changeFilter(index, item.filters)")
                    div(v-html="item.image")
                    <span>{{ item.name }}</span>
</template>

