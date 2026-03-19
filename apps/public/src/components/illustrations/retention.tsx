'use client';

import { useTheme } from 'next-themes';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

type Show = {
  team: string;
  time: string;
  color: string;
  textColor: string;
};

const CALENDAR: Record<number, Show> = {
  3:  { team: 'Team J', time: '19:00', color: 'rgba(168,85,247,0.25)', textColor: '#c084fc' },
  5:  { team: 'Team KIII', time: '19:00', color: 'rgba(59,130,246,0.25)', textColor: '#60a5fa' },
  6:  { team: 'Team T', time: '18:00', color: 'rgba(236,72,153,0.25)', textColor: '#f472b6' },
  10: { team: 'Team J', time: '19:00', color: 'rgba(168,85,247,0.25)', textColor: '#c084fc' },
  12: { team: 'Team KIII', time: '19:00', color: 'rgba(59,130,246,0.25)', textColor: '#60a5fa' },
  13: { team: 'Team T', time: '18:00', color: 'rgba(236,72,153,0.25)', textColor: '#f472b6' },
  17: { team: 'Team J', time: '19:00', color: 'rgba(168,85,247,0.25)', textColor: '#c084fc' },
  19: { team: 'Team KIII', time: '19:00', color: 'rgba(59,130,246,0.25)', textColor: '#60a5fa' },
  20: { team: 'Team T', time: '18:00', color: 'rgba(236,72,153,0.25)', textColor: '#f472b6' },
  24: { team: 'Team J', time: '19:00', color: 'rgba(168,85,247,0.25)', textColor: '#c084fc' },
  26: { team: 'All Teams', time: '17:00', color: 'rgba(234,179,8,0.25)', textColor: '#facc15' },
  27: { team: 'Team T', time: '18:00', color: 'rgba(236,72,153,0.25)', textColor: '#f472b6' },
};

// Month starts on Wednesday (offset = 3)
const OFFSET = 3;
const TOTAL_DAYS = 28;

export function RetentionIllustration() {
  const cells: (number | null)[] = [
    ...Array(OFFSET).fill(null),
    ...Array.from({ length: TOTAL_DAYS }, (_, i) => i + 1),
  ];

  // Pad to full weeks
  while (cells.length % 7 !== 0) cells.push(null);

  const weeks: (number | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) {
    weeks.push(cells.slice(i, i + 7));
  }

  const TODAY = 19;

  return (
    <div className="h-full px-3 pb-3 pt-4 flex flex-col gap-1.5">
      {/* Month header */}
      <div className="flex items-center justify-between mb-0.5">
        <span className="text-[9px] font-semibold text-foreground tracking-wide">
          July 2025
        </span>
        <div className="flex items-center gap-2">
          {[
            { label: 'J', color: '#c084fc' },
            { label: 'K', color: '#60a5fa' },
            { label: 'T', color: '#f472b6' },
          ].map(({ label, color }) => (
            <span
              key={label}
              className="flex items-center gap-0.5 text-[7px]"
              style={{ color }}
            >
              <span
                className="inline-block w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: color }}
              />
              Team {label}
            </span>
          ))}
        </div>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 gap-0.5">
        {DAYS.map((d) => (
          <div
            key={d}
            className="text-center text-[7px] text-muted-foreground font-medium pb-0.5"
          >
            {d}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="flex flex-col gap-0.5 flex-1">
        {weeks.map((week, wi) => (
          <div key={wi} className="grid grid-cols-7 gap-0.5 flex-1">
            {week.map((day, di) => {
              const show = day !== null ? CALENDAR[day] : undefined;
              const isToday = day === TODAY;

              return (
                <div
                  key={di}
                  className="rounded flex flex-col items-center justify-start pt-0.5 overflow-hidden relative"
                  style={{
                    backgroundColor: show
                      ? show.color
                      : day !== null
                      ? 'var(--card)'
                      : 'transparent',
                    border: isToday
                      ? '1px solid rgba(250,204,21,0.6)'
                      : show
                      ? `1px solid ${show.textColor}44`
                      : day !== null
                      ? '1px solid var(--border)'
                      : 'none',
                  }}
                >
                  {day !== null && (
                    <>
                      <span
                        className="text-[7px] font-medium leading-tight"
                        style={{
                          color: isToday
                            ? '#facc15'
                            : show
                            ? show.textColor
                            : 'var(--muted-foreground)',
                        }}
                      >
                        {day}
                      </span>
                      {show && (
                        <span
                          className="text-[5.5px] leading-tight text-center px-0.5 font-medium"
                          style={{ color: show.textColor }}
                        >
                          {show.time}
                        </span>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
