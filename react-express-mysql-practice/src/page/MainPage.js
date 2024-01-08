import { BoradList } from '../component/board/BoardList.js';
import { Write } from '../component/board/Write.js';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  margin: 0 auto;
`;

export const MainPage = () => {
  return (
    <Container>
      <Write></Write>
      <BoradList></BoradList>
    </Container>
  );
}