import * as actionTypes from "./actionTypes";

export function changeCategory(category) {
  return { type: actionTypes.CHANGE_CATEGORY, payload: category };
}

export function getCategoriesSuccess(categories) {
  return { type: actionTypes.GET_CATEGORIES_SUCCESS, payload: categories };
}

export function getCategories() {
  return function (dispacth) {
    let url = "http://192.168.3.102:3000/categories";
    debugger;
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispacth(getCategoriesSuccess(result)));
  };
}
