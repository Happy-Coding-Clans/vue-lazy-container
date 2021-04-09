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

// get list data
export function getListData() {
  return new Promise((resove, reject) => {
    const data = [
      { name: "0 This is a long list.This is a long list." },
      { name: "1 This is a long list.This is a long list." },
      { name: "2 This is a long list.This is a long list." },
      { name: "3 This is a long list.This is a long list." },
      { name: "4 This is a long list.This is a long list." },
      { name: "5 This is a long list.This is a long list." },
      { name: "5 This is a long list.This is a long list." },
      { name: "6 This is a long list.This is a long list." },
      { name: "7 This is a long list.This is a long list." },
      { name: "8 This is a long list.This is a long list." },
      { name: "9 This is a long list.This is a long list." }
    ];

    setTimeout(() => {
      resove(data);
    }, TIME2);
  });
}

// img urls
const IMG_URLS = [
  // 15
  "https://i.imgur.com/8AYv5Ik.jpg",
  "https://i.imgur.com/2jpy7yO.jpg",
  "https://i.imgur.com/qW7eNlI.jpg",
  "https://i.imgur.com/n3M06QP.jpg",
  "https://i.imgur.com/BNhGcqd.jpg",
  "https://i.imgur.com/TNmDTdL.jpg",
  "https://i.imgur.com/PRc06Uy.jpg",
  "https://i.imgur.com/hHYirXc.jpg",
  "https://i.imgur.com/2Qi40rJ.jpg",
  "https://i.imgur.com/hztiigA.jpg",
  "https://i.imgur.com/3AbaiOH.jpg",
  "https://i.imgur.com/plQzrOk.jpg",
  "https://i.imgur.com/uxYU1h3.jpg",
  "https://i.imgur.com/g4F6d2R.jpg",
  "https://i.imgur.com/s2Tqsfq.jpg",
  // 30
  "https://i.imgur.com/9eHhuCK.jpg",
  "https://i.imgur.com/kwxMKGr.jpg",
  "https://i.imgur.com/fp6SDtQ.jpg",
  "https://i.imgur.com/INAj06W.jpg",
  "https://i.imgur.com/oLQ1tBD.jpg",
  "https://i.imgur.com/2izuAhd.jpg",
  "https://i.imgur.com/qoWEPJe.jpg",
  "https://i.imgur.com/6Wr89AO.jpg",
  "https://i.imgur.com/PQh9aqW.jpg",
  "https://i.imgur.com/uhORS25.jpg",
  "https://i.imgur.com/QeN4jBt.jpg",
  "https://i.imgur.com/ahtrWkN.jpg",
  "https://i.imgur.com/fd1Mmhy.jpg",
  "https://i.imgur.com/AOgABvd.jpg",
  "https://i.imgur.com/ypd73RX.jpg",
  // 45
  "https://i.imgur.com/ZPPFND3.jpg",
  "https://i.imgur.com/EpYbuG7.jpg",
  "https://i.imgur.com/Qmz61wo.jpg",
  "https://i.imgur.com/laIuV0D.jpg",
  "https://i.imgur.com/aPia86B.jpg",
  "https://i.imgur.com/777dcVU.jpg",
  "https://i.imgur.com/iQRKg2a.jpg",
  "https://i.imgur.com/kXUHDn5.jpg",
  "https://i.imgur.com/MV9SvaP.jpg",
  "https://i.imgur.com/qjQ9XWl.jpg",
  "https://i.imgur.com/ZJ088Tk.jpg",
  "https://i.imgur.com/XREWwIc.jpg",
  "https://i.imgur.com/SuZLV2U.jpg",
  "https://i.imgur.com/71H2B0k.jpg",
  "https://i.imgur.com/vxOA4hg.jpg",
  // 60
  "https://i.imgur.com/qEQsC3o.jpg",
  "https://i.imgur.com/RLlbgpi.jpg",
  "https://i.imgur.com/1t5kzGJ.jpg",
  "https://i.imgur.com/FEFyXGY.jpg",
  "https://i.imgur.com/N12L8j8.jpg",
  "https://i.imgur.com/t5r6sHg.jpg",
  "https://i.imgur.com/zKfV3Pu.jpg",
  "https://i.imgur.com/8BR5akz.jpg",
  "https://i.imgur.com/J3cPlfc.jpg",
  "https://i.imgur.com/FTYmLBR.jpg",
  "https://i.imgur.com/kyGu5xM.jpg",
  "https://i.imgur.com/9rEbt6I.jpg",
  "https://i.imgur.com/jK3PhZu.jpg",
  "https://i.imgur.com/1EgrcMv.jpg",
  "https://i.imgur.com/ZemMjK8.jpg",
  // 75
  "https://i.imgur.com/DmSgSF6.jpg",
  "https://i.imgur.com/N9IPWC1.jpg",
  "https://i.imgur.com/EHlzx9S.jpg",
  "https://i.imgur.com/jtLvPpy.jpg",
  "https://i.imgur.com/0WNdAS5.jpg",
  "https://i.imgur.com/oytir6O.jpg",
  "https://i.imgur.com/9T3zb3D.jpg",
  "https://i.imgur.com/utsastL.jpg",
  "https://i.imgur.com/jUfMIMY.jpg",
  "https://i.imgur.com/GSKGpmx.jpg",
  "https://i.imgur.com/QDHO514.jpg",
  "https://i.imgur.com/PuMcFeB.jpg",
  "https://i.imgur.com/9sRo7tL.jpg",
  "https://i.imgur.com/azKDpNP.jpg",
  "https://i.imgur.com/0zhNKir.jpg"
];

// get img url
export function getImgUrl(index) {
  return new Promise((resove, reject) => {
    setTimeout(() => {
      resove(IMG_URLS[index]);
    }, TIME2);
  });
}
