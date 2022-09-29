<template>
	<div class="noise">

	</div>
	<Nav></Nav>
	<router-view>
	</router-view>
</template>

<script lang="ts">
import Nav from "./components/Header.vue"

export default {
	name: "App",
	components: {
		Nav
	}
}
</script>

<style scoped>
.noise {

}
</style>
