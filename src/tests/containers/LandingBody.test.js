import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import LandingBody from '../../containers/LandingBody';

test('<LandingBody />', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<LandingBody />);
  const result = renderer.getRenderOutput();

  expect(result.firstChild).toMatchSnapshot();
});
