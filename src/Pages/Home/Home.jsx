import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home | ex-change</title>
        </Helmet>

        {/* items */}
        <div>
          <h1>This is home</h1>
        </div>
      </>
    );
};

export default Home;