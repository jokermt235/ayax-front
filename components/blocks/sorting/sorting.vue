<script>
import container from '../../layout/container'

export default {
    props: {
        sorting: Array
    },
    components: {
        container,
    },
    data() {
        return {
            showMenu: false,
            isActive: false,
            opened: false,
            sortingVisible: false,
            isMob: false,
        }
    },
    methods: {
        flatViewTrigger() {
            this.isActive = !this.isActive
            this.$emit('toggleFlatView', this.isActive)
        },
        toggleMap() {
            this.opened = !this.opened
            this.$emit('getToggleMap', {
                opened: this.opened
            })
        },
        sortingShow() {
            this.sortingVisible = !this.sortingVisible
        },
        sortingChange(data) {
            this.$emit('sortingData', {
                data
            })
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
    container(extraClassRow="row-cols-1 gy-4" extraClass="section-nopadding")
        //- .col
            .sort
                .sort-fast
                    .sort-fast--title
                        span Быстрый поиск:
                    ul.sort-fast--list
                        li.sort-fast--item
                            span 1-комнатные
                        li.sort-fast--item
                            span 2-комнатные
                        li.sort-fast--item
                            span 3-комнатные
                        li.sort-fast--item
                            span 4-комнатные
        .col
            .sort
                .sort-left
                    .sort-view
                        .sort-view--btn.view-card(@click="flatViewTrigger(true)" :class="this.isActive ? 'active' : ''")
                        .sort-view--btn.view-strip(@click="flatViewTrigger(false)" :class="this.isActive ? '' : 'active'")
                    .sort-quantity
                        span 1231
                        span объектов
                    .sort-dropdown
                        .sort-dropdown--name(@click="sortingShow" v-bind:class="{ active: showMenu }"  v-on:click="showMenu = !showMenu")
                            span сортировка (по умолчанию)
                            span
                                <svg  viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.2 275.4c0-8.6 3.4-17.401 10-24.001 13.2-13.2 34.8-13.2 48 0l451.8 451.8 445.2-445.2c13.2-13.2 34.8-13.2 48 0s13.2 34.8 0 48L542 775.399c-13.2 13.2-34.8 13.2-48 0l-475.8-475.8c-6.8-6.8-10-15.4-10-24.199z" />
                                </svg>
                        ul.sort-list(:class="sortingVisible ? 'active' : ''")
                            li.sort-item(v-for="(sort, i) in sorting" :key="i")
                                label(class="custom-radio")
                                    input(type="radio" name="apartments-sort" :value="sort.name" @change="sortingChange(sort.name)")
                                    span {{ sort.text }}
                .sort-right(v-if="!isMob")
                    .sort-map
                        span Показать карту
                        div
                            <label class="switch">
                                <input type="checkbox" class="switch-fade" @change="toggleMap">
                                <span class="switch-slider round"></span>
                            </label>
</template>


