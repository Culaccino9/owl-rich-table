import './style.css';
/**
 * @description 富文本编辑表格
 * @author Huang Wenjie
 * @createDate 2023-10-17
 */
import type { RichTablePropsType } from './types';
declare function RichTable(props: RichTablePropsType): import("react/jsx-runtime").JSX.Element;
declare namespace RichTable {
    var useRichTable: typeof import("./hooks/useRichTable").default;
}
export default RichTable;
