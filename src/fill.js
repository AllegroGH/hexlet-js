/* eslint-disable */
const fill = (call, value, start = 0, end) => {
  if (end === undefined) end = call.length;

  for (let i = 0; i < call.length; i += 1) {
    if (i >= start && i < end) call[i] = value;
  }
  return call;
};

export default fill;

// console.log(getImpelementation([1], 1));
