import {
  GET_CATEGORY,
  GET_FILTERED_DATA,
  GET_MENS_DATA_SUCCESS,
  GET_PAGESUCCESS,
} from "./menstype";
import axios from "axios";

export const pageaction = (num) => (dispatch) => {
  console.log(num);
  dispatch({ type: GET_PAGESUCCESS, payload: num });
};

export const getmensAPI = (page) => (dispatch) => {
  console.log("page in getmensAPI", page);
  axios
    .get(`http://localhost:8080/Mensdata?_page=${page}&_limit=18`)
    .then((resp) => {
      console.log(resp.data);
      dispatch({ type: GET_MENS_DATA_SUCCESS, payload: resp.data });
    });
};

export const getcat = () => (dispatch) => {
  axios.get("http://localhost:8080/Navbar/?categoryname=MEN ").then((resp) => {
    dispatch({ type: GET_CATEGORY, payload: resp.data[0].subcateg });
  });
};

export const sorting = (order, page) => (dispatch) => {
  axios
    .get(
      `http://localhost:8080/Mensdata?_page=${page}&_limit=18&_sort=price2&_order=${order}`
    )
    .then((resp) => {
      console.log(resp.data);
      dispatch({ type: GET_FILTERED_DATA, payload: resp.data });
    });
};
