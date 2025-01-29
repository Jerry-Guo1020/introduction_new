<template>
  <n-message-provider>
    <Home></Home>
    <router-view></router-view> <!-- 主内容 -->

  <div class="app">
    
  
</div>

</n-message-provider>

</template>

<script lang="ts">


import Home from './components/Home.vue';
import no_to_see from './components/no_to_see.vue';
import Login from './components/Login.vue';


export default {
  name: 'App',
  components: {
    no_to_see,
    
    Login,
    Home
  }
}
</script>

<style>

</style>