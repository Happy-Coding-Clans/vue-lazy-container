<template>
  <div class="selection-title">
    {{ title }}. (Render Total Time:<span class="total-time"
      > {{ rederTime }} ms</span
    >)
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    rederTime: {
      type: Number,
      required: true
    }
  }
};
</script>
<style lang="less" scoped>
.selection-title {
  height: 35px;
  line-height: 35px;
  border-bottom: 1px solid #eee;
  margin-bottom: 10px;

  .total-time {
    color: red;
  }
}
</style>
