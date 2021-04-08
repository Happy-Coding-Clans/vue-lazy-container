<template>
  <div id="app">
    <div id="nav">
      <router-link to="/list">优化前</router-link> |
      <!-- <router-link to="/about">优化后</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<style scoped>
#app {
  background: #f1f1f1;
}
</style>
