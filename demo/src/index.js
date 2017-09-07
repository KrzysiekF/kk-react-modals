import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import ModalsContener, { modal } from '../../src';

class Demo extends Component {

  constructor(props) {
    super(props);

    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    modal.open('test', { test: 'test', test1: 'test1' });
  }

  render() {
    return (
      <div>
        <h1>kkReactModals Demo</h1>

        <button onClick={this.openModal}>Open modal</button>

      </div>
    );
  }
}

const createStoreWithMiddleware = applyMiddleware()(createStore);
export const store = createStoreWithMiddleware(
  reducers,
  // eslint-disable-next-line
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
);

render(
  <Provider store={store}>
    <div>
      <Demo />
      <ModalsContener store={store} />
    </div>
  </Provider>,
  document.getElementById('demo'),
);
