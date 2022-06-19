/* eslint-disable*/

import { RecoilRoot } from 'recoil';
import { UserProviders } from './components/providers/UserProviders';
import { Router } from './router/Router';
import './styles.css';

export const App = () => {
  return (
    <RecoilRoot>
      <UserProviders>
        <Router></Router>
      </UserProviders>
    </RecoilRoot>
  );
};
