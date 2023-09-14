import "./Tareas.css";
export function Tareas({ tarea }) {
  return (
    <div>
      <h1>Tareas</h1>
      <h2>Nombre: {tarea.nombre}</h2>
      <h2>Link: {tarea.link}</h2>
      <h2>Fecha: {tarea.date}</h2>
    </div>
  );
}
