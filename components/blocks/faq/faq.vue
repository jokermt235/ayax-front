<script>

export default {
    name: 'FAQ',
    props: ['faq', 'index', 'open', 'filtered'],
    data() {
        return {
            isActive: false,

        }
    },
    watch: { 
        filtered: function() {
           if(this.faq.answer.toLowerCase().includes(this.filtered)) {
               this.isActive = true
           } else {
               this.isActive = false
           }

        //    console.log(this.filtered, this.faq)
        }
    }
}

</script>


<template lang="pug">

    li.question-item( :class="{ 'open': isActive }" @click="isActive = !isActive" )
        .question-name
            span {{faq.question}}
            span.question-name--arrow
               svg(viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg")
                    path(fill-rule="evenodd" clip-rule="evenodd" d="M0.324289 0.262851C0.73139 -0.110342 1.36399 -0.0828386 1.73719 0.32428L12 11.5201L22.2628 0.324282C22.636 -0.0828375 23.2686 -0.11034 23.6757 0.262852C24.0828 0.636044 24.1103 1.26861 23.7371 1.67573L12.7372 13.6757C12.5477 13.8824 12.2803 14 12 14C11.7197 14 11.4523 13.8824 11.2629 13.6757L0.262888 1.67573C-0.110312 1.26861 -0.0828114 0.636043 0.324289 0.262851Z" fill="#666666")
        .question-answer
            span {{faq.answer}}
</template>

