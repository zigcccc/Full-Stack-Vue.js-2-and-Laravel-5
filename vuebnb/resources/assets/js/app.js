import 'core-js/fn/object/assign';
import Vue from 'vue';

import ListingPage from './components/ListingPage';

const app = new Vue({
	el: '#app',
	render: h => h(ListingPage)
});
