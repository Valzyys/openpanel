'use client';

import { useEffect, useState } from 'react';
import { BellIcon, CalendarIcon, MicVocalIcon, HeartHandshakeIcon } from 'lucide-react';

const NOTIFICATIONS = [
  {
    icon: HeartHandshakeIcon,
    iconColor: '#f472b6',
    bgColor: 'bg-pink-500/10',
    title: 'Handshake Event',
    desc: 'JKT48 Request Hour — Ticket open',
    time: 'just now',
    tag: 'Handshake',
    tagColor: 'bg-pink-500/15 text-pink-400',
  },
  {
    icon: MicVocalIcon,
    iconColor: '#a78bfa',
    bgColor: 'bg-violet-500/10',
    title: 'Special Appearance',
    desc: 'Freya & Shani on TransTV — 20:00 WIB',
    time: '2m ago',
    tag: 'Off-air',
    tagColor: 'bg-violet-500/15 text-violet-400',
  },
  {
    icon: CalendarIcon,
    iconColor: '#34d399',
    bgColor: 'bg-emerald-500/10',
    title: 'Show Alert',
    desc: 'Team T "Pajama Drive" — starts in 1h',
    time: '5m ago',
    tag: 'Theater',
    tagColor: 'bg-emerald-500/15 text-emerald-400',
  },
];

export function NotificationsIllustration() {
  const [visible, setVisible] = useState(1);

  useEffect(() => {
    if (visible >= NOTIFICATIONS.length) return;
    const t = setTimeout(() => setVisible((v) => v + 1), 1200);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <div className="col h-full justify-center gap-2 px-5 py-4">
      {NOTIFICATIONS.slice(0, visible).map((n, i) => {
        const Icon = n.icon;
        return (
          <div
            key={n.title}
            className="col gap-2 rounded-xl border border-border bg-card px-3 py-2.5 shadow-sm transition-all duration-500 group-hover:-translate-y-0.5"
            style={{
              opacity: visible > i ? 1 : 0,
              transform: visible > i ? 'translateY(0)' : 'translateY(6px)',
              transition: 'opacity 0.4s ease, transform 0.4s ease',
            }}
          >
            <div className="row items-center gap-2">
              {/* Icon */}
              <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${n.bgColor}`}>
                <Icon className="size-3" style={{ color: n.iconColor }} />
              </div>
              <span className="font-semibold text-[10px] text-foreground flex-1 leading-tight">
                {n.title}
              </span>
              <span className={`rounded-full px-1.5 py-0.5 text-[7px] font-medium ${n.tagColor}`}>
                {n.tag}
              </span>
              <span className="text-[8px] text-muted-foreground shrink-0">
                {n.time}
              </span>
            </div>
            <p className="text-[9px] text-muted-foreground leading-snug pl-7">
              {n.desc}
            </p>
          </div>
        );
      })}

      {/* Notification rule */}
      <div className="col gap-1 px-1 pt-1 opacity-75">
        <span className="text-[8px] text-muted-foreground uppercase tracking-wider">
          Alert rule
        </span>
        <div className="row flex-wrap items-center gap-1">
          <span className="text-[8px] text-muted-foreground">When</span>
          <span className="rounded bg-muted px-1.5 py-0.5 font-mono text-[8px]">
            any event
          </span>
          <span className="text-[8px] text-muted-foreground">is announced →</span>
          <span className="rounded bg-muted px-1.5 py-0.5 font-mono text-[8px]">
            push + email
          </span>
        </div>
      </div>
    </div>
  );
}
