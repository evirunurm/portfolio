<template >
	<div class="noise" />
	<Socials />
	<Footer />
	<Nav />
	<router-view :event="moveEvent" />
</template>

<script lang="ts">
import Nav from "./components/Header.vue"
import Socials from "./components/Socials.vue";
import Footer from "./components/Footer.vue";

export default {
	name: "App",
	components: {
		Footer,
		Socials,
		Nav
	},
	mounted() {
		document.body.onmousemove = this.moveName;
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
