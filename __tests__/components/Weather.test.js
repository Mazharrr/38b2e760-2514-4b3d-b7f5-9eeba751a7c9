import renderer from 'react-test-renderer';
import Weather from 'js/components/weather/Weather';
import React from 'react';


describe('Weather snapshot Tests', () => {

  test('Sample of snapshot testing, not very useful, but shows how to do it', () => {
    const weather = renderer.create(
      <Weather/>
    );
    const tree = weather.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
