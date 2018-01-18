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

export const findHourIndex = function(time) {
  const newDate = new Date().getHours();
  if (time < newDate) {
    return time - newDate +24;
  }
  return time - newDate;
};

export const reasonsNotToBike = function(data, initialState) {
  const leaveIndex = findHourIndex(initialState.leaveTime);
  const returnIndex = findHourIndex(initialState.returnTime);
  const leaveData = data.hourly.data[leaveIndex];
  const returnData = data.hourly.data[returnIndex];
  const resultArr = [];
  if (leaveData.temperature > initialState.maxTemp) {
    resultArr.push(`Temperature during departure (${leaveData.temperature}) is above maximum allowed temperature.`);
  }
  if (leaveData.temperature < initialState.minTemp) {
    resultArr.push(`Temperature during departure (${leaveData.temperature}) is below minimum allowed temperature.`);
  }

  if (returnData.temperature > initialState.maxTemp) {
    resultArr.push(`Temperature during return (${returnData.temperature}) is above maximum allowed temperature.`);
  }
  if (returnData.temperature < initialState.minTemp) {
    resultArr.push(`Temperature during return (${returnData.temperature}) is below minimum allowed temperature.`);
  }

  if (leaveData.precipProbability > (initialState.chance / 100)) {
    resultArr.push(`The chance of precipitation (${leaveData.precipProbability * 100}%) during departure is too high.`);
  }
  if (returnData.precipProbability > initialState.chance) {
    resultArr.push(`The chance of precipitation (${returnData.precipProbability * 100}%) during departure is too high.`);
  }
  return resultArr;
};
