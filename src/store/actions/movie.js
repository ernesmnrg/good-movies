//ceritanya mau ngambil data
import { GET, ADD_POST } from "./types";
const baseUrl = "https://jsonplaceholder.typicode.com";

export const getMovies = () => async dispatch => {
  try {
    const res = await fetch(`${baseUrl}/todos?_limit=10`);
    const data = await res.json();
    dispatch({
      type: GET,
      payload: data
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "ERROR",
      payload: error
    });
  }
};

export const addMovie = post => async dispatch => {
  try {
    const res = await fetch(`${baseUrl}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title: post })
    });
    const data = await res.json();
    dispatch({
      type: "ADD_POST",
      payload: data
    });
  } catch (error) {
    console.log(error);
  }
};

export const delMovie = id => async dispatch => {
  try {
    const res = await fetch(`${baseUrl}/todos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(id)
    });
    const data = await res.json();
    dispatch({
      type: "DELETE",
      payload: id
    });
  } catch (error) {
    console.log(error);
  }
};
