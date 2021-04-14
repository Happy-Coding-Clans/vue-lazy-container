# vue-lazy-container

## Introduction

Lazy container base on vuejs

## Install

```
npm install vue-lazy-container
```

or

```
yarn add vue-lazy-container
```

## Usage

```javascript
<template>
  <vue-lazy-container tag-name="div" @change="intersectingChange">
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
    intersectingChange(args) {
      const { isIntersecting } = args;
      if (isIntersecting) {
        this.isLoaded = true;
        // you can ajax request or other logic
      }
    }
  }
};
</script>

```

## API

**Props**

| 参数    | 说明         | 类型              | 可选值                       | 默认值 |
| ------- | ------------ | ----------------- | ---------------------------- | ------ |
| tagName | 容器节点类型 | `Element.tagName` | div、span、p、img、i、a etc. | -      |

**Event**

| 事件名称 | 说明         | 回调参数          |
| -------- | ------------ | ----------------- |
| change  | 容器节点类型 | 观察者列表 |
