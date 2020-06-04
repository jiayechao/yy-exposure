# 简介

yy-exposure是一个用来监测元素是否在可视范围内的插件，使用了`intersection-observer`api， 并且可降级到IE7使用

我们通过这个插件可以做到滑动曝光，懒加载，无限滚动等功能

## 安装

npm i -S yy-exposure

## 使用方式

#### 引入
```js
import Exposure from 'yy-exposure'
```
#### 创建实例
```js
const ExposureInstance = new Exposure(observerConfig)
```
#### 配置
```js
observerConfig {
  visivleRatio: number | number[] // 监听范围，可以传0-1的数字，或数组，表示曝光面积所占比例
  root?: HTMLElement // 不传就是以视窗为参照，或者有设置了overflow：scroll|auto的祖先元素
  rootMargin?: string // 距离root的距离，类似于margin，单位为'px',，表示距离root多少就算重叠
  hiddenEmmit?: boolean // 监听元素隐藏而不是曝光
  one?: Boolean // 是否只需要监听一次，常用在懒加载
}
```
#### 实例方法

##### 添加监听元素和回调
```js
ExposureInstance.add(el, function() {
  // arguments包含了回调函数后面的参数，最后一个参数返回监听元素的入口实例IntersectionObserverEntry
  console.log(arguments)
}, 1,2,3)
```

##### 取消监听
```js
ExposureInstance.disconnect()
```
