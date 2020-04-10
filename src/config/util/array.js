/**
 * 以引用的特性构建tree
 */
export const array2Tree = (arr, opt = {}) => {
  if (!Array.isArray(arr) && !arr.length) {
    return [];
  }
  const DEFAULT_OPT = {
    identifyKey: 'id',
    parentKey: 'upId',
    childrenKey: 'children',
  };
  opt = Object.assign({}, DEFAULT_OPT, opt);
  const root = {
    [opt.childrenKey]: [],
  };
  arr.forEach((item, i, arr) => {
    const p = arr.find(it => it[opt.identifyKey] === item[opt.parentKey]);
    if (!p) {
      root[opt.childrenKey][root[opt.childrenKey].length] = item;
    } else {
      p[opt.childrenKey] = p[opt.childrenKey] || [];
      p[opt.childrenKey][p[opt.childrenKey].length] = item;
    }
  });
  return root[opt.childrenKey];
};