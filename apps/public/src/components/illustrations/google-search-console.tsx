const schedules = [
  {
    query: 'JKT48 Theater Show - Team J',
    date: 'Today',
    pos: '19:00',
  },
  {
    query: 'Handshake Event - Grand Indonesia',
    date: 'Sat',
    pos: '10:00',
  },
  {
    query: 'JKT48 Setlist - Aitakatta',
    date: 'Sun',
    pos: '15:00',
  },
];

export function TheaterEventsIllustration() {
  return (
    <div className="col h-full gap-2 px-4 pt-5 pb-3">
      {/* Top stats */}
      <div className="row mb-1 gap-2">
        <div className="col flex-1 gap-0.5 rounded-lg border bg-card px-2.5 py-2">
          <span className="text-[8px] text-muted-foreground uppercase tracking-wider">
            Shows
          </span>
          <span className="font-bold font-mono text-sm">24</span>
        </div>
        <div className="col flex-1 gap-0.5 rounded-lg border bg-card px-2.5 py-2">
          <span className="text-[8px] text-muted-foreground uppercase tracking-wider">
            Members
          </span>
          <span className="font-bold font-mono text-sm">64</span>
        </div>
        <div className="col flex-1 gap-0.5 rounded-lg border bg-card px-2.5 py-2">
          <span className="text-[8px] text-muted-foreground uppercase tracking-wider">
            Tickets
          </span>
          <span className="font-bold font-mono text-sm">98%</span>
        </div>
        <div className="col flex-1 gap-0.5 rounded-lg border bg-card px-2.5 py-2">
          <span className="text-[8px] text-muted-foreground uppercase tracking-wider">
            HS Events
          </span>
          <span className="font-bold font-mono text-sm">3</span>
        </div>
      </div>

      {/* Schedule table */}
      <div className="flex-1 overflow-hidden rounded-xl border border-border bg-card">
        <div className="row border-border border-b px-3 py-1.5">
          <span className="flex-1 text-[8px] text-muted-foreground uppercase tracking-wider">
            Event
          </span>
          <span className="w-10 text-right text-[8px] text-muted-foreground uppercase tracking-wider">
            Time
          </span>
        </div>
        {schedules.map((s, i) => (
          <div
            className="row items-center border-border/50 border-b px-3 py-1.5 last:border-0"
            key={s.query}
            style={{ opacity: 1 - i * 0.18 }}
          >
            <span className="flex-1 truncate text-[9px]">{s.query}</span>
            <span className="w-10 text-right font-mono text-[9px] text-muted-foreground">
              {s.pos}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
