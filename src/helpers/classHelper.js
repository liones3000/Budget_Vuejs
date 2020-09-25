export function changeColorValue(prop = 'color', value = 0) {
  // console.log(value);
  if (prop == 'icon') {
    return {
      'el-icon-top': value > 0,
      'el-icon-bottom': value < 0,
      'el-icon-help': value === 0,
    };
  }
  return {
    green: value > 0,
    red: value < 0,
    yellow: value === 0,
  };
}
