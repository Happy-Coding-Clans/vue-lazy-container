<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/bad-list">bad list</router-link> |
      <!-- <router-link to="/about">优化后</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<style scoped>
#app {
  background: #fafafa;
}
</style>
