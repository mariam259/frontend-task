import { PieChart, Pie, Legend, Tooltip } from "recharts";

const data01 = [
  { name: "A", value: 400 },
  { name: "B", value: 300 },
  { name: "C", value: 300 },
  { name: "D", value: 200 },
  { name: "E", value: 278 },
  { name: "F", value: 189 },
];

export default function PieCharts() {
  //   static demoUrl = "https://codesandbox.io/s/two-simple-pie-chart-otx9h";

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
