import React from 'react';
import ReactDOM from 'react-dom';
import WireColors from './wireColors';

it('WireColors render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WireColors />, div);
  ReactDOM.unmountComponentAtNode(div);
});
