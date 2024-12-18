import { useEffect, useState } from "react";
import Player from "./Player";
import { ToastContainer, toast } from "react-toastify";
import PropTypes from "prop-types";
import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";

const Players = ({ coin }) => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data.players));
  }, []);

  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleChoosePlayer = (player) => {
    if (coin <= 0) {
      toast.warn("You have no coin !");
    } else {
      const newPlayer = [...selectedPlayers, player];
      setSelectedPlayers(newPlayer);
    }
  };

  const handleAvailable = (avail, select, event) => {
    const available = document.getElementById(avail);
    available.classList.remove("hidden");

    const selected = document.getElementById(select);
    selected.classList.add("hidden");

    const buttons = document.querySelectorAll(".player-btn");
    buttons.forEach((button) => button.classList.remove("active"));
    event.target.classList.add("active");
  };

  const handleRemove = (id) => {
    const players = selectedPlayers.filter((player) => player.id !== id);
    setSelectedPlayers(players);
  };

  return (
    <div className="container max-w-[1320px] rounded-3xl py-16 px-4 lg:px-0">
      <div className="2xl:flex justify-between items-center">
        <p className="font-bold text-[28px]">Available Players</p>
        <div>
          <button
            onClick={() => handleAvailable("available", "selected", event)}
            className=" py-4 px-8 border border-[#131313]/10 rounded-xl rounded-r-none  border-r-0 player-btn active"
          >
            Available
          </button>
          <button
            onClick={() => handleAvailable("selected", "available", event)}
            className="py-4 px-8 border border-[#131313]/10 border-l-0 rounded-xl rounded-l-none player-btn "
          >
            Selected (<span>{selectedPlayers.length}</span>)
          </button>
        </div>
      </div>
      {/* players cards */}
      <div
        className="grid grid-cols-1 2xl:grid-cols-3 gap-6 mt-8 "
        id="available"
      >
        {players?.map((player) => (
          <Player
            key={player.id}
            player={player}
            handleChoosePlayer={handleChoosePlayer}
          ></Player>
        ))}
      </div>
      <div id="selected">
        <SelectedPlayer
          selectedPlayers={selectedPlayers}
          handleRemove={handleRemove}
        ></SelectedPlayer>
      </div>
      <ToastContainer />
    </div>
  );
};

Players.propTypes = {
  coin: PropTypes.number,
};

export default Players;
