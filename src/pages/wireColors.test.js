import React from 'react';
import WireColors from './wireColors';
import { testRender } from '../helpers/testTools'

it('WireColors render without crashing', () => {
  testRender(<WireColors />);
});
