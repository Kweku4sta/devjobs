import React, { useState, useEffect } from "react";
import icon_sun from "../assets/desktop/icon-sun.svg";
import icon_moon from "../assets/desktop/icon-moon.svg";
import logo from "../assets/desktop/logo.svg";
import { Link } from "react-router-dom";
import { useDarkModeContext } from "./contexts/DarkModeContext";

const NavBar = () => {
  const [isToggled, setIsToggled] = useState(() => {
    const savedToggledState = localStorage.getItem("isToggled");
    return savedToggledState ? JSON.parse(savedToggledState) : false;
  });

  const { darkMode, toggleDarkMode } = useDarkModeContext();

  useEffect(() => {
    localStorage.setItem("isToggled", JSON.stringify(isToggled));
  }, [isToggled]);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    toggleDarkMode();
  };

  return (
    <nav className=" nav relative flex items-center justify-between px-4 pb-8 transform rounded-bl-none shadow-xl sm:rounded-bl-full h-28 lg:px-28 md:px-12 -rotate-y-180  mb-10">
      <div>
        <Link
          to={"/"}
          title="The link to the official page of the devjobs online website"
        >
          <img
            className="h-auto max-w-full "
            src={logo}
            alt="the logo of devjobs"
          />
        </Link>
      </div>

      <div className="flex items-center gap-1">
        <div>
          <img
            className="h-auto max-w-full pr-1 mt-2"
            src={icon_sun}
            alt="icon of a sun"
          />
        </div>

        <div>
          <button
            className={`flex items-center justify-start w-10 h-6 rounded-full bg-white transition-all duration-300 ${
              isToggled ? "ml-auto" : "mr-auto"
            }`}
            onClick={handleToggle}
          >
            <span
              className={`w-4 h-4 rounded-full bg-blue-500 transition-all duration-300 transform ${
                isToggled ? "translate-x-1/3" : "translate-x-6"
              }`}
            />
          </button>
        </div>
        <div>
          <img
            className="h-auto max-w-full pl-2 mt-2 "
            src={icon_moon}
            alt="moon icon"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
