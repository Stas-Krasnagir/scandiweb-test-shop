import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import {
  GET_CATEGORIES_NAMES,
  GET_CURRENCIES,
  GET_ALL_PRODUCTS_INFO,
  GET_PRODUCT_INFO,
} from "../query/index";
import { Product, Categories, Currencies, ICategory } from "../types";

export default function HomePage() {
  const {
    data: currenciesData,
    loading: currenciesLoading,
    // error: currenciesError,
  } = useQuery<Currencies>(GET_CURRENCIES);
  const [currencies, setСurrencies] = useState<string[]>([]);

  const {
    data: categoriesData,
    loading: categoriesLoading,
    // error: categoriesError,
  } = useQuery<Categories>(GET_CATEGORIES_NAMES);
  const [categories, setCategories] = useState<string[]>([]);

  const {
    data: allProductsData,
    loading: allProductsLoading,
    // error: allProductsError,
  } = useQuery<ICategory>(GET_ALL_PRODUCTS_INFO);
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  useEffect(() => {
    try {
      if (!currenciesLoading && currenciesData) {
        setСurrencies(currenciesData.currencies);
        // console.log("currencies: " + currencies);
      }
    } catch (e) {
      console.log("error is: " + e);
    }
  }, [currenciesData]);

  useEffect(() => {
    try {
      if (!categoriesLoading && categoriesData) {
        setCategories(
          categoriesData["categories"].map((element) => element.name)
        );
        // console.log("categories: " + categories);
      }
    } catch (e) {
      console.log("error is: " + e);
    }
  }, [categoriesData]);

  useEffect(() => {
    try {
      if (!allProductsLoading && allProductsData) {
        setAllProducts(
          allProductsData["category"]["products"].map((element) => element)
        );

        // console.log("AllProducts: " + allProducts);
      }
    } catch (e) {
      console.log("error is: " + e);
    }
  }, [allProductsData]);

  // let id = "huarache-x-stussy-le";

  const {
    data: oneProductData,
    loading: oneProductsLoading,
    // error: allProductsError,
  } = useQuery<Product>(GET_PRODUCT_INFO, {
    variables: { id: "huarache-x-stussy-le" },
  });
  const [oneProduct, setOneProduct] = useState<Product>();
  console.log(oneProductData);

  useEffect(() => {
    try {
      if (!oneProductsLoading && oneProductData) {
        setOneProduct(oneProductData);
        console.log("oneProduct: " + oneProduct);
      }
    } catch (e) {
      console.log("error is: " + e);
    }
  }, [oneProductData]);

  if (
    currenciesLoading ||
    categoriesLoading ||
    allProductsLoading ||
    oneProductsLoading
  ) {
    return <h1>Loading...</h1>;
  }
  let selectedCurrency = "USD";
  return (
    <div className="home_page">
      <div className="currencies_card">
        <div className="currencies_title">Валюта</div>
        {currencies.map((element) => (
          <div className="currencies_element">{element}</div>
        ))}
      </div>

      <div className="categories_card">
        <div className="categories_title">Категории</div>
        {categories.map((element) => (
          <div className="categories_element">{element}</div>
        ))}
      </div>

      {allProducts.map((element) => (
        <>
          <div className="produc_block">
            <img src={element.gallery[0]} alt="" height={150} width={150} />
            <div className="produc_name"> {element.name}</div>
            <div className="currency_block">
              {element.prices.map((element) => {
                if (element.currency === selectedCurrency) {
                  return (
                    <>
                      <div className="currency_valuta">{element.currency}</div>
                      <div className="currency_amount">{element.amount}</div>
                    </>
                  );
                }
              })}
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
