import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Register, LoginBusiness } from './pages'
import Header from "./pages/shared/header";
import Footer from "./pages/shared/footer";


function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/login" element = {<Login />} />
        <Route path="/register" element = {<Register />} />
        <Route path="/loginB" element = {<LoginBusiness />} />
      </Routes>
    <Footer />
    </>
  );
}

export default App;
