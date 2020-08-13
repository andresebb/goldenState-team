import React from "react";
import { connect } from "react-redux";

const Players = ({ jugadores }) => (
  <section>
    <h2>Players</h2>
    <div className="players__container">
      {jugadores.map((j) => (
        <article key={j.id}>
          <img src={j.image} alt={j.name} />
          <h3>{j.name}</h3>
          <p>Position: {j.position}</p>
          <div>
            <button>Holders</button>
            <button>Alternetes</button>
          </div>
        </article>
      ))}
    </div>
  </section>
);
/* 
mapStateToProps: Mapea lo que tengo en el estado y lo convierte en propiedades,

mapDispatchToProps: Mapea las funciones y las convierte en propiedes
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
debugger;

export default connect(mapStateToProps, null)(Players);
