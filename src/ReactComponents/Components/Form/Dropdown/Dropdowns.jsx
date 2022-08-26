import PropTypes from "prop-types";

export default function Dropdown({ name, value, setDrop, datas, labelTitle }) {
  return (
    <label className="label" htmlFor={name}>
      <p>{labelTitle}</p>
      <select
        name={name}
        required
        value={value}
        onChange={(e) => setDrop(e.target.value)}
      >
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
  setDrop: PropTypes.func,
  datas: PropTypes.array,
  labelTitle: PropTypes.string.isRequired,
};
