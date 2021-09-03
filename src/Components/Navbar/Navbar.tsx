import "./Navbar.css";
import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GET_CATEGORIES_NAMES, GET_CURRENCIES } from "../../query/index";
import { Categories, Currencies } from "../../types";
import { useDispatch } from "react-redux";
import { setCurrencyAction } from "../../store/currencyReducer";
import { setCategoryAction } from "../../store/categoryReducer";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const dispatch = useDispatch();
  const [currencies, setСurrencies] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  const {
    data: categoriesData,
    loading: categoriesLoading,
    // error: categoriesError,
  } = useQuery<Categories>(GET_CATEGORIES_NAMES);

  const {
    data: currenciesData,
    loading: currenciesLoading,
    // error: currenciesError,
  } = useQuery<Currencies>(GET_CURRENCIES);

  const [selectedCurrency, setCurrency] = useState<string>("USD");
  const [selectedCategory, setCategory] = useState<string>("ALL");

  useEffect(() => {
    dispatch(setCurrencyAction(selectedCurrency));
  }, [selectedCurrency]);

  useEffect(() => {
    dispatch(setCategoryAction(selectedCategory));
  }, [selectedCategory]);

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
      if (!currenciesLoading && currenciesData) {
        setСurrencies(currenciesData.currencies);
        // console.log("currencies: " + currencies);
      }
    } catch (e) {
      console.log("error is: " + e);
    }
  }, [currenciesData]);

  return (
    <div className="Navbar">
      <div className="links_container">
        <div className="categories_card">
          <button
            className="categories_element"
            value="ALL"
            onClick={() => setCategory("ALL")}
          >
            ALL
          </button>
          {categories.map((element) => (
            <button
              className="categories_element"
              value={element}
              onClick={() => setCategory(element)}
            >
              {element.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
      <NavLink to="/">
        <div className="logo_container">logo img</div>
      </NavLink>

      <div className="tools_container">
        <div>корзина</div>
        <div className="currencies_card">
          <select onChange={(event) => setCurrency(event.target.value)}>
            {currencies.map((element) => (
              <option className="currencies_element" value={element}>
                {element}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
