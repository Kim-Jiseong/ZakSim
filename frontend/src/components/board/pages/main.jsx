import React, {useEffect, useState} from "react";
import { useNavigate ,useLocation, useParams } from "react-router-dom";
import axios from "axios";
import * as S from "../style";
import { useRecoilState , useRecoilValue } from "recoil";
import {useUser} from "../../../hooks/useUser";
function Main(props) {
    const { username, setUsername } = useUser()
    return (
        <S.DesignContainer>
        { props.allPosts && props.allPosts.map(data => {
            console.log(data.success)
            if (data.author == username.pk && !data.success){
            return (
                <S.SuccessWrapper>
            <div style={{ width:"88%" ,margin: "0 auto",display:"flex",justifyContent:"center",flexDirection: "column"}}>
            <S.PostWrapper 
            // onClick={() => history({pathname: `/board/${courseId}/${data.pk}`,})}
            >
                <S.PostTitle>{data.title}</S.PostTitle>
                <S.PostContent>{data.content}</S.PostContent>
                <div style={{width:"88%" ,margin: "0 auto",display:"flex",justifyContent:"space-between",}}>
                    <S.PostTime>{data.created_at}</S.PostTime>
                </div>
            </S.PostWrapper>
            </div>
            {/* <div><i className="fas fa-check-circle"></i></div> */}
            </S.SuccessWrapper>
            )}

        })}
        </S.DesignContainer>

    )
}

export default Main;

// return(<div style={{ width:"88%" ,margin: "0 auto",display:"flex",justifyContent:"center",flexDirection: "column"}}>
// <S.PostWrapper 
// // onClick={() => history({pathname: `/board/${courseId}/${data.pk}`,})}
// >
//     <S.PostTitle>{data.title}</S.PostTitle>
//     <S.PostContent>{data.content}</S.PostContent>
//     <div style={{width:"88%" ,margin: "0 auto",display:"flex",justifyContent:"space-between",}}>
//         <S.PostTime>{data.created_at}</S.PostTime>
//     </div>
// </S.PostWrapper>
// </div>);