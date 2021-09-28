<template>
	 <web-view :src="url"></web-view>
</template>

<script>
	export default {
		data() {
			return {
				url: null 
			}
		},
		onLoad(option) {
			this.url = option.url
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
