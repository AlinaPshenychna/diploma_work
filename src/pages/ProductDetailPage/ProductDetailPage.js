import "./ProductDetailPage.css";
import ProductPicture from "../../assets/lenovo-laptop.png";
import LogoHeader from "../../assets/logo-productTable.svg";
import React, { useEffect, useState } from "react";
import { API_URL } from "../../constants";
import { useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { formatQuantity } from "../../utils/formatQuantity";

const ProductDetailPage = () => {
  const [product, setProduct] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { productId } = useParams();

  const getProduct = async () => {
    try {
      const response = await fetch(`${API_URL}products/products/${productId}`);
      if (!response.ok) {
        throw new Error("Something went wrong on the Product Detail Page");
      }
      const data = await response.json();
      setProduct(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    getProduct();
  }, [productId]);

  if (isLoading) {
    return <div>Loading...PDP</div>;
  }
  if (isError) {
    return <div>Error loading ProductId</div>;
  }

  return (
    <div className="Pdp">
      <img src={LogoHeader} alt="logo-rozetka"></img>
      <div className="Pdp-container">
        <div className="Arrow-position">
          <Link to="/ProductPreview" className="Pdp-link">
            <FaArrowLeftLong className="Arrow-title" />
            <h1 className="Pdp-title">{product.name}</h1>
          </Link>
        </div>
        <div className="Pdp-flex">
          <img
            src={ProductPicture}
            alt="ProductPicture"
            className="Product-img"
          ></img>
          <div className="Pdp-right-side">
            <p className="Pdp-available"> Є в наявності</p>
            <p className="Pdp-price">{product.price}₴</p>
            <p className="Pdp-quantity">
              Кількість: {formatQuantity(product.quantity)}
            </p>
          </div>
        </div>
        <div className="Pdp-disc-title">
          Опис
          <span className="Pdp-title-hide"> {product.name}</span>
        </div>
        <p className="Pdp-discription">{product.discription}</p>
      </div>
    </div>
  );
};

export default ProductDetailPage;
