<template>
  <vue-lazy-container
    class="container"
    tag-name="div"
    @change="visibilityChange"
  >
    <!-- title -->
    <SectionTitle :title="title" :reder-time="rederTime" />
    <div ref="chart" class="chart"></div>
  </vue-lazy-container>
</template>

<script>
import * as echarts from "echarts";
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
    }
  },
  data() {
    return {
      chartData: [
        { value: 1048, name: "Search Engines" },
        { value: 735, name: "Direct access" },
        { value: 580, name: "Email marketing" },
        { value: 484, name: "Alliance advertising" },
        { value: 300, name: "Video advertising" }
      ],
      isLoaded: false
    };
  },
  methods: {
    visibilityChange(args) {
      console.log("sadasdas");
      const { isIntersecting } = args;
      if (isIntersecting) {
        if (!this.isLoaded) {
          this.renderChart();
          this.isLoaded = true;
        }
      }
    },

    // render chart
    renderChart() {
      if (!this.$refs["chart"]) {
        return false;
      }

      this.myChart = echarts.init(this.$refs["chart"]);

      const option = {
        tooltip: {
          show: false
        },
        legend: {
          top: "5%",
          left: "center"
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["70%", "100%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2
            },
            label: {
              show: false,
              position: "center"
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "40",
                fontWeight: "bold"
              }
            },
            labelLine: {
              show: false
            },
            data: this.chartData
          }
        ]
      };

      this.myChart.clear();
      this.myChart.setOption(option);
    }
  },
  beforeDestroy() {
    if (this.myChart) {
      this.myChart.dispose && this.myChart.dispose();
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

  .chart {
    height: 500px;
  }
}
</style>
