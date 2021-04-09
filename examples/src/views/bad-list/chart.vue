<template>
  <div class="container">
    <div class="title">{{ title }}</div>
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { getChartData } from "@/service/mock-server.js";
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    // render chart
    renderChart(data) {
      const myChart = echarts.init(this.$refs["chart"]);

      const option = {
        tooltip: {
          trigger: "item"
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
            data: data
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    // request
    request() {
      getChartData().then(res => {
        this.$nextTick(() => {
          this.renderChart(res);
        });
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
