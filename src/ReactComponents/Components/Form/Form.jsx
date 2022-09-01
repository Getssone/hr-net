import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../../Redux/Slice/employeeX";
import FormDatePicker from "./DatePicker/FormDatePicker";

import dataStates from "../../../data/fakeDataStates";
import dataDepartments from "../../../data/fakeDataDepartments";

import "./Form.css";

import Dropdown from "./Dropdown/Dropdowns";
import Input from "./Input/Input";
// import { Modal } from "React-modal-Getssone";

const Form = () => {
  // const myTheme = {
  //   containerBg: "rgba(146, 146, 96, .9)",
  //   messageBg: "#444444",
  //   messageHoverBg: "#aebf8e",
  //   messageHoverTxt: "black",
  //   borderColor: "#d5db99",
  //   buttonBg: "#d5db99",
  //   buttonHoverBg: "#444444",
  //   buttonHoverTxt: "white",
  // };

  // les const "xxxtoAdd" permettent d'enregistré les valeurs une fois validé
  const [
    firstNameToAdd,
    lastNameToAdd,
    startDateToAdd,
    departmentToAdd,
    birthDateToAdd,
    streetToAdd,
    cityToAdd,
    stateToAdd,
    zipCodeToAdd,
  ] = useSelector((state) => [
    state.firstName,
    state.lastName,
    state.startDate,
    state.department,
    state.birthDate,
    state.street,
    state.city,
    state.state,
    state.zipCode,
  ]);
  // const [ valeur initial, valeur modifié] = useState( utilise le selecteur "XXX")
  const [firstName, setFirstName] = useState(firstNameToAdd);
  const [lastName, setLastName] = useState(lastNameToAdd);
  const [birthDate, setBirthDate] = useState(birthDateToAdd);
  const [startDate, setStartDate] = useState(startDateToAdd);
  const [street, setStreet] = useState(streetToAdd);
  const [city, setCity] = useState(cityToAdd);
  const [state, setState] = useState(stateToAdd);
  const [zipCode, setZipCode] = useState(zipCodeToAdd);
  const [department, setDepartment] = useState(departmentToAdd);

  const [valueBirthDate, setValueBirthDate] = useState(null);
  const [valueStartDate, setValueStartDate] = useState(null);

  const dispatch = useDispatch();

  // const [openModal, setOpenModal] = useState(false);
  // const onOpenModal = () => setOpenModal(true);
  // const onCloseModal = () => setOpenModal(false);

  const modaldate = (date) => {
    // "month" commence par un index "0" donc ajouté +1 pour obtenir notre mois
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getUTCFullYear();
    return `${month}/${day}/${year}`.toString();
  };

  const employee = {
    firstName,
    lastName,
    startDate: modaldate(new Date(startDate)),
    department,
    birthDate: modaldate(new Date(birthDate)),
    street,
    city,
    state,
    zipCode,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(add(employee));
    e.target.reset();
    setValueBirthDate(null);
    setValueStartDate(null);
    // onOpenModal();
  };

  console.log(employee);
  console.log("BIRTHDATE", birthDate);
  console.log("STARTDATE", startDate);
  console.log("STATE", state);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-description">Create Employee</div>
        <Input
          type="text"
          name="firstname"
          className="firstname"
          labelTitle="First Name:"
          value={firstNameToAdd}
          setInput={setFirstName}
        />
        <Input
          type="text"
          name="lastname"
          className="lastname"
          labelTitle="Last Name:"
          value={lastNameToAdd}
          setInput={setLastName}
        />
        <FormDatePicker
          labelTitle="Birth Date:"
          className="birthDate"
          selected={valueBirthDate}
          setDate={setBirthDate}
          setValueDate={setValueBirthDate}
          placeholder="Select a birth date"
        />

        <FormDatePicker
          labelTitle="Start Date:"
          className="startDate"
          selected={valueStartDate}
          setDate={setStartDate}
          setValueDate={setValueStartDate}
          placeholder="Select a start date"
        />
        <div className="adress">
          <Input
            type="text"
            name="street"
            className="street"
            labelTitle="Street:"
            value={streetToAdd}
            setInput={setStreet}
          />
          <Input
            type="text"
            name="city"
            className="city"
            labelTitle="City:"
            value={cityToAdd}
            setInput={setCity}
          />
          <Dropdown
            name="state"
            labelTitle="State:"
            className="state"
            value={state}
            setDrop={setState}
            datas={dataStates}
          />

          <Input
            type="number"
            name="zipcode"
            className="zipcode"
            labelTitle="Zipcode:"
            value={zipCodeToAdd}
            setInput={setZipCode}
          />
        </div>
        <Dropdown
          name="department"
          className="department"
          labelTitle="Department"
          value={departmentToAdd}
          setDrop={setDepartment}
          datas={dataDepartments}
        />

        <Input type="submit" name="submit" className="submit" value="Save" />

      </form>
      {/* {openModal && (
        <Modal theme={myTheme} close={onCloseModal} text="Employee Created!" />
      )} */}
    </>
  );
};

export default Form;
