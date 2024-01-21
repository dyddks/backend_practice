import { Write } from '../../component/board/Write.js';
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

export const WritePage = () => {
  return (
    <Container>
      <h1>게시글 작성</h1>
      <Hr></Hr>
      <Write></Write>
    </Container>
  );
}