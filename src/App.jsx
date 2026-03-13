import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar'
import BoardList from './components/BoardList'
import Home from './components/Home'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn';
import MemberList from './components/MemberList'
import CreateBoard from './components/CreateBoard';
import EditBoard from './components/EditBoard';
import AuthContextPro from './components/AuthContextPro';


const App = () => {
  return (
    <BrowserRouter>
    <AuthContextPro>
      <NavBar />
      <Routes>
        <Route path='/memberList' element={<MemberList/>}></Route> 
        <Route path='/login' element={<LogIn/>}></Route> 
        <Route path='/join' element={<SignUp/>}></Route> 
        <Route path='/boardList' element={<BoardList/>}></Route> 
        <Route path='/' element={<Home />}></Route> 
        <Route path='/board/create' element={<CreateBoard />}></Route>
        <Route path='/board/edit/:id' element={<EditBoard />}></Route>
       
        {/*기본 경로로 들어가면 Home 컴포넌트 보임 */}
      </Routes>
    </AuthContextPro>
    </BrowserRouter>
  );
};

export default App;