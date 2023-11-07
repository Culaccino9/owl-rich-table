/**
 * 处理形状大小的hook
 * @returns
 */
import type { InitWidthChangeEventType, SetWidthMoveDataType } from '../types/RichTableShapeHookType';
export default function useRichTableShape(): {
    setWidthMoveData: SetWidthMoveDataType;
    initWidthChangeEvent: InitWidthChangeEventType;
};
