<template>
<div class="header">
  <div 
    class="header-img" 
    :style="headerImageStyle"
    @click="$emit('header-clicked')">
    <button class="view-photos">View photos</button>
  </div>
</div>
</template>

<script>
export default {
	props: ['image-url'],
	computed: {
		headerImageStyle() {
			return {
				'background-image': `url(${this.imageUrl})`
			};
		}
	}
};
</script>

<style scoped>
.header .header-img {
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	background-color: #f5f5f5;
	height: 100%;
	cursor: pointer;
	position: relative;
}

button.view-photos {
	border-radius: 4px;
	border: 1px solid #c4c4c4;
	text-align: center;
	vertical-align: middle;
	font-weight: bold;
	line-height: 1.43;
	user-select: none;
	white-space: nowrap;
	cursor: pointer;
	background: white;
	color: #484848;
	padding: 7px 18px;
	font-size: 14px;
	display: inline-block;
	margin-bottom: 0;
	position: absolute;
	bottom: 20px;
	left: 20px;
}
</style>
