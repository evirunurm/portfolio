<template>
<footer>
	<div class="hr" />
	2022
	<div class="hr" />
</footer>
</template>

<script>
export default {
	name: "Footer"
}
</script>

<style scoped>
footer {
	position: fixed;
	transform: translateX(50%) rotate(-90deg);
	right: 1.75rem;
	top: 80%;
	display: flex;
	gap: 1.5rem;
	align-items: center;
}

.hr {
	border-bottom: 1px solid black;
	width: 75px;
}

@media (max-width: 600px) {
	footer {
		top: 75%;
		left: 0.75rem;
		font-size: 0.9em;
	}

	.hr {
		border-bottom: 1px solid black;
		width: 20px;
	}

}
</style>