import { PieChart, Pie, Tooltip } from "recharts";

const data01 = [
  { name: "Visa", value: 400 },
  { name: "Master Card", value: 300 },
  { name: "Paypal", value: 300 },
  { name: "Cash", value: 200 },
];

export default function PieCharts() {
  return (
    <div className="flex justify-center items-center">
      <PieChart
        width={
          typeof window !== "undefined" && window.innerWidth < 768 ? 300 : 400
        }
        height={
          typeof window !== "undefined" && window.innerWidth < 768 ? 300 : 400
        }
      >
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={data01}
          cx={
            typeof window !== "undefined" && window.innerWidth < 768 ? 150 : 200
          }
          cy={
            typeof window !== "undefined" && window.innerWidth < 768 ? 150 : 200
          }
          outerRadius={
            typeof window !== "undefined" && window.innerWidth < 768 ? 60 : 80
          }
          fill="#80e5ff"
          label
        />
        <Tooltip />
      </PieChart>
    </div>
  );
}
