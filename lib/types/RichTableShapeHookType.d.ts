export interface WidthMoveType {
  startX: number | null;
  endX: number | null;
  updateWidth: number | null;
}

export type SetWidthMoveDataType = (data: WidthMoveType) => void;

export type InitWidthChangeEventType = (barIndex: number) => void;
