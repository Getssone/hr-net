import PropTypes from "prop-types";

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
