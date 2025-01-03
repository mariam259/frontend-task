// import { Pie, PieChart } from "recharts";
import PaymentChart from "./PaymentChart";
import PaymentTable from "./PaymentTable";
import PieCharts from "./PieCharts";
export default function Payment() {
  return (
    <div className="md:pl-40">
      {/* add a chart for payment methods using pie chart */}

      <div className="grid grid-cols-1 lg:grid-cols-2 sm:gap-0 gap-3 ">
        <div>
          <h1 class="mt-4 text-xl text-center font-extrabold text-gray-900 md:text-5xl lg:text-4xl">
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Monthly Payment
            </span>{" "}
          </h1>
          <PaymentChart></PaymentChart>
        </div>
        <div>
          <h1 class="text-xl text-center font-extrabold text-gray-900 md:text-5xl lg:text-4xl md:mt-4">
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Payment Methods
            </span>{" "}
          </h1>
          <PieCharts />
        </div>
      </div>
      <div className="pt-4">
        <h1 class="pl-5 mb-3 text-xl font-extrabold text-gray-900 md:text-2xl lg:text-3xl">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Payment Details
          </span>{" "}
        </h1>
        <PaymentTable></PaymentTable>
      </div>
    </div>
  );
}
