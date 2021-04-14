<template>
  <vue-lazy-container
    class="container"
    tag-name="div"
    @change="intersectingChange"
  >
    <template v-if="isLoaded">
      <div class="title">{{ title }}</div>
      <div>
        <img style="width:100%" :src="getImgUrl()" />
      </div>
      <!-- your content -->
    </template>
  </vue-lazy-container>
</template>

<script>
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
      imgName: "",
      isLoaded: false,
      imgList: ["8AYv5Ik.jpg", "hHYirXc.jpg", "qW7eNlI.jpg"]
    };
  },
  methods: {
    // img url
    getImgUrl() {
      const imgName = this.imgList[this.index - 1];

      return require(`@/imgs/${imgName}`);
    },
    // 相交改变回调
    intersectingChange(args) {
      const { isIntersecting } = args;
      if (isIntersecting) {
        //console.log("img is intersecting::", isIntersecting);
        this.isLoaded = true;
      }
    }
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
