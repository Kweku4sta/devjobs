import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/NavBar";
// import image from `../assets/logos/${fileName}`;
// import vector from "../assets/logos/vector.svg";

export const JobDetail = () => {
  const { id } = useParams();
  const [jobDetails, setJobDetails] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    fetchJobDetails();
  }, [id]);

  const fetchJobDetails = async () => {
    try {
      const response = await axios.get(`/api/devjob/${id}`);
      const responseData = await response.data;
      setJobDetails(responseData);

      console.log(jobDetails?.company, "the requirement here");
      console.log(responseData, "let me check the thing here");
      console.log(jobDetails, "the job details");
    } catch (error) {
      console.error("Error fetching job details:", error);
    }
  };

  if (!jobDetails) {
    return <div>Loading...</div>;
  }

  const {
    title,
    company,
    description,
    location,
    postedAt,
    contract,
    apply,
    requirements,
    role,
    website,
    position,
    logoBackground,
    logo,
  } = jobDetails;
  console.log(logo);

  const updatedPath = logo.replace(/^\./, "");
  const imageUrl = `http://localhost:3300/${updatedPath}`;
  if (jobDetails) {
    return (
      <section
        className={`${isDarkMode ? " bg-myMidnightColor" : " bg-gray-100"}`}
      >
        <NavBar />
        <main
          className={`relative z-50 flex flex-col items-center justify-center gap-5  md:gap-20`}
        >
          <div className="grid gap-5 mx-4 lg:mx-64 md:mx-12 ">
            {/* navbar */}
            <div
              className={`flex flex-col items-center justify-between h-40 -mt-6  rounded-lg md:h-auto md:flex-row md:pt-4 md:-mt-20${
                isDarkMode ? " bg-myVeryDarkBlueColor" : " bg-white"
              }`}
            >
              <div className="flex flex-col items-center h-10 gap-3 -mt-4 md:flex-row md:h-24 md:gap-6">
                <div
                  className="flex items-center self-start justify-center h-full p-6 mx-4 rounded-lg md:rounded-none md:px-8 md:mx-0 "
                  style={{ backgroundColor: logoBackground }}
                >
                  <img
                    className="object-contain  h-auto min-w-full "
                    src={imageUrl}
                    alt={` The logo of ${company}`}
                  />
                </div>
                <div className="flex flex-col items-center justify-center gap-1 ">
                  <p
                    className={`text-sm font-bold tracking-wider md:text-lg${
                      isDarkMode ? "text-white" : " text-black"
                    }`}
                  >
                    {company}
                  </p>
                  <p className="font-medium text-myGrayColor">
                    {`${company}.com`.toLowerCase()}
                  </p>
                </div>
              </div>
              <p
                className={`p-2 mb-4 mr-2 text-sm font-semibold tracking-wider bg- text-myVioletColor   md:mr-6 rounded-md${
                  isDarkMode
                    ? " bg-gray-800 hover:bg-gray-700 hover:text-white"
                    : " bg-myLightGreyColor  hover:bg-gray-200 "
                }`}
              >
                <Link to={website}> Company Site</Link>
              </p>
            </div>

            <div
              className={`p-8  ${
                isDarkMode ? " bg-myVeryDarkBlueColor" : " bg-white"
              }`}
            >
              <div className="flex flex-col justify-between gap-10 md:gap-0 md:items-center md:flex-row">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-1 font-normal leading-4 text-myDarkGrayColor">
                    <p>{postedAt}</p> <p>.</p>
                    <p>{contract}</p>
                  </div>
                  <p
                    className={`text-lg font-bold leading-6 md:text-2xl   ${
                      isDarkMode ? " text-white " : " text-myVeryDarkBlueColor "
                    }`}
                  >
                    {position}
                  </p>
                  <p className="text-sm font-semibold leading-5 text-myVioletColor">
                    {location}
                  </p>
                </div>
                <Link to={apply}>
                  <button className="w-full px-6 py-2 text-sm font-normal leading-6 tracking-wider text-white rounded-md bg-myVioletColor hover:bg-myLightVioletColor">
                    Apply Now
                  </button>
                </Link>
              </div>
              <p className="py-8 leading-7 tracking-wide text-myDarkGrayColor">
                {description}
              </p>
              <h3
                className={`pb-4 text-lg font-semibold tracking-wider ${
                  isDarkMode ? " text-white" : " text-black"
                }`}
              >
                Requirements
              </h3>
              <p className="pb-4 leading-7 tracking-wide text-myDarkGrayColor">
                {requirements.contents}
              </p>
              <ul className="font-bold text-myVioletColor">
                {requirements.items.map((item, index) => (
                  <li
                    className="pl-4 ml-4 leading-7 list-disc "
                    key={`${item}-${index}`}
                  >
                    <span
                      key={`${item}-${index}`}
                      className="font-normal text-myDarkGrayColor"
                    >
                      {" "}
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <h4
                className={`py-6 text-lg font-semibold tracking-wider${
                  isDarkMode ? " text-white" : " text-black"
                }`}
              >
                What You Will Do
              </h4>
              <p className="pb-4 leading-7 tracking-wide text-myDarkGrayColor">
                {role.contents}
              </p>
              <ol className="font-bold text-myVioletColor">
                {role.items.map((item, index) => (
                  <li
                    className="pl-4 ml-4 leading-7 list-decimal "
                    key={`${item}-${index}`}
                  >
                    <span
                      key={`${item}-${index}`}
                      className="font-normal text-myDarkGrayColor"
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <footer
            className={`flex items-center w-full py-6 my-6  justify-center md:justify-between lg:px-64 md:px-12 ${
              isDarkMode ? " bg-myVeryDarkBlueColor" : " bg-white"
            }`}
          >
            <div className="flex-col hidden gap-2 md:flex">
              <p
                className={` text-lg font-bold leading-6 text-myVeryDarkBlueColor${
                  isDarkMode ? " text-white" : " text-black"
                }`}
              >
                {position}
              </p>
              <p className={`font-normal leading-4 text-myDarkGrayColor`}>
                So Digital Inc.
              </p>
            </div>
            <div>
              <Link to={apply}>
                <button className="w-full px-24 py-3 text-sm font-normal text-white rounded-md bg-myVioletColor hover:bg-myLightVioletColor md:ml-0 md:px-4">
                  Apply Now
                </button>
              </Link>
            </div>
          </footer>
        </main>
      </section>
    );
  }
};
