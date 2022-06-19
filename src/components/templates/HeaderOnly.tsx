/* eslint-disable*/

import { Header } from '../atoms/layout/Header';

export const HeaderOnly = (props: any) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
};
