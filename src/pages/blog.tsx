import Layout from 'components/layout';
import { graphql } from 'gatsby';
import * as React from 'react';

function BlogPage({ data }: any) {
  return (
    <Layout pageTitle='My Blog Posts'>
      <p>My cool posts will go in here</p>
      <ul>
        {data.allFile.nodes.map((n: any) => (
          <li key={n.name}>{n.name}</li>
        ))}
      </ul>
    </Layout>
  );
}

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export const Head = ({ data }: any) => (
  <>
    <title>{data.site.siteMetadata.title} | My Blog Posts</title>
  </>
);

export default BlogPage;
