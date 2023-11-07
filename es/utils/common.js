/**
 * row key create fn
 */
export function createRowKey(y, incrementKey) {
  return "row_".concat(y, ",incrementKey_").concat(incrementKey);
}

/**
 * cell key create fn
 */
export function createCellKey(coord, incrementKey) {
  return "row_".concat(coord === null || coord === void 0 ? void 0 : coord.y, ",col_").concat(coord === null || coord === void 0 ? void 0 : coord.x, ",incrementKey_").concat(incrementKey);
}