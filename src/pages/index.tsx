import Layout from 'components/layout';
import Seo from 'components/seo';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

function IndexPage() {
  return (
    <Layout pageTitle='Home Page'>
      <StaticImage
        alt='cat'
        // src='https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80'
        src='../assets/images/cat.jpg'
      />
      <p>Welcome to my Gatsby site!</p>
    </Layout>
  );
}

export const Head = () => <Seo title='Home Page' />;

export default IndexPage;
