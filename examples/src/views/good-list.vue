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
import Chart from "@/components/chart";
import DataList from "@/components/data-list";
import Img from "@/components/img.vue";
export default {
  components: { Chart, DataList, Img },
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
