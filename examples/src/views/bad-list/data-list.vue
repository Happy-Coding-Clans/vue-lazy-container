<template>
  <div class="container">
    <div class="title">{{ title }}</div>
    <div v-for="(item, index) in dataList" :key="index">{{ item.name }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      dataList: [
        { name: "0 This is a long list.This is a long list." },
        { name: "1 This is a long list.This is a long list." },
        { name: "2 This is a long list.This is a long list." },
        { name: "3 This is a long list.This is a long list." },
        { name: "4 This is a long list.This is a long list." },
        { name: "5 This is a long list.This is a long list." },
        { name: "5 This is a long list.This is a long list." },
        { name: "6 This is a long list.This is a long list." },
        { name: "7 This is a long list.This is a long list." },
        { name: "8 This is a long list.This is a long list." },
        { name: "9 This is a long list.This is a long list." },
        { name: "10 This is a long list.This is a long list." },
        { name: "11 This is a long list.This is a long list." },
        { name: "12 This is a long list.This is a long list." },
        { name: "13 This is a long list.This is a long list." },
        { name: "14 This is a long list.This is a long list." },
        { name: "15 This is a long list.This is a long list." }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.container {
  margin: 10px;
  padding: 10px;
  background: #fff;
  border: 1px solid #fff;
  border-radius: 10px;
  .title {
    height: 35px;
    line-height: 35px;
    border-bottom: 1px solid #eee;
    margin-bottom: 10px;
  }
}
</style>
