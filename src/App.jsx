import React, { useState } from "react";
import { Container, Header } from "semantic-ui-react";
import GameTable from "./components/GameTable";
import ScraperButton from "./components/ScraperButton";

const App = () => {
  const [games, setGames] = useState();

  return (
    <Container>
      <Header
        data-cy="title"
        textAlign="center"
        as="h2"
        style={{ marginTop: "1em" }}
      >
        Maine Scratch
      </Header>
      <GameTable games={games} setGames={setGames} />
      <ScraperButton setGames={setGames} />
    </Container>
  );
};

export default App;
