import React from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup/index.jsx";
import Splash from "../components/auth/Splash";
import Home from "../components/board/index.jsx";
import Detail from "../components/board/detail/index";
import Write from "../components/board/write/index";
import { useRecoilState , useRecoilValue } from "recoil";
// import { useUser } from "../hooks/useUser";
import { userState } from "../atoms/atoms";
function Router() {
  const userToken = localStorage.getItem("ZakSimId");
  const  userStates  = useRecoilValue(userState)
    // const isAuthorized = sessionStorage.getItem("isAuthorized");
    if (!userToken)
      return (
          <Routes>
            <Route path="/auth/signup"  element={<Signup/>}/>
            <Route path="/auth/login"  element={<Login/>}/>
            <Route path="/" element={<Splash/>}/>
            {/* <Route path="/main" element={<Home/>}/> */}
          </Routes>
      );
  
    return (
      <Routes>
      <Route path="/auth/signup"  element={<Signup/>}/>
      <Route path="/auth/login"  element={<Login/>}/>
      <Route path="/" element={<Splash/>}/>
      <Route path="/main" element={<Home/>}/>
      <Route path="/main/:userPk/:postPk" element={<Detail/>}/>
      <Route path="/main/write" element={<Write/>}/>

    </Routes>
        
  );
}
export default Router;