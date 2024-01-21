import { Route, Routes } from 'react-router-dom';
import { MainPage } from './page/MainPage';
import { DetailPage } from './page/board/DetailPage';
import { UpdatePage } from './page/board/UpdatePage';
import { WritePage } from './page/board/WritePage';
import { RegisterPage } from './page/user/RegisterPage';
import { UnregisterPage } from './page/user/UnregisterPage';
import { LoginPage } from './page/user/LoginPage';
import { BoardPage } from './page/board/BoardPage';
import { UserUpdatePage } from './page/user/UserUpdatePage';
import { Mypage } from './page/user/Mypage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/board' element={<BoardPage/>}/>
      <Route path='/detail' element={<DetailPage/>}/>
      <Route path='/update' element={<UpdatePage/>}/>
      <Route path='/write' element={<WritePage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/unregister' element={<UnregisterPage/>}/>
      <Route path='/user/update' element={<UserUpdatePage/>}/>
      <Route path='/user/mypage' element={<Mypage/>}/>
      <Route path="*" element="404 not found" />
    </Routes>
  );
}

export default App;
