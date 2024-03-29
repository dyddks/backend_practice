import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 50vh;
  margin: 0 auto;
`;
const Hr = styled.hr`
  width: 90%;
`;

export const MainPage = () => {
  const nav = useNavigate();

  const accessToken = () => {
    axios.get('/user/accessToken')
    .then((result) => {
      console.log(result)
    })
    .catch((err) => {
      
    })
  }

  const refreshToken = () => {
    axios.get('/user/refreshToken')
    .then((result) => {
      console.log(result)
    })
    .catch((err) => {
      
    })
  }

  return (
    <Container>
      <h1>Main</h1>
      <Hr></Hr>
      <button onClick={() => {nav('/register')}}>회원가입</button>
      <button onClick={() => {nav('/login')}}>로그인</button>
      <button onClick={() => {nav('/unregister')}}>회원탈퇴</button>
      <button onClick={() => {nav('/board')}}>게시판</button>
      <button onClick={() => {nav('/user/mypage')}}>마이페이지</button>
      <div onClick={accessToken}>Access Token</div>
      <div onClick={refreshToken}>Refresh Token</div>
    </Container>
  );
}