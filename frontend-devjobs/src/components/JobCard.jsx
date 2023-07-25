import React from "react";
import { Link } from "react-router-dom";
import { useDarkModeContext } from "./contexts/DarkModeContext";

export const JobCard = ({ job }) => {
  const updatedPath = job.logo.replace(/^\./, "");
  const imageUrl = `https://devjobs-backend-vgzv.onrender.com/${updatedPath}`;
  const { isDarkMode } = useDarkModeContext();

  return (
    <Link to={`/jobdetail/${job._id}`} key={job.id}>
      <div
        className={`flex flex-col gap-2 w-full min-h-52  py-4  relative px-10 pb-10 pt-12 rounded-md font-semibold  ${
          isDarkMode ? "    bg-myMidnightColor" : " bg-white"
        }`}
      >
        <div
          style={{ backgroundColor: job.logoBackground }}
          className={` h-12 w-12 flex justify-center items-center  rounded-md absolute  -top-5 ${
            isDarkMode ? " bg-myVeryDarkBlueColor" : " bg-white"
          }`}
        >
          <img src={imageUrl} alt={job.company} />
        </div>
        <div className=" text-myDarkGrayColor ">
          <span className="pr-2">{job.postedAt}</span>{" "}
          <span className="pr-2    font-extrabold">.</span>{" "}
          <span className="pr-2">{job.contract}</span>
        </div>
        <p
          className={` hover:text-myDarkGrayColor${
            isDarkMode ? " text-myWhiteColor " : "  text-myVeryDarkBlueColor"
          }`}
        >
          {job.position}
        </p>
        <p className=" text-myDarkGrayColor">{job.company}</p>
        <p className=" text-myVioletColor pt-4 ">{job.location}</p>
      </div>
    </Link>
  );
};
