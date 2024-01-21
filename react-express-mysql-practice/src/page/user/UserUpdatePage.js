import styled from '@emotion/styled';
import { Update } from '../../component/user/Update';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  margin: 0px auto;
`;

const Hr = styled.hr`
  width: 90%;
`;

export const UserUpdatePage = () => {
  return (
    <Container>
      <h1>수정하기</h1>
      <Hr></Hr>
      <Update></Update>
    </Container>
  );
}