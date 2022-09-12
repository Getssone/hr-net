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
import Modal from "./../Modal/modal";

const Form = () => {

  /**
   * 
   * Extraction des useSelector remplace : 
   * //const firstNameToAdd = useSelector.state.firstName, 
   * //const lastNameToAdd = useSelector.state.lastName
   * // les const "xxxtoAdd" permettent d'enregistré les valeurs une fois validé
   */

  const [
    firstNameToAdd,
    lastNameToAdd,
    startDateToAdd,
    departmentToAdd,
    birthDateToAdd,
    streetToAdd,
    cityToAdd,
    StateToAdd,
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
  const [State, setState] = useState(StateToAdd);
  const [zipCode, setZipCode] = useState(zipCodeToAdd);
  const [department, setDepartment] = useState(departmentToAdd);

  const [valueBirthDate, setValueBirthDate] = useState(null);
  const [valueStartDate, setValueStartDate] = useState(null);

  const dispatch = useDispatch();

  
  const [openModal, setOpenModal] = useState(true);
  const onOpenModal = () => setOpenModal(true);
  const onCloseModal = () => setOpenModal(false);


 

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
    State,
    zipCode,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(add(employee));
    e.target.reset();
    setValueBirthDate(null);
    setValueStartDate(null);
    onOpenModal();
  };

  console.log(employee);
  console.log("BIRTHDATE", birthDate);
  console.log("STARTDATE", startDate);
  console.log("STATE", State);

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
          required
        />
        <Input
          type="text"
          name="lastname"
          className="lastname"
          labelTitle="Last Name:"
          value={lastNameToAdd}
          setInput={setLastName}
          required
        />
        <FormDatePicker
          labelTitle="Birth Date:"
          className="birthDate"
          selected={valueBirthDate}
          setDate={setBirthDate}
          setValueDate={setValueBirthDate}
          placeholder="Select a birth date"
          required
        />

        <FormDatePicker
          labelTitle="Start Date:"
          className="startDate"
          selected={valueStartDate}
          setDate={setStartDate}
          setValueDate={setValueStartDate}
          placeholder="Select a start date"
          required
        />
        <div className="adress">
          <Input
            type="text"
            name="street"
            className="street"
            labelTitle="Street:"
            value={streetToAdd}
            setInput={setStreet}
            required
          />
          <Input
            type="text"
            name="city"
            className="city"
            labelTitle="City:"
            value={cityToAdd}
            setInput={setCity}
            required
          />
          <Dropdown
            labelTitle="State:"
            name="state"
            className="state"
            value={State}
            setDrop={setState}
            datas={dataStates}
            required
          />

          <Input
            type="number"
            name="zipcode"
            className="zipcode"
            labelTitle="Zipcode:"
            value={zipCodeToAdd}
            setInput={setZipCode}
            required
          />
        </div>
        <Dropdown
          labelTitle="Department"
          name="department"
          className="department"
          value={departmentToAdd}
          setDrop={setDepartment}
          datas={dataDepartments}
          required
        />

        <Input type="submit" name="submit" className="submit" value="Save" />
      </form>
      {openModal && (
        <Modal
          texte="Employee Created! It's Me Luigi 😉✅"
          onClick={onCloseModal}></Modal>
      )}
    </>
  );
};

export default Form;
