import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(character);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharacters = () => {
      axios
        .get("https://rickandmortyapi.com/api/character/ ")
        .then(res => {
          // console.log(res.data.results);
          setCharacter(res.data.results);
        })
        .catch(err => {
          console.log(err);
        });
    };

    const results = character.filter(char => {
      return char.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    getCharacters();
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <Container>
      <SearchForm searchTerm={searchTerm} handleChange={handleChange} />
      <section className="character-list">
        {searchResults.map(char => (
          <CharacterCard key={char.id} name={char.name} />
        ))}
      </section>
    </Container>
  );
}
