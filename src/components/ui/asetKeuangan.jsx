"use client";

import { Card, CardContent } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const financialData = [
  { name: "Penjualan", value: 62.5, color: "#457BDE" },
  { name: "Inventaris", value: 25, color: "#de4545" },
  { name: "Lain-lain", value: 12.5, color: "#1fcf97" },
];

export default function AsetKeuangan() {
  return (
    <Card>
      <CardContent>
        <div className="flex items-center gap-8">
          {/* Pie Chart */}
          <div className="flex-1">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={financialData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                >
                  {financialData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-4 text-sm w-40">
            {financialData.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-sm"
                  style={{ backgroundColor: item.color }}
                ></div>
                <div>
                  <p className="">{item.name}</p>
                  <p className="ml-auto font-bold">{item.value}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
