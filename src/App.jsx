import React from "react";
import "./App.css"
import { Routes, Route } from "react-router-dom";
import { Home, Login, Register, LoginBusiness, HomeStudents, PerfilStudent, Player, Business, TeacherPortal, Categories, Conference } from './pages'
import Header from "./pages/shared/header";
import Footer from "./pages/shared/footer";


function App() {
  return (
    <>

      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/login" element = {<Login />} />
        <Route path="/register" element = {<Register />} />
        <Route path="/loginB" element = {<LoginBusiness />} />
        <Route path="/homeStudents" element = {<HomeStudents />} />
        <Route path="/perfil" element = {<PerfilStudent />} />
        <Route path="/player" element = {<Player />} />
        <Route path="/business" element = {<Business />} />
        <Route path="/teacher" element = {<TeacherPortal />} />
        <Route path="/categories" element = {<Categories />} />
        <Route path="/conference" element = {<Conference />} />
      </Routes>

    </>
  );
}

export default App;
