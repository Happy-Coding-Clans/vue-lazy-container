<template>
  <div class="home">
    <div class="operation">
      <div class="condition">
        threshold:
        <van-checkbox-group
          v-model="intersectionOption.threshold"
          direction="horizontal"
        >
          <van-checkbox
            v-for="value in thresholds"
            :key="value"
            :name="value"
            shape="square"
            icon-size="14px"
            >{{ value }}</van-checkbox
          >
        </van-checkbox-group>
      </div>
      <div class="result">intersection ratio:{{ intersectionRatio }}</div>
    </div>
    <div class="container">
      <div class="blank down">
        Scroll Down ↓
      </div>
      <vue-lazy-container
        class="block down"
        tag-name="div"
        :intersection-option="intersectionOption"
        @change="visibilityChange"
      >
        Box
      </vue-lazy-container>
      <div class="blank up">
        Scroll Up ↑
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // intersection option
      intersectionOption: {
        /* root: document.querySelector("#scrollArea"),
         */
        rootMargin: "100px",
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
      },

      // intersection ratio
      intersectionRatio: 0,
      thresholds: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
    };
  },
  methods: {
    visibilityChange(intersection, observer) {
      const { intersectionRatio } = intersection;

      this.intersectionRatio = Math.round(intersectionRatio * 100) + "%";
    }
  },
  created() {}
};
</script>
<style lang="less" scoped>
.threshold-popover {
  padding: 10px;
  .van-checkbox {
    padding: 3px;
  }
}
.home {
  width: 100%;
  background: #fff;

  .operation {
    width: 100%;
    height: 100px;
    position: sticky;
    top: 40px;
    border: 1px solid #eee;
    z-index: 999;
    background: #fff;
    padding: 10px;

    .condition {
      .threshold-popover {
        padding: 10px;
      }
    }

    .result {
      margin-top: 15px;
    }
  }

  .container {
    .blank {
      width: 100%;
      height: 800px;
      display: flex;
      justify-content: center;
      padding: 20px 0;
      font-size: 22px;
      color: #666;

      &.down {
        align-items: flex-start;
      }

      &.up {
        align-items: flex-end;
      }
    }

    .block {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 200px;
      height: 200px;
      background: #ccc;
      margin: 0 auto;
    }
  }
}
</style>
