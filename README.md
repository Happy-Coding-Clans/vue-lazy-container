# vue-lazy-container

[![npm](https://img.shields.io/npm/v/vue-lazy-container.svg)](https://www.npmjs.com/package/vue-lazy-container)

**English** | [中文](./README-CN.md)

## Introduction

vue lazy container,By detect the visibility of elements in the page, decide whether to load resources and render.

## Why
When the page content exceeds one screen, we often want to load and render only the data of the current screen,As the page scrolls, load and render the following. This can greatly improve the speed of page opening,And reduce additional network requests（xhr）。vue-lazy-container can just help us solve this problem.

## Online Demo

More detail please refer to this [demo](https://happy-coding-clans.github.io/vue-lazy-container/).

## Install

```
npm install vue-lazy-container
```

or

```
yarn add vue-lazy-container
```

## Usage

Write the following in mian.js：

```javascript
import VueLazyContainer from "vue-lazy-container";
Vue.use(VueLazyContainer);
```

Example:

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

| Prop    | Description         | Type              | Optional value                       | Default |
| ------- | ------------ | ----------------- | ---------------------------- | ------ |
| tagName | Element TagName | `Element.tagName` | div、span、p、img、i、a etc. | -      |
| id                 | container id                    | `String, Number`  | -                            | -      |
| intersectionOption | Intersection Observer Option | `Object` | root、rootMargin、threshold | -      |


**Event**

| Event Name | Description         | Callback Parameters   |
| -------- | ------------ | ---------- |
| change   | Element visible change events | [IntersectionObserverEntry](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry)、observer、id |

## License

http://www.opensource.org/licenses/mit-license.php
