import renderer from 'react-test-renderer';
import Input from 'js/components/input/inputContainer';
import React from 'react';


describe('Input snapshot Tests', () => {

  test('Sample of snapshot testing, not very useful, but shows how to do it', () => {
    const input = renderer.create(
      <Input/>
    );
    const tree = input.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
