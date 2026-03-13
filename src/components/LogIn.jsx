import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContextPro';

const LogIn = () => {

    const [id, setId]= useState("")
    const [pw, setPw]= useState("")
    const navigator = useNavigate();
    const {setCurrentUser} = useAuth();

    const submit = (e)=>{
        e.preventDefault()

        let users = JSON.parse(localStorage.getItem("users")) || []

        const loginUser = users.find((user)=> user.id === id && user.pw === pw)//아이디와 비번이 같으면
        
        //로그인 성공시 사용자 정보 저장
        if(loginUser){
            setCurrentUser(loginUser);

            localStorage.setItem("currentUser", JSON.stringify(loginUser))

            setId("")
            setPw("")
        
            navigator("/boardList")
        }else{
            alert("아이디 또는 비밀번호 오류")
        }

    }


    return (
        <div>
            
            <form onSubmit={submit}>
                <h1>로그인</h1>
                ID: <input type='text' placeholder='ID 입력' value={id} onChange={(e)=> setId(e.target.value)}/><br></br>
                Password: <input type='password' placeholder='Password 입력' value={pw} onChange={(e)=> setPw(e.target.value)}/><br></br>
                <button type='submit'>로그인</button>
            </form>
        </div>
    );
};

export default LogIn;