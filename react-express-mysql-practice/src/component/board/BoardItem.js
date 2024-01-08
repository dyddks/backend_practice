import styled from '@emotion/styled';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  padding: 1.2rem;
  margin: 0 1.2rem;
  width: 90%;

  :hover {
    cursor: pointer;
  }
`;
const Id = styled.div`
  width: 10%;
  text-align: center;
`;
const Title = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 50%;
  text-align: center;
`;
const UserName = styled.div`
  width: 30%;
  text-align: right;
`;

const Hr = styled.hr`
  backgound-color: black;
  width: 90%;
`;

export const BoardItem = ({ id, title, userName }) => {
  const nav = useNavigate();
  const onClick = () => {
    nav('/detail', { state: id });
  };

  return (
    <>
      <Container onClick={onClick}>
        <Id>{id}</Id>
        <Title>{title}</Title>
        <UserName>{userName}</UserName>
      </Container>
      <Hr />
    </>
  );
};