<template>
  <div id="login" class="login-container">
    <form role="form" method="POST" action="/login">
      <input type="hidden" name="_token" :value="csrf_token">
      <div class="form-control">
        <input id="email" type="email" name="email" placeholder="Email Address" required autofocus>
      </div>
      <div class="form-control">
        <input id="password" type="password" name="password" placeholder="Password" required>
      </div>
      <div class="form-control">
        <button type="submit">Log in</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      csrf_token: window.csrf_token
    }
  }
};
</script>

<style lang="sass" scoped>
form
  padding-top: 40px
  @media screen and (max-width: 744px)
    padding-top: 80px

.form-control
  margin-bottom: 1em

input[type=email],
input[type=password],
button,
label
  width: 100%
  font-size: 19px !important
  line-height: 24px
  color: #484848
  font-weight: 300

input
  background-color: transparent
  padding: 11px
  border: 1px solid #dbdbdb
  border-radius: 2px
  box-sizing: border-box

button
  background-color: #4fc08d
  color: white
  cursor: pointer
  border: #4fc08d
  border-radius: 40px
  padding-top: 12px
  padding-bottom: 12px
</style>

