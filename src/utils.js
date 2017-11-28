export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

export const formatName = name => capitalize(name.replace("-", " "));

const force2Digits = number => (number < 10 ? "0" : "") + number;

export const formatDate = date =>
  force2Digits(date.getHours()) +
  ":" +
  force2Digits(date.getMinutes()) +
  ":" +
  force2Digits(date.getSeconds());

export const flatten = array => Array.prototype.concat.apply([], array);

export const groupBy = (xs, lambda) =>
  xs.reduce((rv, x) => {
    (rv[lambda(x)] = rv[lambda(x)] || []).push(x);
    return rv;
  }, {});

export const mean = array =>
  array.reduce((previous, current) => previous + current, 0) / array.length;

export const mapOverObject = (lambda, object) =>
  Object.keys(object).reduce((previous, current) => {
    previous[current] = lambda(object[current]);
    return previous;
  }, {});
