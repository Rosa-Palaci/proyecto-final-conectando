import { Formulario } from "./components/Formulario";
import { Tareas } from "./components/Tareas";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [tarea, setTarea] = React.useState([]);

  return (
    <div className="App">
      {tarea.length > 0 ? <Tareas /> : <Formulario setTarea={setTarea} />}
    </div>
  );
}

export default App;
