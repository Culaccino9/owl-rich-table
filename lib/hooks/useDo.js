"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useDo;
var _react = require("react");
/**
 * redo和undo的注册
 */
function useDo(dispatch) {
  var keyDownFn = (0, _react.useCallback)(function (event) {
    var undoKey = event.key === 'z' && (event.ctrlKey && !event.metaKey || event.metaKey && !event.ctrlKey) && !event.altKey;
    var redoKey = event.key === 'z' && event.ctrlKey && event.shiftKey || event.key === 'y' && (event.ctrlKey || event.metaKey);
    if (!undoKey && !redoKey) return;
    if (event.key === 'z') {
      // 撤销 (undo) 操作
      if (event.shiftKey) {
        dispatch.redo();
      } else {
        dispatch.undo();
      }
      event.preventDefault(); // 阻止浏览器默认行为
      return;
    }
    dispatch.redo();
    event.preventDefault(); // 阻止浏览器默认行为
  }, [dispatch]);
  (0, _react.useEffect)(function () {
    document.addEventListener('keydown', keyDownFn);
    return function () {
      window.removeEventListener('keydown', keyDownFn);
    };
  }, [keyDownFn]);
}