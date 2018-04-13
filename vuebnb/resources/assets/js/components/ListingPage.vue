<template>
  <main>
    <header-image
      v-if="listing.images[0]"
      :image-url="listing.images[0]"
      :id="listing.id"
      @header-clicked="openModal" 
    />
    <div class="listing-container">
      <div class="heading">
        <h1>{{ listing.title }}</h1>
        <p>{{ listing.address }}</p>
      </div>
      <hr>
      <div class="about">
        <h3>About this listing</h3>
        <expandable-text>{{ listing.about }}</expandable-text>
      </div>
      <div class="lists">
        <feature-list title="Amenities" :items="listing.amenities">
          <template slot-scope="amenity">
            <i class="fa fa-lg" :class="amenity.icon"></i>
            <span>{{ amenity.title }}</span>
          </template>
        </feature-list>
        <feature-list title="Prices" :items="listing.prices">
          <template slot-scope="price">
            {{ price.title }}: <strong>{{ price.value }}</strong>
          </template>
        </feature-list>
      </div>
    </div>
    <modal-window ref="imagemodal">
      <image-carousel :images="listing.images" />
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

const serverData = JSON.parse(window.vuebnb_server_data);
const model = populateAmenitiesAndPrices(serverData.listing);

export default {
	components: {
		HeaderImage,
		ImageCarousel,
		ModalWindow,
		FeatureList,
		ExpandableText
	},
	computed: {
		listing() {
			return populateAmenitiesAndPrices(
        this.$store.getters.getListing(this.$route.params.listing)
      )
		}
	},
	methods: {
		openModal() {
			this.$refs.imagemodal.modalOpen = true;
		},
		assignData({ listing }) {
			Object.assign(this.$data, populateAmenitiesAndPrices(listing));
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
