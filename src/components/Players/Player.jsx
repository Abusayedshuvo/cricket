import PropTypes from "prop-types";
import { FaFlag, FaUser } from "react-icons/fa6";

const Player = ({ player }) => {
  const { name, country, image, role, battingType, bowlingType, biddingPrice } =
    player;
  return (
    <div className="border border-[#131313]/10 rounded-2xl p-6">
      <img className="mx-auto" src={image} alt="" />
      <p className="mt-6 font-semibold text-[20px] flex gap-4 items-center">
        <FaUser />
        <span> {name} </span>
      </p>
      <div className="flex justify-between mt-6 mb-4">
        <div className="text-primary/50 flex gap-3 items-center">
          <FaFlag />
          <span> {country} </span>
        </div>
        <div>
          <span className="inline-block px-4 py-2 rounded-lg bg-primary/5 text-primary text-sm">
            {role}
          </span>
        </div>
      </div>
      <hr />
      <div className="mt-4 space-y-4">
        <p className="font-bold">Rating</p>
        <p className="flex justify-between">
          <span className="font-bold"> {battingType} </span>
          <span className="text-primary/70"> {bowlingType} </span>
        </p>

        <div className="flex justify-between items-center">
          <span className="font-bold">Price: {biddingPrice} </span>
          <button className="bg-primary/10 px-4 py-2 rounded-lg text-sm">
            Choose Player
          </button>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  player: PropTypes.object,
};

export default Player;
