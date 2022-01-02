import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {  userName } from "../atoms/atoms";
import axios from "axios";
export const useUser = () => {
  const userToken = localStorage.getItem("ZakSimId");
  const [username, setUsername] = useRecoilState(userName);
  useEffect(() => {
    if (userToken) {
      console.log("useuser토큰",userToken)
       axios.get("http://localhost:8000/accounts/getpk/", {
            headers: {
                Authorization:`Token ${userToken}`
            }
        })
      .then((res)=> {
           console.log(res.data)
           setUsername(res.data)
        })
      return;
    }

    setUsername(() => "none");
  }, []);

  return { username, setUsername };
};
