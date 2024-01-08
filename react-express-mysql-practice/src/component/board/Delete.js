import axios from "axios";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Delete = () => {
  const handlesubmit = () => {
    axios.post('/react_test')
  }

  return(
    <Container>
      <button>삭제하기</button>
    </Container>
  );
}