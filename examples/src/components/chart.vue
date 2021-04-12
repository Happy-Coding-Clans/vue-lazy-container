<template>
  <div ref="container" class="container">
    <div class="title">{{ title }}</div>
    <div ref="chart" class="chart"></div>
  </div>
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
    // render chart
    renderChart() {
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
            data: this.chartData
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  },
  mounted() {
    let callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!this.isLoaded) {
            console.log("entry::", entry);
            this.$nextTick(() => {
              this.renderChart();
            });
          } else {
            this.isLoaded = true;
          }
        }

        // Each entry describes an intersection change for one observed
        // target element:
        //   entry.boundingClientRect
        //   entry.intersectionRatio
        //   entry.intersectionRect
        //   entry.isIntersecting
        //   entry.rootBounds
        //   entry.target
        //   entry.time
      });
    };

    let options = {
      /* root: document.querySelector("#scrollArea"),
      rootMargin: "0px",
      threshold: 1.0 */
    };

    let observer = new IntersectionObserver(callback, options);

    let target = this.$refs["container"];
    observer.observe(target);
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
