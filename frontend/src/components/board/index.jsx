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
    // const [user, setUser] = useState();
    // const userToken = () => {
    //     setUser(localStorage.getItem("ZakSimId"));
    //     return getUser(user)
    // } 
    // // console.log(user)
    // const getUser = async () =>  {
    //     console.log("토큰이요",user)
    // await axios.get("http://localhost:8000/accounts/getpk/", {
    //         headers: {
    //             Authorization:`Token ${user}`
    //         }
    //     })
    //   .then((res)=> {
    //        console.log(res.data.pk)
    //        setUsername(res.data.pk)
    //     })
    // }
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
        // if(userStates == "none"){
        // if (allPosts){
        //     allPosts.map((x) => {
        //         if( x.author == username){

        //         }
        //     })
        // }
        if(!userToken){
          history({
            pathname: "/"
          })
        }
      }, [userToken])
//     const titleWrapper = {
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: '28px',
//     }
//     function timeForToday(value) {
//         const today = new Date();
//         const timeValue = new Date(value);

//         const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
//         if (betweenTime < 1) return '방금전';
//         if (betweenTime < 60) {
//             return `${betweenTime}분전`;
//         }

//         const betweenTimeHour = Math.floor(betweenTime / 60);
//         if (betweenTimeHour < 24) {
//             return `${betweenTimeHour}시간전`;
//         }

//         const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
//         if (betweenTimeDay < 365) {
//             return `${betweenTimeDay}일전`;
//         }

//         return `${Math.floor(betweenTimeDay / 365)}년전`;
//     }
    
    if(isLoading){
        return <div>로딩중...</div>
    }

    return (
    <>
        <div>
            <S.Title>{username}</S.Title>
            <div style={{fontSize: "0.875rem",color: '#A7B0C0', }}></div>
    </div>
    <S.DesignContainer>
        <div>{allPosts.content}</div>
            { allPosts && allPosts.map(data => {
                console.log(data.author)
                if (data.author == username){
                    
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