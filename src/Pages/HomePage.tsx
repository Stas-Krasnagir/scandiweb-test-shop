import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GET_ALL_PRODUCTS_INFO } from "../query/index";
import { Product, ICategory } from "../types";
import "./HomePage.css";
import { useSelector } from "react-redux";
import { ICurrencyReducer, ICategoryReducer } from "../types";
import { NavLink } from "react-router-dom";

export default function HomePage() {
  const storeCurrency = useSelector<ICurrencyReducer>(
    (state) => state.currency.currency
  );
  const [selectedCurrency, setSelectedCurrency] = useState(storeCurrency);

  const storeCategory = useSelector<ICategoryReducer>(
    (state) => state.category.category
  );
  const [selectedCategory, setSelectedCategory] = useState<any>(storeCategory);

  useEffect(() => {
    setSelectedCurrency(storeCurrency);
  }, [storeCurrency]);

  useEffect(() => {
    setSelectedCategory(storeCategory);
  }, [storeCategory]);

  function setItemId(id: string) {
    localStorage.setItem("ItemID", id);
  }

  const {
    data: allProductsData,
    loading: allProductsLoading,
    // error: allProductsError,
  } = useQuery<ICategory>(GET_ALL_PRODUCTS_INFO);
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  useEffect(() => {
    try {
      if (!allProductsLoading && allProductsData) {
        setAllProducts(
          allProductsData["category"]["products"].map((element) => element)
        );
      }
    } catch (e) {
      console.log("error is: " + e);
    }
  }, [allProductsData]);

  if (allProductsLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="home_page">
      <div className="category">{selectedCategory}</div>
      <div className="home_page_products">
        {allProducts
          .filter((element) => {
            if (selectedCategory === "ALL") return element;
            else {
              return element.category === selectedCategory;
            }
          })
          .map((element) => (
            <NavLink to="/goods" onClick={() => setItemId(element.id)}>
              <div className="product_block">
                <img src={element.gallery[0]} alt="" height={150} width={150} />
                <div className="product_name"> {element.name}</div>
                <div className="currency_block">
                  {element.prices.map((element) => {
                    if (element.currency === selectedCurrency) {
                      return (
                        <>
                          <div className="currency_valuta">
                            {element.currency}
                          </div>
                          <div className="currency_amount">
                            {element.amount}
                          </div>
                        </>
                      );
                    }
                  })}
                </div>
              </div>
            </NavLink>
          ))}
      </div>
    </div>
  );
}
