import PropTypes from "prop-types";
/**
 * Input for Form
 * @function
 * @name Input
 * @param {string} type
 * @param {string} name,
 * @param {string} className,
 * @param {string} labelTitle,
 * @param {string} value,
 * @param {function} setInput // (enregistre "value" ) 
  
 }}
 * @returns {object}
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
