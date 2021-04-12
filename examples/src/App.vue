<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/bad-list">bad list</router-link> |
      <router-link to="/good-list">good list</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    console.log(11);
  }
};
</script>

<style scoped>
#app {
  background: #f6f6f6;
}
</style>
