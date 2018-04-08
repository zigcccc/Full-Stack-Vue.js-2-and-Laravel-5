<template>
  <div id="modal" :class="{show: modalOpen}">
    <button @click="modalOpen = false" class="modal-close">&times;</button>
    <div class="modal-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			modalOpen: false
		};
	},
	watch: {
		modalOpen() {
			const className = 'modal-open';
			if (this.modalOpen) {
				document.body.classList.add(className);
			} else {
				document.body.classList.remove(className);
			}
		}
	},
	methods: {
		escapeKeyListener(e) {
			if (e.keyCode === 27 && this.modalOpen) {
				this.modalOpen = false;
			}
		}
	},
	created() {
		document.addEventListener('keyup', this.escapeKeyListener);
	},
	destroyed() {
		document.removeEventListener('keyup', this.escapeKeyListener);
	}
};
</script>

<style scoped>
#modal {
	display: none;
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: 2000;
	background: rgba(0, 0, 0, 0.85);
}

#modal.show {
	display: block;
}

.modal-close {
	position: absolute;
	right: 0;
	top: 0;
	padding: 0 2rem 0.5rem;
	font-size: 4em;
	width: auto;
	height: auto;
	background: transparent;
	border: 0;
	outline: none;
	color: white;
	z-index: 1000;
	font-weight: 100;
	line-height: 1;
}

.modal-content {
	height: 100%;
	max-width: 105vh;
	padding-top: 12vh;
	margin: 0 auto;
	position: relative;
}
</style>


