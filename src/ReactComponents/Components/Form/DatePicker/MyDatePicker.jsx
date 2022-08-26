import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRef, useCallback } from "react";

export default function MyDatePicker({
  selected,
  setDate,
  setValueDate,
  placeholder,
  labelTitle,
}) {
  const labelContentRef = useRef(null);
  const onClickLabel = useCallback((event) => {
    if (event.nativeEvent.target !== labelContentRef.current) {
      event.preventDefault();
    }
  }, []);

  return (
    <label className="label" onClick={onClickLabel}>
      <p ref={labelContentRef}>{labelTitle}</p>
      <DatePicker
        required
        selected={selected}
        onChange={(date) => {
          setValueDate(date);
          setDate(date);
        }}
        dateFormat="dd/MM/yyyy"
        isClearable
        placeholderText={placeholder}
        fixedHeight
        peekNextMonth
        showMonthDropdown
        useShortMonthInDropdown
        showYearDropdown
        dropdownMode="select"
        todayButton="Today"
      />
    </label>
  );
}
