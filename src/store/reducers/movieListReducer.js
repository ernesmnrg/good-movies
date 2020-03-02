import { GET } from "../actions/types";

const initialState = {
  movies: [],
  errors: null
};

const movieReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET:
      return {
        ...state,
        movies: payload
      };
    case "ERR":
      return {
        ...state,
        errors: payload
      };
    case "DELETE":
      return {
        ...state,
        movies: state.movies.filter(item => item.id !== payload)
      };
    case "ADD_POST":
      return {
        ...state,
        movies: [...state.movies, payload]
      };
    default:
      return {
        ...state
      };
  }
};

export default movieReducer;
