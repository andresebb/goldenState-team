import React from "react";
import { connect } from "react-redux";
import { removeAlternetes } from "../actions";

const Alternetes = ({ suplentes, removeAlternetes }) => {
  return (
    <>
      <section className="alternetes__container">
        <h2>Alternetes</h2>
        <div className="alternetes">
          {suplentes.map((j) => (
            <article className="alternete" key={j.id}>
              <div>
                <img src={j.image} alt="" />
                <button className="remove" onClick={() => removeAlternetes(j)}>
                  x
                </button>
              </div>
              <p>{j.name}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({
  suplentes: state.alternetes,
});

const mapDispatchToProps = {
  removeAlternetes,
};

export default connect(mapStateToProps, mapDispatchToProps)(Alternetes);
