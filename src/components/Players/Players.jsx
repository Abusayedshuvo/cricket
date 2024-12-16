import Img from "../../assets/placholder.jpg";
import { FaFlag, FaUser } from "react-icons/fa6";

const Players = () => {
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
        <div className="border border-[#131313]/10 rounded-2xl p-6">
          <img className="mx-auto" src={Img} alt="" />
          <p className="mt-6 font-semibold text-[20px] flex gap-4 items-center">
            <FaUser />
            <span> Viral Kohli</span>
          </p>
          <div className="flex justify-between mt-6 mb-4">
            <div className="text-primary/50 flex gap-3 items-center">
              <FaFlag />
              <span>India</span>
            </div>
            <div>
              <span className="inline-block px-4 py-2 rounded-lg bg-primary/5 text-primary text-sm">
                All-Rounder
              </span>
            </div>
          </div>
          <hr />
          <div className="mt-4 space-y-4">
            <p className="font-bold">Rating</p>
            <p className="flex justify-between">
              <span className="font-bold">Left-Hand-Bat</span>
              <span className="text-primary/70">Left-Hand-Bat</span>
            </p>
            <div className="flex justify-between items-center">
              <span className="font-bold">Price: $1500000</span>
              <button className="bg-primary/10 px-4 py-2 rounded-lg text-sm">
                Choose Player
              </button>
            </div>
          </div>
        </div>
        <div className="border border-[#131313]/10 rounded-2xl p-6">
          <img className="mx-auto" src={Img} alt="" />
          <p className="mt-6 font-semibold text-[20px] flex gap-4 items-center">
            <FaUser />
            <span> Viral Kohli</span>
          </p>
          <div className="flex justify-between mt-6 mb-4">
            <div className="text-primary/50 flex gap-3 items-center">
              <FaFlag />
              <span>India</span>
            </div>
            <div>
              <span className="inline-block px-4 py-2 rounded-lg bg-primary/5 text-primary text-sm">
                All-Rounder
              </span>
            </div>
          </div>
          <hr />
          <div className="mt-4 space-y-4">
            <p className="font-bold">Rating</p>
            <p className="flex justify-between">
              <span className="font-bold">Left-Hand-Bat</span>
              <span className="text-primary/70">Left-Hand-Bat</span>
            </p>
            <div className="flex justify-between items-center">
              <span className="font-bold">Price: $1500000</span>
              <button className="bg-primary/10 px-4 py-2 rounded-lg text-sm">
                Choose Player
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Players;
