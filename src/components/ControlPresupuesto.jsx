import React from "react";
import { AlertaCondicion } from './AlertCondicion';

const ControlPresupuesto = ({ presupuesto, restante }) => {
  return (
    <>
    <div className="mt-5">
      <div
        className="p-4 text-green-700 border-l-4 border-green-700 bg-green-50 mb-5"
        role="alert"
      >
        <h3 className="text-sm font-medium">Presupuesto: ${presupuesto}</h3>
      </div>
      <div
        className={AlertaCondicion(presupuesto, restante)}
        role="alert"
      >
        <h3 className="text-sm font-medium">Restante: ${restante}</h3>
      </div>
    </div>
    </>
  );
};

export default ControlPresupuesto;
