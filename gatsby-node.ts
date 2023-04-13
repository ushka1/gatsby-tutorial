import { CreateNodeArgs } from 'gatsby';

// export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] =
//   ({ actions: { createTypes, printTypeDefinitions }, schema }) => {
//     // printTypeDefinitions({ path: './typeDefs.txt' });

//     const typeDefs = `
//       type Mdx implements Node {
//         frontmatter: MdxFrontmatter!
//       }
//       type MdxFrontmatter {
//         title: String
//         date: Date @dateformat
//         slug: String
//         hero_image: File! @fileByRelativePath
//         hero_image_alt: String
//       }
//     `;

//     createTypes(typeDefs);
//   };

exports.onCreateNode = ({ node, actions }: CreateNodeArgs) => {
  const { createNode } = actions;

  if (node.internal.type === `Mdx`) {
    createNode({});
  }
};
