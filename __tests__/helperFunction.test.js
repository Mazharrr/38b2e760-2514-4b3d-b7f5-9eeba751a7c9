import {calculateTime} from '../src/js/utils/helperFunctions';

describe('Calculate Time', () => {

  test('returns correct index', () => {
    let calculatedTime = calculateTime(5);
    expect(calculatedTime).toEqual('5AM - 6AM', false);
    calculatedTime = calculateTime(0);
    expect(calculatedTime).toEqual('12AM - 1AM', false);
    calculatedTime = calculateTime(23);
    expect(calculatedTime).toEqual('11PM - 12AM', false);
  });

});

