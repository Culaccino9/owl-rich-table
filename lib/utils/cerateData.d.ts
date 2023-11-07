import type { BaseCellType, CoordType, InitDateType, TableDataType } from '../types/RichTableTypes';
/**
 * 初始化一条cell
 */
export declare function createCell(cell: BaseCellType, coord: CoordType, incrementKey: number): {
    incrementKey: number;
    key: string;
    value: string | number;
    rowSpan?: number | undefined;
    colSpan?: number | undefined;
};
/**
 * 初始化一条row
 */
export declare function createRow(col: BaseCellType[], incrementKey: number, colIndex: number, rowIncrementKey: number): {
    key: string;
    rowValue: {
        incrementKey: number;
        key: string;
        value: string | number;
        rowSpan?: number | undefined;
        colSpan?: number | undefined;
    }[];
    rowIncrementKey: number;
};
/**
 * 初始化新增，默认无value的行
 */
export declare function createDefaultRow(length: number, incrementKey: number, colIndex: number): {
    key: string;
    rowValue: {
        incrementKey: number;
        key: string;
        value: string | number;
        rowSpan?: number | undefined;
        colSpan?: number | undefined;
    }[];
    rowIncrementKey: number;
};
/**
 * 初始化数据
 * @returns
 */
export declare function initData(data: InitDateType): TableDataType;
export declare function getPasteValue(value: string | undefined): string | (string | string[])[] | undefined;
