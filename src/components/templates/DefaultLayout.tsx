/* eslint-disable*/

import { Footer } from '../atoms/layout/Footer';
import { Header } from '../atoms/layout/Header';

export const DefaultLayout = (props: any) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer></Footer>
    </>
  );
};
