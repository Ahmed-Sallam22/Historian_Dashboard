import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import SecondNavbar from "../Second_navbar/Second_navbar";
import Sidebar from "../Sidebar/Sidebar";
import { UserContext } from "../Context/UserContext";

export default function Layout() {
  return (
    <>
      <div className="flex">
        <div className="felx">
          <Sidebar />
        </div>
        <div className="flex-1 px-10">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}
