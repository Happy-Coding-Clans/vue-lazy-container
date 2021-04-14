<template>
  <div class="container">
    <!-- title -->
    <SectionTitle :title="title" :reder-time="rederTime" />
    <div>
      <img style="width:100%" :src="getImgUrl()" />
    </div>
  </div>
</template>

<script>
import renderTotalTime from "@/mixins/render-total-time.js";
import SectionTitle from "@/components/section-title.vue";
export default {
  components: {
    SectionTitle
  },
  mixins: [renderTotalTime],
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
      imgList: ["8AYv5Ik.jpg", "hHYirXc.jpg", "qW7eNlI.jpg"]
    };
  },
  methods: {
    // img url
    getImgUrl() {
      const imgName = this.imgList[this.index - 1];

      return require(`@/imgs/${imgName}`);
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
}
</style>
