<template>
  <div id="toolbar">
    <router-link :to="{name: 'home'}">
      <img class="icon" src="/images/logo.png" alt="Vuebnb">
      <h1>vuebnb</h1>
    </router-link>
    <ul class="links">
      <li v-if="$store.state.auth">
        <router-link :to="{name: 'saved'}">Saved</router-link>
      </li>
			<li v-if="!$store.state.auth">
        <router-link :to="{name: 'login'}">Login</router-link>
      </li>
			<li v-else>
				<a @click="logout">Logout</a>
				<form
					style="display: hidden"
					action="/logout"
					method="POST"
					id="logout"
				>
					<input type="hidden" name="_token" :value="csrf_token">
				</form>
			</li>
    </ul>
  </div>
</template>

<script>
export default {
	data() {
		return {
			csrf_token: window.csrf_token
		};
	},
	methods: {
		logout() {
			document.getElementById('logout').submit();
		}
	}
};
</script>

<style scoped>
#toolbar {
	border-bottom: 1px solid #e4e4e4;
	box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
	display: flex;
	justify-content: space-between;
}

#toolbar a {
	display: flex;
	align-items: center;
	text-decoration: none;
}

#toolbar .icon {
	height: 34px;
	padding: 16px 12px 16px 24px;
	display: inline-block;
}

#toolbar ul {
	display: flex;
	align-items: center;
	list-style: none;
	padding: 0 24px 0 0;
	margin: 0;
}

@media screen and (max-width: 373px) {
	#toolbar ul {
		padding-right: 12px;
	}
}

#toolbar ul li {
	padding: 10px 10px 0 10px;
}

#toolbar ul li a {
	text-decoration: none;
	line-height: 1;
	color: inherit;
	font-size: 13px;
	padding-bottom: 8px;
	letter-spacing: 0.5px;
	cursor: pointer;
	transition: 200ms ease-in-out all;
}

#toolbar ul li a:hover,
#toolbar ul li .router-link-exact-active {
	color: #4fc08d;
}

h1 {
	color: #4fc08d;
	display: inline-block;
	font-size: 2rem;
	margin: 0;
}
</style>
