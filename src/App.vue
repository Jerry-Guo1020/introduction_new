<template>
  <n-message-provider>
    <div class="app">
      <Home></Home>
      
    </div>
    
  </n-message-provider>
</template>

<script lang="ts">
import Home from './components/Home.vue';
import NoToSee from './components/no_to_see.vue';
import Login from './components/Login.vue';
import Introduction from './components/Introduction.vue';

export default {
  name: 'App',
  components: {
    NoToSee,
    Login,
    Home,
    Introduction,
  }
}
</script>

<style>
.app {
  display: flex; /* 确保组件在同一行显示 */
  flex-direction: column; /* 或者使用 row 以并排显示 */
}
</style>