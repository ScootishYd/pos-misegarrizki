"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartContainer,
} from "@/components/ui/chart";

const description = "A line chart with dots";

const chartData = [
  { month: "Januari", total: 5000000 },
  { month: "Februari", total: 6000000 },
  { month: "Maret", total: 7500000 },
  { month: "April", total: 8000000 },
  { month: "Mei", total: 11000000 },
  { month: "Juni", total: 7800000 },
  { month: "Juli", total: null },
  { month: "Agustus", total: null },
  { month: "September", total: null },
  { month: "Oktober", total: null },
  { month: "November", total: null },
  { month: "Desember", total: null },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
};

const ChartLineDots = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Penjualan</CardTitle>
        <CardDescription>Januari - Desember 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[200px] w-full">
          <LineChart data={chartData} margin={{ left: 12, right: 12 }}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis tickFormatter={(value) => `Rp ${value / 1000000}jt`} />
            <Tooltip formatter={(value) => `Rp ${value.toLocaleString()}`} />
            <Line
              dataKey="total"
              type="monotone"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={{ fill: "var(--color-desktop)" }}
              activeDot={{ r: 6 }}
              connectNulls
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default ChartLineDots;
