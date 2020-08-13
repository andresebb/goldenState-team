import React from "react";
import { connect } from "react-redux";

const Holders = ({ titulares }) => {
  return (
    <section>
      <h2>Holders</h2>
      <div className="field">
        {titulares.map((j) => (
          <article className="holder" key={j.id}>
            <div>
              <img src={j.image} alt="" />
              <button>x</button>
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

export default connect(mapStateToProps, null)(Holders);
