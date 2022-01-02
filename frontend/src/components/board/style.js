import styled, { css, keyframes } from "styled-components";
export const Title = styled.div`
  font-family: 'Spoqa Hans Sans Neo',sans-serif;
  font-size: 1.6rem;
  font-weight: 700;
  color: #12121D;
  margin-bottom: 20px;
  padding-top:20px;
  // margin-right: 6%;
  // text-align: right;
  margin-left: 6%;
  text-align: left;
`
export const InputIcon = styled.i`
  font-size:1.5rem;
  margin-right: 4px;

`

export const SubTitle = styled.div`
  width: 88%;
  font-family: 'Spoqa Hans Sans Neo',sans-serif;
  font-weight: 700;
  font-size 1.125rem;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color:#404D61
`

export const InputWrapper = styled.div`
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #eee;
  display:flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`
export const InputID = styled.input`
  width: 100%;
  font-size: 1rem;
  height: 100%;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  border-style: none;
  padding-left: 20px;
`

export const ButtonWrapper = styled.div`
  width: 100%;
  display:flex;
  justify-content: center;
`

export const Button = styled.button`
  width: 160px;
  height: 56px;
  color: white;
  background-color:#8E806A;
  border-style: none;
  border-radius: 56px;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    background:#eee;
    color:#8E806A;
  }
`
export const Button1 = styled.div`
  width: 70%;
  height: 56px;
  display:flex;
  align-items: center;
  background-color: white;
  justify-content: center;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  font-size:1.125rem;
  font-weight: 700;
  border-radius: 80px;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1)) drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.1));
`
export const Button2= styled(Button1)`
  background: rgba(34, 34, 34, 0.5);
  color:white;
`

export const PostWrapper= styled.div`
  display:flex;
  flex-direction: column;
  margin-bottom:10px;
  width: 100%;
  padding-left: 10px;
  cursor:pointer;
  padding-right: 10px;
  border-radius: 8px;
  border-bottom: 1px solid #D9D9D9;
  &:hover{
    background-color: #eee;
  }
`
export const PostTitle= styled.div`
 font-family: Spoqa Hans Sans Neo;
 font-size: 1rem;
 max-width: 90%;
 overflow:hidden;
 text-overflow:ellipsis;
 white-space:nowrap;
 font-weight: 700;
`
export const PostContent= styled.div`
 font-family: Spoqa Hans Sans Neo;
 font-size: 0.75rem;
 max-width: 90%;
 overflow:hidden;
 text-overflow:ellipsis;
 white-space:nowrap;
 font-weight: 400;
 margin-top:6px;

 `
export const PostTime= styled.div`
 font-family: Spoqa Hans Sans Neo;
 font-size: 0.75rem;
 font-weight: 400;
 margin-top:6px;
 color:#ACB3BF;
 margin-bottom:12px;
`

export const CommentInputWrapper = styled.div`
  position: fixed;
  bottom: 95px;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 375px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CommentInput = styled.div`
  width: 80%;
  box-shadow: 0px 2px 28px rgba(75, 88, 208, 0.1);
  border-radius: 36px;
  padding: 10px;
  z-index: 1000;
  background-color: white;
  border: 1px solid #18A0FB;
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      width: 80%;
      font-size: 16px;
      border: none;
      padding: 10px;
      margin-right: 10px;
    }
    button {
      border: none;
      background-color: white;
      width: fit-content;
      height: fit-content;
    }
  }
`;
export const DesignContainer= styled.div`
  width:88%;
  margin:0 auto;
  display:flex;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius:30px;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1)) drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.1));
`;
export const YB = styled.div`
  height: calc(10vh + 1.875rem);
`
export const PlusButton = styled.div`
color:white;
width: 3.75rem;
height: 3.75rem;
display: flex;
border-radius: 60px;
background:#8E806A;
align-items: center;
cursor: pointer;
justify-content: center;
font-size: 1.5rem;
pointer-events: all;
box-shadow: 2px 2px 3px #999;
transition: all ease 1s;
&:hover {
  color:#8E806A;
  background: #eee;
  & i {
    transform: rotate( 360deg );
    transition: all ease 1s;
    // color:red;
  }
}
${props =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform:  translate(-0%, 50%) rotate(45deg);
    `}
`;
export const FixedAlign = styled.div`
  width: 100%;
  max-width: 375px;
  // height: 60px;
  display: flex;
  position: fixed;
  margin: 0 auto;
  position: fixed;
  bottom: 10vh;
  justify-content: center;
  pointer-events: none;
  transition: all ease 1s;
  ${props =>
    props.open &&
    css`
      bottom:50vh;
    `}
}
`
export const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;
const slideUp = keyframes`
    0% {
      opacity: 0;
      transform: translateY(65%);
    }
    15% {
      opacity: 0;
    }
    100%{
      opacity: 1;
      transform: translateY(0);
    }
  `;
export const InsertForm = styled.form`
  background: #f8f9fa;
  width:100%;
  min-height: 200px;
  padding-top:  2rem;
  height: 50vh;
  margin:0 auto;
  max-width: 375px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top: 1px solid #e9ecef;
  display:flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
  // transition: all ease 1s;
  animation-duration: 0.8s;
  animation-name: ${({ open }) => open && slideUp};
`;
 
export const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
  margin-bottom: 10px;
`;
 
export const ModalBG = styled.div`
  position: fixed;
  top:0; left: 0; bottom: 0; right: 0;
  background: rgba(0, 0, 0, 0.6);
`;
 