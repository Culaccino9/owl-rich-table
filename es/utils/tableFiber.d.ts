import type { TableDataType } from '../types/RichTableTypes';
export default class TableFiber {
    currentFiber: TableDataType;
    workInProgressFiber: TableDataType;
    constructor(initData: TableDataType);
    performUnitOfWork(workInProgressFiber: TableDataType): void;
}
