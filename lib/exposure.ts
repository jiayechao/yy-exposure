require('intersection-observer');

interface ObserverConfig {
    visivleRatio: number | number[];
    root?: HTMLElement
    rootMargin?: string
    hiddenEmmit?: boolean
    one?: Boolean
}

module.exports = class Exposure {
	private observer: IntersectionObserver | undefined;
  
  private observerHandles: any[] = []

  constructor(observerConfig: ObserverConfig) {
      this.init(observerConfig);
  }

  private init(observerConfig: ObserverConfig) {
    console.log(observerConfig)
      this.observer = new IntersectionObserver(
          (entries, observer: IntersectionObserver) => {
              entries.forEach(item => {
                let target = item.target
                if(observerConfig.hiddenEmmit) {
                  if(!item.isIntersecting) {
                    // 触发事件
                    const chooseHandle = this.observerHandles.filter(observerHandle => observerHandle.el === target)
                    chooseHandle[0].visibleHandle(item)
                    // 只触发一次
                    observerConfig.one && observer!.unobserve(target);
                  }
                } else {
                  // 曝光，需要触发曝光函数
                  if(item.isIntersecting) {
                    // 触发事件
                    const chooseHandle = this.observerHandles.filter(observerHandle => observerHandle.el === target)
                    chooseHandle[0].visibleHandle(item)
                    // 只触发一次
                    observerConfig.one && observer!.unobserve(target);
                  }
                }
              });
          },
          {
            root: observerConfig.root || null,
            rootMargin: observerConfig.rootMargin,
            threshold: observerConfig.visivleRatio,
          }
      );
  }

	// 添加曝光元素
  public add(el: Element, cb: Function, ...rest: any[]) {
    rest.push(null) // 给一个占位参数
    const visibleItemInstance = (function() {
      return function(observeInstance: IntersectionObserverEntry): any {
        rest.pop()
        rest.push(observeInstance)
        return cb.apply(null, rest)
      }
    }())
    this.observerHandles.push({
      el: el,
      visibleHandle: visibleItemInstance
    })
		this.observer && this.observer.observe(el);
		return this.observer
	}

	// 去掉观察
  public disconnect() {
    this.observer && this.observer.disconnect();
  }
}