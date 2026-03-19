import { CtaBanner } from '@/app/(home)/_sections/cta-banner';
import { HeroContainer } from '@/app/(home)/_sections/hero';
import { FeatureCard } from '@/components/feature-card';
import { Section, SectionHeader } from '@/components/section';
import { Button } from '@/components/ui/button';
import { url } from '@/lib/layout.shared';
import { getOgImageUrl, getPageMetadata } from '@/lib/metadata';
import { SupporterPerks } from 'components/sections/supporter-perks';
import {
  ClockIcon,
  CodeIcon,
  InfinityIcon,
  KeyRoundIcon,
  MessageSquareIcon,
  RadioIcon,
  RocketIcon,
  SparklesIcon,
  StarIcon,
  ZapIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = getPageMetadata({
  title: 'Upgrade to JKT48Connect Pro',
  description:
    'Upgrade to JKT48Connect Pro and get full API access, real-time live stream tracking, webhooks, priority support, and more. Starting at Rp 49.000/month.',
  url: url('/supporter'),
  image: getOgImageUrl('/supporter'),
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Upgrade to JKT48Connect Pro',
  description:
    'Upgrade to JKT48Connect Pro and get full API access, real-time live stream tracking, webhooks, priority support, and more.',
  url: url('/supporter'),
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
        id="supporter-schema"
        strategy="beforeInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroContainer>
        <div className="col center-center flex-1">
          <SectionHeader
            as="h1"
            align="center"
            className="flex-1"
            title={
              <>
                Upgrade to Pro and
                <br />
                unlock the full JKT48Connect API
              </>
            }
            description="Get 100.000 API calls per month, real-time live stream tracking, webhook notifications, and priority support. Everything you need to build production-grade JKT48 apps."
          />
          <div className="col gap-4 justify-center items-center mt-8">
            <Button size="lg" asChild>
              <Link href="/pricing">
                Upgrade to Pro
                <SparklesIcon className="size-4" />
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground">
              Mulai dari Rp 49.000/bulan (≈ $3) • Batalkan kapan saja
            </p>
          </div>
        </div>
      </HeroContainer>

      <div className="container">
        {/* Main Content with Sidebar */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-8 mb-16">
          {/* Main Content */}
          <div className="col gap-16">
            {/* Why Upgrade Section */}
            <Section className="my-0">
              <SectionHeader
                title="Why upgrade to Pro?"
                description="The free tier is great for getting started, but Pro gives you the full power of JKT48Connect — higher limits, real-time data, and production-ready features for apps that need reliability at scale."
              />
              <div className="col gap-6 mt-8">
                <p className="text-muted-foreground">
                  When you upgrade to Pro, you're getting:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <FeatureCard
                    title="100x More API Calls"
                    description="100.000 API calls per month vs 1.000 on the free tier — room for real apps with real traffic"
                    icon={ZapIcon}
                  />
                  <FeatureCard
                    title="Real-time Live Streams"
                    description="Sub-second latency for IDN Live and Showroom viewer counts and stream status updates"
                    icon={RadioIcon}
                  />
                  <FeatureCard
                    title="Webhook Notifications"
                    description="Get POST requests to your endpoint the moment a member goes live or an event is announced"
                    icon={ZapIcon}
                  />
                </div>
                <p className="text-muted-foreground">
                  Your subscription directly funds ongoing data maintenance,
                  new endpoint development, and the infrastructure that keeps
                  JKT48Connect fast and reliable for every developer using it.
                </p>
              </div>
            </Section>

            {/* What You Get Section */}
            <Section className="my-0">
              <SectionHeader
                title="What you get on Pro"
                description="Full access to the complete JKT48Connect API with production-ready limits and features."
              />
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <FeatureCard
                  title="Full API Access"
                  description="Unlimited access to all endpoints — members, generations, theater schedules, live streams, events, and announcements."
                  icon={KeyRoundIcon}
                >
                  <Link
                    href="/docs/endpoints"
                    className="text-sm text-primary hover:underline mt-2"
                  >
                    View all endpoints →
                  </Link>
                </FeatureCard>
                <FeatureCard
                  title="Priority Support"
                  description="Get faster responses via Discord and email. Integration questions, data issues, and bug reports are handled first for Pro members."
                  icon={MessageSquareIcon}
                />
                <FeatureCard
                  title="Endpoint Requests"
                  description="Your feature and endpoint requests get prioritized in our development roadmap. Shape what gets built next."
                  icon={SparklesIcon}
                />
                <FeatureCard
                  title="Pro Discord Role"
                  description="Exclusive badge and recognition in the JKT48Connect developer community."
                  icon={StarIcon}
                />
              </div>
            </Section>

            {/* Impact Section */}
            <Section className="my-0">
              <SectionHeader
                title="What your subscription enables"
                description="Every subscription goes directly into keeping JKT48Connect accurate, fast, and growing. Here's what it funds:"
              />
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <FeatureCard
                  title="TypeScript SDK"
                  description="Ongoing development and maintenance of the official SDK, with new endpoint support added continuously."
                  icon={CodeIcon}
                />
                <FeatureCard
                  title="24/7 Data Freshness"
                  description="Continuous monitoring of JKT48 data sources to keep member profiles, schedules, and live stream data accurate."
                  icon={ClockIcon}
                />
                <FeatureCard
                  title="New Endpoints"
                  description="Expanding coverage — new data types, more member details, and deeper integration with JKT48 platforms."
                  icon={InfinityIcon}
                />
                <FeatureCard
                  title="Infrastructure & Uptime"
                  description="Servers, CDN, and monitoring that keep the API fast and available with 99.9% uptime for production apps."
                  icon={RocketIcon}
                />
              </div>
            </Section>
          </div>

          {/* Sidebar */}
          <aside className="lg:block hidden">
            <SupporterPerks />
          </aside>
        </div>

        {/* Mobile Perks */}
        <div className="lg:hidden mb-16">
          <SupporterPerks />
        </div>

        <CtaBanner
          title="Ready to upgrade to JKT48Connect Pro?"
          description="Get 100.000 API calls per month, real-time live stream tracking, webhook support, and priority access. Starting at Rp 49.000/month — cancel anytime."
          ctaText="Upgrade to Pro"
          ctaLink="/pricing"
        />
      </div>

      <div className="lg:-mx-20 xl:-mx-40 not-prose mt-16">
        {/* <Testimonials />
        <Faq /> */}
      </div>
    </div>
  );
}
