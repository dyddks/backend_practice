import axios from "axios";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  
`;

export const Delete = ({id}) => {
  const nav = useNavigate();
  const handlesubmit = () => {
    axios.delete(`/delete/${id}`)
    nav('/')
  }

  return(
    <Container>
      <button onClick={handlesubmit}>삭제하기</button>
    </Container>
  );
}