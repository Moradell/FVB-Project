import Head from 'next/head';

import A from './A';

export const MainContainer = ({ children }) => {
  return (
    <>
      <Head>
        <meta keywords={'asd, asd2'}></meta>
        <title></title>
      </Head>
      <div className='navbar'>
        <A text='About me' href='about' />
        <A text='Main' href='/' />
        <A text='Users' href='/users' />
      </div>
      <div>
        {children}
      </div>
      <style jsx>
        {`
          .navbar {
            background: orange;
            padding: 15px;
          }
        `}
      </style>
    </>
  );
}
