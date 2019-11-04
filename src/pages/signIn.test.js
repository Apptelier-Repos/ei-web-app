import React from 'react';
import SignIn from './signIn';
import { testRender } from '../helpers/testTools'

it('SignIn render without crashing', () => {
  testRender(<SignIn />);
});
