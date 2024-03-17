import React from "react";
import bgImg from "../../assets/banner-img.png"
import './header.css'

const Header = () => {
  return (
    <div>
      <div className="lexend-font">
        <nav>
          <div className="navbar bg-base-100">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
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
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>Recipe</a>
                  </li>
                  <li>
                    <a>About</a>
                  </li>
                  <li>
                    <a>Search</a>
                  </li>
                </ul>
              </div>
              <a className="btn btn-ghost hover:bg-white text-xl">Recipe Hub</a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Recipe</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Search</a>
                </li>
              </ul>
            </div>
            <div className="navbar-end gap-4">
              <label className="hidden lg:flex input input-bordered flex items-center outline-none border-0 bg-[#150B2B14] rounded-3xl gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input type="text" className="grow" placeholder="Search" />
              </label>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="./images/user-icon.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div>
          <div style={{
            backgroundImage: `url(${bgImg})`
          }}  className="background-img mt-4 px-2 lg:mt-8 rounded-3xl">
            <h2 className="lexend-font pt-12 lg:pt-32 text-xl lg:text-5xl mx-auto text-white font-semibold w-full text-center lg:w-[897px]">Discover an exceptional cooking class tailored for you!</h2>
            <p className="text-sm lg:text-lg mt-3 lg:mt-6 text-[#FFFFFF] text-center w-full lg:w-[933px] mx-auto font-normal">Welcome to the Recipe Hub of a lifetime! Indulge your senses and ignite your passion for cooking with our exquisite collection of recipes from around the world. </p>
            <div className="flex flex-col lg:flex-row px-8 lg:px-0 justify-center mt-5 lg:mt-10 pb-12 lg:pb-32 gap-4 lg:gap-8">
                <button className="btn btn-md rounded-full border-0 bg-[#0BE58A]">Explore Now</button>
                <button className="btn btn-ghost border-[1px] border-white text-white hover:bg-gray-400 rounded-full ">Our Feedback</button>
            </div>
          </div>
        </div>

        <div className=" mx-0  mt-12 lg:mt-24">
          <h2 className="text-2xl lg:text-4xl font-bold text-center mb-3 lg:mb-6">Our Recipes</h2>
          <p className="text-sm lg:text-base font-normal w-full mx-auto lg:w-[823px] text-center mx-0  text-[#150B2B99]">
            Welcome to
            our recipe hub, where culinary inspiration meets gastronomic
            delight. a world of flavors, textures, and aromas as we
            present an  recipes crafted to ignite your taste
            buds and elevate your cooking experience. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
