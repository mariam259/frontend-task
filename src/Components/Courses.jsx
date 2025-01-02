import React from "react";
import profile from "../assets/images/3.jpeg";
export default function Courses() {
  return (
    <div className="pt-6 pr-6 pl-5 md:pl-40">
      <h2 className="z-10 font-bold text-3xl pb-5 text-center">Courses Data</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className="max-w-sm sm:max-w-lg lg:max-w-3xl bg-white border border-gray-200 rounded-lg shadow transition-transform duration-300 hover:scale-105"
          >
            <div className="flex justify-center">
              <img className="w-30 h-28 mt-3 rounded-lg" src={profile} alt="" />
            </div>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-xl text-center font-semibold tracking-tight text-gray-900 ">
                  Noteworthy technology
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <div className="flex flex-row justify-between gap-2">
                <a
                  href="#"
                  className="w-36 h-10 items-center px-3 py-2 text-md font-medium text-center text-white bg-primary rounded-lg hover:text-gray-800"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="w-36 h-10  items-center px-3 py-2 text-md font-medium text-center text-white bg-primary rounded-lg hover:text-gray-800"
                >
                  Delete
                  {/* <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg> */}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
