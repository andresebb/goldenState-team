/*
Esta es la funcion reductora.


state: Es es estado actual
action: recibe un objeto al cual por lo general se le llama action,
y esta indica que cambio debe realizar en el state

const reducer = ("state", "action")  
*/

const reducer = (state, action) => {
  console.log(action);
  /* console.log(state); */

  if (action.type === "ADD_HOLDER") {
    return {
      ...state,
      holders: state.holders.concat(action.jugador),
      players: state.players.filter((j) => j.id !== action.jugador.id),
    };
  }

  if (action.type === "ADD_ALTERNETE") {
    return {
      ...state,
      alternetes: state.alternetes.concat(action.jugador),
      players: state.players.filter((j) => j.id !== action.jugador.id),
    };
  }

  if (action.type === "REMOVE_HOLDER") {
    return {
      ...state,
      holders: state.holders.filter((j) => j.id !== action.jugador.id),
      players: state.players.concat(action.jugador),
    };
  }

  if (action.type === "REMOVE_AlTERNETES") {
    return {
      ...state,
      alternetes: state.alternetes.filter((j) => j.id !== action.jugador.id),
      players: state.players.concat(action.jugador),
    };
  }
  return state;
};

export default reducer;
