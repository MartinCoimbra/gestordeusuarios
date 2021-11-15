import { useState } from "react";
import useFormulario from "./hooks/useFormulario";
import Input from "./components/input";
import Card from "./components/card";
import Container from "./components/container";
import Button from "./components/button";

const App = () => {
  const [usuarios, setusuarios] = useState([])
  /* handle es la funcion y formulario la data */
  const [formulario, handleChange] = useFormulario({
    name: "",
    lastName: "",
    email: "",
  });
  
  return (
    <Container>
      <Card>
        <div style={{ padding: 20 }}>
          <form>
            <Input
              label="Nombre:"
              name="name"
              placeholder="nombre"
              value={formulario.name}
              onChange={handleChange}
            />
            <Input
              label="Apellido:"
              name="lastName"
              placeholder="apellido"
              value={formulario.lastName}
              onChange={handleChange}
            />
            <Input
              label="Email:"
              name="email"
              placeholder="email"
              value={formulario.email}
              onChange={handleChange}
            />
            <Button>Enviar</Button>
          </form>
        </div>
      </Card>
    </Container>
  );
};

export default App;
