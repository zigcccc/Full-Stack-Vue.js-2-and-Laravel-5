<template>
  <div>
    <p :class="{contracted: contracted}">
      <slot></slot>
    </p>
    <button v-if="contracted" class="more" @click="contracted = false">+ More</button>
    <button v-else class="more" @click="contracted = true">- Hide</button>
  </div>
</template>

<script>
export default {
	data() {
		return {
			contracted: true
		};
	}
};
</script>

<style scoped>
.about p {
	white-space: pre-wrap;
}

.about p.contracted {
	white-space: pre-wrap;
	height: 250px;
	overflow: hidden;
	position: relative;
}

.about p.contracted::after {
	content: '';
	display: block;
	width: 100%;
	height: 40px;
	background: linear-gradient(to bottom,  rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
	position: absolute;
	top: 250px;
	transform: translateY(-100%);
}

.about button.more {
	background: transparent;
	border: 0;
	color: #008489;
	padding: 0;
	font-size: 17px;
	font-weight: 700;
	width: 100%;
	text-align: center;
}

.about button.more:hover,
.about button.more:active,
.about button.more:focus {
	text-decoration: underline;
	outline: none;
}
</style>
