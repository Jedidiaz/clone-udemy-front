import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  Register,
  LoginBusiness,
  HomeStudents,
  PerfilStudent,
  Player,
  Business,
  TeacherPortal,
  Categories,
  Conference,
  Confirm,
  Cart,
  PayM,
  ProfileTeacher,
  HelpCenter,
  HomeBussiness
} from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/loginB" element={<LoginBusiness />} />
        <Route path="/homeStudents" element={<HomeStudents />} />
        <Route path="/profile" element={<PerfilStudent />} />
        <Route path="/player" element={<Player />} />
        <Route path="/business" element={<Business />} />
        <Route path="/teacher" element={<TeacherPortal />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/conference" element={<Conference />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment-method" element={<PayM />} />
        <Route path="/profile-teacher" element={<ProfileTeacher />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/homeBusiness" element={<HomeBussiness />} />
      </Routes>
    </>
  );
}

export default App;
