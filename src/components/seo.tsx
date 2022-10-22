import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

type SeoProps = {
  title?: string;
};

function Seo({ title }: SeoProps) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <title>
      {title} | {data.site.siteMetadata.title}
    </title>
  );
}

export default Seo;
