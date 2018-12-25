import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { cleanup } from 'react-testing-library';
import LandingPage from '../../views/LandingPage';

afterEach(cleanup);

test('<LandingPage />', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<LandingPage />);
  const result = renderer.getRenderOutput();

  expect(result.firstChild).toMatchSnapshot();
});
