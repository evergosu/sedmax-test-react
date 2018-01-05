import { UPDATE_DATA, UPDATE_CHECKED_ITEMS } from "../constants/ActionTypes";

const initialState = {
  data: [],
  checkedItems: []
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DATA:
      return {
        ...state,
        data: [
          ...state.data.slice(0, action.index),
          action.data,
          ...state.data.slice(action.index + 1)
        ]
      };
    case UPDATE_CHECKED_ITEMS:
      return {
        ...state,
        checkedItems: action.indexes
      };
    default:
      return state;
  }
};

export default users;
