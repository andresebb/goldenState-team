import { createStore, compose } from "redux";
import reducer from "./reducers/index";

/* ESTO ES UN JSON OJO   */
const initialState = {
  players: [
    {
      id: 1,
      name: "Kevon Looney",
      position: "Ala-pivot",
      image:
        "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3155535.png",
    },
    {
      id: 2,
      name: "Jordan Poole",
      position: "Escolta",
      image:
        "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4277956.png",
    },
    {
      id: 3,
      name: "Omari Spellman",
      position: "Ala-pivot",
      image:
        "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4065836.png&w=350&h=254",
    },
    {
      id: 4,
      name: "Draymond Green",
      position: "Ala-Pivot",
      image:
        "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6589.png",
    },
    {
      id: 5,
      name: "Alen Smailagic",
      position: "Ala-pivot",
      image:
        "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4401415.png&w=350&h=254",
    },
    {
      id: 6,
      name: "Stephen Curry",
      position: "Base",
      image:
        "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3975.png",
    },
    {
      id: 7,
      name: "Klay Thompson",
      position: "Alero",
      image:
        "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6475.png",
    },
    {
      id: 8,
      name: "Jacob Evans",
      position: "Escolta",
      image:
        "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3934621.png&w=350&h=254",
    },
    {
      id: 9,
      name: "Eric Paschall",
      position: "Alero",
      image:
        "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3133817.png",
    },
  ],
  holders: [],
  alternetes: [],
};

/* redux devtools */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* CreateStore("funcion reductora", "Estado inicial") */
export default createStore(reducer, initialState, composeEnhancers());
