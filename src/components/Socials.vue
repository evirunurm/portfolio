<template>
<div class="socials-container">
<ul>
	<li><div class="hr" /></li>
	<li><a href="">DRI</a></li>
	<li><a href="">GIT</a></li>
	<li><a href="">LIN</a></li>
</ul>
</div>
</template>

<script>
export default {
	name: "Socials"
}
</script>

<style scoped>
.socials-container {
	position: fixed;
	top: 20%;
	left: 1.75rem;
	transform: translateY(-50%);
	z-index: 100;
}

ul {
	transform: translateX(-50%) rotate(-90deg);
	display: flex;
	align-items: center;
	list-style: none;
	gap: 1.75rem;
}

a {
	color: black;
	text-decoration: none;
}

a:hover {
	text-decoration: underline;
}

.hr {
	width: 75px;
	border-bottom: 1px solid black;
}

@media (max-width: 600px) {
	.socials-container {
		top: 39%;
		left: 0.75rem;
	}

	ul {
		font-size: 0.9em;
	}

	.hr {
		width: 20px;
		border-bottom: 1px solid black;
	}
}
</style>