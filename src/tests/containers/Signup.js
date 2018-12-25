import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { cleanup } from 'react-testing-library';
import Signup from '../../containers/Signup';

afterEach(cleanup);

test('<Signup />', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Signup />);
  const result = renderer.getRenderOutput();

  expect(result.firstChild).toMatchSnapshot();
});
