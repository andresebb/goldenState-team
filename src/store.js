import { createStore } from "redux";
import reducer from "./reducers/index";

const initialState = {
  players: [],
  holders: [],
  alternetes: [],
};

export default createStore(reducer, initialState);

/* CreateStore("funcion reductora", "Estado inicial") */
