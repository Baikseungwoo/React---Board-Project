import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContextPro';

const NavBar = () => {

    const {currentUser, logout}=useAuth();
    const navigator = useNavigate();

    const logout1 = ()=>{
        logout()
        navigator("/")
    }

    return (
        <>
            / 
            <Link to= "/">Home</Link>
            / 
            <Link to= "/memberList">Member List</Link>
            /
            <Link to= "/boardList">Board List</Link>
            /
        {(currentUser) ? (
            <div>
                <span>{currentUser.id}님 </span>
                <button onClick={logout1}>로그아웃</button>
                /
            </div>
        ) : (
            <div>
                / 
                <Link to= "/login">Login</Link>
                /
                <Link to= "/join">SignUp</Link>
                /
            </div>
            )}
        </>
    );
};

export default NavBar;