import { ComposedChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

export default function PaymentChart() {
  const data = [
    {
      name: "Jaunary",
      cost: 330,
    },
    {
      name: "Fabruary",
      cost: 1200,
    },
    {
      name: "March",
      cost: 323,
    },
    {
      name: "April",
      cost: 329,
    },
    {
      name: "May",
      cost: 492,
    },
  ];

  return (
    <div className="">
      <ComposedChart
        layout="vertical"
        width={
          typeof window !== "undefined" && window.innerWidth < 768 ? 350 : 500
        }
        height={
          typeof window !== "undefined" && window.innerWidth < 768 ? 350 : 400
        }
        data={data}
        margin={{
          top: 30,
          right: 20,
          bottom: 30,
          left: 20,
        }}
      >
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Legend />

        <Bar dataKey="cost" barSize={15} fill="#80e5ff" />
      </ComposedChart>
    </div>
  );
}
