export interface Price {
  currency: string;
  amount: number;
}

export interface Attribute {
  displayValue: string;
  value: string;
  id: string;
}

export interface AttributeSet {
  id: string;
  name: string;
  type: string;
  items: Attribute;
}

export interface Product {
  id: string;
  name: string;
  inStock: boolean;
  gallery: string[];
  description: string;
  category: string;
  attributes: [AttributeSet];
  prices: Price[];
  brand: string;
}

export interface IProduct {
  product: Product;
}

export interface Category {
  products: Product[];
}

export interface ICategory {
  category: Category;
}

export interface CategoryInfo {
  __typename: string;
  name: string;
}

export interface Categories {
  categories: CategoryInfo[];
}

export interface Currencies {
  currencies: string[];
}

export interface CurrencyState {
  currency: string;
}

export interface ICurrencyReducer {
  currency: CurrencyState;
}

export interface CategoryState {
  category: string;
}

export interface ICategoryReducer {
  category: CategoryState;
}

export interface IAction {
  type: string;
  payload: string;
}
