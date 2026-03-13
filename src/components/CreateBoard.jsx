import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateBoard = () => {

    // const [post, setPost]=useState({})
    const [title, setTitle]= useState('')
    const [content, setContnet]= useState('')
    const navigator = useNavigate();

    //로컬스토리지에서 로그인한 사용자 정보 가져온다.
    //로그인한 인간만 계시글 작성하세끔 할거임
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))

    //currentUser가 false면 alert -> 로그인 필요해 -> 네비게이터 로그인으로

    useEffect(()=>{
        if(!currentUser){
            alert('로그인이 필요합니다.')
            navigator("/login")
        }
    },[])
   


    const submit = (e)=>{
        e.preventDefault()

        //로컬스토리지에서 내가 쓴 제목과 내용을 읽어와서 posts에 저장 / 근데 만약에 내가 쓴 제목, 내용이 없으면 []
        let posts = JSON.parse(localStorage.getItem("posts")) || []

        const newPost={
            id: Date.now(),
            title,
            content,
            writerId: currentUser.id //현재 로그인한 사용자 아이디 추가해서 넣음
        }

        posts.push(newPost)
        //로컬스토리지에 내가 쓴 제목과 내용을 저장
        localStorage.setItem("posts", JSON.stringify(posts))


        setContnet("")
        setTitle("")

        //게시글 작성에 필요한 코드들
        //게시글 작성 후에는 게시글 목록으로 페이지이동
        navigator('/boardList')
    }

    
    
    return (
        <div>
            <h1>게시글 작성</h1>
            <form onSubmit={submit}>
                제목: <input placeholder='제목' value={title} onChange={(e)=>setTitle(e.target.value)} />
                내용: <textarea placeholder='내용' value={content} onChange={(e)=>setContnet(e.target.value)} />
                <button type='submit'>작성완료</button>
            </form>
        </div>
    );
};

export default CreateBoard;