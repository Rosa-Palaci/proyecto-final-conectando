import { Formulario } from "./components/Formulario";
import { Tareas } from "./components/Tareas";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [tarea, setTarea] = React.useState({ nombre: "", link: "", date: "" });

  return (
    <div className="App">
      <div className="gradient-bg">
        {tarea.nombre !== "" ? (
          <Tareas tarea={tarea} />
        ) : (
          <Formulario setTarea={setTarea} />
        )}
      </div>
    </div>
  );
}

export default App;
