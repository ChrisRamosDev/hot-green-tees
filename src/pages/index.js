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
                  cropFocus: NORTH
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
    <div sx={{ mx: "auto", maxWidth: "90vw" }}>
      <h1>HotGreenTees</h1>
      {data.allShopifyProduct.nodes.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  </Layout>
);
