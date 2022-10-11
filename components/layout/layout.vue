<template lang="pug">
.root
    Header
    main(:class="classes")
        slot
    Footer
    a(href="#" class="scrollTop")
        img( src="/images/scrollTop.svg")
</template>

<script>
    import Header from "../header/header";
    import Footer from "../footer/footer";

    export default {
        components: {
            Header,
            Footer
        },
        props: {
            classes: String
        },
        mounted() {
        document.querySelectorAll('.js-scroll-form').forEach(link => {

            link.addEventListener('click', function(e) {
                e.preventDefault();

                var scrollTarget = document.querySelector('.scroll-block');

                // var topOffset = document.querySelector('.scrollto').offsetHeight;
                const topOffset = 100; // если не нужен отступ сверху
                var elementPosition = scrollTarget.getBoundingClientRect().top;
                var offsetPosition = elementPosition - topOffset;

                window.scrollBy({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

            });
        });

            let btn = document.querySelector('.scrollTop')
            //
            function magic() {
            if (window.pageYOffset > 120) {
                btn.style.opacity = '1'
            } else { btn.style.opacity = '0' }
            }
            //
            btn.onclick = function () {
                window.scrollTo(0,0)
            }

            // When scrolling, we run the function
            window.onscroll = magic

    },
    }
</script>
