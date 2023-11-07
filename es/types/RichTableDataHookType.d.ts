import type { RowDataItem } from './RichTableTypes';

export type SetCellValueType = (
  coord: CoordType,
  value: BaseCellType,
  updateValue?: RowDataItem[],
) => TableDataType;

export type PasteType = (
  e: ClipboardEvent,
  coord: CoordType,
) => TableDataType | undefined;

export type AddRowType = (
  rowIndex: number,
  addNumber?: number,
) => TableDataType;

export type RemoveRowType = (
  rowIndex: number,
  deleteNumber?: number = 1,
) => TableDataType;

export type AddColumnType = (
  colIndex: number,
  addNumber?: number,
) => TableDataType | undefined;

export type RemoveColumnType = (
  colIndex: number,
  removeNumber?: number,
) => TableDataType;

export type SetWidthDataType = (x: number, width: number) => TableDataType;
