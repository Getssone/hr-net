//Info createSlice => https://redux-toolkit.js.org/api/createslice/
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

// si il y a des données dans "employees" récupére les si non crée un tableau
let employees = JSON.parse(localStorage.getItem("employees")) || [];
// Enregistre dans "employees" les donées (valeurs) javascript
localStorage.setItem("employees", JSON.stringify(employees));

// createSlice permet de crée des actions directement dans le reducer
const employeeX = createSlice({
  name: "employee",

  initialState,

  reducers: {
    add: (state, action) => {
      // la state suite à l action auras pour valeur X
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.startDate = action.payload.startDate;
      state.zipCode = action.payload.zipCode;
      state.department = action.payload.department;
      state.birthDate = action.payload.birthDate;
      state.street = action.payload.street;
      state.city = action.payload.city;
      state.State = action.payload.State;

      // Extraction des states remplace : const firstName = state.firstName, const lastName = state.lastName
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

      // Dans le tableau employees met les valeurs suivantes

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

      // dans le localStorage met dans "employees" les valeurs Javascript en string
      localStorage.setItem("employees", JSON.stringify(employees));
      // affiche les dans la console
      console.log("employees save :", employees);
    },
  },
});

// export const { add } = employeeX.actions;
// export default employeeX.reducer;
// ou faire
const { actions, reducer } = employeeX 
export const { add } = actions; 
export default reducer ;