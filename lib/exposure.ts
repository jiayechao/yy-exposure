require('intersection-observer');

// 定义可见配置接口
interface ObserverConfig {
    visivleRatio?: number | number[]; // 曝光比例, 默认[0]
    root?: HTMLElement // 视窗元素
    rootMargin?: string // 扩大视窗可见范围
    one?: Boolean // 只曝光一次
}

interface IntersectionObserverEntryClone extends IntersectionObserverEntry {
  visibleTimes?: number
  exposureTime?: number
}

// 
interface HandleObj {
  el: Element // 曝光元素
  visibleTimes?: number // 曝光次数
  hasExposure?: boolean // 是否曝光过
  startExposureTime?: number // 开始曝光时间
  exposureTime?: number // 元素在视口停留时间
  visibleHandle: Function
  hideHandle?: Function
}

module.exports = class Exposure {
	private observer: IntersectionObserver
  
  // 曝光操作回调
  private observerHandles: HandleObj[] = []

  constructor(observerConfig: ObserverConfig) {
      this.init(observerConfig);
  }

  private init(observerConfig: ObserverConfig) {
    console.log(observerConfig)
      this.observer = new IntersectionObserver(
        (entries, observer: IntersectionObserver) => {
          const len = entries.length
          for(let i = 0; i<len; i++) {
            const item:IntersectionObserverEntryClone = entries[i]
            // 目标元素
            const target = item.target
            // 回调对象
            const chooseTarget = this.observerHandles.filter(observerHandle => observerHandle.el === target)[0]
            // 出现在视口内
            if(item.isIntersecting) {
              // 曝光标记
              chooseTarget.hasExposure = true
              chooseTarget.startExposureTime = item.time
              // 曝光次数增加
              chooseTarget.visibleTimes += 1
              item.visibleTimes = chooseTarget.visibleTimes
              // 执行回调函数
              chooseTarget.visibleHandle(item)
              // 只触发一次，不在监听
              observerConfig.one && observer.unobserve(target);
            } else {
                // 从未出现在视口内
              if(!chooseTarget.hasExposure) {
                return
              }
              // 曝光时间
              item.exposureTime = item.time - chooseTarget.startExposureTime
              typeof chooseTarget.hideHandle === 'function' && chooseTarget.hideHandle(item)
              // 只触发一次
              observerConfig.one && observer.unobserve(target);
            }
          };
        },
        {
          root: observerConfig.root || null,
          rootMargin: observerConfig.rootMargin,
          threshold: observerConfig.visivleRatio,
        }
      );
  }

	// 添加曝光元素
  public add(el: Element, showCb: Function, hideCb: Function) {
    if(typeof showCb !== 'function') {
      throw new Error('曝光回调函数必须存在！')
    }
    // 曝光回调
    const visibleItemInstance = (function() {
      return function(observeInstance: IntersectionObserverEntry): any {
        return showCb.call(null, observeInstance)
      }
    }());
    const handleObj: HandleObj = {
      el: el,
      visibleTimes: 0, // 曝光次数
      hasExposure: false, // 是否曝光过
      startExposureTime: 0, // 开始曝光时间
      exposureTime: 0, // 元素在视口停留时间
      visibleHandle: visibleItemInstance,
    }
    // 隐藏回调
    let hideItemInstance = null
    if(typeof hideCb === 'function') {
      hideItemInstance = (function() {
        return function(observeInstance: IntersectionObserverEntry): any {
          return hideCb.call(null, observeInstance)
        }
      }());
    }
    
    handleObj.hideHandle = hideItemInstance
    // 加入回调函数队列
    this.observerHandles.push(handleObj)
    // 监视元素
    this.observer && this.observer.observe(el);
	}

	// 去掉观察
  public disconnect() {
    this.observer && this.observer.disconnect();
  }
}