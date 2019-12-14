import React from "react";
import styled from "styled-components";

const MainHeader = styled.header`
  color: #0b032d;
`;

export default function Header() {
  return (
    <MainHeader className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
    </MainHeader>
  );
}
