'use client';

import NumberFlow from '@number-flow/react';
import { CheckIcon, ServerIcon, StarIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { GetStartedButton } from '@/components/get-started-button';
import { Section, SectionHeader } from '@/components/section';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const PRICING = [
  { calls: 1_000, label: '1K', price: 0, popular: false },
  { calls: 10_000, label: '10K', price: 15_000, popular: false },
  { calls: 50_000, label: '50K', price: 29_000, popular: false },
  { calls: 100_000, label: '100K', price: 49_000, popular: true },
  { calls: 250_000, label: '250K', price: 99_000, popular: false },
  { calls: 500_000, label: '500K', price: 179_000, popular: false },
  { calls: 1_000_000, label: '1M', price: 299_000, popular: false },
];

const features = [
  'Unlimited member profiles',
  'Unlimited theater schedules',
  'Unlimited live streaming data',
  'Unlimited events & setlists',
  'Unlimited news updates',
  'Real-time data sync',
];

function formatCallsLabel(calls: number): string {
  if (calls >= 1_000_000) return `${calls / 1_000_000}M calls`;
  if (calls >= 1_000) return `${calls / 1_000}K calls`;
  return `${calls} calls`;
}

export function Pricing() {
  const [selectedIndex, setSelectedIndex] = useState(3);
  const selected = selectedIndex >= 0 ? PRICING[selectedIndex] : null;

  return (
    <Section className="container">
      <div className="col md:row gap-16">
        <div className="col w-full min-w-sm gap-4 rounded-3xl border bg-linear-to-b from-card to-background p-6 md:w-1/3">
          <p className="text-muted-foreground text-sm">
            Choose your monthly API call volume
          </p>
          <div className="row flex-wrap gap-2">
            {PRICING.map((tier, index) => (
              <Button
                className={cn('relative h-8 rounded-full border px-4')}
                key={tier.calls}
                onClick={() => setSelectedIndex(index)}
                size="sm"
                variant={selectedIndex === index ? 'default' : 'outline'}
              >
                {tier.popular && <StarIcon className="size-3 mr-1" />}
                {tier.label}
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
            {selected !== null ? (
              <>
                {selected.price === 0 ? (
                  <>
                    <span className="mb-2 rounded-full bg-primary/10 px-2.5 py-0.5 font-medium text-primary text-xs">
                      Gratis selamanya
                    </span>
                    <div className="font-bold text-5xl">Gratis</div>
                    <div className="row w-full justify-between">
                      <span className="-mt-2 text-muted-foreground/80 text-sm">
                        {formatCallsLabel(selected.calls)} / bulan
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <span className="mb-2 rounded-full bg-primary/10 px-2.5 py-0.5 font-medium text-primary text-xs">
                      {formatCallsLabel(selected.calls)} / bulan
                    </span>
                    <div className="row items-end gap-1">
                      <span className="font-bold text-2xl">Rp</span>
                      <NumberFlow
                        className="font-bold text-5xl"
                        format={{
                          style: 'decimal',
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        }}
                        locales="id-ID"
                        value={selected.price}
                      />
                    </div>
                    <div className="row w-full justify-between">
                      <span className="-mt-2 text-muted-foreground/80 text-sm">
                        Per bulan
                      </span>
                      <span className="-mt-2 text-muted-foreground/80 text-sm">
                        ≈ ${(selected.price / 16000).toFixed(1)} USD
                      </span>
                    </div>
                  </>
                )}
              </>
            ) : (
              <div className="text-lg">
                Hubungi kami di{' '}
                <a className="underline" href="mailto:support@jkt48connect.com">
                  support@jkt48connect.com
                </a>{' '}
                untuk harga Enterprise.
              </div>
            )}
          </div>
        </div>

        <div className="col flex-1 shrink-0 justify-center gap-8">
          <div className="col gap-4">
            <SectionHeader
              description="Akses semua data JKT48 dengan harga yang transparan. Bayar sesuai volume API yang kamu butuhkan — semua fitur sudah termasuk. Tanpa biaya tersembunyi."
              title="Harga sederhana untuk data JKT48"
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
            Butuh bantuan integrasi?{' '}
            <Link
              className="text-primary hover:underline"
              href="/docs/quickstart"
            >
              Lihat quickstart guide
            </Link>
          </p>
        </div>
      </div>
    </Section>
  );
}
