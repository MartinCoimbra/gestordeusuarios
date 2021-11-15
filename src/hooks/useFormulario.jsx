import { useState } from "react";

const useFormulario = (inicial) => {
  const [formulario, setformulario] = useState(inicial);
  const handleChange = ({ target }) => {
    setformulario((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  const reset = () => {
    setformulario(inicial);
  };

  return [formulario, handleChange, reset];
};

export default useFormulario;
