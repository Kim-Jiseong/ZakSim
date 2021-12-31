import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, Redirect } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup/index.jsx";
import Splash from "../components/auth/Splash";
import Home from "../components/board/index.jsx";
function Router() {
    const { user } = useUser();
  
    if (user !== "isLogin")
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/auth/signup"  element={<Signup/>}/>
            <Route path="/auth/login"  element={<Login/>}/>
            <Route path="/" element={<Splash/>}/>
          </Routes>
        </BrowserRouter>
      );
  
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Home />
          </Route>
          {/* <Route exact path="/splash">
            <Splash />
          </Route> */}
          <Route path="/home">
            <Home />
          </Route>
          {/* <Route exact path="/:userId/:postPk">
            <Detail />
          </Route>
          <Route exact path="/write">
            <Write />
          </Route> */}
        </Routes>
        </BrowserRouter>
  );
}
export default Router;