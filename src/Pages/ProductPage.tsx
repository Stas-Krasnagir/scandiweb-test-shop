import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GET_PRODUCT_INFO } from "../query/index";
import { Product, IProduct, ICurrencyReducer } from "../types";
import "./ProductPage.css";
import { useSelector } from "react-redux";

export default function ProductPage() {
  let itemId: string | null = localStorage.getItem("ItemID");

  const storeCurrency = useSelector<ICurrencyReducer>(
    (state) => state.currency.currency
  );

  const [selectedCurrency, setSelectedCurrency] = useState(storeCurrency);
  useEffect(() => {
    setSelectedCurrency(storeCurrency);
  }, [storeCurrency]);

  const { data: oneProductData, loading: oneProductsLoading } =
    useQuery<IProduct>(GET_PRODUCT_INFO, {
      variables: { id: itemId },
    });

  const [oneProduct, setOneProduct] = useState<Product>();

  useEffect(() => {
    try {
      if (!oneProductsLoading && oneProductData) {
        setOneProduct(oneProductData.product);
        console.log(oneProduct);
      }
    } catch (e) {
      console.log("error is: " + e);
    }
  }, [oneProductData]);

  return (
    <div className="product-page">
      <div className="product-imgs">
        <div className="product-slider">
          {oneProduct?.gallery.map((element) => (
            <img src={element} alt="" className="product-slider-img" />
          ))}
        </div>
        <div className="main-img">
          <img
            src={oneProduct?.gallery[0]}
            alt=""
            className="product-main-img"
          />
        </div>
      </div>

      <div className="product-description">
        <div className="product-name">{oneProduct?.name}</div>
        <div className="product-brand">{oneProduct?.brand}</div>

        <div className="product-attributes">
          {oneProduct?.attributes.map((element) => (
            <>
              {/* <div>{element.id}</div> */}
              <div>{element.name}</div>
              <div>{element.type}</div>
            </>
          ))}
        </div>

        <div className="product-price-card">
          <div className="product-price-title">PRICE:</div>
          {oneProduct?.prices
            .filter((element) => element.currency === selectedCurrency)
            .map((element) => (
              <div className="price-block">
                <div className="currency-price">{element.currency}</div>
                <div className="amount-price">{element.amount}</div>
              </div>
            ))}
        </div>
        <div className="card-add-btn">ADD TO CARD</div>
        <div className="product-info">Описание</div>
      </div>
    </div>
  );
}
