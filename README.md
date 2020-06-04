# 简介

yy-exposure是一个用来监测元素是否在可视范围内的插件，使用了`intersection-observer`api， 并且可降级到IE7使用

我们通过这个插件可以做到滑动曝光，懒加载，无限滚动等功能

## 安装

npm i -S yy-exposure

## 使用方式

import Exposure from 'yy-exposure'

const ExposureInstance = new Exposure(observerConfig)

ExposureInstance