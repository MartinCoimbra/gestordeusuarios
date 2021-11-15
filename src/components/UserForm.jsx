import Input from "../components/input";
import Button from "../components/button";
import useFormulario from "../hooks/useFormulario";

const UserForm = ({submit}) => {
  /* handle es la funcion y formulario la data */
  const [formulario, handleChange, reset] = useFormulario({
    name: "",
    lastName: "",
    email: "",
  });

  const handleSumbit = (e) => {
    e.preventDefault();
    submit(formulario);
    reset();
  };

  return (
    <form onSubmit={handleSumbit}>
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
  );
};
export default UserForm;
