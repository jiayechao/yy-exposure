interface ObserverConfig {
    visivleRatio?: number | number[];
    root?: HTMLElement;
    rootMargin?: string;
    one?: Boolean;
}
interface IntersectionObserverEntryClone extends IntersectionObserverEntry {
    visibleTimes?: number;
    exposureTime?: number;
}
interface HandleObj {
    el: Element;
    visibleTimes?: number;
    hasExposure?: boolean;
    startExposureTime?: number;
    exposureTime?: number;
    visibleHandle: Function;
    hideHandle?: Function;
}
