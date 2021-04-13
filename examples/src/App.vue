<template>
  <div id="app">
    <div id="nav">
      <router-link class="nav-item" tag="li" to="/home">
        <a>Blank Page</a></router-link
      >
      <router-link class="nav-item" tag="li" to="/bad-list">
        <a>Bad List</a></router-link
      >
      <router-link class="nav-item" tag="li" to="/good-list">
        <a>Good List</a></router-link
      >
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

<style scoped lang="less">
#app {
  #nav {
    background: #f6f6f6;
    height: 35px;
    line-height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    position: sticky;
    top: 0;
    z-index: 999;
    .nav-item {
      display: inline-flex;

      a {
        text-decoration: none;
        color: #455a64;
        display: inline-block;
      }

      &.router-link-active {
        a {
          border-bottom: 3px solid #4078c0;
        }
      }
    }
  }
}
</style>
