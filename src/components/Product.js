import React from "react";
import Image from "gatsby-image";

const Product = ({ product }) => {
  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.productType}</p>
      <p>{product.description}</p>
      <ul>
        {product.tags.map((tag) => (
          <li key={`tag=${tag}`}>{tag}</li>
        ))}
      </ul>
      <Image
        fixed={product.variants[0].image.localFile.childImageSharp.fixed}
        alt={product.title}
      />
      {product.variants.length > 1 &&
        product.variants.map((variant) => <p>Option: {variant.title}</p>)}
    </div>
  );
};

export default Product;
