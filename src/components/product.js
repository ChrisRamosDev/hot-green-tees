/** @jsx jsx */
import { jsx } from "theme-ui";
import Image from "gatsby-image";

const Product = ({ product }) => {
  return (
    <div
      sx={{
        bg: "white",
        border: "5px solid white",
        borderRadius: "8px",
        mb: "1rem",
      }}
    >
      <Image
        fluid={product.variants[0].image.localFile.childImageSharp.fluid}
        alt={product.title}
        sx={{
          maxWidth: "100%",
        }}
      />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <ul>
        {product.variants.map((variant) => (
          <li>{variant.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
