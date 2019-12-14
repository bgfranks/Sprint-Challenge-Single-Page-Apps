import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import CharacterCard from "./components/CharacterCard";

export default function App() {
  return (
    <main>
      <Header />
      <Router>
        <Route exact path="/" component={WelcomePage} />
        <Route path="/characters" component={CharacterList} />
      </Router>
    </main>
  );
}
