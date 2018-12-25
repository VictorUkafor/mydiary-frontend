import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { cleanup } from 'react-testing-library';
import SignupPage from '../../views/SignupPage';

afterEach(cleanup);

test('<SignupPage />', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<SignupPage />);
  const result = renderer.getRenderOutput();

  expect(result.firstChild).toMatchSnapshot();
});
