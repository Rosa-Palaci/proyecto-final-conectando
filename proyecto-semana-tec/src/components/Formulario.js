import "./Formulario.css";
import React from "react";

export function Formulario({ setTarea }) {
  const [nombre, setNombre] = React.useState("");
  const [link, setLink] = React.useState("");
  const [date, setDate] = React.useState("");
  const [error, setError] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre === "" || link === "" || date === "") {
      setError(true);
      return;
    }
    setError(false);

    setTarea({ nombre, link, date });
  };

  return (
    <section>
      <h1>Registro de Actividades</h1>
      <form className="formulario" onSubmit={handleSubmit}>
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
      {error && <p>*Todos los campos son obligatorios</p>}
    </section>
  );
}
