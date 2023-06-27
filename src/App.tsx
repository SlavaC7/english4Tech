import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./screens/home/Home";
import Auth from "./screens/auth/auth";
import Reg from "./screens/reg/reg";
import { useTypedSelector } from "./store/store";
import MyProfile from "./screens/profile/MyProfile";
import Admin from "./screens/admin/amdin";
import AdminAdd from "./screens/admin/amdinAdd";
import AmdinChange from "./screens/admin/amdinChange";
import AdminChangeUnit from "./screens/admin/amdinChangeUnit";

function App() {
  const result = useTypedSelector((s) => s.auth.result);

      // // @ts-ignore
      // const { id } = Route.params;

  const idChange = useTypedSelector((s) => s.unit.changeUnit?.id);

  const reg = result == "Confirmed";
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/auth" element={<Auth />} />

        <Route path="/reg" element={<Reg />} />

        <Route path="/MyProfile" element={<MyProfile />} />

        <Route path="/adminPanel" element={<Admin />} />

        <Route path="/adminPanel/Add" element={<AdminAdd />} />

        <Route path="/adminPanel/Change" element={<AmdinChange />} />

        <Route
          path={`/adminPanel/Change/:id`}
          element={<AdminChangeUnit />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
