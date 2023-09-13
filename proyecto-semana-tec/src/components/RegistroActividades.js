import React, { useState } from "react";
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

function RegistroActividades() {
  const [nombre, setNombre] = useState("");
  const [link, setLink] = useState("");
  const [fechaEntrega, setFechaEntrega] = useState("");
  const [nivelUrgencia, setNivelUrgencia] = useState("");

  const handleSubmit = () => {
    // Aquí puedes enviar los datos a otra pantalla o realizar otras acciones
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        fullWidth
      />
      <TextField
        label="Link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        fullWidth
      />
      <TextField
        label="Fecha de Entrega"
        type="date"
        value={fechaEntrega}
        onChange={(e) => setFechaEntrega(e.target.value)}
        fullWidth
      />
      <FormControl fullWidth>
        <InputLabel>Nivel de Urgencia</InputLabel>
        <Select
          value={nivelUrgencia}
          onChange={(e) => setNivelUrgencia(e.target.value)}
        >
          <MenuItem value="no-tan-urgente">No Tan Urgente</MenuItem>
          <MenuItem value="se-acerca">Se Está Acercando</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        Enviar Información
      </Button>
    </form>
  );
}

export default RegistroActividades;
