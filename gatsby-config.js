require("dotenv").config();

module.exports = {
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "src/pages",
      },
    },
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: "hot-green-tees",
        // get here https://hot-green-tees.myshopify.com/admin/apps/private/
        accessToken: process.env.GATSBY_SHOPIFY_STOREFRONT_TOKEN,
        apiVersion: "2020-10",
        includeCollections: ["shop"],
      },
    },
  ],
};
