import shape1 from "../../assets/banner-shape1.png";
import shape2 from "../../assets/banner-shape2.png";
import button from "../../assets/button.png";

const Subscribe = () => {
  return (
    <>
      <div className="container max-w-[1320px] rounded-3xl p-6 text-center bg-white/50 outline outline-white">
        <div className=" bg-white rounded-3xl border border-primary/10 relative overflow-hidden">
          <div className="relative py-[88px] z-10">
            <p className="text-[32px] font-bold mb-4 text-primary">
              Subscribe to our Newsletter
            </p>
            <p className="text-[20px] font-medium mb-6 text-primary/70">
              Get the latest updates and news right in your inbox!
            </p>
            <div className="flex items-center justify-center gap-4">
              <input
                className="px-[30px] py-[18px] bg-white border border-primary/15 rounded-[12px] h-14"
                type="text"
                placeholder="Enter your email"
              />
              <button>
                <img src={button} alt="" />
              </button>
            </div>
          </div>
          <img
            className="absolute left-0 -bottom-24 rounded-b-3xl"
            src={shape1}
            alt=""
          />
          <img
            className="absolute right-0 -top-24 rounded-t-3xl"
            src={shape2}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Subscribe;
