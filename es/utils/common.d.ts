import type { CoordType } from '../types/RichTableTypes';
/**
 * row key create fn
 */
export declare function createRowKey(y: number, incrementKey: number): string;
/**
 * cell key create fn
 */
export declare function createCellKey(coord: CoordType, incrementKey: number): string;
