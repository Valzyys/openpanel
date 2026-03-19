import { CtaBanner } from '@/app/(home)/_sections/cta-banner';
import { Faq } from '@/app/(home)/_sections/faq';
import { HeroContainer } from '@/app/(home)/_sections/hero';
import { Pricing } from '@/app/(home)/_sections/pricing';
import { Testimonials } from '@/app/(home)/_sections/testimonials';
import { Section, SectionHeader } from '@/components/section';
import { Button } from '@/components/ui/button';
import { url } from '@/lib/layout.shared';
import { getOgImageUrl, getPageMetadata } from '@/lib/metadata';
import { formatEventsCount } from '@/lib/utils';
import { PRICING } from '@openpanel/payments/prices';
import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { CompareCard } from '../compare/_components/compare-card';

const title = 'JKT48Connect API Pricing';
const description =
  'Simple, transparent pricing for every scale. Choose a plan based on your API usage — no hidden fees, no complicated tiers, just clean access to JKT48 data.';

export const metadata: Metadata = getPageMetadata({
  title,
  description,
  url: url('/pricing'),
  image: getOgImageUrl('/pricing'),
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: title,
  description: description,
  url: url('/pricing'),
  publisher: {
    '@type': 'Organization',
    name: 'JKT48Connect',
    logo: {
      '@type': 'ImageObject',
      url: url('/logo.png'),
    },
  },
};

export default function SupporterPage() {
  return (
    <div>
      <Script
        id="pricing-schema"
        strategy="beforeInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroContainer className="-mb-32">
        <SectionHeader
          as="h1"
          align="center"
          className="flex-1"
          title={title}
          description={description}
        />
      </HeroContainer>
      <Pricing />
      <PricingTable />
      <ComparisonSection />
      <Testimonials />
      <Faq />
      <CtaBanner />
    </div>
  );
}

function PricingTable() {
  return (
    <Section className="container">
      <SectionHeader
        title="Full pricing breakdown"
        description="All plans include access to the complete JKT48Connect API — member profiles, theater schedules, live streams, and event notifications. Scale up as your app grows."
      />
      <div className="prose mt-8">
        <table className="bg-card">
          <thead>
            <tr>
              <th>Plan</th>
              <th className="text-right">Monthly price</th>
              <th className="text-right">Yearly price (2 months free)</th>
            </tr>
          </thead>
          <tbody>
            {PRICING.map((price) => (
              <tr key={price.price}>
                <td className="font-semibold">
                  {formatEventsCount(price.events)} API calls per month
                </td>
                <td className="text-right">
                  {Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  }).format(price.price)}
                </td>
                <td className="text-right">
                  {Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  }).format(price.price * 10)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

const JKT48_COMPARISONS = [
  {
    slug: 'jkt48-official-app',
    url: '/compare/jkt48-official-app',
    name: 'JKT48Connect vs JKT48 Official App',
    description: 'Compare structured API access against the official app\'s limited data exposure.',
  },
  {
    slug: 'manual-scraping',
    url: '/compare/manual-scraping',
    name: 'JKT48Connect vs Manual Scraping',
    description: 'See why a dedicated API beats fragile scraping scripts for production apps.',
  },
  {
    slug: 'idn-live-api',
    url: '/compare/idn-live-api',
    name: 'JKT48Connect vs IDN Live API',
    description: 'JKT48Connect aggregates IDN Live data alongside Showroom, theater, and member info.',
  },
  {
    slug: 'showroom-api',
    url: '/compare/showroom-api',
    name: 'JKT48Connect vs Showroom API',
    description: 'One unified endpoint vs managing multiple platform APIs separately.',
  },
  {
    slug: 'fansite-databases',
    url: '/compare/fansite-databases',
    name: 'JKT48Connect vs Fansite Databases',
    description: 'Structured, versioned REST API vs manually maintained community databases.',
  },
  {
    slug: 'jkt48-wiki',
    url: '/compare/jkt48-wiki',
    name: 'JKT48Connect vs JKT48 Wiki',
    description: 'Real-time programmatic access vs static wiki pages for member and event data.',
  },
];

function ComparisonSection() {
  return (
    <Section className="container">
      <SectionHeader
        title="How does JKT48Connect compare?"
        description={
          <>
            See how JKT48Connect stacks up against other ways to access JKT48
            data in our{' '}
            <Link
              href="/compare"
              className="underline hover:text-primary transition-colors"
            >
              full comparison of JKT48 data solutions
            </Link>
            .
          </>
        }
      />

      <Button asChild className="mt-8 self-start">
        <Link href="/compare">View all comparisons</Link>
      </Button>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        {JKT48_COMPARISONS.map((comparison) => (
          <CompareCard
            key={comparison.slug}
            url={comparison.url}
            name={comparison.name}
            description={comparison.description}
          />
        ))}
      </div>
    </Section>
  );
}
