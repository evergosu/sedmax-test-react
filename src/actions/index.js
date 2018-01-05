import { UPDATE_DATA, UPDATE_CHECKED_ITEMS } from "../constants/ActionTypes";

export const updateData = (index, data) => ({
  type: UPDATE_DATA,
  index,
  data
});

export const updateCheckedItems = indexes => ({
  type: UPDATE_CHECKED_ITEMS,
  indexes
});
