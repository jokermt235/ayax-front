<template lang="pug">
    section.section(:class='extraClass')
        .container
            .row(:class='extraClassRow')
                //- .col 
                slot

</template>

<script>
export default {
    props: {
        extraClass: {
            type: String,
            default: ''
        },
        extraClassRow: {
            type: String,
            default: ''
        }
    }
}
</script>