import axios from "axios";
import styled from "@emotion/styled";
import { useState } from "react";
import { BoardItem } from "./BoardItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 1.2rem;
`;

export const BoradList = () => {
  const [items, setItems] = useState([]);

  const click = () => {
    axios.get('/boardList')
    .then((result) => {
      setItems(result.data)
    })
  }

  return(
    <Container>
      <button onClick={click}>목록 불러오기</button>
      {items.map((item) => (
        <BoardItem
        key={item.id}
        id={item.id}
        title={item.title}
        userName={item.userName}
        ></BoardItem>
      ))}
    </Container>
  );
}