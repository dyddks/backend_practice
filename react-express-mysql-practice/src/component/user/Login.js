import styled from "@emotion/styled";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 50vh;
`;

const Input = styled.input`
  width: 50%;
  font-size: 2rem;
`;

export const Login = () => {
  const nav = useNavigate();
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const login = () => {
    axios.post('/user/login', {
      email: email,
      password: pw
    })
    .then((result) => {
      if (result.status === 200) {
        alert(`${result.data}`)
      }
    })
    .catch((error) => {
      alert('이메일이나 비밀번호가 일치하지 않습니다.')
    })
  }

  return(
    <Container>
      <Input type="text" placeholder="이메일" onChange={(e) => setEmail(e.target.value)}></Input>
      <Input type="password" placeholder="비밀번호" onChange={(e) => setPw(e.target.value)}></Input>
      <button onClick={login}>로그인</button>
      <button onClick={() => {nav('/')}}>메인으로</button>
    </Container>
  )
}