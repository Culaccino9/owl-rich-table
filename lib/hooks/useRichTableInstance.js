"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useRichTableInstance;
var _react = require("react");
function useRichTableInstance(table, tableRenderData) {
  var getFiledValues = (0, _react.useCallback)(function () {
    var _tableRenderData$valu;
    return tableRenderData === null || tableRenderData === void 0 ? void 0 : (_tableRenderData$valu = tableRenderData.value) === null || _tableRenderData$valu === void 0 ? void 0 : _tableRenderData$valu.map(function (item) {
      var _item$rowValue;
      return item === null || item === void 0 ? void 0 : (_item$rowValue = item.rowValue) === null || _item$rowValue === void 0 ? void 0 : _item$rowValue.map(function (cell) {
        var result = {
          value: cell === null || cell === void 0 ? void 0 : cell.value
        };
        if (cell !== null && cell !== void 0 && cell.colSpan) {
          result.colSpan = cell === null || cell === void 0 ? void 0 : cell.colSpan;
        }
        if (cell !== null && cell !== void 0 && cell.rowSpan) {
          result.rowSpan = cell === null || cell === void 0 ? void 0 : cell.rowSpan;
        }
        return result;
      });
    });
  }, [tableRenderData]);
  (0, _react.useEffect)(function () {
    if (!table) return;
    table.getFiledValues = getFiledValues;
  }, [getFiledValues, table]);
}