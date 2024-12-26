import { useParams } from "react-router-dom";
import Products from "./Products";

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL

  // Simulated product data (fetch or derive this dynamically)
  const product = Products.find((item) => item.id === parseInt(id));

  if (!product) return <div>Product not found!</div>;

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <img src={product.imageUrl} alt={product.name} />
      <p>Price: Rs {product.price}</p>
      <p>Retail Price: Rs {product.retailPrice}</p>
      <p>Discount: {product.discount}</p>
      <p>Reviews: {product.reviews}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};

export default ProductDetails;
