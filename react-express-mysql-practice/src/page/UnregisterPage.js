import styled from "@emotion/styled";
import { Register } from "../component/user/Register";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;

const Hr = styled.hr`
  width: 90%;
`;

export const UnregisterPage = () => {
  return(
    <Container>
      <h1>회원탈퇴</h1>
      <Hr></Hr>
      <Register></Register>
    </Container>
  )
}