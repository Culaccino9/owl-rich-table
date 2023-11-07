"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useRichTable;
var _react = require("react");
function useRichTable() {
  var table = (0, _react.useRef)({});
  return [table.current];
}