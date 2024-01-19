import axios from "axios";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    axios.get('/boardList')
    .then((result) => {
      setItems(result.data)
    })
  }, [])

  return(
    <Container>
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