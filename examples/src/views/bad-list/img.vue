<template>
  <div class="container">
    <div class="title">{{ title }}</div>
    <img :src="imgUrl" />
  </div>
</template>

<script>
import { getImgUrl } from "@/service/mock-server.js";
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      imgUrl: ""
    };
  },
  methods: {
    // request
    request() {
      getImgUrl(this.index - 1).then(res => {
        this.imgUrl = res;
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
  overflow: hidden;
  .title {
    height: 35px;
    line-height: 35px;
    border-bottom: 1px solid #eee;
    margin-bottom: 10px;
  }
}
</style>
