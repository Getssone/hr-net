import employeeSlice from "../Slice/employeeSlice";
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
