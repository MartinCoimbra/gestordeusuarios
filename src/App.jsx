import { useState } from "react";
import useFormulario from "./hooks/useFormulario";
import Input from "./components/input";
import Card from "./components/card";
import Container from "./components/container";
import Button from "./components/button";

const App = () => {
  const [usuarios, setusuarios] = useState([]);
  /* handle es la funcion y formulario la data */
  const [formulario, handleChange, reset] = useFormulario({
    name: "",
    lastName: "",
    email: "",
  });

  const submit = (e) => {
    e.preventDefault();
    setusuarios((prev) => [...prev, formulario]);
    reset();
  };

  return (
    <div style={{ marginTop: "10%" }}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <form onSubmit={submit}>
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
        <Card>
          <ul>
            {usuarios.map((x) => {
              return (
                <li
                  key={x.email}
                >{`${x.name} ${x.lastName} Email: ${x.email}`}</li>
              );
            })}
          </ul>
        </Card>
      </Container>
    </div>
  );
};

export default App;
