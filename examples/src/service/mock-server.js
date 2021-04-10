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
      { name: "9 This is a long list.This is a long list." },
      { name: "10 This is a long list.This is a long list." },
      { name: "11 This is a long list.This is a long list." },
      { name: "12 This is a long list.This is a long list." },
      { name: "13 This is a long list.This is a long list." },
      { name: "14 This is a long list.This is a long list." },
      { name: "15 This is a long list.This is a long list." }
    ];

    setTimeout(() => {
      resove(data);
    }, TIME2);
  });
}

// img names
const IMG_NAMES = [
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
];

// get img url
export function getImgUrl(index) {
  return new Promise((resove, reject) => {
    setTimeout(() => {
      resove(IMG_NAMES[index]);
    }, TIME2);
  });
}
