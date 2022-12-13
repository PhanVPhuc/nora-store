import React, { Children } from 'react';
import navBar from './navBar';
import Footer from './Footer';
import Head from 'next/head';

function Layout({ Children }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="Nora Store" content="web ban hang cua Nora" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <navBar />
      {Children}
      <Footer />
    </>
  );
}

export default Layout;
