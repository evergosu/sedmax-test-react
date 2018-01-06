import {
  UPDATE_DATA,
  UPDATE_CHECKED_ITEMS,
  UPDATE_EXPANDED_FOLDERS
} from "../constants/ActionTypes";

const initialState = {
  data: [],
  checkedItems: [],
  expandedFolders: ["/people", "/people/guys"]
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
    case UPDATE_EXPANDED_FOLDERS:
      return {
        ...state,
        expandedFolders: action.indexes
      };
    default:
      return state;
  }
};

export default users;
