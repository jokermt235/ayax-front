<script> 

export default {
  components: { 
    },
    props: {
        classes: String, 
        blogData: Object
    }, 


    data() {
        return {
            tabActive: 0,
        }
    }, 
}
</script>
<template lang="pug">
li(:class="classes")
    a(:href="blogData.blogLink")
        .articleblog-img
            img(:src="blogData.blogImage")
        .articleblog-info
            .articleblog-date
                p {{ blogData.blogDay }}
                p
                    span {{ blogData.blogMonth }}
                    span {{ blogData.blogYear }}
            .articleblog-mininfo
                .articleblog-view
                    span
                        img(src="images/articleblog/eye.svg")
                    span {{ blogData.blogViews }}
                .articleblog-share
                    span
                        img(src="images/articleblog/share.svg")
                    span {{ blogData.blogShares }}
        .articleblog-main
            .articleblog-name
                span {{ blogData.blogTitle }}
            .articleblog-hash
                span {{ blogData.blogHash }}
</template>







