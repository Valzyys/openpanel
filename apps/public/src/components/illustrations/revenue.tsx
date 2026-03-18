'use client';
import { SimpleChart } from '@/components/simple-chart';

const memberPoints = [12, 18, 15, 22, 20, 27, 25, 33, 30, 38, 42, 47];

const topMembers = [
  { name: 'Delynn', activity: 'Theater', pct: 72 },
  { name: 'Aralie', activity: 'Live Stream', pct: 58 },
  { name: 'Oline', activity: 'Appearance', pct: 41 },
  { name: 'Erine', activity: 'Theater', pct: 29 },
];

export function MemberIllustration() {
  return (
    <div className="h-full col gap-3 px-4 pb-3 pt-5">
      {/* Active Members stat + chart */}
      <div className="row gap-3">
        <div className="col gap-1 rounded-xl border bg-card p-3 transition-all duration-300 group-hover:-translate-y-0.5">
          <span className="text-[9px] uppercase tracking-wider text-muted-foreground">
            Members
          </span>
          <span className="font-bold font-mono text-xl text-emerald-500">
            1,284
          </span>
          <span className="text-[9px] text-emerald-500">↑ 8% this month</span>
        </div>
        <div className="col flex-1 gap-1 rounded-xl border bg-card px-3 py-2">
          <span className="text-[9px] text-muted-foreground">
            Members over time
          </span>
          <SimpleChart
            className="mt-1 flex-1"
            height={36}
            points={memberPoints}
            strokeColor="rgb(34, 197, 94)"
            width={400}
          />
        </div>
      </div>

      {/* Member Activity List */}
      <div className="flex-1 overflow-hidden rounded-xl border bg-card">
        <div className="row border-b border-border px-3 py-1.5">
          <span className="flex-1 text-[8px] uppercase tracking-wider text-muted-foreground">
            Member
          </span>
          <span className="text-[8px] uppercase tracking-wider text-muted-foreground">
            Activity
          </span>
        </div>
        {topMembers.map((m) => (
          <div
            className="row items-center gap-2 border-b border-border/50 px-3 py-1.5 last:border-0"
            key={m.name}
          >
            {/* Avatar circle */}
            <div className="flex-none w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <span className="text-[7px] font-bold text-emerald-400 uppercase">
                {m.name[0]}
              </span>
            </div>
            <span className="text-[9px] text-muted-foreground flex-none w-16 truncate">
              {m.name}
            </span>
            <div className="flex-1 h-1 rounded-full bg-muted overflow-hidden">
              <div
                className="h-1 rounded-full bg-emerald-500/70"
                style={{ width: `${m.pct}%` }}
              />
            </div>
            <span className="font-mono text-[9px] text-emerald-500 flex-none w-16 text-right">
              {m.activity}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
