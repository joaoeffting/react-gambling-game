import React from 'react';
import { Bet } from './Bet';
import renderer from 'react-test-renderer';

test('Bet match snapshot', () => {
  const component = renderer.create(
    <Bet />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});