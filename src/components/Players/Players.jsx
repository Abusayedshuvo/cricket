import { useEffect, useState } from "react";
import Player from "./Player";

const Players = () => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data.players));
  }, []);
  return (
    <div className="container max-w-[1320px] rounded-3xl py-16 px-4 lg:px-0">
      <div className="2xl:flex justify-between items-center">
        <p className="font-bold text-[28px]">Available Players</p>
        <div>
          <button className="bg-[#E7FE29] py-4 px-8 border border-[#131313]/10 rounded-xl rounded-r-none font-bold border-r-0">
            Available
          </button>
          <button className="py-4 px-8 border border-[#131313]/10 border-l-0 rounded-xl rounded-l-none">
            Selected (<span>0</span>)
          </button>
        </div>
      </div>
      {/* players cards */}
      <div className="grid grid-cols-1 2xl:grid-cols-3 gap-6 mt-8">
        {players?.map((player) => (
          <Player key={player.id} player={player}></Player>
        ))}
      </div>
    </div>
  );
};

export default Players;
