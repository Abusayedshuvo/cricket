import PropTypes from "prop-types";
import { RiDeleteBinLine } from "react-icons/ri";

const SelectedPlayer = ({ selectedPlayers, handleRemove }) => {
  return (
    <>
      <div className="container max-w-[1320px] rounded-3xl py-16 px-4 lg:px-0">
        {selectedPlayers.map((player) => (
          <div
            key={player.id}
            className="border border-primary/10 p-6 rounded-2xl flex justify-between items-center mb-5"
          >
            <div className="flex gap-6">
              <div>
                <img
                  className="w-20 h-20 rounded-2xl object-fill"
                  src={player.image}
                  alt={player.name}
                />
              </div>
              <div>
                <p className="text-2xl font-semibold text-primary mb-3">
                  {player.name}
                </p>
                <p className="text-primary/60">{player.battingType}</p>
              </div>
            </div>
            <button
              onClick={() => handleRemove(player.id)}
              className="text-[#F14749] text-2xl"
            >
              <RiDeleteBinLine />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

SelectedPlayer.propTypes = {
  selectedPlayers: PropTypes.array,
  handleRemove: PropTypes.func,
};

export default SelectedPlayer;
