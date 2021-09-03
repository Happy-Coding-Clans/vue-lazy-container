module.exports = {
  //presets: ["@vue/cli-plugin-babel/preset"],
  presets: [
    // vue0cli 配合 @vue/babel-preset-jsx 使用。否则使用 babel-plugin-transform-vue-jsx
    ["@vue/babel-preset-jsx"],
    [
      "@vue/app",
      {
        useBuiltIns: "entry",
        corejs: 3,
        targets: {
          ie: "11"
        },
        jsx: {
          injectH: false
        }
      }
    ]
  ],
  plugins: [
    [
      "import",
      {
        libraryName: "vant",
        libraryDirectory: "es",
        //style: true,
        // 指定样式路径
        style: name => `${name}/style/less`
      },
      "vant"
    ]
  ]
};
