import React, { useState } from "react";
import Alert from "./Alert";

const Formulario = (props) => {
  const { guardarPresupuesto, guardarPreguntaPresupuesto, guardarRestante } = props;
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  const agregarPresupuesto = (e) => {
    e.preventDefault();
    //validar
    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }

    //si pasa la validacion
    setError(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    guardarPreguntaPresupuesto(false);
  };

  return (
    <div className="bg-gray-200 p-5 rounded">
      <h2 className="text-indigo-500 font-bold text-center">
      💵 Set your budget for the month 💵
      </h2>
      {error ? <Alert text="The Budget is incorrect" /> : null}
      <form onSubmit={agregarPresupuesto}>
        <label
          className="block text-xs font-medium text-gray-500"
          htmlFor="email"
        ></label>

        <input
          className="w-full p-3 mt-1 text-sm border-2 border-gray-200 rounded focus:outline-none"
          id="presupuesto"
          name="presupuesto"
          type="number"
          placeholder="Add your budget"
          onChange={(e) => setCantidad(parseInt(e.target.value), 10)}
        />
        <div className="text-center py-5">
          <input
            type="submit"
            className="w-full inline-block px-8 py-3 text-sm font-medium text-white transition bg-indigo-600 rounded hover:shadow-xl active:bg-indigo-500 focus:outline-none focus:ring cursor-pointer"
            value="Add budget"
          />
        </div>
      </form>
    </div>
  );
};

export default Formulario;
