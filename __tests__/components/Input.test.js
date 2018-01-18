import renderer from 'react-test-renderer';
import Input from 'js/components/input/inputContainer';
import React from 'react';


describe('Input snapshot Tests', () => {

  test('Snapshot testing', () => {
    const input = renderer.create(
      <Input/>
    );
    const tree = input.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
