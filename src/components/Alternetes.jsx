import React from "react";
import { connect } from "react-redux";

const Alternetes = ({ suplentes }) => {
  return (
    <section>
      <h2>Alternetes</h2>
      <div className="field">
        {suplentes.map((j) => (
          <article className="holder" key={j.id}>
            <div>
              <img src={j.image} alt="" />
              <button>x</button>
            </div>
            <p>{j.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  suplentes: state.alternetes,
});

export default connect(mapStateToProps, null)(Alternetes);
