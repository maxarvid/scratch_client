import React from "react";
import { Container, Header } from "semantic-ui-react";
import GameTable from "./components/GameTable";

const App = () => {
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
      <GameTable />
    </Container>
  );
};

export default App;
