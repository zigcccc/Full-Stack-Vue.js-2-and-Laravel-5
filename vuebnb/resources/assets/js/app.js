import 'core-js/fn/object/assign';
import Vue from 'vue';

import { populateAmenitiesAndPrices } from './helpers';
import ImageCarousel from './components/ImageCarousel';

let model = JSON.parse(window.vuebnb_listing_model);
model = populateAmenitiesAndPrices(model);

const app = new Vue({
	el: '#app',
	components: { ImageCarousel },
	data: {
		...model,
		headerImageStyle: {
			'background-image': `url(${model.images[0]})`
		},
		amenities: model.amenities,
		prices: model.prices,
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
