import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import renderer from 'react-test-renderer';
import STORE from './STORE';

import List from './Card';

describe('List component', () => {
  // smoke test
  it('Should render Section without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List />, div);
    unmountComponentAtNode(div);
  });
  // snapshot test
  it('renders List UI as expected', () => {
    const lists = STORE.lists.map(list => {
      return <List
        key={list.id}
        header={list.header}
        cards={list.cardIds.map(id => STORE.allCards[id])}
      />
    })
    const tree = renderer
      .create(lists)
      .toJSON()
    expect(tree).toMatchSnapshot();

  })
});