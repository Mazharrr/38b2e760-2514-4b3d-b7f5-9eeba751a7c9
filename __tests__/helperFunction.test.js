import {
  calculateTime,
  findHourIndex,
  reasonsNotToBike
} from '../src/js/utils/helperFunctions';

describe('Calculate Time', () => {
  test('returns correct range', () => {
    let calculatedTime = calculateTime(5);
    expect(calculatedTime).toEqual('5AM - 6AM', false);
    //testing edge cases
    calculatedTime = calculateTime(0);
    expect(calculatedTime).toEqual('12AM - 1AM', false);
    calculatedTime = calculateTime(23);
    expect(calculatedTime).toEqual('11PM - 12AM', false);
  });
});

describe('Find Hour Index', () => {
  test('returns correct index', () => {
    const newDate = new Date().getHours();
    const time = 5;
    const expected = time < newDate ? time - newDate + 24 : time - newDate;
    const result = findHourIndex(5);
    expect(expected).toEqual(result);
  });
});

describe('Reasons Not to bike', () => {
  test('returns correct reason array', () => {
    //mockleaveTime will always be 0th index, mockReturnTime will always be 1st index
    const mockLeaveTime = new Date().getHours();
    const mockReturnTime = mockLeaveTime + 1;
    let mockData = {
      hourly: {
        data: [
          {
            temperature: 20,
            precipProbability: 0.90
          },
          {
            temperature: 25,
            precipProbability: 0.80
          }
        ]
      }
    };
    let mockState = {
      leaveTime: mockLeaveTime,
      returnTime: mockReturnTime,
      minTemp: 30,
      maxTemp: 70,
      chance: 30
    };
    let expected = [
      'Temperature during departure (20) is below minimum allowed temperature.',
      'Temperature during return (25) is below minimum allowed temperature.',
      'The chance of precipitation (90%) during departure is too high.',
      'The chance of precipitation (80%) during return is too high.'
    ];
    let resultArr = reasonsNotToBike(mockData, mockState);
    expect(expected).toEqual(resultArr);

    mockData = {
      hourly: {
        data: [
          {
            temperature: 100,
            precipProbability: 0
          },
          {
            temperature: 90,
            precipProbability: 0
          }
        ]
      }
    };
    mockState = {
      leaveTime: mockLeaveTime,
      returnTime: mockReturnTime,
      minTemp: 30,
      maxTemp: 70,
      chance: 30
    };
    expected = [
      'Temperature during departure (100) is above maximum allowed temperature.',
      'Temperature during return (90) is above maximum allowed temperature.'
    ];
    resultArr = reasonsNotToBike(mockData, mockState);
    expect(expected).toEqual(resultArr);
  });
});
