import React, { useEffect, useState } from 'react';

const MemberList = () => {
    //1. 로컬스토리지에서 회원가입했을때 저장했던 회원정보들 다 가져오기
    const users = JSON.parse(localStorage.getItem("users"))

    //관리자로 로그인하면 회원목록 보이고, 관리자가 아니면 안보이게 할거임
    //2. 로그인한 사용자 상태 초기화
    const [currnetUser, setCurrentUser]=useState(null) //currnetUser에 id, password속성
    
    //3. 로컬스토리지에서 로그인한 사용자 가져온다.
    useEffect(()=>{
        const storedUser = JSON.parse(localStorage.getItem("currentUser"))
        setCurrentUser(storedUser)
    },[])





    return (
        <div>
            <h1>회원 목록</h1>
            {currnetUser && currnetUser.id==="admin" && 
            currnetUser.pw==="admin" ?(
                <ul>
                    {users.length > 0 ? (
                        users.map((user, index) => {
                            return (
                                <li key={index}>{user.id}</li>
                            )
                        })
                    ) : (<li>회원 없다.</li>)}
                </ul>
            ) : ( //관리자가 아니면 회원목록 안보이게 할거임
                <div>
                    <h3>** 회원목록은 관리자만 볼 수 있습니다 **</h3>
                </div>
            )}
        </div>
    );
};

export default MemberList;