interface CustomElement extends HTMLElement {
    visibleHandle(): void;
}
interface ObserverConfig {
    visivleRatio: number | number[];
    one?: Boolean;
}
declare const _default: {
    new (observerConfig: ObserverConfig): {
        observer: IntersectionObserver | undefined;
        init(observerConfig: ObserverConfig): void;
        add(el: CustomElement, cb: Function, ...rest: (string | number)[]): any;
        remove(el: Element): void;
    };
};
export = _default;
