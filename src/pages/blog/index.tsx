import Layout from 'components/layout';
import { graphql, Link, PageProps } from 'gatsby';
import * as React from 'react';
import ReactMarkdown from 'react-markdown';

function BlogPage({ data }: PageProps<Queries.BlogPageQuery>) {
  return (
    <Layout pageTitle='My Blog Posts'>
      <ul>
        {data.allMdx.nodes.map((n) => (
          <article key={n.id}>
            <h2>
              <Link to={`/blog/${n.frontmatter?.slug}`}>
                {n?.frontmatter?.title}
              </Link>
            </h2>
            <p>Posted: {n?.frontmatter?.date}</p>
            <ReactMarkdown>{n.body || ''}</ReactMarkdown>
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
        body
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

export const Head = ({ data }: PageProps<Queries.BlogPageQuery>) => (
  <>
    <title>My Blog Posts | {data.site?.siteMetadata?.title}</title>
  </>
);

export default BlogPage;
