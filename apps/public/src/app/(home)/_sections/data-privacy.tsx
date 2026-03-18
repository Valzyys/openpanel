import { BoltIcon, GithubIcon, ServerIcon } from 'lucide-react';
import { FeatureCard } from '@/components/feature-card';
import { GetStartedButton } from '@/components/get-started-button';
import { DataOwnershipIllustration } from '@/components/illustrations/data-ownership';
import { PrivacyIllustration } from '@/components/illustrations/privacy';
import { Section, SectionHeader } from '@/components/section';

const secondaryFeatures = [
  {
    title: 'Open Source',
    description:
      'Full transparency. Audit the code, contribute, or fork it. Built in the open for the JKT48 developer community.',
    icon: GithubIcon,
  },
  {
    title: 'REST API & npm Package',
    description:
      'Access JKT48 data your way — via REST API from any platform or our npm package for Node.js.',
    icon: ServerIcon,
  },
  {
    title: 'Lightweight & Fast',
    description:
      'A high-performance API built for speed — real-time data with minimal latency.',
    icon: BoltIcon,
  },
];

export function DataPrivacy() {
  return (
    <Section className="container">
      <SectionHeader
        description="JKT48Connect gives you access to JKT48 data on your terms — open-source, reliable, and built for the community. Every part of the platform is designed to give developers full control while delivering fast, real-time data without unnecessary friction."
        title={
          <>
            Built for Developers,
            <br />
            Community & Fans
          </>
        }
      />
      <div className="mt-16 mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <FeatureCard
          description="Priority Access is available for official JKT48 fanbases and verified communities — with higher rate limits, priority queue access, and early access to new features."
          illustration={<PrivacyIllustration />}
          title="Priority Access"
          variant="large"
        />
        <FeatureCard
          description="Access complete JKT48 member data — profiles, generations, social links, and birthday info — all in one unified endpoint. Always in sync with the latest updates."
          illustration={<DataOwnershipIllustration />}
          title="Complete Member Data"
          variant="large"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {secondaryFeatures.map((feature) => (
          <FeatureCard
            description={feature.description}
            icon={feature.icon}
            key={feature.title}
            title={feature.title}
          />
        ))}
      </div>
      <div className="row mt-8 gap-4">
        <GetStartedButton />
      </div>
    </Section>
  );
}
