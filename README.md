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
  rootMargin?: string // 距离root的距离，类似于margin，单位为'px',，表示距离root多少就算重叠。 注意：即使是0，也要带单位
  one?: Boolean // 是否只需要监听一次，常用在懒加载
}
```
#### 实例方法

##### 添加监听元素和回调
```js
/*
@param {Element} el  - 监听元素.
@param {Function} fn  - 曝光回调.
@param {Function} fn  - 隐藏回调.
*/
ExposureInstance.add(el, function(item) {
  // 参数返回监听元素的入口实例IntersectionObserverEntry
  /*
    曝光回调的item中加入了曝光次数visibleTimes
  */
  console.log('曝光', item)
}, function(item) {
  // 参数返回监听元素的入口实例IntersectionObserverEntry
  /*
    隐藏回调的item中加入了曝光时间exposureTime
  */
  console.log('隐藏', item)
})
```

##### 取消监听
```js
ExposureInstance.disconnect()
```

#### 实战应用
1. 图片懒加载
2. 组件懒加载
3. 模块曝光
4. 模块曝光时间
5. 模块曝光次数