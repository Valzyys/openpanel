'use client';

import NumberFlow from '@number-flow/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const MEMBER_ACTIVITY = [38, 42, 39, 51, 47, 55, 61];
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const STATS = [
  { label: 'Members', value: 47, formatted: null, change: 3, up: true },
  { label: 'Generations', value: null, formatted: '13th', change: null, up: null },
  { label: 'API calls', value: null, formatted: '8.2k', change: 12, up: true },
  { label: 'Avg. latency', value: null, formatted: '142ms', change: 8, up: false },
];

const MEMBER_HIGHLIGHTS = [
  {
    icon: 'https://api.openpanel.dev/misc/favicon?url=https%3A%2F%2Finstagram.com',
    name: 'Profiles & socials',
    pct: 54,
  },
  {
    icon: 'https://api.openpanel.dev/misc/favicon?url=https%3A%2F%2Fyoutube.com',
    name: 'Birthday info',
    pct: 28,
  },
  {
    icon: 'https://api.openpanel.dev/misc/favicon?url=https%3A%2F%2Fgithub.com',
    name: 'Generations',
    pct: 18,
  },
];

// Featured members preview
const FEATURED_MEMBERS = [
  { name: 'Shani', gen: '11th', color: 'bg-pink-500' },
  { name: 'Freya', gen: '12th', color: 'bg-purple-500' },
  { name: 'Zee', gen: '13th', color: 'bg-blue-500' },
  { name: 'Gita', gen: '11th', color: 'bg-emerald-500' },
];

function AreaChart({ data }: { data: number[] }) {
  const max = Math.max(...data);
  const w = 400;
  const h = 56;
  const xStep = w / (data.length - 1);
  const pts = data.map((v, i) => ({ x: i * xStep, y: h - (v / max) * h }));
  const line = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x},${p.y}`).join(' ');
  const area = `${line} L ${w},${h} L 0,${h} Z`;
  const last = pts[pts.length - 1];

  return (
    <svg className="w-full" viewBox={`0 0 ${w} ${h + 4}`}>
      <defs>
        <linearGradient id="jkt-fill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="rgb(168 85 247)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="rgb(168 85 247)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#jkt-fill)" />
      <path
        d={line}
        fill="none"
        stroke="rgb(168 85 247)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <circle cx={last.x} cy={last.y} fill="rgb(168 85 247)" r="3" />
      <circle
        cx={last.x}
        cy={last.y}
        fill="none"
        r="6"
        stroke="rgb(168 85 247)"
        strokeOpacity="0.3"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function WebAnalyticsIllustration() {
  const [liveRequests, setLiveRequests] = useState(23);

  useEffect(() => {
    const values = [23, 27, 19, 31, 25, 29, 22];
    let i = 0;
    const id = setInterval(() => {
      i = (i + 1) % values.length;
      setLiveRequests(values[i]);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="aspect-video col gap-2.5 p-5">
      {/* Header */}
      <div className="row items-center justify-between">
        <div className="row items-center gap-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-purple-500" />
          </span>
          <span className="text-[10px] font-medium text-muted-foreground">
            <NumberFlow value={liveRequests} /> live requests
          </span>
        </div>
        <span className="rounded bg-muted px-1.5 py-0.5 text-[9px] text-muted-foreground">
          REST API
        </span>
      </div>

      {/* KPI tiles */}
      <div className="grid grid-cols-4 gap-1.5">
        {STATS.map((stat) => (
          <div
            className="col gap-0.5 rounded-lg border bg-card px-2 py-1.5"
            key={stat.label}
          >
            <span className="text-[8px] text-muted-foreground">{stat.label}</span>
            <span className="font-mono font-semibold text-xs leading-tight">
              {stat.formatted ??
                (stat.value !== null ? (
                  <NumberFlow locales="en-US" value={stat.value} />
                ) : null)}
            </span>
            {stat.change !== null && stat.up !== null ? (
              <span
                className={`text-[8px] ${stat.up ? 'text-purple-400' : 'text-red-400'}`}
              >
                {stat.up ? '↑' : '↓'} {stat.change}%
              </span>
            ) : (
              <span className="text-[8px] text-muted-foreground/50">—</span>
            )}
          </div>
        ))}
      </div>

      {/* Member avatars + activity chart */}
      <div className="flex-1 col gap-1 overflow-hidden rounded-xl border bg-card px-3 pt-2 pb-1">
        <div className="row items-center justify-between">
          <span className="text-[8px] text-muted-foreground">API activity (calls/day)</span>
          {/* Mini member avatars */}
          <div className="row items-center -space-x-1">
            {FEATURED_MEMBERS.map((m) => (
              <div
                key={m.name}
                title={`${m.name} — ${m.gen} gen`}
                className={`h-3.5 w-3.5 rounded-full border border-card text-[5px] font-bold text-white flex items-center justify-center ${m.color}`}
              >
                {m.name[0]}
              </div>
            ))}
            <span className="ml-1.5 text-[7px] text-muted-foreground">+43</span>
          </div>
        </div>
        <AreaChart data={MEMBER_ACTIVITY} />
        <div className="row justify-between px-0.5">
          {DAYS.map((d) => (
            <span className="text-[7px] text-muted-foreground" key={d}>
              {d}
            </span>
          ))}
        </div>
      </div>

      {/* Data endpoint breakdown */}
      <div className="row gap-1.5">
        {MEMBER_HIGHLIGHTS.map((src) => (
          <div
            className="row flex-1 items-center gap-1.5 overflow-hidden rounded-lg border bg-card px-2 py-1.5"
            key={src.name}
          >
            <Image
              alt={src.name}
              className="rounded-[2px] object-contain"
              height={10}
              src={src.icon}
              width={10}
            />
            <span className="flex-1 truncate text-[9px]">{src.name}</span>
            <span className="font-mono text-[9px] text-muted-foreground">
              {src.pct}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
