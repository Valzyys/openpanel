import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';
import { FeatureCard } from '@/components/feature-card';
import { NotificationsIllustration } from '@/components/illustrations/notifications';
import { ProductAnalyticsIllustration } from '@/components/illustrations/product-analytics';
import { RetentionIllustration } from '@/components/illustrations/retention';
import { SessionReplayIllustration } from '@/components/illustrations/session-replay';
import { WebAnalyticsIllustration } from '@/components/illustrations/web-analytics';
import { Section, SectionHeader } from '@/components/section';

function wrap(child: React.ReactNode) {
  return <div className="h-48 overflow-hidden">{child}</div>;
}

const mediumFeatures = [
  {
    title: 'Theater Schedule',
    description:
      'Access real-time theater schedules and setlists. Know which team is performing, who the senbatsu members are, and when shows go live.',
    illustration: wrap(<RetentionIllustration />),
    link: { href: '/docs/theater', children: 'View theater API' },
  },
  {
    title: 'Live Stream Tracking',
    description:
      'Monitor IDN Live and Showroom streams in real-time. Get notified when your oshi goes live and track viewer counts as they happen.',
    illustration: wrap(<SessionReplayIllustration />),
    link: { href: '/docs/live', children: 'See live stream API' },
  },
  {
    title: 'Event Notifications',
    description:
      'Stay updated on handshake events, off-air shows, and special appearances. Never miss a moment with real-time event alerts.',
    illustration: wrap(<NotificationsIllustration />),
    link: { href: '/docs/events', children: 'Set up notifications' },
  },
];

export function AnalyticsInsights() {
  return (
    <Section className="container">
      <SectionHeader
        className="mb-16"
        description="From member profiles to live stream data — every JKT48 data point in one API. No scraping, no data gaps, no guesswork."
        label="FEATURES & ENDPOINTS"
        title="Everything you need to build JKT48 apps"
      />
      <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <FeatureCard
          className="px-0 **:data-content:px-6"
          description="Access complete JKT48 member data — profiles, generations, social links, and birthday info — all through a single unified REST API endpoint."
          illustration={<WebAnalyticsIllustration />}
          title="Member Data API"
        />
        <FeatureCard
          className="px-0 **:data-content:px-6"
          description="Go beyond basic data. Track news, announcements, and custom events. Understand the full picture of JKT48 activity across all platforms."
          illustration={<ProductAnalyticsIllustration />}
          title="News & Announcements"
        />
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {mediumFeatures.map((feature) => (
          <FeatureCard
            className="px-0 pt-0 **:data-content:px-6"
            description={feature.description}
            illustration={feature.illustration}
            key={feature.title}
            link={feature.link}
            title={feature.title}
          />
        ))}
      </div>
      <p className="mt-8 text-center">
        <Link
          className="inline-flex items-center gap-1 text-muted-foreground text-sm transition-colors hover:text-foreground"
          href="/docs"
        >
          Explore all endpoints
          <ChevronRightIcon className="size-3.5" />
        </Link>
      </p>
    </Section>
  );
}
