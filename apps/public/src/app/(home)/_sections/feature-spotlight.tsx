import { FeatureCard } from '@/components/feature-card';
import { LiveStreamIllustration } from '@/components/illustrations/conversions';
import { GoogleSearchConsoleIllustration } from '@/components/illustrations/google-search-console';
import { MemberIllustration } from '@/components/illustrations/revenue';
import { Section, SectionHeader } from '@/components/section';

function wrap(child: React.ReactNode) {
  return <div className="h-48 overflow-hidden">{child}</div>;
}

const features = [
  {
    title: 'Member Tracking',
    description:
      'Track your favorite members activities, theater appearances, and live streaming schedules all in one dashboard.',
    illustration: wrap(<MemberIllustration />),
    link: {
      href: '/features/member-tracking',
      children: 'Track members',
    },
  },
  {
    title: 'Live Stream Monitoring',
    description:
      'Monitor IDN Live and Showroom streams in real-time. Get notified when your oshi goes live and never miss a moment.',
    illustration: wrap(<LiveStreamIllustration />),
    link: {
      href: '/features/live-streaming',
      children: 'Monitor streams',
    },
  },
  {
    title: 'Theater & Events',
    description:
      'Stay updated with Theater JKT48 schedules, setlists, and handshake events. Plan your visits and track ticket availability.',
    illustration: wrap(<GoogleSearchConsoleIllustration />),
    link: {
      href: '/features/theater-events',
      children: 'View schedule',
    },
  },
];

export function FeatureSpotlight() {
  return (
    <Section className="container">
      <SectionHeader
        className="mb-16"
        description="JKT48Connect goes beyond basic fan sites. Track members, monitor live streams, and stay updated with theater events — all in one platform built for fans."
        label="FAN TOOLS"
        title="Built for fans who follow and support"
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {features.map((feature) => (
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
    </Section>
  );
}
