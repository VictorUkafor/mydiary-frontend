import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Footer from '../../components/Footer';

afterEach(cleanup);

test('<Footer/>', () => {
  const { container } = render(<Footer />);
  expect(container.firstChild).toMatchSnapshot();
});