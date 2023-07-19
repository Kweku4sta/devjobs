import { Link } from "react-router-dom";

export const JobDetails = () => {
  return (
    <div>
      <main className={` "bg-myMidnightColor"  "bg-gray-100"}`}>
        <section className="relative z-50 flex flex-col items-center justify-center gap-5 md:gap-20">
          <div className="grid gap-5 mx-4 lg:mx-64 md:mx-12">
            <div className={`bg`}>
              <img src="" alt="Company Logo" className="w-full h-full" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h1 className="text-3xl font-bold text-myVeryDarkBlueColor">
                {}
              </h1>
              <p className="text-myDarkGrayColor">{}</p>
            </div>
          </div>

          <div
            className={`flex items-center w-full py-6 my-6 justify-center md:justify-between lg:px-64 md:px-12  "bg-myVeryDarkBlueColor" : "bg-white"
            }`}
          >
            <div className="flex-row hidden gap-2 md:flex">
              <p className="text-lg font-bold leading-6 text-myVeryDarkBlueColor">
                {}
              </p>
              <p className="font-normal leading-4 text-myDarkGrayColor">
                So Digital Inc.
              </p>
            </div>
            <div>
              <Link to="">
                <button className="w-full px-24 py-3 text-sm font-normal text-white rounded-md bg-myVioletColor hover:bg-myLightVioletColor md:ml-0 md:px-4">
                  Apply Now
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
