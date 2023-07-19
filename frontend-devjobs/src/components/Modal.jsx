import React, { useState } from "react";
import locationIcon from "../assets/desktop/icon-location.svg";
import { useDarkModeContext } from "./contexts/DarkModeContext";
import { CustomFilterIcon } from "./CustomFilterIcon";

export const Modal = ({
  locationFilter,
  setLocationFilter,
  handleCheckboxChange,
  showByContract,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const { isDarkMode, toggleDarkMode } = useDarkModeContext();

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 items-center justify-center bg-opacity-25 shadow-2xl outline-none md:hidden  backdrop-blur-sm backdrop-opacity-100 py-[50%] px-[2%]"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        >
          <div
            className={`flex flex-col rounded-md py-2 ${
              isDarkMode ? " bg-myVeryDarkBlueColor" : "bg-white"
            }`}
          >
            <div className="relative flex items-center w-full pl-6 mt-6 mb-3 ">
              <div className="absolute left-6">
                <img src={locationIcon} alt="location icon" />
              </div>

              <input
                type="text"
                placeholder="Filter by location..."
                className={` form-checkbox w-full py-2 text-sm border-none pl-9 md:text-lg rounded-xl focus:outline-none text-myVeryDarkBlueColor  ${
                  isDarkMode
                    ? " bg-myVeryDarkBlueColor text-white"
                    : " bg-white text-black"
                }`}
                onChange={(e) => setLocationFilter(e.target.value)}
                name="location"
                value={locationFilter}
              />
            </div>
            <hr className="py-2 " />
            <div className="inline-flex items-center mb-4 px-7">
              <input
                type="checkbox"
                id="full-time-checkbox"
                className="w-4 h-8 border-none cursor-pointer form-checkbox"
                checked={showByContract}
                onChange={handleCheckboxChange}
                name="isFullTime"
              />
              <label
                htmlFor="full-time-checkbox"
                className={`ml-4 text-sm font-bold  ${
                  isDarkMode ? "text-white" : " text-myVeryDarkBlueColor"
                }`}
              >
                Full Time Only
              </label>
            </div>
            <button
              onClick={closeModal}
              className="px-4 py-2 mb-8 text-sm font-semibold leading-6 tracking-wider text-white rounded-sm mx-7 bg-myVioletColor hover:bg-myLightVioletColor"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
