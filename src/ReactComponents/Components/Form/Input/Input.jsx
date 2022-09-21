import PropTypes from "prop-types";
/**
 * Input for Form
 * @function
 * @name Input
 * @param {string} type indicates the type of the input
 * @param {string} name input name in the html label
 * @param {string} className input className in the html select
 * @param {string} labelTitle text above the input 
 * @param {string|number} value  input value
 * @param {function} setInput new input value
 * @returns {HTML} the modal Input
 */

export default function Input({
  type,
  name,
  className,
  labelTitle,
  value,
  setInput,
}) {
  return (
    <label className="label" htmlFor={name}>
      <p>{labelTitle}</p>
      <input
      //Tout "input" devront obligatoirement être complété
        required 
        type={type}
        name={name}
        className={className}
        value={value}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
    </label>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  labelTitle: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  setInput: PropTypes.func,
};
