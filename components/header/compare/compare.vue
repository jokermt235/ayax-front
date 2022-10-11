
<script> 

export default {
    components: {

    },
    data: function(){
        return{
            inStore: 0,
            classes: 'header-top--link icon-compare',
            isMob: false,
        }
    },
    methods: {
       
    },
    mounted() {
        if($(window).width() > 992) {
            let storage = localStorage.getItem('itemsInCompare') 
            let counter = 0;  
            if(storage && storage != 0) {
                storage.split(',').map(item => {
                    if(item != '' && item != undefined && item != null) {
                        counter++ 
                    }
                }) 
                this.inStore = counter
            }
        }

        if($(window).width() < 992) {
            let storage = localStorage.getItem('itemsInCompare') 
            if(storage) {
                this.classes = 'compare-mob active';
            } else {
                this.classes = 'compare-mob';
            }

            this.isMob = true;
        } 

    }
}

</script>


<template lang="pug">
    a(href="/comparison" :class="classes") {{ inStore }}
</template>
