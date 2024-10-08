import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect, Navigate } from "react-router-dom";

const AdminRoute = ({children }) => {
  //check if user is loggin
  const user = useSelector(state => state?.users);
  const { userAuth } = user;
  return (
    <>
      {userAuth?.isAdmin ? children : Navigate("/login")}
    </>
  );
};

export default AdminRoute;
