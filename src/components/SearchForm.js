import React from "react";
import styled from "styled-components";

const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: 1.3rem;
  }

  input {
    height: 20px;
    width: 200px;
    border: none;
    font-size: 1.1rem;
    border-bottom: 1px solid black;
    outline: none;
  }
`;

export default function SearchForm({ searchTerm, handleChange }) {
  return (
    <FormContainer>
      <h3>Search for a Character</h3>
      <form>
        <input
          type="text"
          name="search"
          placeholder="search"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
    </FormContainer>
  );
}
