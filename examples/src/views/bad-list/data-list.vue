<template>
  <div class="container">
    <div class="title">{{ title }}</div>
    <div v-for="(item, index) in dataList" :key="index">{{ item.name }}</div>
  </div>
</template>

<script>
import { getListData } from "@/service/mock-server.js";
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      dataList: []
    };
  },
  methods: {
    // request
    request() {
      getListData().then(res => {
        this.dataList = res;
      });
    }
  },
  created() {
    this.request();
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
