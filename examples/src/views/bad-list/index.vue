<template>
  <div class="bad-list">
    <div v-for="count in containerCount" :key="count">
      <Chart :title="'Section Chart ' + count" />
      <DataList :title="'Section List ' + count" />
      <Img :title="'Section Img ' + count" :index="count" />
    </div>
  </div>
</template>

<script>
import Chart from "./chart";
import DataList from "./data-list";
import Img from "./img.vue";
export default {
  components: { Chart, DataList, Img },
  data() {
    return {
      containerCount: 75
    };
  },
  methods: {},
  created() {}
};
</script>
<style lang="less" scoped></style>
