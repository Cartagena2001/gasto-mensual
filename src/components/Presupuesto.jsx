import React, { useState } from "react";
import Alert from "./Alert";
import shortid from "shortid";

function Presupuesto(props) {
  const { guardarGasto, guardarCrearGasto } = props;

  const [nombregasto, guardarNombreGasto] = useState("");
  const [cantidadgasto, guardarCantidadGasto] = useState(0);
  const [error, guardarError] = useState(false);

  const agregarGasto = (e) => {
    e.preventDefault();

    //validar
    if (cantidadgasto < 1 || isNaN(cantidadgasto) || nombregasto === "") {
      guardarError(true);
      return;
    }
    //si pasa la validacion
    //objeto gasto
    const gasto = {
      nombregasto,
      cantidadgasto,
      id: shortid.generate(),
    };
    guardarGasto(gasto);
    guardarCrearGasto(true);
    guardarError(false);

    //limpiar form
    guardarNombreGasto("");
    guardarCantidadGasto(0);
  };

  return (
    <form onSubmit={agregarGasto}>
      <h2 className="text-center text-2xl font-bold text-indigo-500">
        Add your expenses here
      </h2>
      {error ? <Alert text="Both fields are required or verify that both fields are correct." /> : null}
      <div className="mt-5">
        <label className="text-gray-400 font-bold">Name expense</label>
        <input
          className="w-full p-3 mt-1 text-sm border-2 border-gray-200 rounded focus:outline-none"
          id="nombre"
          name="nombre"
          type="text"
          placeholder="Example: Weekly Meal"
          onChange={(e) => guardarNombreGasto(e.target.value)}
          value={nombregasto}
        />
      </div>
      <div className="mt-5">
        <label className="text-gray-400 font-bold">Amount to spend</label>
        <input
          className="w-full p-3 mt-1 text-sm border-2 border-gray-200 rounded focus:outline-none"
          id="cantidad"
          name="cantidad"
          type="number"
          placeholder="Example: $120"
          onChange={(e) => guardarCantidadGasto(parseInt(e.target.value, 10))}
          value={cantidadgasto}
        />
      </div>
      <div className="text-center py-5">
        <input
          type="submit"
          className="w-full inline-block px-8 py-3 text-sm font-medium text-white transition bg-indigo-600 rounded hover:shadow-xl active:bg-indigo-500 focus:outline-none focus:ring cursor-pointer"
          value="Add expense"
        />
      </div>
    </form>
  );
}

export default Presupuesto;
