import React from 'react';
import Nav from '../../components/home/navbar';
import Footer from '../../components/home/footer';

const HomePageLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default HomePageLayout;
