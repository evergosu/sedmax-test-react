import {
  UPDATE_CHANGED_ITEMS,
  UPDATE_CHECKED_ITEMS,
  UPDATE_EXPANDED_FOLDERS
} from "../constants/ActionTypes";

export const updateChangedItems = data => ({
  type: UPDATE_CHANGED_ITEMS,
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
