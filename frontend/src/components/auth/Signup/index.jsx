import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled, { css } from "styled-components";
import { useRecoilState, useSetRecoilState } from "recoil";
import { userState } from "../../../atoms/atoms.js";
import * as S from "../style.js";

function Signup() {
  const history = useNavigate();
  const [ userStates, setUserStates ] = useRecoilState(userState);
  // const setUser = useSetRecoilState(userState);
  const [error, setError] = useState();

  const signup = async (signupInfo) => {
    axios({
      method: "post",
      url: " http://localhost:8000/accounts/signup/",
      data: signupInfo,
      withCredentials: true,
    }).then((res) => {
        setUserStates(() => "isLogin");
        localStorage.setItem("ZakSimId", res.data.key);
        history({
          pathname: "/main",
        })
      })
      .catch((err) => {
        var key = Object.getOwnPropertyNames(err.response.data)
        console.log(key)
          if(err.response.status==400 && key=="username"){
            // console.log(err.response.data)
            // alert("이미 사용 중인 아이디입니다.");
            setError("이미 사용 중인 아이디입니다.")
          }
          if(err.response.status==400 && key=="non_field_errors"){

            // && err.response.data.message=="id duplicate"
            // alert("비밀번호가 일치하지 않습니다.");
            setError("비밀번호가 일치하지 않습니다.")
          }
          if(err.response.status==400 && key=="password1"){
            // && err.response.data.message=="id duplicate"
            // alert("조금 더 복잡한 비밀번호를 설정해 주세요");
            setError("조금 더 복잡한 비밀번호를 설정해 주세요")
          }
        });
    };

  const onSubmit = (e) => {
    e.preventDefault();
    const signupInfo = { nickname: e.target.name.value, id: e.target.id.value, password1: e.target.pwd1.value, password2: e.target.pwd2.value};
    return signup(signupInfo);
  };
  const goBack = () => {
    history(-1);
  };
  return (
    <>
      <S.Container>
        <S.Circle onClick={goBack}>
          <i className="fas fa-arrow-left"></i>
        </S.Circle>

        <S.Title>회원가입 시작</S.Title>
        <form onSubmit={onSubmit}>
          <S.InputWrapper>
            <S.InputIcon className="far fa-user" />
            <S.InputID
              required
              type="text"
              id="name"
              name="name"
              placeholder="이름"
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.InputIcon className="far fa-user" />
            <S.InputID
              required
              type="text"
              id="id"
              name="id"
              placeholder="아이디"
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.InputIcon className="fas fa-lock" />
            <S.InputPW
              required
              type="password"
              id="pwd1"
              name="pwd1"
              placeholder="비밀번호"
            />
            <S.InputPW
              required
              type="password"
              id="pwd2"
              name="pwd2"
              placeholder="비밀번호"
            />
          </S.InputWrapper>
          <div style={{color: 'red', textAlign: 'center'}}>{error}</div>
          <S.YB />
          <S.ButtonWrapper>
            <S.Button type="submit">회원가입</S.Button>
          </S.ButtonWrapper>
        </form>
      </S.Container>
    </>
  );
}
export default Signup;
