import "./ProductPreview.css";
import CardProduct from "../../components/CardProduct/CardProduct";
import LogoProduct from "../../assets/logo-productTable.svg";
import React, { useEffect, useState } from "react";
import { API_URL } from "../../constants";

const ProductPreview = () => {
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = async () => {
    try {
      const response = await fetch(`${API_URL}products/products`);
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="ProductPreview-container">
      <img src={LogoProduct} alt="logo-rozetka" className="LogoProduct"></img>
      <div className="CardProduct-flex">
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error loading product</p>}
        {!isLoading &&
          !isError &&
          products.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};
export default ProductPreview;
