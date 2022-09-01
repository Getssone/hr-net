import employeeSlice from "../Slice/employeeX";
import { configureStore } from "@reduxjs/toolkit";

/**
 * @store
 */

const store = configureStore({
  reducer: {
    employee: employeeSlice,
  },
});
export default store;
