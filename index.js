/**
 * 手机号码正则验证
 * @param {number | string} phone - 【必填】待验证的手机号码
 * @returns {boolean} - true: 验证通过；false：验证失败
 */
export function checkPhone(phone) {
  const check = /^1[345789]\d{9}$/;
  check.test(phone);
  return check.test(phone);
}

/**
 * 检验 Object对象是否为空对象
 * @param {Object} obj - 【必填】待检验的Object对象
 * @returns {boolean} - true: Object对象为空对象
 */
export function isEmptyObj(obj) {
  let isEmpty = true;
  for (const key in obj) {
    if (obj[key]) {
      isEmpty = false;
      break;
    }
  }
  return isEmpty;
}

/**
 * 设置html根标签的字号，用以移动端自适应
 * @param {number} [_width=750] - 【非必填】设计稿宽度
 */
export function setFont(_width = 750) {
  const desginWidth = _width;
  let deviceWidth = document.documentElement.clientWidth;
  const deviceHeight = document.documentElement.clientHeight;
  if (deviceWidth > deviceHeight) {
    deviceWidth = deviceHeight;
  }
  if (deviceWidth > desginWidth) {
    deviceWidth = desginWidth;
  }
  const dpr = window.devicePixelRatio || 1;
  document.documentElement.setAttribute('data-dpr', String(dpr));
  document.documentElement.style.fontSize = `${deviceWidth / (desginWidth / 100)}px`;
}

/**
 * 获取URL传参（query部分）的值
 * @param {string} name - 【必填】key，url参数名
 * @param {string} [url] - 【选填】需要用来查询参数的链接
 * @returns {string|null}
 */
export function getUrlParams(name, url) {
  let str = window.location.search;
  if (url) {
    const idx = url.indexOf('?');
    if (idx >= 0) {
      // str = url.split('?')[1];
      str = url.substring(idx);
    } else {
      str = url;
    }
  }
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  const r = str.substr(1).match(reg);
  if (r !== null) {
    return decodeURI(r[2]);
  }
  return null;
}

const utils = {
  checkPhone,
  isEmptyObj,
  setFont,
  getUrlParams,
};
module.exports = utils;
