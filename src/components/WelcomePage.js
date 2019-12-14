import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: #333;

  h1 {
    font-size: 1.7rem;
    padding-bottom: 30px;
  }

  img {
    padding-bottom: 60px;
  }

  .link {
    text-decoration: none;
    font-size: 1.5rem;
    color: #333;
    transition: 0.5s;

    &:hover {
      font-size: 1.6rem;
      color: #666;
    }
  }
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <Header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <Link to="/characters" className="link">
          Search Charcters
        </Link>
      </Header>
    </section>
  );
}
