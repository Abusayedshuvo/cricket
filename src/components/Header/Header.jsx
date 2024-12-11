import logo from "../../assets/logo.png";
import dollar from "../../assets/dollar.png";

const Header = () => {
  const navs = (
    <>
      <li>
        <a> Home </a>
      </li>
      <li>
        <a> Fixture </a>
      </li>
      <li>
        <a> Teams </a>
      </li>
      <li>
        <a> Schedules </a>
      </li>
    </>
  );

  return (
    <header>
      <div className="navbar bg-base-100 container max-w-[1320px] mt-12 mb-6">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navs}
              <li>
                <a className="btn">
                  <span>0 Coin</span>
                  <img src={dollar} alt="" />
                </a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img src={logo} alt="logo" />
          </a>
        </div>

        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base text-[#131313]/70">
            {navs}
          </ul>
          <a className="btn">
            <span>0 Coin</span>
            <img src={dollar} alt="" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
