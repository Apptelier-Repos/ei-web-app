import React from 'react';
import NotFound from './notFound';
import { testRender } from '../helpers/testTools'

it('NotFound render without crashing', () => {
  testRender(<NotFound />);
});