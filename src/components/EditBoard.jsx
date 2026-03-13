import React, {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditBoard = () => {   

    const {id} = useParams();

    const [post, setPost]=useState({title:"", content:""})
    const navigator = useNavigate()


    useEffect(()=>{
        const posts = JSON.parse(localStorage.getItem("posts")) || []

        const currentPost = posts.find((p)=> parseInt(p.id) === parseInt(id))

        if(currentPost){
            setPost(currentPost)
        }


    },[id])

    const submit = (e)=>{
        e.preventDefault()

        //로컬스토리지에서 내가 쓴 제목과 내용을 읽어와서 posts에 저장 / 근데 만약에 내가 쓴 제목, 내용이 없으면 []
        let posts = JSON.parse(localStorage.getItem("posts")) || []

    

        const newPosts = posts.map((i)=> parseInt(id)=== i.id ? ({...post, writerId: i.writerId}):(i))
        //로컬스토리지에 내가 쓴 제목과 내용을 저장
        localStorage.setItem("posts", JSON.stringify(newPosts))


        //게시글 작성에 필요한 코드들
        //게시글 작성 후에는 게시글 목록으로 페이지이동
        navigator('/boardList')
    }

    return (
        <div>
            <h1>게시글 수정</h1>
            <form onSubmit={submit}>
                제목: <input placeholder='제목' value={post.title} onChange={(e)=>setPost({...post, title: e.target.value})} />
                내용: <textarea placeholder='내용' value={post.content} onChange={(e)=>setPost({...post, content: e.target.value})} />
                <button type='submit'>수정완료</button>
            </form>
        </div>
    );
};

export default EditBoard;