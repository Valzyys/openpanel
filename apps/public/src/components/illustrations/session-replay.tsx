'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import NumberFlow from '@number-flow/react';

const STREAMS = [
  {
    name: 'Delynn',
    platform: 'IDN',
    platformColor: '#ef4444',
    viewers: 4821,
    duration: '1:24:07',
    avatar: 'https://pbs.twimg.com/profile_images/2006653390642884609/npB5-k9f_400x400.jpg',
  },
  {
    name: 'Aralie Abigail',
    platform: 'Showroom',
    platformColor: '#f97316',
    viewers: 3102,
    duration: '0:47:33',
    avatar: 'https://pbs.twimg.com/profile_images/2006593156415205376/Hx8ypf9C_400x400.jpg',
  },
  {
    name: 'Catherina Vallencia',
    platform: 'IDN',
    platformColor: '#ef4444',
    viewers: 1876,
    duration: '0:22:14',
    avatar: 'https://pbs.twimg.com/profile_images/2008169309051506688/g0CO-lhS_400x400.jpg',
  },
];

function PulsingDot({ color }: { color: string }) {
  return (
    <span className="relative flex h-1.5 w-1.5 shrink-0">
      <span
        className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
        style={{ backgroundColor: color }}
      />
      <span
        className="relative inline-flex h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: color }}
      />
    </span>
  );
}

function ViewerBar({ pct }: { pct: number }) {
  return (
    <div className="relative h-0.5 w-full overflow-hidden rounded-full bg-muted/40">
      <div
        className="absolute left-0 top-0 h-0.5 rounded-full bg-current opacity-40"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

export function SessionReplayIllustration() {
  const [viewers, setViewers] = useState(STREAMS.map((s) => s.viewers));
  const [totalViewers, setTotalViewers] = useState(
    STREAMS.reduce((a, s) => a + s.viewers, 0)
  );

  useEffect(() => {
    const id = setInterval(() => {
      setViewers((prev) =>
        prev.map((v) => Math.max(100, v + Math.floor((Math.random() - 0.45) * 120)))
      );
    }, 2000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    setTotalViewers(viewers.reduce((a, v) => a + v, 0));
  }, [viewers]);

  const maxViewers = Math.max(...viewers);

  return (
    <div className="h-full px-4 pb-3 pt-4">
      <div className="col h-full overflow-hidden rounded-xl border border-border bg-background shadow-lg transition-transform duration-300 group-hover:-translate-y-0.5">

        {/* Header */}
        <div className="row shrink-0 items-center justify-between border-b border-border bg-muted/20 px-3 py-2">
          <div className="row items-center gap-1.5">
            <PulsingDot color="#ef4444" />
            <span className="text-[9px] font-semibold text-foreground">Live Now</span>
            <span className="rounded bg-red-500/15 px-1 py-0.5 text-[7px] font-medium text-red-400">
              {STREAMS.length} streams
            </span>
          </div>
          <div className="row items-center gap-1">
            <span className="text-[8px] text-muted-foreground">Total:</span>
            <span className="font-mono text-[9px] font-semibold text-foreground">
              <NumberFlow value={totalViewers} locales="en-US" />
            </span>
          </div>
        </div>

        {/* Stream list */}
        <div className="col flex-1 gap-0 divide-y divide-border overflow-hidden">
          {STREAMS.map((stream, i) => {
            const pct = Math.round((viewers[i] / maxViewers) * 100);
            return (
              <div key={stream.name} className="row items-center gap-2 px-3 py-2">
                {/* Avatar photo */}
                <div className="relative h-6 w-6 shrink-0 overflow-hidden rounded-full ring-1 ring-border">
                  <Image
                    src={stream.avatar}
                    alt={stream.name}
                    width={24}
                    height={24}
                    className="h-full w-full object-cover"
                    unoptimized
                  />
                  {/* Live platform dot */}
                  <span
                    className="absolute bottom-0 right-0 h-1.5 w-1.5 rounded-full border border-background"
                    style={{ backgroundColor: stream.platformColor }}
                  />
                </div>

                {/* Info */}
                <div className="col flex-1 gap-0.5 overflow-hidden min-w-0">
                  <div className="row items-center gap-1.5">
                    <span className="truncate text-[9px] font-medium text-foreground">
                      {stream.name}
                    </span>
                    <span
                      className="shrink-0 rounded px-1 py-0 text-[6.5px] font-semibold text-white"
                      style={{ backgroundColor: stream.platformColor }}
                    >
                      {stream.platform}
                    </span>
                  </div>
                  <ViewerBar pct={pct} />
                </div>

                {/* Viewer count + duration */}
                <div className="col items-end gap-0.5 shrink-0">
                  <span className="font-mono text-[9px] font-semibold text-foreground">
                    <NumberFlow value={viewers[i]} locales="en-US" />
                  </span>
                  <span className="font-mono text-[7px] text-muted-foreground">
                    {stream.duration}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom bar */}
        <div className="row shrink-0 items-center gap-2 border-t border-border bg-muted/10 px-3 py-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-[7.5px] text-muted-foreground flex-1">
            Notify when oshi goes live
          </span>
          <div className="rounded bg-muted/50 px-1.5 py-0.5 text-[7px] text-muted-foreground">
            + Follow
          </div>
        </div>

      </div>
    </div>
  );
}
