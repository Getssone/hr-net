import { Route, Routes } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Header from "../Components/Header/Header.jsx";
import Banner from "../../ReactComponents/Components/Banner/Banner";
import Footer from "../Components/Footer/Footer.jsx";
import "./App.css";

const Home = lazy(() => import("../../Pages/Home/Home.jsx"));
const Employees = lazy(() => import("../../Pages/Employees/Employees"));
const Error = lazy(() => import("../../Pages/Error/Error.jsx"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Banner />
        <Routes>
          <Route index element={<Home />} />
          <Route path="employees" element={<Employees />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
