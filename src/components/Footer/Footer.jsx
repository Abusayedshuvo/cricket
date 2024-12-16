import logo from "../../assets/logo-footer.png";
import button2 from "../../assets/button-2.png";
import button from "../../assets/button.png";

const Footer = () => {
  return (
    <div className="bg-[#06091A] pt-[240px] -mt-[240px] px-5 lg:px-0">
      <div className="text-center mt-8">
        <img className="mx-auto" src={logo} alt="" />
      </div>
      <div className="container max-w-[1320px] rounded-3xl py-16 ">
        <div className="grid grid-cols-1 2xl:grid-cols-3 gap-5">
          <div className="max-w-72">
            <p className="text-white text-lg mb-4 font-medium">About Us</p>
            <p className="text-white/60 ">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>
          <div>
            <p className="text-white text-lg mb-4 font-medium"> Quick Links</p>
            <ul className="list-disc pl-5 text-white/60">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-white text-lg mb-4 font-medium"> Subscribe</p>
            <p className="text-white/60 ">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="2xl:flex items-center mt-[20px]">
              <input
                className="px-4 2xl:px-[30px] py-[14px] bg-white border border-primary/15 rounded-[12px] h-12 2xl:rounded-r-none w-full lg:w-auto"
                type="text"
                placeholder="Enter your email"
              />
              <button className="-ml-1 mt-3 lg:mt-0">
                <img className="hidden md:inline-block" src={button2} alt="" />
                <img className="inline-block md:hidden" src={button} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-white/15" />
      <p className="text-center text-white/60 py-8">
        @2024 Your Company All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
