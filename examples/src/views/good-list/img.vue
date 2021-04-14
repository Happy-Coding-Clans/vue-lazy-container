<template>
  <vue-lazy-container
    class="container"
    tag-name="div"
    @change="intersectingChange"
  >
    <template v-if="isLoaded">
      <div class="title">{{ title }}</div>
      <div>
        <img style="width:100%" :src="getImgUrl()" />
      </div>
      <!-- your content -->
    </template>
  </vue-lazy-container>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      imgName: "",
      isLoaded: false,
      imgList: [
        // 15
        "8AYv5Ik.jpg",
        "2jpy7yO.jpg",
        "qW7eNlI.jpg",
        "n3M06QP.jpg",
        "BNhGcqd.jpg",
        "TNmDTdL.jpg",
        "PRc06Uy.jpg",
        "hHYirXc.jpg",
        "2Qi40rJ.jpg",
        "hztiigA.jpg",
        "3AbaiOH.jpg",
        "plQzrOk.jpg",
        "uxYU1h3.jpg",
        "g4F6d2R.jpg",
        "s2Tqsfq.jpg",
        // 30
        "9eHhuCK.jpg",
        "kwxMKGr.jpg",
        "fp6SDtQ.jpg",
        "INAj06W.jpg",
        "oLQ1tBD.jpg",
        "2izuAhd.jpg",
        "qoWEPJe.jpg",
        "6Wr89AO.jpg",
        "PQh9aqW.jpg",
        "uhORS25.jpg",
        "QeN4jBt.jpg",
        "ahtrWkN.jpg",
        "fd1Mmhy.jpg",
        "AOgABvd.jpg",
        "ypd73RX.jpg",
        // 45
        "ZPPFND3.jpg",
        "EpYbuG7.jpg",
        "Qmz61wo.jpg",
        "laIuV0D.jpg",
        "aPia86B.jpg",
        "777dcVU.jpg",
        "iQRKg2a.jpg",
        "kXUHDn5.jpg",
        "MV9SvaP.jpg",
        "qjQ9XWl.jpg",
        "ZJ088Tk.jpg",
        "XREWwIc.jpg",
        "SuZLV2U.jpg",
        "71H2B0k.jpg",
        "vxOA4hg.jpg",
        // 60
        "qEQsC3o.jpg",
        "RLlbgpi.jpg",
        "1t5kzGJ.jpg",
        "FEFyXGY.jpg",
        "N12L8j8.jpg",
        "t5r6sHg.jpg",
        "zKfV3Pu.jpg",
        "8BR5akz.jpg",
        "J3cPlfc.jpg",
        "FTYmLBR.jpg",
        "kyGu5xM.jpg",
        "9rEbt6I.jpg",
        "jK3PhZu.jpg",
        "1EgrcMv.jpg",
        "ZemMjK8.jpg",
        // 75
        "DmSgSF6.jpg",
        "N9IPWC1.jpg",
        "EHlzx9S.jpg",
        "jtLvPpy.jpg",
        "0WNdAS5.jpg",
        "oytir6O.jpg",
        "9T3zb3D.jpg",
        "utsastL.jpg",
        "jUfMIMY.jpg",
        "GSKGpmx.jpg",
        "QDHO514.jpg",
        "PuMcFeB.jpg",
        "9sRo7tL.jpg",
        "azKDpNP.jpg",
        "0zhNKir.jpg",

        // 90
        "8AYv5Ik.jpg",
        "2jpy7yO.jpg",
        "qW7eNlI.jpg",
        "n3M06QP.jpg",
        "BNhGcqd.jpg",
        "TNmDTdL.jpg",
        "PRc06Uy.jpg",
        "hHYirXc.jpg",
        "2Qi40rJ.jpg",
        "hztiigA.jpg",
        "3AbaiOH.jpg",
        "plQzrOk.jpg",
        "uxYU1h3.jpg",
        "g4F6d2R.jpg",
        "s2Tqsfq.jpg",
        // 105
        "9eHhuCK.jpg",
        "kwxMKGr.jpg",
        "fp6SDtQ.jpg",
        "INAj06W.jpg",
        "oLQ1tBD.jpg",
        "2izuAhd.jpg",
        "qoWEPJe.jpg",
        "6Wr89AO.jpg",
        "PQh9aqW.jpg",
        "uhORS25.jpg",
        "QeN4jBt.jpg",
        "ahtrWkN.jpg",
        "fd1Mmhy.jpg",
        "AOgABvd.jpg",
        "ypd73RX.jpg",
        // 120
        "ZPPFND3.jpg",
        "EpYbuG7.jpg",
        "Qmz61wo.jpg",
        "laIuV0D.jpg",
        "aPia86B.jpg",
        "777dcVU.jpg",
        "iQRKg2a.jpg",
        "kXUHDn5.jpg",
        "MV9SvaP.jpg",
        "qjQ9XWl.jpg",
        "ZJ088Tk.jpg",
        "XREWwIc.jpg",
        "SuZLV2U.jpg",
        "71H2B0k.jpg",
        "vxOA4hg.jpg",
        // 135
        "qEQsC3o.jpg",
        "RLlbgpi.jpg",
        "1t5kzGJ.jpg",
        "FEFyXGY.jpg",
        "N12L8j8.jpg",
        "t5r6sHg.jpg",
        "zKfV3Pu.jpg",
        "8BR5akz.jpg",
        "J3cPlfc.jpg",
        "FTYmLBR.jpg",
        "kyGu5xM.jpg",
        "9rEbt6I.jpg",
        "jK3PhZu.jpg",
        "1EgrcMv.jpg",
        "ZemMjK8.jpg",
        // 150
        "DmSgSF6.jpg",
        "N9IPWC1.jpg",
        "EHlzx9S.jpg",
        "jtLvPpy.jpg",
        "0WNdAS5.jpg",
        "oytir6O.jpg",
        "9T3zb3D.jpg",
        "utsastL.jpg",
        "jUfMIMY.jpg",
        "GSKGpmx.jpg",
        "QDHO514.jpg",
        "PuMcFeB.jpg",
        "9sRo7tL.jpg",
        "azKDpNP.jpg",
        "0zhNKir.jpg"
      ]
    };
  },
  methods: {
    // img url
    getImgUrl() {
      const imgName = this.imgList[this.index - 1];

      return require(`@/imgs/${imgName}`);
    },
    // 相交改变回调
    intersectingChange(args) {
      const { isIntersecting } = args;
      if (isIntersecting) {
        //console.log("img is intersecting::", isIntersecting);
        this.isLoaded = true;
      }
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
  overflow: hidden;
  .title {
    height: 35px;
    line-height: 35px;
    border-bottom: 1px solid #eee;
    margin-bottom: 10px;
  }
}
</style>
