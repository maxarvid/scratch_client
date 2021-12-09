import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "semantic-ui-react";

const GameTable = () => {
  const [games, setGames] = useState();

  const getGames = async () => {
    let response = await axios.get("/api/games");
    setGames(response.data.games);
  };

  useEffect(() => {
    getGames();
  }, []);

  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Game</Table.HeaderCell>
          <Table.HeaderCell>Price</Table.HeaderCell>
          <Table.HeaderCell>Game Number</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body data-cy="games-table">
        {games?.map(({ id, title, price, game_number }) => (
          <Table.Row key={id}>
            <Table.Cell>{title}</Table.Cell>
            <Table.Cell>{price}</Table.Cell>
            <Table.Cell>{game_number}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default GameTable;
