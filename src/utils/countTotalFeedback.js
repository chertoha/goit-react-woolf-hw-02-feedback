export const countTotalFeedback = (...args) => {
  return args.reduce((acc, arg) => acc + arg, 0);
};
