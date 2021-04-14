<template>
  <vue-lazy-container
    class="container"
    tag-name="div"
    @change="intersectingChange"
  >
    <div class="title">{{ title }}</div>
    <div ref="chart" class="chart"></div>
  </vue-lazy-container>
</template>

<script>
import * as echarts from "echarts";
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      chartData: [
        { value: 1048, name: "搜索引擎" },
        { value: 735, name: "直接访问" },
        { value: 580, name: "邮件营销" },
        { value: 484, name: "联盟广告" },
        { value: 300, name: "视频广告" }
      ],
      isLoaded: false
    };
  },
  methods: {
    // 相交改变回调
    intersectingChange(args) {
      const { isIntersecting } = args;
      if (isIntersecting) {
        if (!this.isLoaded) {
          //console.log("chart is intersecting::", isIntersecting);
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
        /* grid: {
          bottom: 10
        }, */
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
      console.log("good");
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
  .title {
    height: 35px;
    line-height: 35px;
    border-bottom: 1px solid #eee;
    margin-bottom: 10px;
  }

  .chart {
    height: 500px;
  }
}
</style>
