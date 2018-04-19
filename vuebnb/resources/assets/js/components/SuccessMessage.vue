<template>
  <div v-if="message" id="success-message">
    {{ message }}
    <button @click="clearSuccessMessage"><i class="fa fa-lg fa-times"></i></button>
  </div>
</template>

<script>
export default {
  computed: {
    message() {
      return this.$store.state.successMessage;
    }
  },
  methods: {
    clearSuccessMessage(){
      this.$store.commit('clearSuccessMessage')
    }
  }
}
</script>

<style lang="sass" scoped>
#success-message
  background: #AED581
  padding: 1em
  margin: .75em auto
  border-radius: 4px
  color: #33691E
  font-weight: 700
  font-size: 14px
  display: flex
  justify-content: space-between
  align-items: center
  @media screen and (min-width: 1131px)
    width: 1050px
  button
    outline: none
    -webkit-appereance: none
    border: none
    color: #33691E
    background: transparent
    &:hover
      cursor: pointer

</style>
