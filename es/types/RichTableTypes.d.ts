/**
 * cell 最小单位的initData值
 */
export interface BaseCellType {
  value: string | number;
  rowSpan?: number;
  colSpan?: number;
}
/**
 * 初始值props
 */
export type InitDateType = BaseCellType[][];

/**
 * format之后的值
 */
export interface FormatCellType extends BaseCellType {
  key: string; // 用作render
  incrementKey: number; // 用作生成新的key
}

/**
 * tr data
 */
export interface RowDataItem {
  key: string;
  rowValue: FormatCellType[];
  rowIncrementKey: number; // 代表这个行被操作过多少次（用在列的增删）
}

/**
 * 坐标
 */
export interface CoordType {
  x: number;
  y: number;
}

/**
 * table的处理值
 */
export interface TableDataType {
  value: RowDataItem[];
  width: number[];
  height: number[];
}

/**
 * dispatch
 */
export type ActionType = () => undefined | TableDataType;
