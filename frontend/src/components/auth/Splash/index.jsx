import React, { useEffect } from "react";
import axios from "axios";
import { useRecoilValue, useRecoilState } from "recoil";
import { Link, useNavigate, useLocation } from "react-router-dom";
import * as S from "../style.js";
import { useUser } from "../../../hooks/useUser";
function Splash() {
  const location = useLocation();
  const history = useNavigate();
  const { user, setUser } = useUser();
  const logout = async () => {
    await axios({
      method: "post",
      url: "http://localhost:8000/accounts/rest-auth/logout/",
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
        localStorage.removeItem("ZakSimId");
        setUser(() => "none");
        history({pathname: "/"});
      })
  };
  return(
    <>
      <div>
        
          <br/>
          <Link  style={{color: 'inherit', textDecoration: 'none' }} to="auth/login"><S.Button1 style={{width: '270px'}}>로그인</S.Button1></Link>
          <br/>
          <Link  style={{color: 'inherit', textDecoration: 'none' }} to="auth/signup"><S.Button2 style={{width: '270px'}}>회원가입</S.Button2></Link>
      </div>
      <S.Button1 onClick={logout} type="button">
              Log Out
      </S.Button1>
    </>   
  )
}
export default Splash;
