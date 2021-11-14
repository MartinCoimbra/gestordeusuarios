import useFormulario from "./hooks/useFormulario";
import Input from "./components/input";

const App = () => {
  /* handle es la funcion y formulario la data */
  const [formulario, handleChange] = useFormulario({ name: "", lastName: "" });
  console.log(formulario);
  return (
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
    </form>
  );
};

export default App;
