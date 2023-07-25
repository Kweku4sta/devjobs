import React, { useState } from "react";
import { JobNotFound } from "./JobNotFound";
import { useJobFilter } from "../components/useJobFIlter";
import { JobCard } from "../components/JobCard";
import NavBar from "../components/NavBar";
import search_icon from "../assets/desktop/icon-search.svg";
import location_icon from "../assets/desktop/icon-location.svg";

import { Modal } from "../components/Modal";
import { useDarkModeContext } from "../components/contexts/DarkModeContext";
import useOfflineStatus from "../components/useOfflineStatus";
import { OfflinePage } from "./OfflinePage";
import { MySvgComponent } from "../components/MySvgComponent";
import { CustomFilterIcon } from "../components/CustomFilterIcon";
import { Loading } from "../components/Loading";
import { ErrorMessage } from "./ErrorMessage";

export const Home = () => {
  const { isDarkMode } = useDarkModeContext();
  const isOffline = useOfflineStatus();
  console.log(isDarkMode, "dark in the home");
  const {
    visibleJobs,
    loadMoreVisible,
    showByContract,
    locationFilter,
    searchFilter,
    itemNotFound,
    handleCheckboxChange,
    setLocationFilter,
    setSearchFilter,
    loadMoreJobs,
    error,
    loading,
  } = useJobFilter();
  const [openModal, setOpenModal] = useState(false);

  if (isOffline) {
    return (
      <div>
        <OfflinePage />
      </div>
    );
  }
  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <ErrorMessage error={error} />
      </div>
    );
  }

  return (
    <main className={`${isDarkMode ? "bg-[#19202D]" : "bg-[#F2F2F2]"}`}>
      <NavBar />
      <section className="mx-10 md:mx-28 flex  flex-col gap-10 relative">
        <div
          className={` flex items-center  w-full h-16     rounded-sm sm:flex  absolute z-50  -top-16  ${
            isDarkMode ? ` bg-myMidnightColor ` : `  bg-myWhiteColor `
          } rounded-sm `}
        >
          <div className="relative flex justify-between w-full   border-r-slate-500 md:border-r-2 mr-2">
            {/* <img
              src={search_icon}
              alt=""
              className="absolute  items-center flex justify-center mt-2 ml-2"
            /> */}
            <div className="absolute  items-center flex justify-center mt-2 ml-2">
              <MySvgComponent />
            </div>
            <input
              className={`w-full py-2 pl-8 pr-3 text-sm border-none lg:text-lg rounded-xl focus:outline-none text-myVeryDarkBlueColor  text-xs${
                isDarkMode ? " bg-myMidnightColor text-myWhiteColor" : ""
              }`}
              type="text"
              placeholder="Search by Title, Company, or Expertise"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
            />
            <div className="flex absolute right-12 top-1  h-8 justify-center md:hidden ">
              <div>
                {openModal && (
                  <Modal
                    showByContract={showByContract}
                    handleCheckboxChange={handleCheckboxChange}
                    locationFilter={locationFilter}
                    setLocationFilter={setLocationFilter}
                  />
                )}
              </div>
              {/* <img
                src={icon_filter}
                alt="filter icon"
                onClick={() => setOpenModal(!openModal)}
              /> */}
              <div onClick={() => setOpenModal(!openModal)} className=" mt-1">
                <CustomFilterIcon />
              </div>

              <img
                src={search_icon}
                alt=""
                className=" bg-myVioletColor p-2  rounded-md  ml-4  -mr-10  -mt-2"
                onClick={() => setOpenModal(!openModal)}
              />
            </div>
          </div>
          <div className="hidden md:flex w-full md: border-r-slate-500 md:border-r-2 mr-2">
            <img
              src={location_icon}
              alt=""
              className="absolute  items-center flex justify-center mt-2 ml-2"
            />
            <input
              className={`w-full py-2 pl-8 pr-3 text-sm border-none lg:text-lg rounded-xl focus:outline-none text-myVeryDarkBlueColor${
                isDarkMode ? " bg-myMidnightColor text-myWhiteColor" : ""
              }`}
              type="text"
              placeholder="Filter by Location"
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
            />
          </div>

          <div className="hidden md:flex w-full  items-center gap-4 justify-between">
            <div>
              <input
                className=" cursor-pointer"
                type="checkbox"
                checked={showByContract}
                onChange={handleCheckboxChange}
              />
              <label
                htmlFor="full-time-checkbox"
                className={` form-checkbox w-2 h-6 border-none  md:h-10 md:w-4  outline-none  ml-2 ${
                  isDarkMode ? " text-myWhiteColor " : " bg-white"
                }`}
              >
                Full Time Only
              </label>
            </div>
            <button className="px-4 py-2 text-sm text-white rounded-md lg:text-lg bg-myVioletColor hover:bg-myLightVioletColor mr-4">
              Search
            </button>
          </div>
        </div>

        {itemNotFound ? (
          <div>
            <JobNotFound />
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12   mt-16   ">
            {visibleJobs.map((job) => (
              <JobCard job={job} key={job._id} />
            ))}
          </div>
        )}
        <div className="flex items-center justify-center">
          {loadMoreVisible && visibleJobs && (
            <button
              className="w-28 h-10  text-sm font-normal text-white rounded-md bg-myVioletColor hover:bg-myLightVioletColor mb-8 "
              onClick={loadMoreJobs}
            >
              Load More
            </button>
          )}
        </div>
      </section>
    </main>
  );
};
