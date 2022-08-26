import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employee: {
    firstName: "",
    lastName: "",
    startDate: "",
    department: "",
    birthDate: "",
    street: "",
    city: "",
    State: "",
    zipCode: "",
  },
};
let employees = JSON.parse(localStorage.getItem("employees")) || [];
localStorage.setItem("employees", JSON.stringify(employees));
employees = JSON.parse(localStorage.getItem("employees"));

const employeeSlice = createSlice({
  name: "employee",

  initialState,

  reducers: {
    add: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.startDate = action.payload.startDate;
      state.zipCode = action.payload.zipCode;
      state.department = action.payload.department;
      state.birthDate = action.payload.birthDate;
      state.street = action.payload.street;
      state.city = action.payload.city;
      state.State = action.payload.State;

      const {
        firstName,
        lastName,
        startDate,
        department,
        birthDate,
        street,
        city,
        State,
        zipCode,
      } = state;

      employees.push({
        firstName,
        lastName,
        startDate,
        department,
        birthDate,
        street,
        city,
        State,
        zipCode,
      });

      localStorage.setItem("employees", JSON.stringify(employees));
      console.log("employés local", employees);
    },
  },
});

export const { add } = employeeSlice.actions;
export default employeeSlice.reducer;
