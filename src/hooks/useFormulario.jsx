import { useState } from "react";

const useFormulario = (inicial) =>{
    const [formulario, setformulario] = useState(inicial);
    const handleChange = ({ target }) => {
      setformulario((prev) => ({
        ...prev,
        [target.name]: target.value,
      }));
    };
  return [formulario, handleChange]
}

export default useFormulario;