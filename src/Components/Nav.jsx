import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import course from "../assets/images/course 1.png";
export default function Nav() {
  useEffect(() => {
    const drawerToggle = document.querySelector("[data-drawer-toggle]");
    const drawer = document.getElementById(
      drawerToggle.getAttribute("data-drawer-target")
    );
    const closeSpan = document.getElementById("close-sidebar");

    const toggleDrawer = () => {
      drawer.classList.toggle("-translate-x-full");
    };

    drawerToggle.addEventListener("click", toggleDrawer);
    closeSpan.addEventListener("click", toggleDrawer);

    // Cleanup event listeners on component unmount
    return () => {
      drawerToggle.removeEventListener("click", toggleDrawer);
      closeSpan.removeEventListener("click", toggleDrawer);
    };
  }, []);

  return (
    <>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-36 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3  py-4 overflow-y-auto bg-secondary ">
          <a href="#" class="flex items-center ps-2.5 mb-5">
            <img
              src={course}
              className="h-6 w-6 rounded-full sm:h-7"
              alt="Logo"
            />
            <span
              id="close-sidebar"
              className="self-center text-xl font-semibold whitespace-nowrap md:hidden"
            >
              close
            </span>
          </a>
          <ul className="space-y-2 font-medium">
            <li>
              <Link to="/home">
                <a className="flex items-center p-2 text-black rounded-lg  hover:bg-white ">
                  <span className="ms-3">Dashboard</span>
                </a>
              </Link>
            </li>
            <li>
              <Link to="/courses">
                <a className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 ">
                  <span className="flex-1 ms-3 whitespace-nowrap">Courses</span>
                </a>
              </Link>
            </li>
            <li>
              <Link to="/trainers">
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 "
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Trainers
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link to="/payment">
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 "
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Payments
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link to="/link">
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">Link</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
