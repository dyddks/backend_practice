import styled from "@emotion/styled";
import axios from "axios";
import { useEffect, useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  
`;

export const UserInfo = () => {
  const {userName, setUserName} = useState('');
  const {phone, setPhone} = useState('');

  useEffect(() => {
    axios.get('/user/info')
    .then((result) => {
      setUserName(result.data.userName);
      setPhone(result.data.phone);
    })
    .catch((err) => {
      
    })
  }, [])

  return(
    <Container>
      <div>{userName}</div>
      <div>{phone}</div>
    </Container>
  );
}