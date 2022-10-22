import { Link } from 'gatsby';
import * as React from 'react';

type LayoutProps = {
  pageTitle: string;
  children?: React.ReactNode;
};

function Layout({ pageTitle, children }: LayoutProps) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
}

export default Layout;
