import * as React from 'react';
import Layout from '../components/layout';

function IndexPage() {
  return (
    <Layout pageTitle='Home Page'>
      <p>Welcome to my Gatsby site!</p>
    </Layout>
  );
}

export const Head = () => <title>Home Page</title>;

export default IndexPage;
