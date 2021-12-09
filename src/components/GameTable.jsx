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
        <Table.Row data-cy="games-attributes">
          <Table.HeaderCell>Game</Table.HeaderCell>
          <Table.HeaderCell>Price</Table.HeaderCell>
          <Table.HeaderCell>Game Number</Table.HeaderCell>
          <Table.HeaderCell>Percent Unsold</Table.HeaderCell>
          <Table.HeaderCell>Total Unclaimed</Table.HeaderCell>
          <Table.HeaderCell>Top Prize</Table.HeaderCell>
          <Table.HeaderCell>Top Prizes Unclaimed</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body data-cy="games-table">
        {games?.map(
          ({
            id,
            title,
            price,
            game_number,
            percent_unsold,
            total_unclaimed,
            top_prize,
            top_prizes_unclaimed,
          }) => (
            <Table.Row key={id}>
              <Table.Cell>{title}</Table.Cell>
              <Table.Cell>{price}</Table.Cell>
              <Table.Cell>{game_number}</Table.Cell>
              <Table.Cell>{percent_unsold}</Table.Cell>
              <Table.Cell>{total_unclaimed}</Table.Cell>
              <Table.Cell>{top_prize}</Table.Cell>
              <Table.Cell>{top_prizes_unclaimed}</Table.Cell>
            </Table.Row>
          )
        )}
      </Table.Body>
    </Table>
  );
};

export default GameTable;
