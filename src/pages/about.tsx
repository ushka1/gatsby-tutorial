import { Link } from 'gatsby';
import * as React from 'react';

function AboutPage() {
  return (
    <main>
      <h1>About Me</h1>
      <Link to='/'>Home</Link>
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </main>
  );
}

/*
 * You can add metadata that will be injected into the <head> here.
 */
export const Head = () => (
  <>
    <title>About Me</title>
    <meta name='description' content='Your description' />
  </>
);

export default AboutPage;
