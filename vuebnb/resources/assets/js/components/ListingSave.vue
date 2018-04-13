<template>
  <div class="listing-save" @click.stop="toggleSaved">
    <button v-if="button">
      <i :class="classes"></i>
      {{ message }}
    </button>
    <i v-else :class="classes"></i>
  </div>
</template>

<script>
export default {
	props: ['id', 'button'],
	computed: {
		isListingSaved() {
			return this.$store.state.saved.find(saved => saved === this.id);
		},
		classes() {
			let saved = this.isListingSaved;
			return {
				fa: true,
				'fa-lg': true,
				'fa-heart-o': !saved,
				'fa-heart': saved
			};
		},
		message() {
			return this.isListingSaved ? 'Saved' : 'Save';
		}
	},
	methods: {
		toggleSaved() {
			this.$store.commit('toggleSaved', this.id);
		}
	}
};
</script>

<style scoped>
.listing-save {
	position: absolute;
	top: 20px;
	right: 20px;
	cursor: pointer;
}
.fa-heart-o {
	color: white;
}
.fa-heart {
	color: #ff5a5f;
}
button {
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
}
button .fa-heart-o {
	color: #808080;
  margin-right: .25em;
}
</style>
