import React from "react";
import Gasto from "./Gasto";

function Listado({ gastos }) {
  return (
    <div>
      <h2 className="text-center text-2xl font-bold text-indigo-500">
        Listado de gastos
      </h2>
      {gastos.map((gasto) => (
        <Gasto key={gasto.id} gasto={gasto} />
      ))}
    </div>
  );
}

export default Listado;
