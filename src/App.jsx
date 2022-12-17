import React from "react";
import "./App.css"
import { Routes, Route } from "react-router-dom";
import { Home, Login, Register, LoginBusiness, HomeStudents, PerfilStudent, Player } from './pages'
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
        <Route path="/homeStudents" element = {<HomeStudents />} />
        <Route path="/perfil" element = {<PerfilStudent />} />
        <Route path="/player" element = {<Player />} />
      </Routes>
    <Footer />
    </>
  );
}

export default App;
