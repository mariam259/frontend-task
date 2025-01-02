import React from "react";
// import { IoMdPerson } from "react-icons/io";
import profile from "../assets/images/profile.png";
export default function Trainers() {
  return (
    <div className="pt-6 pr-6 pl-5 md:pl-40">
      <h2 className="z-10 font-bold text-3xl pb-5 text-center">
        Trainers data
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow "
          >
            <div class="flex flex-col items-center pb-10">
              <img class="w-30 h-24 mb-3  " src={profile} alt="Bonnie image" />
              {/* <IoMdPerson /> */}
              <h5 class="mb-1 text-xl font-medium text-gray-900 ">
                Bonnie Green
              </h5>
              <span class="text-sm text-gray-500 ">Visual Designer</span>
              <div class="flex mt-4 gap-3 md:mt-6">
                <a
                  href="#"
                  class=" w-20 items-center px-4 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 "
                >
                  Edit
                </a>
                <a
                  href="#"
                  class="w-20 items-center px-4 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 "
                >
                  Delete
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
