import React from "react";
import { useSelector } from "react-redux";
import {Navigate } from "react-router-dom";

const PrivateProtectRoute = ({ children }) => {
  // const navigate = useNavigate();
  //check if user is loggin
  const user = useSelector(state => state?.users);
  const { userAuth } = user;
  return (
    <>
    {userAuth ? children : <Navigate to={"/login"} />}
    {/* <Route
      {...rest}
      render={() =>
        userAuth ? <Component {...rest} /> : navigate("/login")
      }
      /> */}
    </>
  );
};

export default PrivateProtectRoute;
