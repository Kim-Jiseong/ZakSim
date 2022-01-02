import styled, { css, keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const fadein = keyframes`
    0% {
      opacity: 0;
      transform: translateY(20%);
    }
    15% {
      opacity: 0;
    }
    100%{
      opacity: 1;
      transform: translateY(0);
    }
  `;
export const Button1 = styled.div`
  width: 70%;
  height: 56px;
  display:flex;
  align-items: center;
  background-color: white;
  justify-content: center;
  // font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  font-family: nanum-myeongjo, sans-serif;
  font-size:1.125rem;
  font-weight: 700;
  cursor:pointer;
  border-radius: 80px;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1)) drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.1));
`
export const Button2= styled(Button1)`
  background: rgba(34, 34, 34, 0.5);
  color:white;
  &:hover{
    background-color: #eee;
    transition: all ease 0.5s;
    color:rgba(34, 34, 34, 0.5);
  }
  // animation-delay: 0.5s;
  animation-duration: 2s;
  animation-name: ${fadein};

`
