import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Write from "../pages/Write";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
