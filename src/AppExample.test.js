import React from 'react';
import ReactDOM from 'react-dom';
import AppExample from './AppExample';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppExample />, div);
  ReactDOM.unmountComponentAtNode(div);
});
