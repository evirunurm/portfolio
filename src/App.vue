<template >
	<div class="noise">

	</div>
	<Nav></Nav>
	<router-view :event="moveEvent">
	</router-view>
</template>

<script lang="ts">
import Nav from "./components/Header.vue"

export default {
	name: "App",
	components: {
		Nav
	},
	mounted() {
		document.onmousemove = this.moveName;
	},
	data() {
		return {
			moveEvent: undefined,
		}
	},
	methods: {
		moveName(event) {
			//console.log(this.moveEvent)
			this.moveEvent = event;
		}
	}
}
</script>

<style scoped>
.noise {
	height: 100vh;
	width: 100vw;
	position: fixed;
	top: 0;
	left: 0;
	background-image: url("assets/noise.gif");
	z-index: -10000;
	opacity: 0.04;
}
</style>
