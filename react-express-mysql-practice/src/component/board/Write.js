import axios from "axios";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 50px;
`;

const Input = styled.input`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Write = () => {
  // const handlesubmit = () => {
  //   axios.post('/write')
  // }

  return(
    <Container>
      <Form action='/write' method="post">
        <Input type='text' name='userName' placeholder="이름을 입력하세요"/>
        <Input type='text' name='title' placeholder="제목을 입력하세요"/>
        <textarea cols={30} rows={30} name='content' placeholder="내용을 입력하세요"></textarea>
        <button>등록하기</button>
      </Form>
    </Container>
  );
}