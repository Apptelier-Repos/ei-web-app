import React from 'react';
import ReactDOM from 'react-dom';
import NotFound from './notFound';

it('NotFound render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NotFound />, div);
  ReactDOM.unmountComponentAtNode(div);
});