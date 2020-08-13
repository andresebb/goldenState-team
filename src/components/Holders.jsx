import React from "react";
import { connect } from "react-redux";
import { removeHolder } from "../actions";

const Holders = ({ titulares, removeHolder }) => {
  return (
    <section>
      <h2>Holders</h2>
      <div className="field">
        {titulares.map((j) => (
          <article className="holder" key={j.id}>
            <div>
              <img src={j.image} alt="" />
              <button onClick={() => removeHolder(j)}>x</button>
            </div>
            <p>{j.nombre}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  titulares: state.holders,
});

const mapDispatchToProps = {
  removeHolder,
};

export default connect(mapStateToProps, mapDispatchToProps)(Holders);
