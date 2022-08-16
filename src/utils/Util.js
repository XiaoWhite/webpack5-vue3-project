const Util = {};

Util.formatTime = function (date, format = 'yyyy-MM-dd HH:mm:ss') {
  let result = '';

  if (date) {
    let y = date.getFullYear();
    let M = new String(date.getMonth() + 1).padStart(2, '0');
    let d = new String(date.getDate()).padStart(2, '0');
    let h = new String(date.getHours()).padStart(2, '0');
    let m = new String(date.getMinutes()).padStart(2, '0');
    let s = new String(date.getSeconds()).padStart(2, '0');

    result = format.replace('yyyy', y);
    result = result.replace('MM', M);
    result = result.replace('dd', d);
    result = result.replace('HH', h);
    result = result.replace('mm', m);
    result = result.replace('ss', s);
  }

  return result;
};

export default Util;
