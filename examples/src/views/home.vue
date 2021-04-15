<template>
  <div class="home">
    <div class="operation">
      <div class="condition">
        <div class="condition-item">
          <div class="left">
            threshold
          </div>
          <div class="right">
            <span class="gray">
              {{ intersectionOption.threshold }}
            </span>

            <van-popover
              v-model="showThresholdPopover"
              placement="left-start"
              trigger="click"
            >
              <div class="threshold-popover">
                <van-checkbox-group v-model="intersectionOption.threshold">
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
              <template #reference>
                <i class="iconfont icon-shezhi"></i>
              </template>
            </van-popover>
          </div>
        </div>
        <div class="condition-item">
          <div class="left">
            rootMargin (px)
          </div>
          <div class="right">
            <van-stepper v-model="rootMargin" />
          </div>
        </div>
        <div class="condition-item">
          <div class="left">
            root
          </div>
          <div class="right">
            <van-switch v-model="hasRoot" size="18px" />
          </div>
        </div>
      </div>
      <div class="result">
        intersection ratio:
        <span class="result-ratio">{{ intersectionRatio }}</span>
      </div>
    </div>
    <div class="container">
      <div class="blank down">
        Scroll Down ↓
      </div>
      <div class="scroll-area">
        <div class="scroll-area-content">
          <vue-lazy-container
            class="box-container"
            tag-name="div"
            :intersection-option="intersectionOption"
            @change="visibilityChange"
          >
            Box
          </vue-lazy-container>
        </div>
      </div>
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
        /* root: document.querySelector("#scroll-area"),
         */
        root: null,
        /*     rootMargin: "0px", */
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1]
      },

      rootMargin: 0,
      thresholds: [0, 0.2, 0.4, 0.6, 0.8, 1],
      showThresholdPopover: false,
      hasRoot: false,
      // intersection ratio
      intersectionRatio: 0
    };
  },
  methods: {
    visibilityChange(intersection, observer) {
      const { intersectionRatio } = intersection;

      this.intersectionRatio = Math.round(intersectionRatio * 100) + "%";
    }
  },
  mounted() {
    document.querySelector(".scroll-area").scrollTop = 230;

    this.intersectionOption.root = document.querySelector(".scroll-area");
  }
};
</script>
<style lang="less" scoped>
.threshold-popover {
  padding: 10px;
}

.home {
  width: 100%;
  background: #fff;

  .operation {
    width: 100%;
    /*  height: 100px; */
    position: sticky;
    top: 40px;
    border: 1px solid #eee;
    z-index: 999;
    background: #fff;

    .condition {
      padding: 10px;

      .condition-item {
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        &:not(:last-child) {
          border-bottom: 1px solid #eee;
        }

        .right {
          .gray {
            color: #666;
            margin-right: 10px;
          }
        }
      }
    }

    .result {
      border-top: 1px dashed #ccc;
      padding: 10px;

      .result-ratio {
        font-size: 20px;
      }
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

    .scroll-area {
      width: 250px;
      height: 250px;
      margin: 0 auto;
      overflow: scroll;
      border: 1px solid #eee;
      .scroll-area-content {
        height: 700px;
        display: flex;
        align-items: center;
        .box-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 170px;
          height: 170px;
          background: #ccc;
          margin: 0 auto;
        }
      }
    }
  }
}
</style>
