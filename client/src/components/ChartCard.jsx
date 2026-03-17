import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip
} from "recharts";

function ChartCard({ data }) {
  return (
    <div className="card chart-card">
      <h3>Overall Wallet Chart</h3>
      <p>Showing your wallet balances over time</p>

      <div className="chart-wrap">
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={data}>
            <XAxis dataKey="date" tick={{ fontSize: 11, fill: "#8f8f8f" }} axisLine={false} tickLine={false} />
            <Tooltip />
            <Bar dataKey="amount" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ChartCard;