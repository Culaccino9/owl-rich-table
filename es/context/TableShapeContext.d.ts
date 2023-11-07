/// <reference types="react" />
import type { InitWidthChangeEventType, SetWidthMoveDataType } from '../types/RichTableShapeHookType';
export interface TableShapeContextType {
    setWidthMoveData?: SetWidthMoveDataType;
    initWidthChangeEvent?: InitWidthChangeEventType;
}
declare const TableShapeContext: import("react").Context<TableShapeContextType>;
export default TableShapeContext;
