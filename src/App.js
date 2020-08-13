/* El provider hace la store disponible para cualquier compenente
  esa es la forma en que lo lee
*/
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Players from "./components/Players";
import SelectedTeam from "./components/SelectedTeam";
import "./styles/styles.scss";

const App = () => {
  return (
    <Provider store={store}>
      <main>
        <h1>Golden State team</h1>
        <Players />
        <SelectedTeam />
      </main>
    </Provider>
  );
};

export default App;
