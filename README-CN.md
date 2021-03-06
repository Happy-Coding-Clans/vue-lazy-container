# vue-lazy-container

[![npm](https://img.shields.io/npm/v/vue-lazy-container.svg)](https://www.npmjs.com/package/vue-lazy-container)

**中文** | [English](./README.md)

## Introduction

vue 懒加载容器，通过监听元素在页面中的可见性，决定是否加载资源并渲染。

## 解决什么问题

当页面内容超过一屏时，我们往往希望只加载并渲染当前一屏的数据，而随着页面的滚动，再去加载并渲染下面的内容。这样的好处可以大大提升页面打开速度，以及减少额外的网络请求（xhr）。vue-lazy-container 正好可以帮我们解决这个问题。

## Online Demo

更多使用细节请参考这个示例 [demo](https://happy-coding-clans.github.io/vue-lazy-container/).

## Install

```
npm install vue-lazy-container
```

or

```
yarn add vue-lazy-container
```

## Usage

在你的 main.js 中写如下代码：

```javascript
import VueLazyContainer from "vue-lazy-container";
Vue.use(VueLazyContainer);
```

示例:

```javascript
<template>
  <vue-lazy-container tag-name="div" id=1 @change="visibilityChange">
    <template v-if="isLoaded">
      <!-- your content -->
    </template>
  </vue-lazy-container>
</template>

<script>
export default {
  data() {
    return {
      isLoaded: false
    };
  },
  methods: {
    // visibility change
    visibilityChange(entry, observer, id) {
      const { isIntersecting } = entry;

      // visibility
      if (isIntersecting) {
        this.isLoaded = true;
        // you can send ajax request or other logic
      }
    }
  }
};
</script>

```

## API

**Props**

| 参数               | 说明                         | 类型              | 可选值                       | 默认值 |
| ------------------ | ---------------------------- | ----------------- | ---------------------------- | ------ |
| tagName            | 容器节点类型                 | `Element.tagName` | div、span、p、img、i、a etc. | -      |
| id                 | 容器的 id                    | `String, Number`  | -                            | -      |
| intersectionOption | Intersection Observer Option | `Object`          | root、rootMargin、threshold  | -      |

**Event**

| 事件名称 | 说明             | 回调参数                                                                                                          |
| -------- | ---------------- | ----------------------------------------------------------------------------------------------------------------- |
| change   | 元素可见变化事件 | [IntersectionObserverEntry](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry)、observer、id|

## License

http://www.opensource.org/licenses/mit-license.php
