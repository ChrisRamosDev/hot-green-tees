/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql } from "gatsby";

import Product from "../components/product";
import Layout from "../components/layout";

export const query = graphql`
  {
    allShopifyProduct(
      filter: { variants: { elemMatch: { availableForSale: { eq: true } } } }
    ) {
      nodes {
        id
        title
        description
        productType
        tags
        variants {
          id
          priceV2 {
            amount
            currencyCode
          }
          image {
            localFile {
              childImageSharp {
                fluid(
                  cropFocus: CENTER
                  fit: COVER
                  maxWidth: 1600
                  maxHeight: 900
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
          title
        }
      }
    }
  }
`;

export default ({ data }) => (
  <Layout>
    <h1 sx={{ textAlign: "center" }}>HotGreenTees</h1>
    <div
      sx={{
        mx: "auto",
        maxWidth: "90vw",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "2em",
      }}
    >
      {data.allShopifyProduct.nodes.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  </Layout>
);
