import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "pages/Dashboard/Dashboard";
import Users from "pages/Users/Users";
import Projects from "pages/Projects/Projects";
import AddProject from "container/projects/addProject/addProject";
import AddUser from "container/users/addUser/addUser";
import Login from "pages/Auth/Login";
import { appRoutesPaths } from "./Router.utils";

const Router = () => {
  return (
    <Routes>
      <Route path={appRoutesPaths.root} element={<Dashboard />} />
      <Route path={appRoutesPaths.projects} element={<Projects />} />
      <Route path={appRoutesPaths.users} element={<Users />} />
      <Route path={appRoutesPaths.addProject} element={<AddProject />} />
      <Route path={appRoutesPaths.addUser} element={<AddUser />} />
      <Route path={appRoutesPaths.login} element={<Login />} />
    </Routes>
  );
};

export default Router;
