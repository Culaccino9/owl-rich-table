/// <reference types="react" />
import type { CoordType, FormatCellType } from '../../types/RichTableTypes';
interface PropsType extends FormatCellType {
    bindKey: string;
    coord: CoordType;
}
declare function TableCell(props: PropsType): import("react/jsx-runtime").JSX.Element;
declare const _default: import("react").MemoExoticComponent<typeof TableCell>;
export default _default;
