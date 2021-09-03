import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import CartPage from "./Pages/CartPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/goods" component={ProductPage} />
        <Route path="/cart" component={CartPage} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
