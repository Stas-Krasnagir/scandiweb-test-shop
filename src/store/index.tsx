import { createStore, combineReducers } from "redux";
import { currencyReducer } from "./currencyReducer";
import { categoryReducer } from "./categoryReducer";

const rootReducer = combineReducers({
  currency: currencyReducer,
  category: categoryReducer,
});

export const store = createStore(rootReducer);
