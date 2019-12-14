export const isInt = (value) => {
  var er = /^-?[0-9]+$/;
  return er.test(value);
}
