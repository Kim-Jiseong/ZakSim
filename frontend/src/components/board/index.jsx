import React, {useEffect, useState} from "react";
import { useNavigate ,useLocation, useParams } from "react-router-dom";
import axios from "axios";
import * as S from "./style";
import { useRecoilState , useRecoilValue } from "recoil";
import { userState } from "../../atoms/atoms.js";
import {useUser} from "../../hooks/useUser";
import Main from "./pages/main"
import Finished from "./pages/finished"
function Board() {
    const [allPosts, setAllPosts] = useState();
    const history = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const userStates = useRecoilValue(userState);
    const userToken = localStorage.getItem("ZakSimId");
    const { username, setUsername } = useUser()
    const [open, setOpen] = useState(false);
    const [headState, setHeadState] = useState("main");
 
    const onToggle = () => setOpen(!open);
    const getAllPosts = async () =>  {
    await axios.get(`http://localhost:8000/api`)
      .then((res)=> {
           console.log(res.data)
           setAllPosts(res.data);
        })
    }
    useEffect(async() => {
        await getAllPosts();
        setIsLoading(false);
    }, []);
    useEffect(() => {
        console.log(userToken)
        if(!userToken){
          history({
            pathname: "/"
          })
        }
      }, [userToken])
    if(isLoading){
        return <div>로딩중...</div>
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const writeInfo = { author: username.pk, title: e.target.title.value, content: e.target.content.value};
        return writePost(writeInfo);
      };
      const writePost = async (writeInfo) => {
        axios({
          method: "post",
          url: " http://localhost:8000/api/",
          data: writeInfo,
          withCredentials: true,
        }).then((res) => {
            console.log(res)
            setOpen(false)
            getAllPosts()
            // history({
            //   pathname: "/main",
            // })
          })
          .catch((err) => {
            alert("작성 실패")
            console.log(err)
          })}
    return (
    <>
    <S.Positioner>
            <S.Background>
                <S.Title>{username.nickname}님의 목표</S.Title>
                <S.ElementWrapper>
                    <S.Element onClick={() =>setHeadState("main")}>목표</S.Element>
                    <S.Element onClick={() =>setHeadState("finished")}>성공한 목표</S.Element>
                </S.ElementWrapper>
            </S.Background>
    </S.Positioner>
            {/* <S.Title>{username.nickname}님의 목표</S.Title> */}
    <S.YB/>
    {/* {headState(status =>{
        if (status=="main"){
            return(
                <Main allPosts={allPosts}></Main>
            )
        }
        return (
            <Finished allPosts={allPosts}></Finished>
        )
    })} */}
    {(headState == "main") && <Main allPosts={allPosts}></Main>}
    {(headState == "finished") && <Finished allPosts={allPosts}></Finished>}
                
                

    {open && (
        <S.ModalBG>
        <S.InsertFormPositioner>
        
          <S.InsertForm open={open} onSubmit={onSubmit}>
            <S.Input autoFocus required id="title" name="title"placeholder="제목" />
            <S.Input required id="content" name="content"placeholder="내용" />
            {/* <S.Input id="finishedAt" name="finishedAt" placeholder="마감일" /> */}
            <S.Button type="submit">제출</S.Button>
          </S.InsertForm>
        </S.InsertFormPositioner>
        </S.ModalBG>
      )}
    <S.FixedAlign open={open}><S.PlusButton onClick={onToggle} open={open}><i className="fas fa-plus"></i></S.PlusButton></S.FixedAlign>
        <S.YB/>
        {/*
        <S.FixedAlign>
        <S.PlusButton onClick={() => history.push({
            pathname: `/board/${courseId}/write`,
            state: {
                lecturePk:lecture.pk
            }
        })}>
            <i className="fas fa-plus"></i>
          </S.PlusButton>
        </S.FixedAlign> */}
    </>
    );
}
export default Board;