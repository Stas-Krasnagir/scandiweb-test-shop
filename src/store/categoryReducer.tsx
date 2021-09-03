import { CategoryState, IAction } from "../types";

const defaultState: CategoryState = {
  category: "ALL",
};

const SET_CATEGORY = "SET_CATEGORY";

export const categoryReducer = (state = defaultState, action: IAction) => {
  switch (action.type) {
    case SET_CATEGORY:
      return { ...state, category: action.payload };

    default:
      return state;
  }
};

export const setCategoryAction = (payload: string) => ({
  type: SET_CATEGORY,
  payload,
});
