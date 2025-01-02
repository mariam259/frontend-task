import { ComposedChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

export default function Payment() {
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
    {
      name: "Page F",
      cost: 1400,
    },
  ];

  return (
    <div className="pl-44 pt-5">
      <ComposedChart
        layout="vertical"
        width={500}
        height={400}
        data={data}
        margin={{
          top: 30,
          right: 20,
          bottom: 30,
          left: 20,
        }}
      >
        {/* <CartesianGrid stroke="#f5f5f5" /> */}
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Legend />
        {/* <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
        <Bar dataKey="cost" barSize={15} fill="#80e5ff" />
        {/* <Line dataKey="uv" stroke="#ff7300" /> */}
      </ComposedChart>
    </div>
  );
}
