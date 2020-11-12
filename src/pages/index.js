import React from "react";
import { graphql } from "gatsby";

import Product from "../components/Product";

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
                fixed(
                  cropFocus: ATTENTION
                  fit: COVER
                  height: 100
                  width: 100
                ) {
                  ...GatsbyImageSharpFixed_withWebp_tracedSVG
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
  <>
    <h1>Hello World!</h1>
    {data.allShopifyProduct.nodes.map((product) => (
      <Product key={product.id} product={product} />
    ))}
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </>
);
