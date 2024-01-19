import styled from "@emotion/styled";
import { Login } from "../component/user/Login";

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

export const LoginPage = () => {
  return(
    <Container>
      <h1>로그인</h1>
      <Hr></Hr>
      <Login></Login>
    </Container>
  )
}