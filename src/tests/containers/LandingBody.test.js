import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { cleanup } from 'react-testing-library';
import LandingBody from '../../containers/LandingBody';

afterEach(cleanup);

test('<LandingBody />', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<LandingBody />);
  const result = renderer.getRenderOutput();

  expect(result.firstChild).toMatchSnapshot();
});
