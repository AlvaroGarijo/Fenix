import React from "react";

import { LinkNavBarRoute } from "./MovingUserLogin/navbarLogin/LinkNavBarRoute";
import { NavBarLogin } from "./MovingUserLogin/navbarLogin/NavBarLogin";

export const Dashboard = () => {
  return (
    <>
      <NavBarLogin />
      <LinkNavBarRoute />
    </>
  );
};
