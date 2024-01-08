import axios from "axios";
import styled from "@emotion/styled";
import { useLocation, useNavigate } from "react-router-dom";

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

export const Update = () => {
  const locate = useLocation();
  const nav = useNavigate();
  // const handlesubmit = () => {
  //   axios.post('/write')
  // }

  return(
    <Container>
      <Form action='/update' method="post">
        <Input name='id' defaultValue={locate.state.id}></Input>
        <Input type='text' name='userName' placeholder="이름을 입력하세요" defaultValue={locate.state.userName}/>
        <Input type='text' name='title' placeholder="제목을 입력하세요" defaultValue={locate.state.title}/>
        <textarea cols={30} rows={30} name='content' placeholder="내용을 입력하세요" defaultValue={locate.state.content}></textarea>
        <button>수정하기</button>
      </Form>
    </Container>
  );
}