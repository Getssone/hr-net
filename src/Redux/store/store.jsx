import employeeX from "../Slice/employeeX";
import { configureStore } from "@reduxjs/toolkit";

/**
 * @store
 */

const store = configureStore({
  reducer: {
    employee: employeeX,
  },
});
export default store;
