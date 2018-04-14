<template>
  <div class="listing-row">
    <h3>{{ listing.title }}</h3>
    <div class="listing-controls">
      <button id="edit-listing" @click="editListing(listing.id)"><i class="fa fa-lg fa-edit"></i></button>
      <button id="delete-listing" @click="deleteListing(listing.id)"><i class="fa fa-lg fa-trash"></i></button>
    </div>
  </div>
</template>

<script>
export default {
	props: ['listing'],
	methods: {
		deleteListing(id) {
			console.log(id);
			this.$store.commit('deleteListing', id);
		}
	}
};
</script>

<style lang="sass" scoped>
.listing-row
  border: 1px solid #dbdbdb
  border-bottom: none
  padding: 1.25em 1.5em
  display: flex
  justify-content: space-between
  align-items: center
  &:first-child
    border-top-left-radius: 4px
    border-top-right-radius: 4px
  &:last-child
    border-bottom-left-radius: 4px
    border-bottom-right-radius: 4px
    border-bottom: 1px solid #dbdbdb
  h3
    margin: 0
    padding: 0
    line-height: 1.1
    font-size: 0.9rem
    display: inline-block
    max-width: 50%
    text-overflow: ellipsis
    word-wrap: break-word
    white-space: nowrap
    overflow-x: hidden
    min-height: 1.2rem
    vertical-align: middle
    margin-top: 4px
  button
    outline: none
    -webkit-appereance: none
    border: none
    padding: .25rem
    font-size: .75rem
    margin: 0 5px
    &#delete-listing
      color: #E53935
</style>
