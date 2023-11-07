/// <reference types="react" />
import type TableDispatch from '../utils/dispatch';
export interface TableWorkLoopContextType {
    dispatch?: TableDispatch;
}
declare const TableWorkLoopContext: import("react").Context<TableWorkLoopContextType>;
export default TableWorkLoopContext;
