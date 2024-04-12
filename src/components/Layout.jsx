import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Layout = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  const toggleSideBar = () => {
    setOpenSideBar(!openSideBar);
  };
  return (
    <div className="flex  relative">
      <div className="">
        <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
      </div>

      <div className="  flex-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
