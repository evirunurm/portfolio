<template>
	<header>
		<div class="logo-container">
			<img src="/logo.svg" alt="Evelin Virunurm logo">
		</div>
		<hr>
		<nav class="nav">
			<ul class="nav-ul">
				<li class="about-li">
					<router-link to="/">ABOUT</router-link>
				</li>
				<div class="blotter" ref="blotter-about"></div>

				<li class="dot-separator">.</li>

				<li class="projects-li">
					<router-link to="/">PROJECTS</router-link>
				</li>
				<div class="blotter" ref="blotter-projects"></div>

				<li class="dot-separator">.</li>

				<li class="contact-li">
					<router-link to="/">CONTACT</router-link>
				</li>
				<div class="blotter" ref="blotter-contact"></div>
			</ul>
		</nav>

	</header>
</template>

<script lang="ts">

// import VueBlotter from "vue-blotter";

export default {
	name: "Nav",
	components: {
		// VueBlotter
	},
	mounted() {
		this.generateBlotter("about", "blotter-about");
		this.generateBlotter("projects", "blotter-projects");
		this.generateBlotter("contact", "blotter-contact");
	},
	methods: {
		generateBlotter(innerText: string, elRef: string): void {
			// @ts-ignore
			let text = new Blotter.Text(innerText, {
				family: "'EB Garamond', serif",
				size: 27,
				fill: "#171717",
				paddingLeft: 40,
				paddingRight: 40
			});

			// @ts-ignore
			let material = new Blotter.ChannelSplitMaterial();
			material.uniforms.uOffset.value = 0.2;
			material.uniforms.uRotation.value = 200;
			material.uniforms.uApplyBlur.value = 1;

			// @ts-ignore
			let blotter = new Blotter(material, {
				texts: text
			});

			let elem: HTMLElement = this.$refs[elRef];
			let scope = blotter.forText(text);

			scope.appendTo(elem);
		}
	}
}
</script>

<style scoped>
/* GENERAL */
header {
	width: 100%;
	padding: 0.75em;
}

hr {
	width: 100%;
	max-width: 500px;
	margin: auto;
}

/* LOGO */
.logo-container {
	display: flex;
	justify-content: center;
	padding: 0.75rem 0;
}

/* NAV */
.nav {
	width: 100%;
	display: flex;
	justify-content: center;
	padding: 0.75rem 0;
}

.dot-separator {
	font-size: 2rem;
	line-height: 0;
	position: relative;
	top: 0;
}

.nav-ul {
	display: flex;
	justify-content: space-between;
	width: 100%;
	max-width: 500px;
	list-style: none;
	gap: 0.5rem;
	position: relative;
}

.nav-ul > li > a {
	text-decoration: none;
	color: black;
}

.nav-ul > li > a:hover {
	text-decoration: underline;
	position: relative;

}

.nav-ul > li:hover + .blotter {
	opacity: 1;
	transition: 0.25s ease-in-out;
}

/* BLOTTER */

.blotter {
	opacity: 0;
	position: absolute;
	top: 1rem;
	transform: translateX(-50%);
}

.about-li + .blotter {
	left: 0;
}

.projects-li + .blotter {
	left: 50%;
}

.contact-li + .blotter {
	left: 100%;
}

@media (max-width: 600px) {
	.about-li + .blotter {
		left: 0;
		transform: translateX(-25%);
	}

	.projects-li + .blotter {
		left: 50%;
		transform: translateX(-50%);
	}

	.contact-li + .blotter {
		left: 100%;
		transform: translateX(-75%);
	}

}


</style>