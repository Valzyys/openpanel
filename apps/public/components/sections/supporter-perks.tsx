import { cn } from '@/lib/utils';
import {
  CheckIcon,
  CodeIcon,
  HeartIcon,
  KeyRoundIcon,
  LifeBuoyIcon,
  RocketIcon,
  ShieldCheckIcon,
  ZapIcon,
} from 'lucide-react';
import Link from 'next/link';

const perks = [
  {
    icon: KeyRoundIcon,
    title: 'Full API Access',
    description: 'Unlimited calls to all endpoints — members, theater, live streams, and events',
    href: '/docs/endpoints',
    highlight: true,
  },
  {
    icon: ZapIcon,
    title: 'Real-time Data',
    description: 'Live viewer counts, stream status, and event alerts with sub-second latency',
    highlight: true,
  },
  {
    icon: RocketIcon,
    title: 'Priority Roadmap',
    description: 'Vote and request new endpoints that get prioritized in our development cycle',
    highlight: true,
  },
  {
    icon: LifeBuoyIcon,
    title: 'Developer Support',
    description: 'Direct access to our team via Discord for integration help',
  },
  {
    icon: ShieldCheckIcon,
    title: 'SLA Guarantee',
    description: '99.9% uptime with dedicated infrastructure for production apps',
  },
  {
    icon: CodeIcon,
    title: 'SDK & Webhooks',
    description: 'Official TypeScript SDK and webhook support for event-driven apps',
  },
  {
    icon: HeartIcon,
    title: 'Support the Project',
    description: 'Your subscription directly funds data maintenance and new integrations',
  },
];

export function SupporterPerks({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'col gap-4 p-6 rounded-xl border bg-card',
        'sticky top-24',
        className,
      )}
    >
      <div className="col gap-2 mb-2">
        <div className="row gap-2 items-center">
          <KeyRoundIcon className="size-5 text-primary" />
          <h3 className="font-semibold text-lg">API Access Perks</h3>
        </div>
        <p className="text-sm text-muted-foreground">
          Everything included in your JKT48Connect subscription
        </p>
      </div>

      <div className="col gap-3">
        {perks.map((perk, index) => {
          const Icon = perk.icon;
          return (
            <div
              key={index}
              className={cn(
                'col gap-1.5 p-3 rounded-lg border transition-colors',
                perk.highlight
                  ? 'bg-primary/5 border-primary/20'
                  : 'bg-background border-border',
              )}
            >
              <div className="row gap-2 items-start">
                <Icon
                  className={cn(
                    'size-4 mt-0.5 shrink-0',
                    perk.highlight ? 'text-primary' : 'text-muted-foreground',
                  )}
                />
                <div className="col gap-0.5 flex-1 min-w-0">
                  <div className="row gap-2 items-center">
                    <h4
                      className={cn(
                        'font-medium text-sm',
                        perk.highlight && 'text-primary',
                      )}
                    >
                      {perk.title}
                    </h4>
                    {perk.highlight && (
                      <CheckIcon className="size-3.5 text-primary shrink-0" />
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {perk.description}
                  </p>
                  {perk.href && (
                    <Link
                      href={perk.href}
                      className="text-xs text-primary hover:underline mt-1"
                    >
                      View endpoints →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 pt-4 border-t col gap-1">
        <p className="text-xs text-muted-foreground text-center">
          Starting at{' '}
          <strong className="text-foreground">Free</strong>
          {' '}— scales with usage
        </p>
        <p className="text-[10px] text-muted-foreground/60 text-center">
          No credit card required to get started
        </p>
      </div>
    </div>
  );
}
