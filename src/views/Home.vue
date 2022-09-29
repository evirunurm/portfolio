<template>
	<main>
		<section class="first-section">
			<p class="hello">Hello, I'm</p>
			<div ref="evelin-virunurm"></div>
			<p class="born-in">
				BORN IN ESTONIA <br>
				BASED IN SPAIN
			</p>
		</section>

	</main>
</template>

<script lang="ts">
export default {
	name: "Home",
	props: {
		event: Event,
	},
	data() {
		return {
			mainBlotter: null,
			mainBlotterMaterial: null
		}
	},
	mounted() {
		this.generateBlotter("Evelin Virunurm", "evelin-virunurm");
	},
	methods: {
		generateBlotter(innerText: string, elRef: string): void {
			// @ts-ignore
			let text = new Blotter.Text(innerText, {
				family: "'Playfair Display', serif",
				size: 90,
				fill: "#171717",
				paddingLeft: 0,
				paddingRight: 0
			});

			// @ts-ignore
			let material = new Blotter.ChannelSplitMaterial();
			material.uniforms.uOffset.value = 0.01;
			material.uniforms.uRotation.value = 200;
			material.uniforms.uApplyBlur.value = 1;
			material.uniforms.uAnimateNoise.value = 1;

			this.mainBlotterMaterial = material;

			// @ts-ignore
			let blotter = new Blotter(material, {
				texts: text
			});

			this.mainBlotter = blotter;

			blotter.needsUpdate = true;

			let elem: HTMLElement = this.$refs[elRef];
			let scope = blotter.forText(text);

			this.mainBlotterMaterial = scope;

			scope.appendTo(elem);
		},
		angleBetweenPointsInDegrees(x1, y1, x2, y2) {
			let angle = Math.atan2(y2 - y1, x2 - x1) * 180.0 / Math.PI;

			angle = 180 + angle;

			return angle;
		},
		distanceBetweenPoints(x1, y1, x2, y2) {
			let a = x1 - x2;
			let b = y1 - y2;

			return Math.sqrt((a * a) + (b * b));
		}
	},
	watch: {
		event: {
			immediate: true,
			deep: true,
			handler() {
				if (this.event) {
					let angle = this.angleBetweenPointsInDegrees(0.5, 0.5, this.event.clientX, this.event.clientY - 200);
					let blur = Math.min(0.1, this.distanceBetweenPoints(0.5, 0.5, this.event.clientX - 300, this.event.clientY - 200) / 4000);
					this.mainBlotterMaterial.material.uniforms.uRotation.value = angle;
					this.mainBlotterMaterial.material.uniforms.uOffset.value = blur;
				}

			}
		}
	},
}
</script>

<style scoped>
/* MAIN */
main {
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0.75rem;
}

section {
	max-width: var(--general-max-width);
}

/* FIRST SECTION */
.hello {
	font-size: 2rem;position: relative;
	bottom: -1rem;
}

.first-section {
	height: 80vh;
	width: 100%;
	padding: 20vh 0 0 0;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	position: relative;
}

.born-in {
	position: absolute;
	bottom: 5rem;
}


</style>