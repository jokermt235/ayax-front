<template lang="pug">
ul.footer-list 
	template(v-for="item in items")

		li.footer-item
			.footer-nav
				a(:href="item.link").footer-link
					span {{item.name}}
</template>

<script> 

export default {
    props: {
        items: Array, 
    },
}

</script>

