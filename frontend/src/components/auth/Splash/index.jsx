import React, { useEffect } from "react";
import axios from "axios";
import title from "../../../assets/LandingTitle.svg"
import footerbg from "../../../assets/footerbg.svg"
import { useRecoilValue, useRecoilState } from "recoil";
import { Link, useNavigate, useLocation } from "react-router-dom";
import * as S from "../style.js";
import * as T from "./splash.js";
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
      <T.Container>
          <img style={{width: "30%", marginTop:"12vh"}}src={title}/>
          <br/>
          <br/>
          <br/>
          <Link  style={{color: 'inherit', textDecoration: 'none' }} to="auth/login"><S.Button1 style={{width: '270px'}}>로그인</S.Button1></Link>
          <br/>
          <Link  style={{color: 'inherit', textDecoration: 'none' }} to="auth/signup"><S.Button2 style={{width: '270px'}}>회원가입</S.Button2></Link>
          
          <S.Button1 onClick={logout} type="button">
              Log Out
          </S.Button1>
          <img style={{width: "100%", position: "absolute", bottom: "0", maxWidth:"375px"}}src={footerbg}/>
      </T.Container>

      
    </>   
  )
}
export default Splash;
