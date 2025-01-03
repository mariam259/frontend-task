import { payment } from "../constant/PaymentsData";

export default function PaymentTable() {
  return (
    <div className="p-5 sm:pr-6">
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
            {payment.map((p) => (
              <tr key={p.id} className="bg-white">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <a
                    href=""
                    className="font-bold text-blue-400 hover:underline"
                  >
                    {p.id}
                  </a>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {p.trainerName}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {p.courseName}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {p.status}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {p.date}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {p.amount}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {p.method}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
