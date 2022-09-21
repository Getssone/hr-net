import PropTypes from "prop-types";

/** Dropdown for Form
 * @function
 * @name Dropdown
 * @param {string} labelTitle - text above the input 
 * @param {string} name - input name in the html label
 * @param {string} className - input className in the html select
 * @param {string} value - input value
 * @param {function} setDrop - new input value
 * @param {array} datas - text in the input 
 * @return {HTML} the modal Dropdown
 */
export default function Dropdown({ labelTitle, name, className, value, setDrop, datas }) {
  return (
    <label className="label" htmlFor={name}>
      <p>{labelTitle}</p>
      <select
        name={name}
        className={className}
        value={value}
        onChange={(e) => setDrop(e.target.value)}
        required>
        {datas.map((elt) => (
          <option key={elt.id} value={elt.label}>
            {elt.name}
          </option>
        ))}
      </select>
    </label>
  );
}
Dropdown.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  setDrop: PropTypes.func.isRequired,
  datas: PropTypes.array.isRequired,
  labelTitle: PropTypes.string.isRequired,
};
