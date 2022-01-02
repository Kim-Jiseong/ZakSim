import React, {useEffect, useState} from "react";
import { useNavigate ,useLocation, useParams } from "react-router-dom";
import axios from "axios";
import * as S from "./style";
import { useRecoilState , useRecoilValue } from "recoil";
import { userState } from "../../atoms/atoms.js";
import {useUser} from "../../hooks/useUser";
function Board() {
    const [allPosts, setAllPosts] = useState();
    const [posts, setPosts] = useState();
    const history = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const userStates = useRecoilValue(userState);
    const userToken = localStorage.getItem("ZakSimId");
    const { username, setUsername } = useUser()
    const [open, setOpen] = useState(false);
 
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
        <div>
            <S.Title>{username.nickname}님의 목표</S.Title>
            <div style={{fontSize: "0.875rem",color: '#A7B0C0', }}></div>
    </div>
    <S.DesignContainer>
        <div>{allPosts.content}</div>
            { allPosts && allPosts.map(data => {
                console.log(data.author)
                if (data.author == username.pk){
                    
                return (
                <div style={{ width:"88%" ,margin: "0 auto",display:"flex",justifyContent:"center",flexDirection: "column"}}>
                <S.PostWrapper 
                // onClick={() => history({pathname: `/board/${courseId}/${data.pk}`,})}
                >
                    <S.PostTitle>{data.title}</S.PostTitle>
                    <S.PostContent>{data.content}</S.PostContent>
                    {/* <S.PostContent>{data.success}</S.PostContent> */}
                    <div style={{width:"88%" ,margin: "0 auto",display:"flex",justifyContent:"space-between",}}>
                        <S.PostTime>{data.created_at}</S.PostTime>
                    </div>
                </S.PostWrapper>
                </div>
                )};
            })}
    </S.DesignContainer>
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