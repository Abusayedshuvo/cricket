import bannerImg from "../../assets/banner-1.png";
import shape1 from "../../assets/banner-shape1.png";
import shape2 from "../../assets/banner-shape2.png";

const Banner = () => {
  return (
    <div className="text-center bg-[#131313] container max-w-[350px] md:max-w-[1320px] rounded-3xl py-16 relative   ">
      <div className="relative z-10">
        <img className="mx-auto" src={bannerImg} alt="Banner img" />
        <h1 className="mt-6 mb-4 text-3xl 2xl:text-[40px] font-bold text-white">
          Assemble Your Ultimate Dream 11 Team
        </h1>
        <p className="text-white/70 2xl:text-2xl font-medium mb-8">
          Beyond Boundaries Beyond Limits
        </p>
        <button className="button cursor-pointer" href="#">
          Claim Free Credit
        </button>
      </div>
      <img
        className="absolute left-0 bottom-0 rounded-b-3xl"
        src={shape1}
        alt=""
      />
      <img
        className="absolute right-0 top-0 rounded-t-3xl"
        src={shape2}
        alt=""
      />
    </div>
  );
};

export default Banner;
