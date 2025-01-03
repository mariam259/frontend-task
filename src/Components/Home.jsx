import React from "react";
import PaymentChart from "./Payment/PaymentChart";

export default function Home() {
  return (
    <div className="sm:pl-6 md:pl-40 lg:pl-40">
      {/* heading section */}
      <h1 class="my-6 text-xl text-center font-extrabold text-gray-900 md:text-5xl lg:text-4xl">
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Manage Your Dashboard
        </span>{" "}
      </h1>
      {/* create card for number of courses, trainers, and total payment */}
      <div className="mx-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <a
          href="#"
          class="block max-w-sm p-6 bg-gradient-to-l from-primary to-secondary border border-gray-200 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 "
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            Courses Activated
          </h5>
          <p class="font-normal text-gray-700">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </a>
        <a
          href="#"
          class="block max-w-sm p-6 bg-gradient-to-l from-primary to-secondary border border-gray-200 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 "
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            total Trainers
          </h5>
          <p class="font-normal text-gray-700">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </a>
        <a
          href="#"
          class="block max-w-sm p-6 bg-gradient-to-l from-primary to-secondary border border-gray-200 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 "
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            Total Payment
          </h5>
          <p class="font-normal text-gray-700">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </a>
      </div>
      {/* charts show pie charts for popular courses and one for trainers */}
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <h1 class="my-4 text-xl text-center font-extrabold text-gray-900 md:text-5xl lg:text-4xl">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            How much you earned?
          </span>{" "}
        </h1>
        <PaymentChart />
      </div>
    </div>
  );
}
