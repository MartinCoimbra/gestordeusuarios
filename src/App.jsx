import { useState } from "react";
import Card from "./components/card";
import Container from "./components/container";
import UserForm from "./components/UserForm";

const App = () => {
  const [usuarios, setusuarios] = useState([]);

  const submit = (usuario) => {
    setusuarios((prev) => [...prev, usuario]);
  };

  console.log(usuarios);

  return (
    <div style={{ marginTop: "10%" }}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <UserForm submit={submit} />
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
