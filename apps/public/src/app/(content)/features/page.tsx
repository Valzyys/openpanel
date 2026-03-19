import type { LucideIcon } from 'lucide-react';
import {
  BellIcon,
  ConeIcon,
  DollarSignIcon,
  GlobeIcon,
  MonitorIcon,
  MousePointerClickIcon,
  PieChartIcon,
  RadioIcon,
  RefreshCwIcon,
  ShareIcon,
  UserIcon,
  WorkflowIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import { FeatureCardLink } from './_components/feature-card';
import { FeatureHero } from '@/app/(content)/features/[slug]/_components/feature-hero';
import { CtaBanner } from '@/app/(home)/_sections/cta-banner';
import { Section, SectionHeader } from '@/components/section';
import { WindowImage } from '@/components/window-image';
import { url } from '@/lib/layout.shared';
import { getOgImageUrl, getPageMetadata } from '@/lib/metadata';
import { featureSource } from '@/lib/source';

const featureIcons: Record<string, LucideIcon> = {
  'all-live': RadioIcon,
  'data-visualization': PieChartIcon,
  'event-tracking': MousePointerClickIcon,
  funnels: ConeIcon,
  'identify-users': UserIcon,
  integrations: WorkflowIcon,
  notifications: BellIcon,
  retention: RefreshCwIcon,
  'revenue-tracking': DollarSignIcon,
  'session-tracking': MonitorIcon,
  'share-and-collaborate': ShareIcon,
  'web-analytics': GlobeIcon,
};

export const metadata: Metadata = getPageMetadata({
  title: 'JKT48Connect API Features',
  description:
    'Explore JKT48Connect features: member profiles, theater schedules, live stream tracking, event notifications, and more. Everything you need to build JKT48 apps.',
  url: url('/features'),
  image: getOgImageUrl('/features'),
});

const heroData = {
  heading: 'JKT48Connect API Features',
  subheading:
    'Everything you need to build JKT48 apps — member data, real-time live streams, theater schedules, and event notifications. One API, zero scraping.',
  badges: ['REST API', 'Real-time data', 'Free tier available'],
};

export default async function FeaturesIndexPage() {
  const features = featureSource;

  return (
    <div>
      <FeatureHero hero={heroData} />
      <Section className="container">
        <SectionHeader
          description="Browse all available endpoints and capabilities. Each feature is designed to give developers clean, structured access to JKT48 data."
          title="All features"
          variant="sm"
        />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 2xl:grid-cols-3">
          {features.map((feature) => (
            <FeatureCardLink
              description={feature.hero.subheading}
              icon={featureIcons[feature.slug]}
              key={feature.slug}
              title={feature.hero.heading}
              url={feature.url}
            />
          ))}
        </div>
      </Section>
      <CtaBanner
        ctaLink="/docs"
        ctaText="Get Started Free"
        description="Join developers and fan projects using JKT48Connect to power their apps."
        title="Ready to start building?"
      />
    </div>
  );
}
