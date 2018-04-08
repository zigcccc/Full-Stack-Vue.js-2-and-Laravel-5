<template>
  <main>
    <header-image 
      :image-url="images[0]" 
      @header-clicked="openModal" 
    />
    <div class="container">
      <div class="heading">
        <h1>{{ title }}</h1>
        <p>{{ address }}</p>
      </div>
      <hr>
      <div class="about">
        <h3>About this listing</h3>
        <expandable-text>{{ about }}</expandable-text>
      </div>
      <div class="lists">
        <feature-list title="Amenities" :items="amenities">
          <template slot-scope="amenity">
            <i class="fa fa-lg" :class="amenity.icon"></i>
            <span>{{ amenity.title }}</span>
          </template>
        </feature-list>
        <feature-list title="Prices" :items="prices">
          <template slot-scope="price">
            {{ price.title }}: <strong>{{ price.value }}</strong>
          </template>
        </feature-list>
      </div>
    </div>
    <modal-window ref="imagemodal">
      <image-carousel :images="images" />
    </modal-window>
  </main>
</template>

<script>
import { populateAmenitiesAndPrices } from '../helpers';
import HeaderImage from './HeaderImage';
import ImageCarousel from './ImageCarousel';
import ModalWindow from './ModalWindow';
import FeatureList from './FeatureList';
import ExpandableText from './ExpandableText';

let model = JSON.parse(window.vuebnb_listing_model);
model = populateAmenitiesAndPrices(model);

export default {
	components: {
		HeaderImage,
		ImageCarousel,
		ModalWindow,
		FeatureList,
		ExpandableText
	},
	data() {
		return Object.assign(model, {});
	},
	methods: {
		openModal() {
			this.$refs.imagemodal.modalOpen = true;
		}
	}
};
</script>

<style>
hr {
	border: 0;
	border-top: 1px solid #dce0e0;
}

.about {
	margin-top: 2em;
}

.about h3 {
	font-size: 22px;
}
</style>
