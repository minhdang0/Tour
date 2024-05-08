import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./../pages/Home";
import Tours from "./../pages/Tours";
import TourDetails from "./../pages/TourDetails";
import SearchResultList from "./../pages/SearchResultList";
import Register from "../pages/Register";
import Login from "./../pages/Login";
import ThankYou from "../pages/ThankYou";
import Admin from "../pages/Admin";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/tours/search?" element={<SearchResultList />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};

export default Routers;
