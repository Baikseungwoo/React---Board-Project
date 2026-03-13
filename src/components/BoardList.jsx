import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BoardList = () => {

    const [posts, setPosts]= useState([])

    const [currentUser, setCurrentUser]= useState(null)



    useEffect(()=>{
        //posts가져오고, currentUser도 가져온다.
        setPosts(JSON.parse(localStorage.getItem("posts")))
        setCurrentUser(JSON.parse(localStorage.getItem("currentUser")))
    },[])
    


    const handleDelete = (id)=>{
        const updated = posts.filter((i)=>i.id !==id)
        setPosts(updated)

        //삭제 후 남겨진 데이터만 로컬스토리지에 저장 ..posts
        localStorage.setItem("posts", JSON.stringify(updated))

    }


    return (
        <div>
            <h1>게시글 목록</h1>
            <Link to = "/board/create">글쓰기</Link>
            {posts && posts.length > 0 ? (
                posts.map((post)=>(
                    <div key={post.id}>
                        <div>{post.title}</div>

                        {currentUser && currentUser.id === post.writerId && (
                            <div>
                                <Link to ={`/board/edit/${post.id}`}>수정</Link>
                                <button onClick={()=>handleDelete(post.id)}>삭제</button>
                            </div>
                        )}
                        
                    </div>
                ))
            ):(
                <div>게시물 없다.</div>
            )}
        </div>
    );
};

export default BoardList;