export default {
  props: {
    startTime: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      rederTime: 0
    };
  },
  mounted() {
    setTimeout(() => {
      this.rederTime = new Date().getTime() - this.startTime;
    });
  }
};
