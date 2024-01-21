import { Route, Routes } from 'react-router-dom';
import { MainPage } from './page/MainPage';
import { DetailPage } from './page/DetailPage';
import { UpdatePage } from './page/UpdatePage';
import { WritePage } from './page/WritePage';
import { RegisterPage } from './page/RegisterPage';
import { UnregisterPage } from './page/UnregisterPage';
import { LoginPage } from './page/LoginPage';
import { BoardPage } from './page/BoardPage';
import { UserUpdatePage } from './page/user/UserUpdatePage';

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
      <Route path="*" element="404 not found" />
    </Routes>
  );
}

export default App;
