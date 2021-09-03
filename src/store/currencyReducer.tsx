import { CurrencyState, IAction } from "../types";

const defaultState: CurrencyState = {
  currency: "USD",
};

const SET_CURRENCY = "SET_CURRENCY";

export const currencyReducer = (state = defaultState, action: IAction) => {
  switch (action.type) {
    case "SET_CURRENCY":
      return { ...state, currency: action.payload };

    default:
      return state;
  }
};

export const setCurrencyAction = (payload: string) => ({
  type: SET_CURRENCY,
  payload,
});
