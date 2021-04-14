<template>
  <vue-lazy-container
    class="container"
    tag-name="div"
    @change="visibilityChange"
  >
    <div class="title">{{ title }}</div>
    <div class="table-container">
      <table class="table">
        <colgroup>
          <col />
        </colgroup>
        <thead>
          <tr>
            <th>#</th>
            <th>Col1</th>
            <th>Col2</th>
            <th>Col3</th>
            <th>Col4</th>
            <th>Col5</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in dataList" :key="index">
            <td>{{ ++index }}</td>
            <td>{{ item.col1 }}</td>
            <td>{{ item.col2 }}</td>
            <td>{{ item.col3 }}</td>
            <td>{{ item.col4 }}</td>
            <td>{{ item.col5 }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </vue-lazy-container>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      dataList: []
    };
  },
  methods: {
    // Detect when an element is becoming visible or hidden
    visibilityChange(args) {
      const { isIntersecting } = args;
      if (isIntersecting) {
        if (!this.isLoaded) {
          this.initData();
          this.isLoaded = true;
        }
      }
    },
    initData() {
      let dataList = [];

      for (var i = 0; i < 3000; i++) {
        dataList.push({
          col1: "A",
          col2: "B",
          col3: "C",
          col4: "D",
          col5: "E",
          col6: "F"
        });
      }
      this.dataList = dataList;
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

  .table-container {
    height: 300px;
    overflow: scroll;
    .table {
      border-collapse: collapse;
      width: 100%;
      background-color: #fff;
      color: #5e6d82;
      font-size: 14px;
      border: 1px solid #eaeefb;

      thead {
        background-color: #f7f7f7;
        tr {
          height: 20px;
        }
      }

      tbody {
        tr {
          height: 20px;
        }
      }

      th {
        text-align: left;
        border-top: 1px solid #eaeefb;
        white-space: nowrap;
      }

      td,
      th {
        text-align: left;
        border-bottom: 1px solid #eaeefb;
        padding: 6px;
        max-width: 250px;
      }

      td:first-child,
      th:first-child {
        padding-left: 10px;
      }

      strong {
        font-weight: 400;
      }
    }
  }
}
</style>
