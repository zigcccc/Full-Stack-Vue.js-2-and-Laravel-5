<template>
  <div class="listing-summary-group">
    <h1>Places in {{ country }}</h1>
    <div class="listing-carousel">
      <div class="controls">
        <carousel-control :style="leftArrow" dir="left" @change-image="change" />
        <carousel-control :style="rightArrow" dir="right" @change-image="change" />
      </div>
      <div class="listing-summaries-wrapper">
        <div class="listing-summaries" :style="style">
          <listing-summary
            v-for="listing in listings"
            :key="listing.id"
            :listing="listing"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListingSummary from './ListingSummary';
import CarouselControl from './CarouselControl';

const rowSize = 3;


export default {
	props: ['country', 'listings'],
	components: { ListingSummary, CarouselControl },
	data() {
		return {
      offset: 0,
      listingSummaryWidth: null
		};
	},
	computed: {
		style() {
			return {
				transform: `translateX(${this.offset * -this.listingSummaryWidth}px)`
			};
		},
		leftArrow() {
			if (this.offset === 0) {
				return { visibility: 'hidden' };
			}
		},
		rightArrow() {
			if (this.offset === this.listings.length - rowSize) {
				return { visibility: 'hidden' };
			}
		}
	},
	methods: {
		change(val) {
			let newVal = this.offset + parseInt(val);
			if (newVal >= 0 && newVal <= this.listings.length - rowSize) {
				this.offset = newVal;
			}
		}
  },
  mounted(){
    this.listingSummaryWidth = this.$el.querySelector('.listing-summary').clientWidth + 15
  }
};
</script>

<style scoped>
.listing-summary-group {
	padding-bottom: 20px;
}
.listing-summaries {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	transition: 200ms ease-in-out all;
	/* overflow: hidden; */
}
.listing-summaries > .listing-summary {
	margin-right: 15px;
}
.listing-summaries > .listing-summary:last-child {
	margin-right: 0;
}
.listing-carousel {
	position: relative;
}
.controls {
	display: flex;
	justify-content: space-between;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: -45px;
	width: calc(100% + 90px);
}
.carousel-control {
	color: #c5c5c5 !important;
	font-size: 1.5rem !important;
	cursor: pointer;
}
.listing-summaries-wrapper {
	overflow: hidden;
}
</style>
