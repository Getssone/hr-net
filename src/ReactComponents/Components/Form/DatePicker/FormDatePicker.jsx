import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useCallback } from "react";

import "../Form.css";

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
        showYearDropdown
        >
        <div className="forget"> Don't forget YOU are the Best! 😉</div>
      </DatePicker>
    </label>
  );
}
