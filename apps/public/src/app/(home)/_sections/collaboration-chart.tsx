'use client';

import { FeatureCardContainer } from '@/components/feature-card';
import { MoreVerticalIcon } from 'lucide-react';
import { useMemo, useState } from 'react';
import {
  Bar,
  CartesianGrid,
  Cell,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

// Sample data for the last 7 days
const data = [
  { day: 'Mon', viewers: 3200, streams: 4 },
  { day: 'Tue', viewers: 5450, streams: 7 },
  { day: 'Wed', viewers: 4320, streams: 5 },
  { day: 'Thu', viewers: 6580, streams: 9 },
  { day: 'Fri', viewers: 5420, streams: 6 },
  { day: 'Sat', viewers: 7180, streams: 11 },
  { day: 'Sun', viewers: 6250, streams: 8 },
];

// Custom tooltip component
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const viewers =
      payload.find((p: any) => p.dataKey === 'viewers')?.value || 0;
    const streams =
      payload.find((p: any) => p.dataKey === 'streams')?.value || 0;

    return (
      <div className="bg-card border border-border rounded-lg p-3 shadow-lg min-w-[200px]">
        <div className="text-sm font-semibold mb-2">{label}</div>
        <div className="text-sm text-muted-foreground space-y-1 flex-1">
          <div className="row gap-2 items-center flex-1">
            <div className="h-6 bg-foreground w-1 rounded-full" />
            <div className="font-medium row items-center gap-2 justify-between flex-1">
              <span>Viewers</span> <span>{viewers.toLocaleString()}</span>
            </div>
          </div>
          <div className="row gap-2 items-center flex-1">
            <div className="h-6 bg-emerald-500 w-1 rounded-full" />
            <div className="font-medium row items-center gap-2 justify-between flex-1">
              <span>Live Streams</span> <span>{streams}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export function CollaborationChart() {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  const activeData = useMemo(() => {
    return activeIndex !== null ? data[activeIndex] : data[1];
  }, [activeIndex]);

  const totalViewers = activeData.viewers;
  const totalStreams = activeData.streams;

  return (
    <FeatureCardContainer className="col gap-4 h-full">
      {/* Header */}
      <div className="row items-center justify-between">
        <div>
          <h3 className="font-semibold">Live stream activity</h3>
          <p className="text-sm text-muted-foreground">Last 7 days</p>
        </div>
        <button
          type="button"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <MoreVerticalIcon className="size-4" />
        </button>
      </div>

      {/* Chart */}
      <div className="flex-1 min-h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
            onMouseMove={(state) => {
              if (state?.activeTooltipIndex !== undefined) {
                setActiveIndex(state.activeTooltipIndex);
              }
            }}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="hsl(var(--border))"
              opacity={0.3}
            />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'var(--muted-foreground)', fontSize: 10 }}
            />
            <YAxis
              yAxisId="left"
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'var(--muted-foreground)', fontSize: 10 }}
              hide
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'var(--muted-foreground)', fontSize: 10 }}
              domain={[0, 15]}
              hide
            />
            <Tooltip content={<CustomTooltip />} cursor={false} />
            {/* Streams bars */}
            <Bar yAxisId="right" dataKey="streams" radius={4}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${entry.day}`}
                  className={
                    activeIndex === index
                      ? 'fill-emerald-500'
                      : 'fill-foreground/30'
                  }
                  style={{ transition: 'fill 0.2s ease' }}
                />
              ))}
            </Bar>
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="viewers"
              strokeWidth={2}
              stroke="var(--foreground)"
              dot={false}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-4 center-center">
        <div>
          <div className="text-2xl font-semibold font-mono">
            {totalViewers.toLocaleString()}
          </div>
          <div className="text-xs text-muted-foreground">Viewers</div>
        </div>
        <div>
          <div className="text-2xl font-semibold font-mono text-emerald-500">
            {totalStreams}
          </div>
          <div className="text-xs text-muted-foreground">Live Streams</div>
        </div>
      </div>
    </FeatureCardContainer>
  );
}
