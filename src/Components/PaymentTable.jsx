export default function PaymentTable() {
  return (
    <div className="p-5 pl-40">
      <div className="overflow-auto rounded-lg shadow">
        <table className="w-full">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                Payment ID
              </th>
              <th className="w-30 p-3 text-sm font-semibold tracking-wide text-left">
                Trainer Name
              </th>
              <th className="w-24  p-3 text-sm font-semibold tracking-wide text-left">
                Course Name
              </th>
              <th className="w-30 p-3 text-sm font-semibold tracking-wide text-left">
                Payment Status
              </th>
              <th className="w-30 p-3 text-sm font-semibold tracking-wide text-left">
                Date of Payment
              </th>
              <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
                Amount
              </th>
              <th className="w-26 p-3 text-sm font-semibold tracking-wide text-left">
                Payment Method
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="bg-white">
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                <a href="" className="font-bold text-blue-400 hover:underline">
                  1028
                </a>
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                Ahmed Adel
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                Course 1
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                <span className="p-1.5 text-xs font-medium uppercase tracking-wider bg-red-400 rounded-lg bg-opacity-50 ">
                  Not Paid
                </span>
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                12-12-2021
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                1000$
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                Cash
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                <a href="" className="font-bold text-blue-400 hover:underline">
                  1029
                </a>
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                Omar Taha
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                Course 2
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                {" "}
                <span className="p-1.5 text-xs font-medium uppercase tracking-wider bg-green-400 rounded-lg bg-opacity-50 ">
                  done
                </span>
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                12-12-2021
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                1200$
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                Credit Card
              </td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                <a href="" className="font-bold text-blue-400 hover:underline">
                  1030
                </a>
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                Nour Ali
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                course 1
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                done
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                12-12-2021
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                600$
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                Cash
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                <a href="" className="font-bold text-blue-400 hover:underline">
                  1029
                </a>
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                Omar Taha
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                Course 2
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                {" "}
                <span className="p-1.5 text-xs font-medium uppercase tracking-wider bg-green-400 rounded-lg bg-opacity-50 ">
                  done
                </span>
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                12-12-2021
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                1200$
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                Credit Card
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
