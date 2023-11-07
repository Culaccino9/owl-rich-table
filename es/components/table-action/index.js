import TableShapeContext from "../../context/TableShapeContext";
import useRichTableShape from "../../hooks/useRichTableShape";
import ActionBarCol from "./action-bar-col";
import ActionBarRow from "./action-bar-row";

/**
 * @description row col 的操作部位
 * @author Huang Wenjie
 * @createDate 2023-11-03
 */
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default function TableAction() {
  var _useRichTableShape = useRichTableShape(),
    setWidthMoveData = _useRichTableShape.setWidthMoveData,
    initWidthChangeEvent = _useRichTableShape.initWidthChangeEvent;
  return /*#__PURE__*/_jsxs(TableShapeContext.Provider, {
    value: {
      setWidthMoveData: setWidthMoveData,
      initWidthChangeEvent: initWidthChangeEvent
    },
    children: [/*#__PURE__*/_jsx(ActionBarRow, {}), /*#__PURE__*/_jsx(ActionBarCol, {})]
  });
}