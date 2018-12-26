import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../containers/Header';

test('<Header />', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Header />);
  const result = renderer.getRenderOutput();

  expect(result.firstChild).toMatchSnapshot();
});
