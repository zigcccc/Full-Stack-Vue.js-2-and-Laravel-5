const app = new Vue({
	el: '#app',
	data: {
		title: sample.title,
		address: sample.address,
		about: sample.about,
		headerImageStyle: {
			'background-image': 'url(sample/header.jpg)'
		},
		amenities: sample.amenities,
		prices: sample.prices,
		contracted: true,
		modalOpen: false
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
});
