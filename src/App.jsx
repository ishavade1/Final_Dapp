// src/App.jsx
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Homegig from "./features/homegig/homegig";
import WhyHonestGigPage from "./pages/WhyHonestGigPage";
import FindTalent from "./pages/FindTalent";
import Signup from "./pages/Signup";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";

const App = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login"; // 👈 Hide Navbar on /login route

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Homegig />} />
        <Route path="/why-honestgig" element={<WhyHonestGigPage />} />
        <Route path="/find-talent" element={<FindTalent />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LoginPage />} /> {/* 👈 Login route */}
      </Routes>
    </>
  );
};

export default App;
