import React from "react";
import { connect } from "react-redux";
import { addHolder } from "../actions/";
import { addAlternete } from "../actions/";

const Players = ({ jugadores, addHolder, addAlternete }) => {
  return (
    <section>
      <h2>Players</h2>
      <div className="players__container">
        {jugadores.map((j) => (
          <article key={j.id}>
            <img src={j.image} alt={j.name} />
            <h3>{j.name}</h3>
            <p>Position: {j.position}</p>
            <div>
              <button onClick={() => addHolder(j)}>Holders</button>
              <button onClick={() => addAlternete(j)}>Alternetes</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
/* 
mapStateToProps: Mapea lo que tengo en el estado y lo convierte en propiedades,

mapDispatchToProps: Mapea las funciones y las convierte en propiedades
*/

/* 
Ahi dice, 
voy a crear un atributo jugadores,
en jugadores, guardame lo que viene de state.players
que es mi estado inicial

const mapStateToProps = (state) => {
  players: state.players;
}; 

*/
const mapStateToProps = (state) => ({
  jugadores: state.players,
});

const mapDispatchToProps = {
  addHolder,
  addAlternete,
};

export default connect(mapStateToProps, mapDispatchToProps)(Players);
