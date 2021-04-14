<template>
  <div class="good-list">
    <div v-for="count in containerCount" :key="count">
      <Chart
        class="chart"
        :start-time="new Date().getTime()"
        :title="'Good Chart ' + count"
      />
      <Img
        class="img"
        :start-time="new Date().getTime()"
        :title="'Good Img ' + count"
        :index="count"
      />
      <DataList
        class="data-list"
        :start-time="new Date().getTime()"
        :title="'Good Grid ' + count"
      />
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
      containerCount: 3
    };
  },
  methods: {},
  created() {}
};
</script>
<style lang="less" scoped></style>
