import React, { useState, useEffect } from "react";
import ControlPresupuesto from "./components/ControlPresupuesto";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import Presupuesto from "./components/Presupuesto";

function App() {
  //stae del presupuesto
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [preguntaPresupuesto, guardarPreguntaPresupuesto] = useState(true);
  const [gasto, guardarGasto] = useState({});
  const [gastos, guardarGastos] = useState([]);

  const [crearGasto, guardarCrearGasto] = useState(false);
  const [restante, guardarRestante] = useState(0);
  

  useEffect(() => {
    if (crearGasto) {
      const listadoGastos = [...gastos, gasto];
      guardarGastos(listadoGastos);

      //restar el presupuesto
      const presupuestoRestante = restante - gasto.cantidadgasto;
      guardarRestante(presupuestoRestante);

      //prevenir que se vuelva a ejecutar el useEffect
      guardarCrearGasto(false);
    }
  }, [crearGasto, gasto, gastos, restante]);

  return (
    <div className="mx-auto max-w-[60rem] px-5">
      <h1 className="text-center py-5 text-3xl font-bold text-indigo-500">
        GASTOS MENSUALES
      </h1>
      {preguntaPresupuesto ? (
        <Formulario
          guardarPresupuesto={guardarPresupuesto}
          guardarPreguntaPresupuesto={guardarPreguntaPresupuesto}
          guardarRestante={guardarRestante}
        />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <Presupuesto
              guardarGasto={guardarGasto}
              guardarCrearGasto={guardarCrearGasto}
            ></Presupuesto>
          </div>
          <div>
            <Listado gastos={gastos}></Listado>
            <ControlPresupuesto presupuesto={presupuesto} restante={restante} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
