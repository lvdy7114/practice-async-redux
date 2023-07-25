import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, fetchProducts } from "../redux/productsSlice";

function ProductsPage() {

  const dispatch = useDispatch()
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  } else if (status === "failed") {
    return <div>Error loading products</div>;
  }

  return (
    <div>
      <h1>Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <button onClick={() => dispatch(addToCart(product))}>
              Add to cart
            </button>
            <Link to="/checkout">Go to Checkout</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;

  

