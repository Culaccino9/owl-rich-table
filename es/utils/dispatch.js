function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import TableFiber from "./tableFiber";
var TableDispatch = /*#__PURE__*/function () {
  // react的设置table的值的action

  function TableDispatch(initData, changeTableData, maxBackCount) {
    _classCallCheck(this, TableDispatch);
    _defineProperty(this, "undoStack", void 0);
    _defineProperty(this, "redoStack", void 0);
    _defineProperty(this, "maxBackCount", void 0);
    // 最大undo数量
    _defineProperty(this, "tableFiber", void 0);
    // TODO 之后的性能优化 & 上下帧备份实现redo undo
    _defineProperty(this, "changeTableData", void 0);
    this.undoStack = [];
    this.redoStack = [];
    this.maxBackCount = maxBackCount !== null && maxBackCount !== void 0 ? maxBackCount : 10;
    this.tableFiber = new TableFiber(initData);
    this.changeTableData = changeTableData;
  }

  /**
   * 更新stack & 更新表格的试图
   * @param result 最新表格试图数据
   * @param type 需要更新哪个stack栈
   */
  _createClass(TableDispatch, [{
    key: "stackUpdate",
    value: function stackUpdate(result, type) {
      this.tableFiber.performUnitOfWork(result);
      this.changeTableData(this.tableFiber.workInProgressFiber);
      if (type === 'redo') {
        var _this$redoStack;
        (_this$redoStack = this.redoStack) === null || _this$redoStack === void 0 ? void 0 : _this$redoStack.push(this.tableFiber.currentFiber);
      } else {
        this.undoStack.push(this.tableFiber.currentFiber);
      }
    }
  }, {
    key: "redo",
    value: function redo() {
      var _this$redoStack2, _this$redoStack3, _this$redoStack3$pop;
      if (!((_this$redoStack2 = this.redoStack) !== null && _this$redoStack2 !== void 0 && _this$redoStack2.length)) return;
      var result = (_this$redoStack3 = this.redoStack) === null || _this$redoStack3 === void 0 ? void 0 : (_this$redoStack3$pop = _this$redoStack3.pop) === null || _this$redoStack3$pop === void 0 ? void 0 : _this$redoStack3$pop.call(_this$redoStack3);
      if (!result) return;
      this.stackUpdate(result, 'undo');
    }
  }, {
    key: "undo",
    value: function undo() {
      var _this$undoStack, _this$undoStack2, _this$undoStack2$pop;
      if (!((_this$undoStack = this.undoStack) !== null && _this$undoStack !== void 0 && _this$undoStack.length)) return;
      var result = (_this$undoStack2 = this.undoStack) === null || _this$undoStack2 === void 0 ? void 0 : (_this$undoStack2$pop = _this$undoStack2.pop) === null || _this$undoStack2$pop === void 0 ? void 0 : _this$undoStack2$pop.call(_this$undoStack2);
      if (!result) return;
      this.stackUpdate(result, 'redo');
    }
  }, {
    key: "action",
    value: function action(cb) {
      var work = cb();
      if (typeof cb === 'function' && !!work) {
        var _this$redoStack4, _this$undoStack3;
        if (!!((_this$redoStack4 = this.redoStack) !== null && _this$redoStack4 !== void 0 && _this$redoStack4.length)) {
          this.redoStack = [];
        }
        if (((_this$undoStack3 = this.undoStack) === null || _this$undoStack3 === void 0 ? void 0 : _this$undoStack3.length) === this.maxBackCount) {
          var _this$undoStack4;
          (_this$undoStack4 = this.undoStack) === null || _this$undoStack4 === void 0 ? void 0 : _this$undoStack4.shift();
        }
        this.stackUpdate(work, 'undo');
      }
    }
  }]);
  return TableDispatch;
}();
export { TableDispatch as default };