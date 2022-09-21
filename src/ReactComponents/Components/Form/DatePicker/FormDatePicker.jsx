import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useCallback } from "react";

import "../Form.css";

/** FormDatePicker for Form
 * @function
 * @name FormDatePicker
 * @param {number} selected - input value
 * @param {date} setDate - new input value
 * @param {function} setValueDate - read value
 * @param {string} placeholder - text in the input
 * @param {string} labelTitle - text above the input
 * @return {HTML} the modal FormDatePicker
 */

export default function FormDatePicker({
  selected,
  setDate,
  setValueDate,
  placeholder,
  labelTitle,
}) {
  const onClickLabel = useCallback((event) => {
    event.preventDefault();
  }, []);

  return (
    <label className="label" onClick={onClickLabel}>
      <p>{labelTitle}</p>
      <DatePicker
        required
        selected={selected}
        onChange={(date) => {
          setDate(date);
          setValueDate(date);
        }}
        dateFormat="dd/MM/yyyy"
        todayButton="Today"
        dropdownMode="select"
        isClearable
        placeholderText={placeholder}
        fixedHeight
        peekNextMonth
        showMonthDropdown
        useShortMonthInDropdown
        showYearDropdown>
        <div className="forget"> Don't forget YOU are the Best! 😉</div>
      </DatePicker>
    </label>
  );
}
