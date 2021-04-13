<template>
  <div class="bad-list">
    <div v-for="count in containerCount" :key="count">
      <DataList class="data-list" :title="'Section List ' + count" />
      <Img class="img" :title="'Section Img ' + count" :index="count" />
    </div>
  </div>
</template>

<script>
import DataList from "./data-list";
import Img from "./img.vue";
export default {
  components: { DataList, Img },
  data() {
    return {
      containerCount: 150
    };
  },
  methods: {},
  created() {}
};
</script>
<style lang="less" scoped></style>
