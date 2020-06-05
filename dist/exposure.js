require('intersection-observer');
module.exports = /** @class */ (function () {
    function Exposure(observerConfig) {
        this.observerHandles = [];
        this.init(observerConfig);
    }
    Exposure.prototype.init = function (observerConfig) {
        var _this = this;
        console.log(observerConfig);
        this.observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (item) {
                var target = item.target;
                if (observerConfig.hiddenEmmit) {
                    if (!item.isIntersecting) {
                        // 触发事件
                        var chooseHandle = _this.observerHandles.filter(function (observerHandle) { return observerHandle.el === target; });
                        chooseHandle[0].visibleHandle(item);
                        // 只触发一次
                        observerConfig.one && observer.unobserve(target);
                    }
                }
                else {
                    // 曝光，需要触发曝光函数
                    if (item.isIntersecting) {
                        // 触发事件
                        var chooseHandle = _this.observerHandles.filter(function (observerHandle) { return observerHandle.el === target; });
                        chooseHandle[0].visibleHandle(item);
                        // 只触发一次
                        observerConfig.one && observer.unobserve(target);
                    }
                }
            });
        }, {
            root: observerConfig.root || null,
            rootMargin: observerConfig.rootMargin,
            threshold: observerConfig.visivleRatio,
        });
    };
    // 添加曝光元素
    Exposure.prototype.add = function (el, cb) {
        var rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            rest[_i - 2] = arguments[_i];
        }
        rest.push(null); // 给一个占位参数
        var visibleItemInstance = (function () {
            return function (observeInstance) {
                rest.pop();
                rest.push(observeInstance);
                return cb.apply(null, rest);
            };
        }());
        this.observerHandles.push({
            el: el,
            visibleHandle: visibleItemInstance
        });
        this.observer && this.observer.observe(el);
        return this.observer;
    };
    // 去掉观察
    Exposure.prototype.disconnect = function () {
        this.observer && this.observer.disconnect();
    };
    return Exposure;
}());
//# sourceMappingURL=exposure.js.map