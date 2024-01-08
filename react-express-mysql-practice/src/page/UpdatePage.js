import styled from '@emotion/styled';
import { Update } from '../component/board/Update';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  margin: 0 auto;
`;

export const UpdatePage = () => {
  return (
    <Container>
      <Update></Update>
    </Container>
  );
}