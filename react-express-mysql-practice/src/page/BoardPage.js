import { useNavigate } from 'react-router-dom';
import { BoradList } from '../component/board/BoardList.js';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  margin: 0 auto;
`;
const Hr = styled.hr`
  width: 90%;
`;

export const BoardPage = () => {
  const nav = useNavigate();

  return (
    <Container>
      <h1>게시판</h1>
      <Hr></Hr>
      <BoradList></BoradList>
      <button onClick={() => {nav('/write')}}>글쓰기</button>
      <button onClick={() => {nav('/')}}>메인으로</button>
    </Container>
  );
}