import "./input.css";

/* Separamos label y los resto de valores lo dejamos juntos */
const Input = ({ label, ...resto }) => {
  return (
    <div className='field'>
      <label>{label}</label>
      <input {...resto} />
    </div>
  );
};
export default Input;
