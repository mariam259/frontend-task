import React from "react";
import { linkCoureToTrainer } from "../constant/Link";

export default function LinkCourseToTrainer() {
  return (
    <div className="sm:pl-6 md:pl-40 lg:pl-40">
      {/* heading section */}
      <h1 class="my-6 text-xl text-center font-extrabold text-gray-900 md:text-5xl lg:text-4xl">
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Link Trainer to Course
        </span>
        {"      "}
      </h1>
      <div className="flex justify-center items-center ">
        <a
          href="#"
          className="w-36 h-10 items-center py-2 text-lg font-bold text-center text-white bg-primary rounded-lg hover:text-gray-800"
        >
          Add Link
        </a>
      </div>
      <div className="p-5 sm:pr-6">
        <div className="overflow-auto rounded-lg shadow">
          <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  ID
                </th>
                <th className="w-30 p-3 text-sm font-semibold tracking-wide text-left">
                  Trainer Name
                </th>
                <th className="w-24  p-3 text-sm font-semibold tracking-wide text-left">
                  Course Name
                </th>
                <th className="w-30 p-3 text-sm font-semibold tracking-wide text-left">
                  Date of Link
                </th>
                <th className="w-30 p-3 text-sm font-semibold tracking-wide text-left">
                  Start Date of Course
                </th>
                <th className="w-26 p-3 text-sm font-semibold tracking-wide text-left">
                  Edit
                </th>
                <th className="w-26 p-3 text-sm font-semibold tracking-wide text-left">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {linkCoureToTrainer.map((l) => (
                <tr key={l.id} className="bg-white">
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <a
                      href=""
                      className="font-bold text-blue-400 hover:underline"
                    >
                      {l.id}
                    </a>
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {l.trainer}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {l.course}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {l.dateOfLink}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {l.startDate}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <a
                      href="#"
                      className="w-36 h-10 items-center px-3 py-2 text-md font-medium text-center text-white bg-primary rounded-lg hover:text-gray-800"
                    >
                      Edit
                    </a>
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <a
                      href="#"
                      className="w-36 h-10 items-center px-3 py-2 text-md font-medium text-center text-white bg-primary rounded-lg hover:text-gray-800"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
