<template>
  <div class="container">
    <div class="title">{{ title }}</div>
    <div v-if="this.imgName">
      <img style="width:100%" :src="getImgUrl()" />
    </div>
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
      imgName: ""
    };
  },
  methods: {
    // img url
    getImgUrl() {
      const { imgName } = this;
      return require(`../../imgs/${imgName}`);
    },
    // request
    request() {
      getImgUrl(this.index - 1).then(res => {
        this.imgName = res;
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
