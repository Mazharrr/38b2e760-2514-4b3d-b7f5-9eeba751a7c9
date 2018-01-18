export const calculateTime = function (val, repeatCheck){
  const originalVal = val;
  if (val === 0 || val === 24) {
    if (repeatCheck) {
      return '12AM';
    }
    return '12 AM - ' + calculateTime(originalVal + 1, true);
  }
  const suffix = val < 12 ? 'AM' : 'PM';
  if (val > 12) {
    val -= 12;
  }
  if (repeatCheck){
    return val + suffix;
  }
  return val + suffix + ' - ' + calculateTime(originalVal + 1, true);
};
