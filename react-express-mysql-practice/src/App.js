import { Route, Routes } from 'react-router-dom';
import { MainPage } from './page/MainPage';
import { DetailPage } from './page/DetailPage';
import { UpdatePage } from './page/UpdatePage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/detail' element={<DetailPage/>}/>
      <Route path='/update' element={<UpdatePage/>}/>
      <Route path="*" element="404 not found" />
    </Routes>
  );
}

export default App;
