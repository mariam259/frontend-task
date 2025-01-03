import course from "../assets/images/course 1.png";
export default function Courses() {
  return (
    <div className="pt-6 pr-6 pl-5 md:pl-40">
      <h1 class="mb-6 text-xl text-center font-extrabold text-gray-900 md:text-5xl lg:text-4xl">
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Manage Your Courses
        </span>{" "}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className="max-w-sm sm:max-w-lg lg:max-w-3xl bg-white border border-gray-200 rounded-lg shadow transition-transform duration-300 hover:scale-105"
          >
            <div className="flex justify-center">
              <img className="w-36 h-30 " src={course} alt="" />
            </div>
            <div className="p-5">
              <h5 className="mb-2 text-xl text-center font-semibold tracking-tight text-gray-900 ">
                Course Name
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Add some details/specification about the coure and its outcome.
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
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
