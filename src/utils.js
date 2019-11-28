export const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);
export const length = a =>
  a != null && Object.prototype.toString.call(a.length) === '[object Number]' ? a.length : NaN;
export const filter = x => y => y.filter(x);
export const split = x => y => y.split(x);
