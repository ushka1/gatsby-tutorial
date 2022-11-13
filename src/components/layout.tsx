import { graphql, Link, useStaticQuery } from 'gatsby';
import * as React from 'react';
import {
  container,
  siteTitle,
  navLinkItem,
  navLinkText,
  navLinks,
  heading,
} from './layout.module.scss';

type LayoutProps = {
  pageTitle: string;
  children?: React.ReactNode;
};

function Layout({ pageTitle, children }: LayoutProps) {
  const data = useStaticQuery(graphql`
    query Layout {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={container}>
      <nav>
        <header className={siteTitle}>{data.site.siteMetadata.title}</header>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to='/' className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to='/about' className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to='/blog' className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
}

export default Layout;
