import React, { use, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {


    const [id, setId]= useState("")
    const [pw, setPw]= useState("")
    const navigator = useNavigate();

    const submit = (e)=>{
        e.preventDefault()

        const user = {id, pw}

        let users = JSON.parse(localStorage.getItem("users")) || []

        users.push(user)//처음에는 빈배열이므로 빈배열에 푸쉬(삽입)

        localStorage.setItem("users", JSON.stringify(users))
        //빈배열에 추가한 userId, password를 로컬스토리지에 저장

        setId("")
        setPw("")
        
        navigator("/login")
    }


    return (
        <div>
            
            <form onSubmit={submit}>
                <h1>회원가입</h1>
                ID: <input type='text' placeholder='ID 입력' value={id} onChange={(e)=> setId(e.target.value)}/><br></br>
                Password: <input type='password' placeholder='Password 입력' value={pw} onChange={(e)=> setPw(e.target.value)}/><br></br>
                <button type='submit'>회원가입</button>
            </form>
        </div>
    );
};

export default SignUp;