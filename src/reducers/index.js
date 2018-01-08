import {
  UPDATE_CHANGED_ITEMS,
  UPDATE_CHECKED_ITEMS,
  UPDATE_EXPANDED_FOLDERS
} from "../constants/ActionTypes";
import fakeData from "../api";

const initialState = {
  data: fakeData,
  checkedItems: [],
  expandedFolders: ["/people", "/people/guys"]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CHANGED_ITEMS: {
      const combinedArrays = [...state.data, ...action.data].sort(
        (a, b) => a.id > b.id
      );
      const finalArray = combinedArrays.reduce(
        (prev, cur) => {
          let toReturn;
          const lastObj = prev[prev.length - 1];
          if (lastObj.id !== cur.id) {
            toReturn = prev.concat(cur);
          } else {
            prev.splice(prev.length - 1, 1, cur);
            toReturn = prev;
          }
          return toReturn;
        },
        [combinedArrays[0]]
      );
      return {
        ...state,
        data: finalArray
      };
    }
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

export default reducer;
