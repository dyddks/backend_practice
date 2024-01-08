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
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 50px;
`;

const Div = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Detail = () => {
  const [contents, setContent] = useState([{userName: '', title: '', content: ''}]);
  const nav = useNavigate();
  const locate = useLocation();
  useEffect(() => {
    console.log(locate.id)
    axios.get(`/board/${locate.state}`)
    .then((result) => {
      setContent(result.data)
    })
  }, [])
  

  return(
    <Container>
      <Form>
        <Div>{contents[0].userName}</Div>
        <Div>{contents[0].title}</Div>
        <Div>{contents[0].content}</Div>
        <Delete id={contents[0].id}></Delete>
        <button onClick={() => nav('/update', {state: contents[0]})}>수정하기</button>
      </Form>
    </Container>
  );
}