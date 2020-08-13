import React from "react";
import { connect } from "react-redux";
import { removeHolder } from "../actions";
import field from "../styles/images/fieldOriginal.jpg";

const Holders = ({ titulares, removeHolder }) => {
  return (
    <section className="holders__container">
      <h2>Holders</h2>
      <div className="holders">
        {titulares.map((j) => (
          <article className="holder" key={j.id}>
            <div>
              <img src={j.image} alt="" />
              <button className="remove" onClick={() => removeHolder(j)}>
                x
              </button>
            </div>
            <p>{j.nombre}</p>
          </article>
        ))}
        <img className="field" src={field} alt="" />
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
