import React from "react";
import { graphql } from "gatsby";

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
        variants {
          id
          priceV2 {
            amount
            currencyCode
          }
        }
        images {
          localFile {
            childImageSharp {
              fluid {
                srcSet
              }
              fixed(height: 100, width: 100) {
                srcSet
              }
            }
          }
        }
      }
    }
  }
`;

export default ({ data }) => (
  <>
    <h1>Hello World!</h1>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </>
);
