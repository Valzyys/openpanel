'use client';

import NumberFlow from '@number-flow/react';
import { PRICING } from '@jkt48connect/payments/prices';
import { CheckIcon, ServerIcon, StarIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { GetStartedButton } from '@/components/get-started-button';
import { Section, SectionHeader } from '@/components/section';
import { Button } from '@/components/ui/button';
import { cn, formatApiCallsCount } from '@/lib/utils';

const features = [
  'Unlimited member profiles access',
  'Unlimited theater schedules',
  'Unlimited live stream data (IDN & Showroom)',
  'Unlimited events & news updates',
  'Unlimited API calls',
  'Real-time data synchronization',
  'Yes, we have no limits or hidden costs',
];

export function Pricing() {
  const [selectedIndex, setSelectedIndex] = useState(2);
  const selected = PRICING[selectedIndex];

  return (
    <Section className="container">
      <div className="col md:row gap-16">
        <div className="col w-full min-w-sm gap-4 rounded-3xl border bg-linear-to-b from-card to-background p-6 md:w-1/3">
          <p className="text-muted-foreground text-sm">
            Choose how many API calls you'll make this month
          </p>
          <div className="row flex-wrap gap-2">
            {PRICING.map((tier, index) => (
              <Button
                className={cn('relative h-8 rounded-full border px-4')}
                key={tier.price}
                onClick={() => setSelectedIndex(index)}
                size="sm"
                variant={selectedIndex === index ? 'default' : 'outline'}
              >
                {tier.popular && <StarIcon className="size-4" />}
                {formatApiCallsCount(tier.apiCalls)}
              </Button>
            ))}
            <Button
              className={cn('relative h-8 rounded-full border px-4')}
              onClick={() => setSelectedIndex(-1)}
              size="sm"
              variant={selectedIndex === -1 ? 'default' : 'outline'}
            >
              Custom
            </Button>
          </div>
          <div className="col mt-8 w-full items-baseline md:mt-auto">
            {selected ? (
              <>
                <span className="mb-2 rounded-full bg-primary/10 px-2.5 py-0.5 font-medium text-primary text-xs">
                  30-day free trial
                </span>
                <div className="row items-end gap-3">
                  <NumberFlow
                    className="font-bold text-5xl"
                    format={{
                      style: 'currency',
                      currency: 'USD',
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 1,
                    }}
                    locales={'en-US'}
                    value={selected.price}
                  />
                </div>
                <div className="row w-full justify-between">
                  <span className="-mt-2 text-muted-foreground/80 text-sm">
                    Per month
                  </span>
                  <span className="-mt-2 text-muted-foreground/80 text-sm">
                    + VAT if applicable
                  </span>
                </div>
              </>
            ) : (
              <div className="text-lg">
                Contact us at{' '}
                <a className="underline" href="mailto:hello@jkt48connect.dev">
                  hello@jkt48connect.dev
                </a>{' '}
                to get a custom quote.
              </div>
            )}
          </div>
        </div>

        <div className="col flex-1 shrink-0 justify-center gap-8">
          <div className="col gap-4">
            <SectionHeader
              description="Pay only for what you use. Choose your API call volume - everything else is unlimited. Access real-time JKT48 member data, theater schedules, live streams, and events with no surprises, no hidden fees."
              title="Simple, transparent pricing"
            />
          </div>

          <ul className="col gap-2">
            {features.map((feature) => (
              <li className="row items-start gap-2 text-sm" key={feature}>
                <CheckIcon className="mt-0.5 size-4 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <GetStartedButton className="w-fit" />

          <p className="row items-center gap-2 text-muted-foreground text-sm">
            <ServerIcon className="size-4 shrink-0" />
             New to JKT48Connect?{' '}
            <Link
              className="text-primary hover:underline"
              href="/docs/self-hosting/self-hosting"
            >
              Start with our free tier
            </Link>{' '}
            no credit card required.
          </p>
        </div>
      </div>
    </Section>
  );
}
