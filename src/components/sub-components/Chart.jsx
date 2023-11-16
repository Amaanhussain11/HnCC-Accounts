import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import { useEffect } from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";

// import { reciept, payments } from "../../credentials/data";

const sum = (arr) => {
  let s = 0;
  for (x of arr) {
    s += x.amnt;
  }
  return s;
};

const data = [
  {
    name: "Income",
    uv: 2390,
    value: 36200,
    amt: 2500,
  },
  {
    name: "Expense",
    uv: 3490,
    value: 23100,
    amt: 2100,
  },
];

const COLORS = ["#0F0F0F", "#495057"];
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip w-fit h-fit p-3 bg-[#505050c2] backdrop-blur-[10px] text-[#fff] rounded-xl relative">
        <p className="label">{`${
          payload[0].name
        } : ₹${Intl.NumberFormat().format(payload[0].value)}`}</p>
        {/* <p className="intro">{getIntroOfPage(label)}</p> */}
      </div>
    );
  }

  return null;
};
export default function Visual({ points, width }) {
  const [mousePos, setMousePos] = useState({});

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  console.table(points);
  // let width = 200;
  return (
    <PieChart width={width} height={width / 1.2}>
      <Pie
        data={data}
        cx={width / 2}
        cy={width / 3.8}
        innerRadius={width / 8.7}
        outerRadius={width / 3.6}
        labelLine={false}
        paddingAngle={4}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip
        content={<CustomTooltip />}
        cursor={false}
        position={{
          x: mousePos.x - points.x - 1100,
          y: mousePos.y - points.y - 50,
        }}
      />
    </PieChart>
  );
}
export { Visual };
