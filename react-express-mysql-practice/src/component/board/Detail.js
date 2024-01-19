import axios from "axios";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Delete } from "./Delete";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Div = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  width: 50%;
  font-size: 20px;
  margin-bottom: 10px;
`;

const Text = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  width: 50%;
  height: 50vh;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Detail = () => {
  const [contents, setContent] = useState([{userName: '', title: '', content: ''}]);
  const nav = useNavigate();
  const locate = useLocation();

  useEffect(() => {
    axios.get(`/board/${locate.state}`)
    .then((result) => {
      setContent(result.data)
    })
  }, [])
  
  return(
    <Container>
      <Div>{contents[0].userName}</Div>
      <Div>{contents[0].title}</Div>
      <Text>{contents[0].content}</Text>
      <Delete id={contents[0].id}></Delete>
      <button onClick={() => nav('/update', {state: contents[0]})}>수정하기</button>
      <button onClick={() => nav('/')}>뒤로가기</button>
    </Container>
  );
}