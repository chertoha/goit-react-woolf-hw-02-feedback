export const countPositiveFeedbackPercentage = (positiveValue, total) => {
  return ((positiveValue / total) * 100).toFixed(0);
};
