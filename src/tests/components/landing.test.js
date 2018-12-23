import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Landing from '../../components/Landing';

afterEach(cleanup);

test('<Landing/>', () => {
  const { container } = render(<Landing />);
  expect(container.firstChild).toMatchSnapshot();
});
