import PropTypes from "prop-types";

export default function Input({
  type,
  name,
  labelTitle,
  value,
  setInput,
  className,
}) {
  return (
    <label className="label" htmlFor={name}>
      <p>{labelTitle}</p>
      <input
        className={className}
        type={type}
        name={name}
        value={value}
        required
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
  labelTitle: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  setInput: PropTypes.func,
  className: PropTypes.string,
};
