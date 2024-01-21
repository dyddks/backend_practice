import styled from "@emotion/styled";

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

export const Mypage = () => {
  return(
    <Container>
      
      <h1>마이페이지</h1>
      <Hr></Hr>
      
    </Container>
  )
}