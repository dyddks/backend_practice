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

export const Unregister = () => {
  const nav = useNavigate();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const unregister = () => {
    axios.delete('/user/unregister', {
      data: {
        userName: name,
        phone: phone,
        email: email,
        password: pw
      }
    })
    .then((result) => {
      if (result.data.affectedRows === 1) {
        alert('회원탈퇴가 완료되었습니다.')
      }
      else {
        alert('회원정보가 잘못되었습니다.')
      }
    })
    .catch((err) => {
      alert('잠시후 다시 시도해주세요.')
    })
  }

  return(
    <Container>
      <Input type="text" placeholder="이름" onChange={(e) => setName(e.target.value)}></Input>
      <Input type="text" placeholder="전화번호" onChange={(e) => setPhone(e.target.value)}></Input>
      <Input type="text" placeholder="이메일" onChange={(e) => setEmail(e.target.value)}></Input>
      <Input type="password" placeholder="비밀번호" onChange={(e) => setPw(e.target.value)}></Input>
      <button onClick={unregister}>회원탈퇴</button>
      <button onClick={() => {nav('/')}}>메인으로</button>
    </Container>
  )
}