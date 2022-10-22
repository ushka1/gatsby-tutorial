import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

function AboutPage() {
  return (
    <Layout pageTitle='About Me'>
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </Layout>
  );
}

/*
 * You can add metadata that will be injected into the <head> here.
 */
// export const Head = () => (
//   <>
//     <title>About Me</title>
//     <meta name='description' content='Your description' />
//   </>
// );

export const Head = () => <Seo title='About Me' />;

export default AboutPage;
