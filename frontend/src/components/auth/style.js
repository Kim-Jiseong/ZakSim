import styled, { css } from "styled-components";

export const BG = styled.div`
  width: 100%;
  background-repeat : no-repeat;
  background-size : contain;
  opacity: 50%;
  backgroundImage : url('../../assets/img/SplashBG.png');
`

export const InputIcon = styled.i`
  font-size:1.5rem;
  margin-right: 4px;

`
export const YB = styled.div`
  height: 10vh;
`
export const Title = styled.p`
  margin-bottom: 50px;
  // font-family: 'Spoqa Hans Sans Neo',sans-serif;
  font-family: nanum-myeongjo, sans-serif;
  font-weight: bold;
  font-size: 2rem;
`
export const SubTitle = styled.div`
  width: 88%;
  font-family: 'Spoqa Hans Sans Neo',sans-serif;
  font-weight: 700;
  font-size 1.125rem;
  text-align: left;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color:#404D61
`
export const Container = styled.div`
  width: 100%;
  max-width: 375px;
  padding: 0 30px 0 30px;
  margin: 0 auto;
  display:flex;
  justify-content: center;
  flex-direction: column;

`
export const Circle = styled.div`
  width: 12px;
  height: 44px;
  margin-top: 10px;
  // background-color: #fff;
  display:flex;
  cursor:pointer;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
`
export const InputWrapper = styled.div`
  width: 100%;
  height: 56px;
  display:flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`


export const ButtonWrapper = styled.div`
  width: 100%;
  display:flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
export const InputID = styled.input`
  width: 100%;
  font-size: 1rem;
  height: 100%;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  border-style: none;
  border-radius: 20px;
  padding-left: 20px;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1)) drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.1));
`
export const InputPW = styled(InputID)`
`
export const Input = styled.input`
  width: 88%;
  line-height: 40px;
  border: 1px solid #E1E3E6;
  box-sizing: border-box;
  border-radius: 8px;
  font-family: "Spoqa Hans Sans Neo";
  margin-bottom: 12px;
`
export const Select = styled.select`
  width: 88%;
  height: 40px;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  border: 1px solid #E1E3E6;
  border-radius: 8px;
  color: grey;
`
export const Button = styled.button`
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
  background: rgba(34, 34, 34, 0.5);
  color:white;
  &:hover{
    background-color: #eee;
    color:rgba(34, 34, 34, 0.5);
    transition: all ease 0.5s;
  }
  border-style: none;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1)) drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.1));
`
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
`