import axios from "axios";
import styled from "@emotion/styled";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Input = styled.input`
  border: 1px solid black;
  border-radius: 4px;
  width: 50%; 
  font-size: 20px;
  margin-bottom: 10px;
`;
const Text = styled.textarea`
  border: 1px solid black;
  border-radius: 4px;
  width: 50%;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Update = () => {
  const locate = useLocation();
  const [ name, setName ] = useState('');
  const [ title, setTitle ] = useState('');
  const [ content, setContent ] = useState('');
  const nav = useNavigate();
  const handlesubmit = () => {
    axios.post('/update', {
      id: locate.state.id,
      userName: name,
      title: title,
      content: content
    })
    .catch((err) => {
      alert('잠시후 다시 시도해 주세요')
    })
    nav('/detail', {state: locate.state.id})
  }

  return(
    <Container>
      <Input type='text' placeholder="이름을 입력하세요" defaultValue={locate.state.userName} onChange={(e) => setName(e.target.value)}/>
      <Input type='text' placeholder="제목을 입력하세요" defaultValue={locate.state.title} onChange={(e) => setTitle(e.target.value)}/>
      <Text cols={10} rows={10} placeholder="내용을 입력하세요" defaultValue={locate.state.content} onChange={(e) => setContent(e.target.value)}></Text>
      <button onClick={handlesubmit}>수정하기</button>
      <button onClick={() => {nav('/detail', {state: locate.state.id})}}>뒤로가기</button>
    </Container>
  );
}