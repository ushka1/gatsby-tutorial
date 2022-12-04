import Layout from 'components/layout';
import Seo from 'components/seo';
import { graphql, HeadProps, PageProps } from 'gatsby';
import * as React from 'react';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';

function BlogPost({
  data,
  pageContext,
  children, // this is excerpt value
}: PageProps<Queries.BlogPostPageQuery>) {
  console.log(pageContext); // these are available in query

  const prices = data.mdx?.frontmatter?.prices;
  if (prices) {
    console.log(Object.entries(prices).sort((a, b) => a[1] - b[1])[0]);
  }

  const image = getImage(data?.mdx?.frontmatter?.hero_image as ImageDataLike);

  return (
    <Layout pageTitle={data.mdx?.frontmatter?.title || ''}>
      {image && (
        <GatsbyImage
          image={image}
          alt={data?.mdx?.frontmatter?.hero_image_alt || ''}
        />
      )}
      <ul>
        {data.mdx?.frontmatter?.tags?.map((t) => (
          <li>{t}</li>
        ))}
      </ul>
      <p>Posted: {data.mdx?.frontmatter?.date}</p>
      {children}
    </Layout>
  );
}

export const query = graphql`
  query BlogPostPage($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
        tags
        prices {
          S
          M
          L
        }
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head = ({ data }: HeadProps<Queries.BlogPostPageQuery>) => (
  <Seo title={data.mdx?.frontmatter?.title || ''} />
);

export default BlogPost;
