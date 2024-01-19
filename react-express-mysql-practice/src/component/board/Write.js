import axios from "axios";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Input = styled.input`
  width: 50%; 
  font-size: 20px;
  margin-bottom: 10px;
`;
const Text = styled.textarea`
  width: 50%;
  height: 50vh;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Write = () => {
  const nav = useNavigate();
  const [ name, setName ] = useState('');
  const [ title, setTitle ] = useState('');
  const [ content, setContent ] = useState('');
  const handlesubmit = () => {
    axios.post('/write', {
      userName: name,
      title: title,
      content: content
    })
    .catch((err) => {
      alert('잠시후 다시 시도해 주세요')
    })
    nav(-1)
  }

  return(
    <Container>
      <Input type='text' name='userName' placeholder="이름을 입력하세요" onChange={(e) => setName(e.target.value)}/>
      <Input type='text' name='title' placeholder="제목을 입력하세요" onChange={(e) => setTitle(e.target.value)}/>
      <Text cols={10} rows={10} name='content' placeholder="내용을 입력하세요" onChange={(e) => setContent(e.target.value)}></Text>
      <button onClick={handlesubmit}>등록하기</button>
      <button onClick={() => {nav(-1)}}>뒤로가기</button>
    </Container>
  );
}