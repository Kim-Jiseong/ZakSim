import React from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup/index.jsx";
import Splash from "../components/auth/Splash";
import Home from "../components/board/index.jsx";
import { useUser } from "../hooks/useUser";
function Router() {
  const { user } = useUser();
    // const isAuthorized = sessionStorage.getItem("isAuthorized");
    if (user !== "isLogin")
      return (
          <Routes>
            <Route path="/auth/signup"  element={<Signup/>}/>
            <Route path="/auth/login"  element={<Login/>}/>
            <Route path="/" element={<Splash/>}/>
          </Routes>
      );
  
    return (
      <Routes>
      <Route path="/auth/signup"  element={<Signup/>}/>
      <Route path="/auth/login"  element={<Login/>}/>
      <Route path="/" element={<Splash/>}/>
    </Routes>
        
  );
}
export default Router;