import styled from "styled-components";

export const P = styled.p`
  padding-bottom: 30px;
`;

export const Button = styled.button`
  border: 2px solid;
  border-radius: 20px;
  padding: 10px;
  margin: 0px 30px 30px 0px;
  font-size: 18px;
  &:hover {
    background-color: darksalmon;
    color: white;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 20px;
  margin: 0px 10px 30px 0px;
  background: none;
  width: 40%;
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0px 30px 30px 0px;
  border-radius: 20px;
`;

export const Span = styled.span`
  margin: 0px 10px 10px 0px;
`