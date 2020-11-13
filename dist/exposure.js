require('intersection-observer');
module.exports = /** @class */ (function () {
    function Exposure(observerConfig) {
        // 曝光操作回调
        this.observerHandles = [];
        this.init(observerConfig);
    }
    Exposure.prototype.init = function (observerConfig) {
        var _this = this;
        console.log(observerConfig);
        this.observer = new IntersectionObserver(function (entries, observer) {
            var len = entries.length;
            var _loop_1 = function (i) {
                var item = entries[i];
                // 目标元素
                var target = item.target;
                // 回调对象
                var chooseTarget = _this.observerHandles.filter(function (observerHandle) { return observerHandle.el === target; })[0];
                // 出现在视口内
                if (item.isIntersecting) {
                    // 曝光标记
                    chooseTarget.hasExposure = true;
                    chooseTarget.startExposureTime = item.time;
                    // 曝光次数增加
                    chooseTarget.visibleTimes += 1;
                    item.visibleTimes = chooseTarget.visibleTimes;
                    // 执行回调函数
                    chooseTarget.visibleHandle(item);
                    // 只触发一次，不在监听
                    observerConfig.one && observer.unobserve(target);
                }
                else {
                    // 从未出现在视口内
                    if (!chooseTarget.hasExposure) {
                        return "continue";
                    }
                    // 曝光时间
                    item.exposureTime = item.time - chooseTarget.startExposureTime;
                    typeof chooseTarget.hideHandle === 'function' && chooseTarget.hideHandle(item);
                    // 只触发一次
                    observerConfig.one && observer.unobserve(target);
                }
            };
            for (var i = 0; i < len; i++) {
                _loop_1(i);
            }
            ;
        }, {
            root: observerConfig.root || null,
            rootMargin: observerConfig.rootMargin,
            threshold: observerConfig.visivleRatio,
        });
    };
    // 添加曝光元素
    Exposure.prototype.add = function (el, showCb, hideCb) {
        if (typeof showCb !== 'function') {
            throw new Error('曝光回调函数必须存在！');
        }
        // 曝光回调
        var visibleItemInstance = (function () {
            return function (observeInstance) {
                return showCb.call(null, observeInstance);
            };
        }());
        var handleObj = {
            el: el,
            visibleTimes: 0,
            hasExposure: false,
            startExposureTime: 0,
            exposureTime: 0,
            visibleHandle: visibleItemInstance,
        };
        // 隐藏回调
        var hideItemInstance = null;
        if (typeof hideCb === 'function') {
            hideItemInstance = (function () {
                return function (observeInstance) {
                    return hideCb.call(null, observeInstance);
                };
            }());
        }
        handleObj.hideHandle = hideItemInstance;
        // 加入回调函数队列
        this.observerHandles.push(handleObj);
        // 监视元素
        this.observer && this.observer.observe(el);
    };
    // 去掉观察
    Exposure.prototype.disconnect = function () {
        this.observer && this.observer.disconnect();
    };
    return Exposure;
}());
//# sourceMappingURL=exposure.js.map