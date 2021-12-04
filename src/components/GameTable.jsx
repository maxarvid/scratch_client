import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "semantic-ui-react";

const GameTable = () => {
  const [games, setGames] = useState([]);
  const [columnNames, setColumnNames] = useState([]);

  const getGames = async () => {
    let response = await axios.get("/api/games");
    setGames(response.data.games);
    setColumnNames(Object.keys(response.data.games[0]));
  };

  useEffect(() => {
    getGames();
  }, []);

  return (
    <Table data-cy="games-table">
      <Table.Header>
        <Table.Row>
          {columnNames.map((column, index) => {
            return <Table.HeaderCell key={index}>{column}</Table.HeaderCell>;
          })}
        </Table.Row>
      </Table.Header>
      <Table.Body></Table.Body>
    </Table>
  );
};

export default GameTable;
