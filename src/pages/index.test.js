import React from 'react';
import Index from './index';
import { testRender } from '../helpers/testTools'

it('Index render without crashing', () => {
  testRender(<Index />);
});