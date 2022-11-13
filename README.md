<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby minimal TypeScript starter
</h1>

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal TypeScript starter.

    ```shell
    # create a new Gatsby site using the minimal TypeScript starter
    npm init gatsby
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.tsx` to see your site update in real-time!

4.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

## 🚀 Quick start (Gatsby Cloud)

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-minimal-ts)

# Setup

1. `npm init gatsby`

### Eslint + Typegen:

1. Zainstaluj eslint 8^ i zrób config z `extend` https://www.gatsbyjs.com/docs/how-to/custom-configuration/eslint/ dzięki temu będzie działało wszystko jak w default gatsby eslint.
1. Zrób typescript typegen oraz eslint typegen https://www.gatsbyjs.com/docs/how-to/local-development/graphql-typegen/#configuring-the-vscode-graphql-plugin.
1. Sprawdź czy jest to dla vscode extension https://www.gatsbyjs.com/docs/how-to/local-development/graphql-typegen/#configuring-the-vscode-graphql-plugin.

### CSS/SCSS Modules + Typescript:

1. Zainstaluj `typescript-plugin-css-modules` i wykonaj instrukcje jak na github pamietaj o workspace ts.
1. Zainstaluj `gatsby-plugin-sass`.
1. TSC i tak nie zadziała, ale IDE zadziałą
1. W przeglądarce są linkacze
1. Ten plugin w tsconfig to pomage IDE'owi ale nie pomaga tsc bo jest zjebane (linkacz w przegladarce)

### Images

1. StaticImage potrzebuje bezpośredniej ścieżki, gdyż generuje zdjęcia na tej podstawie.s

### Typing

1. `props :PageProps & LayoutProps` JEDNAK NIE
1. Gdy Ci VScode graphql nie sugeruje nowych rzeczy, zrób F1 + Graphql Manual Restart
1. Restart GRAPHQL, TYPESCIRPT, ESLINT serverów w vscode

### Typegen

Jest cos zjebany troszki eee no xd!
