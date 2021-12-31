import React, { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import * as S from "../style.js";

function Splash() {
  const location = useLocation();
  const history = useNavigate();

  return(
    <>
      <div>
          <br/>
          <Link  style={{color: 'inherit', textDecoration: 'none' }} to="auth/login"><S.Button1 style={{width: '270px'}}>로그인</S.Button1></Link>
          <br/>
          <Link  style={{color: 'inherit', textDecoration: 'none' }} to="auth/signup"><S.Button2 style={{width: '270px'}}>회원가입</S.Button2></Link>
      </div>
    </>   
  )
}
export default Splash;
