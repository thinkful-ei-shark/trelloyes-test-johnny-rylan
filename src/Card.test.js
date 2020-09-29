import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Card from './Card';


describe('Card component', () => {
  // smoke tests
  it('should render Card without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Card />, div);

    ReactDOM.unmountComponentAtNode(div);
  });
  // snapshot test
  it('renders Card UI as expected', () => {

    const tree = renderer
      .create(<Card title='Title' content='new content' />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});