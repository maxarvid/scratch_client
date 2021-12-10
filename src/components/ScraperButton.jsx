import React from "react";
import axios from "axios";
import { Button } from "semantic-ui-react";

const ScraperButton = ({ setGames }) => {
  const handleClick = async () => {
    let response = await axios.post("/api/games");
    setGames(response.data.games);
  };

  return (
    <Button data-cy="scraper-btn" onClick={handleClick}>
      Run Scraper
    </Button>
  );
};

export default ScraperButton;
