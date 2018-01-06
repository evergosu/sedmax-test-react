import {
  UPDATE_DATA,
  UPDATE_CHECKED_ITEMS,
  UPDATE_EXPANDED_FOLDERS
} from "../constants/ActionTypes";

export const updateData = (index, data) => ({
  type: UPDATE_DATA,
  index,
  data
});

export const updateCheckedItems = indexes => ({
  type: UPDATE_CHECKED_ITEMS,
  indexes
});

export const updateExpandedFolders = indexes => ({
  type: UPDATE_EXPANDED_FOLDERS,
  indexes
});
