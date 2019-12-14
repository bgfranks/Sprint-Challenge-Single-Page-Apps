import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #4357ad;
  border-radius: 10px;
  margin: 20px 0;
  text-align: center;
  width: 300px;
  background: #4357ad;
  color: #fff;
  transition: 0.5s;
  font-size: 1.3rem;

  &:hover {
    width: 320px;
    font-size: 1.4rem;
    margin: 30px;
  }
`;

export default function CharacterCard({ name }) {
  return (
    <Card>
      <h4>{name}</h4>
    </Card>
  );
}
