import 'core-js/fn/object/assign';
import Vue from 'vue';

import { populateAmenitiesAndPrices } from './helpers';
import ImageCarousel from './components/ImageCarousel';
import ModalWindow from './components/ModalWindow';

let model = JSON.parse(window.vuebnb_listing_model);
model = populateAmenitiesAndPrices(model);

const app = new Vue({
	el: '#app',
	components: { ImageCarousel, ModalWindow },
	data: {
		...model,
		headerImageStyle: {
			'background-image': `url(${model.images[0]})`
		},
		amenities: model.amenities,
		prices: model.prices,
		contracted: true
	}
});
