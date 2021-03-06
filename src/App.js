import React, { useState, useEffect } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {

  //definir state
  const [ presupuesto, guardarPresupuesto ] = useState(0);
  const [ restante, guardarRestante ] = useState(0);
  const [ mostrarpregunta, actualizarPregunta] = useState(true);
  const [ gastos, guardarGastos ] = useState([]);
  const [ gasto, guardarGasto ] = useState({});
  const [ crearGasto, guardarCreargasto] = useState(false);

  //useEffect que actualiza el restante
  useEffect(() => {

    //agrega el nuevo presupuesto
    if(crearGasto){
      guardarGastos([...gastos, gasto]);
    }

    //resta al presupuesto actual
    const presupuestoRestante = restante - gasto.cantidad;
    guardarRestante(presupuestoRestante);

    //reset a false
    guardarCreargasto(false);

  }, [gasto]);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
      </header>

      <div className="contenido-principal contenido">
          { mostrarpregunta ? (
            <Pregunta 
              guardarPresupuesto={ guardarPresupuesto } 
              guardarRestante={ guardarRestante }
              actualizarPregunta={actualizarPregunta}
            />
          ) : (  
            <div className="row">
              <div className="one-half column">
                <Formulario
                  guardarGasto={guardarGasto}
                  guardarCreargasto={guardarCreargasto}
                />
              </div>
              <div className="one-half column">
                <Listado
                  gastos={gastos}
                />
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          )}
        
      </div>
    </div>
  );
}

export default App;