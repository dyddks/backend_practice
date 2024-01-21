import { Detail } from '../../component/board/Detail.js';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  margin: 50px auto;
`;

export const DetailPage = () => {
  return (
    <Container>
      <Detail></Detail>
    </Container>
  );
}