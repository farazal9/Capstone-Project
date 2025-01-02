import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const products1 = [
  {
    id: 1,
    name: "Audionic Airbud 550",
    brand: "Audionic",
    price: 3811,
    retailPrice: 9990,
    discount: "62% OFF",
    rating: 4.8,
    reviews: 538,
    imageUrl: "https://images.priceoye.pk/audionic-airbud-550-pakistan-priceoye-o6fve-270x270.webp",
    description: "High-quality wireless earbuds with a comfortable fit and impressive sound clarity.",
  },
  {
    id: 2,
    name: "Anker R50i Earbuds",
    brand: "Anker",
    price: 4611,
    retailPrice: 7199,
    discount: "36% OFF",
    rating: 4.7,
    reviews: 30,
    imageUrl: "https://images.priceoye.pk/anker-r50i-earbuds-pakistan-priceoye-csv44-270x270.webp",
    description: "Experience premium audio quality with long battery life and fast charging capabilities.",
  },
  {
    id: 3,
    name: "Xiaomi Redmi Buds 6 Lite",
    brand: "Xiaomi",
    price: 5899,
    retailPrice: 6999,
    discount: "16% OFF",
    rating: 4.4,
    reviews: 11,
    imageUrl: "https://images.priceoye.pk/xiaomi-redmi-buds-6-lite-wireless-earbuds-pakistan-priceoye-c4dfa-270x270.webp",
    description: "Lightweight earbuds featuring advanced noise cancellation and seamless connectivity.",
  },
  {
    id: 4,
    name: "QCY T13 ANC 2",
    brand: "QCY",
    price: 4549,
    retailPrice: 7399,
    discount: "39% OFF",
    rating: 4.1,
    reviews: 14,
    imageUrl: "https://images.priceoye.pk/qcy-t13-anc-2-pakistan-priceoye-uvlbc-270x270.webp",
    description: "Affordable earbuds with active noise cancellation and crystal-clear audio quality."
  },
  {
    id: 5,
    name: "Redmi Buds 6  Wireless Earbuds",
    brand: "Xiaomi",
    price: 4611,
    retailPrice: 7199,
    discount: "36% OFF",
    rating: 4.5,
    reviews: 60,
    imageUrl: "https://images.priceoye.pk/redmi-buds-6-active-wireless-earbuds-pakistan-priceoye-h6kkk-270x270.webp",
    description: "Durable and stylish earbuds offering superb sound quality for music and calls."
  },
  {
    id: 6,
    name: "Soundpeats Wireless Earbuds",
    brand: "Soundpeats",
    price: 10518,
    retailPrice: 14000,
    discount: "25% OFF",
    rating: 3.7,
    reviews: 6,
    imageUrl: "https://images.priceoye.pk/soundpeats-engine4-wireless-earbuds-pakistan-priceoye-40ifu-270x270.webp",
    description: "Engineered for bass enthusiasts with dual drivers and ergonomic design."
  },
];

const products2 = [
  {
    id: 7,
    name: "Soundpeats  Earbuds",
    brand: "Soundpeats",
    price: 10518,
    retailPrice: 41400,
    discount: "25% OFF",
    rating: 4.6,
    reviews: 13,
    imageUrl: "https://images.priceoye.pk/soundpeats-engine4-wireless-earbuds-pakistan-priceoye-40ifu-270x270.webp",
    description: "High-quality wireless earbuds with a comfortable fit and impressive sound clarity."
  },
  {
    id: 8,
    name: "Imiki MT2 Wireless Earbuds",
    brand: "Imiki",
    price: 4299,
    retailPrice: 69999,
    discount: "39% OFF",
    rating: 4.9,
    reviews: 38,
    imageUrl: "https://images.priceoye.pk/imilab-imiki-mt2-wireless-erbuds-pakistan-priceoye-obxhu-270x270.webp",
    description: "Experience premium audio quality with long battery life and fast charging capabilities."
  },
  {
    id: 9,
    name: "Realme T100 Wireless Earbuds",
    brand: "Realme",
    price: 9999,
    retailPrice: 15999,
    discount: "42% OFF",
    rating: 4.9,
    reviews: 42,
    imageUrl: "https://images.priceoye.pk/realme-t100-wireless-earbuds-pakistan-priceoye-tq6ud-270x270.webp",
    description: "Lightweight earbuds featuring advanced noise cancellation and seamless connectivity."
  },
  {
    id: 10,
    name: "Anker R50i Earbuds",
    brand: "Anker",
    price: 4611,
    retailPrice: 7199,
    discount: "36% OFF",
    rating: 4.7,
    reviews: 31,
    imageUrl: "https://images.priceoye.pk/anker-r50i-earbuds-pakistan-priceoye-csv44-270x270.webp",
    description: "Durable earbuds offering superb sound quality for music and calls."
  },
  {
    id: 11,
    name: "Audionic Airbud 590  Earbuds",
    brand: "Audionic",
    price: 3499,
    retailPrice: 4999,
    discount: "58% OFF",
    rating: 4.8,
    reviews: 45,
    imageUrl: "https://images.priceoye.pk/audionic-airbud-590-wireless-earbuds-pakistan-priceoye-tpz2q-270x270.webp",
    description: "Affordable earbuds engineered for bass enthusiasts with ergonomic design."
  },
  {
    id: 12,
    name: "Xiaomi Wireless Earbuds", // Updated company name to Xiaomi
    brand: "Xiaomi", 
    price: 9499,
    retailPrice: 9499,
    discount: "58% OFF",
    rating: 4.8,
    reviews: 45,
    imageUrl: "https://images.priceoye.pk/audionic-airbud-590-wireless-earbuds-pakistan-priceoye-tpz2q-270x270.webp",
    description: "Durable and stylish earbuds offering superb sound quality for music and calls."
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const product = [...products1, ...products2].find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center mt-5">
        <h2>Product Not Found</h2>
      </div>
    );
  }


  return (
    <div className="container mt-5">
      <div className="row g-4">
        <div className="col-md-5 text-center">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="img-fluid rounded"
            style={{ maxWidth: "100%", height: "auto", border: "1px solid #ddd" }}
          />
        </div>
        <div className="col-md-7">
          <h1 className="fw-bold">{product.name}</h1>
          <h5 className="text-muted">Brand: {product.brand}</h5>
          <p className="mt-3">{product.description}</p>
          <div className="mt-4">
            <h4 className="text-success fw-bold mb-1">
              PKR {product.price.toLocaleString()}
            </h4>
            <p>
              <span className="text-muted text-decoration-line-through">
                PKR {product.retailPrice.toLocaleString()}
              </span>
              <span className="ms-3 text-danger fw-bold">{product.discount}</span>
            </p>
          </div>
          <div className="mt-3">
            <span
              className="badge bg-warning text-dark"
              style={{ fontSize: "1rem", padding: "0.6em" }}
            >
              ⭐ {product.rating}
            </span>
            <span className="ms-2 text-muted">
              ({product.reviews} reviews)
            </span>
          </div>
          <div className="mt-4">
            <button
              style={{
                background: "linear-gradient(90deg, #6A0572, #FF5733)",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                padding: "10px 20px",
                fontSize: "1rem",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "scale(1.05)";
                e.target.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.3)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "none";
              }}
              onClick={() => navigate("/delivery")}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};



export default ProductDetails;
