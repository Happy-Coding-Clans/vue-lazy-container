const TIME1 = 500;
const TIME2 = 1000;
const TIME3 = 1500;
const TIME4 = 2000;
const TIME5 = 2500;

// get chart data
export function getChartData() {
  return new Promise((resove, reject) => {
    const data = [
      { value: 1048, name: "搜索引擎" },
      { value: 735, name: "直接访问" },
      { value: 580, name: "邮件营销" },
      { value: 484, name: "联盟广告" },
      { value: 300, name: "视频广告" }
    ];

    setTimeout(() => {
      resove(data);
    }, TIME1);
  });
}
