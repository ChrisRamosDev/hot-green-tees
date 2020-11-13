/** @jsx jsx */
import { jsx } from "theme-ui";
import Image from "gatsby-image";

const BuyButton = ({ variants }) => {
  const price = variants.priceV2.amount;
  const formatter = {
    style: "currency",
    currency: variants.priceV2.currencyCode,
  };
  const formattedPrice = new Intl.NumberFormat("en-US", formatter);
  return (
    <button
      sx={{
        bg: "main",
        color: "white",
        border: 0,
        borderRadius: "5px",
        p: "8px",
        fontSize: "1rem",
        fontWeight: 600,
        boxShadow: "sharp",
        m: ".5rem",
        mt: 0,
        cursor: "pointer",
      }}
    >
      Buy for {formattedPrice.format(price)}
    </button>
  );
};

const Product = ({ product }) => {
  return (
    <div
      sx={{
        bg: "white",
        border: "5px solid white",
        borderRadius: 8,
        mb: "1rem",
        boxShadow: "diffuse",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Image
        fluid={product.variants[0].image.localFile.childImageSharp.fluid}
        alt={product.title}
        sx={{
          maxWidth: "100%",
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
        }}
      />
      <h2 sx={{ color: "text", mt: ".5rem", px: "8px", mb: "1rem" }}>
        {product.title}
      </h2>
      <p sx={{ mt: "0.5rem", px: ".5rem" }}>{product.description}</p>
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          alignItems: "baseline",
        }}
      >
        <BuyButton variants={product.variants[0]} />
        <a
          href=' '
          sx={{ textAlign: "center", textDecoration: "none", color: "link" }}
        >
          Details
        </a>
      </div>
    </div>
  );
};

export default Product;
