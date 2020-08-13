export const addHolder = (jugador) => ({
  type: "ADD_HOLDER",
  jugador,
});

export const addAlternete = (jugador) => ({
  type: "ADD_ALTERNETE",
  jugador,
});

export const removeHolder = (jugador) => ({
  type: "REMOVE_HOLDER",
  jugador,
});

export const removeAlternetes = (jugador) => ({
  type: "REMOVE_AlTERNETES",
  jugador,
});
