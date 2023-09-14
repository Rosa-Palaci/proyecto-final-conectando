import "./Formulario.css";
import React from "react";

export function Formulario() {
  const [nombre, setNombre] = React.useState("");
  const [link, setLink] = React.useState("");
  const [date, setDate] = React.useState("");

  return (
    <section>
      <h1>Registro de Actividades</h1>
      <form className="formulario">
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button>Done</button>
      </form>
    </section>
  );
}
