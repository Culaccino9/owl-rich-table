export declare const getTargetElement: (target: (() => HTMLElement) | React.RefObject<HTMLElement> | HTMLElement | null, defaultElement?: HTMLElement | Window) => HTMLElement;
declare const useSize: (target: (() => HTMLElement) | React.RefObject<HTMLElement> | HTMLElement | null) => {
    width: number;
    height: number;
};
export default useSize;
