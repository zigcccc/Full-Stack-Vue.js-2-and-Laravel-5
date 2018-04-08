import 'core-js/fn/object/assign';
import Vue from 'vue';

import { populateAmenitiesAndPrices } from './helpers';
import HeaderImage from './components/HeaderImage';
import ImageCarousel from './components/ImageCarousel';
import ModalWindow from './components/ModalWindow';
import FeatureList from './components/FeatureList';

let model = JSON.parse(window.vuebnb_listing_model);
model = populateAmenitiesAndPrices(model);

const app = new Vue({
	el: '#app',
	components: { HeaderImage, ImageCarousel, ModalWindow, FeatureList },
	data: {
		...model,
		headerImageStyle: {
			'background-image': `url(${model.images[0]})`
		},
		amenities: model.amenities,
		prices: model.prices,
		contracted: true
	},
	methods: {
		openModal() {
			this.$refs.imagemodal.modalOpen = true;
		}
	}
});
