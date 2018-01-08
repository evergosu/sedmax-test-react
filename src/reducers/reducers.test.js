import reducer from ".";
import fakeData from "../api";
import {
  UPDATE_CHANGED_ITEMS,
  UPDATE_CHECKED_ITEMS,
  UPDATE_EXPANDED_FOLDERS
} from "../constants/ActionTypes";

it("can handle a UPDATE_CHANGED_ITEMS", () => {
  expect(
    reducer(undefined, {
      type: UPDATE_CHANGED_ITEMS,
      data: [
        {
          id: 2,
          name: "Test Guy",
          condition: false,
          email: "testguy@email.com",
          receivers: ["testguy@email.com"]
        }
      ]
    })
  ).toEqual({
    data: [
      {
        id: 1,
        name: "Good Guy",
        condition: true,
        email: "goodguy@email.com",
        receivers: ["coolguy@email.com", "badguy@email.com"]
      },
      {
        id: 2,
        name: "Test Guy",
        condition: false,
        email: "testguy@email.com",
        receivers: ["testguy@email.com"]
      },
      {
        id: 3,
        name: "Bad Guy",
        condition: true,
        email: "badguy@email.com",
        receivers: ["goodguy@email.com", "coolguy@email.com"]
      }
    ],
    checkedItems: [],
    expandedFolders: ["/people", "/people/guys"]
  });
});

it("can handle a UPDATE_CHECKED_ITEMS", () => {
  expect(
    reducer(undefined, {
      type: UPDATE_CHECKED_ITEMS,
      indexes: ["1"]
    })
  ).toEqual({
    data: fakeData,
    checkedItems: ["1"],
    expandedFolders: ["/people", "/people/guys"]
  });
});

it("can handle a UPDATE_EXPANDED_FOLDERS", () => {
  expect(
    reducer(undefined, {
      type: UPDATE_EXPANDED_FOLDERS,
      indexes: ["/people"]
    })
  ).toEqual({
    data: fakeData,
    checkedItems: [],
    expandedFolders: ["/people"]
  });
});
