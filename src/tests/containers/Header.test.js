import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { cleanup } from 'react-testing-library';
import Header from '../../containers/Header';

afterEach(cleanup);

test('<Header />', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Header />);
  const result = renderer.getRenderOutput();

  expect(result.firstChild).toMatchSnapshot();
});
