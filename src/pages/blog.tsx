import Layout from 'components/layout';
import { graphql, PageProps } from 'gatsby';
import * as React from 'react';

function BlogPage({ data }: PageProps<Queries.BlogPageQuery>) {
  return (
    <Layout pageTitle='My Blog Posts'>
      <ul>
        {data.allMdx.nodes.map((node: any) => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))}
      </ul>
    </Layout>
  );
}

export const query = graphql`
  query BlogPage {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        excerpt
        frontmatter {
          title
          date(formatString: "DD/MM/YYYY")
          slug
        }
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
    <title>My Blog Posts | {data.site.siteMetadata.title}</title>
  </>
);

export default BlogPage;
