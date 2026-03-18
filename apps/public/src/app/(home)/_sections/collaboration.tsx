import { GetStartedButton } from '@/components/get-started-button';
import { Section, SectionHeader } from '@/components/section';
import {
  ChevronRightIcon,
  RadioIcon,
  UsersIcon,
  WebhookIcon,
} from 'lucide-react';
import Link from 'next/link';
import { CollaborationChart } from './collaboration-chart';

const features = [
  {
    title: 'Real-time Live Stream Data',
    description:
      'Monitor active streams from IDN Live and Showroom in real-time. Get viewer counts, stream status, and member info in a single endpoint.',
    icon: RadioIcon,
    slug: 'live-stream',
  },
  {
    title: 'Member & Fanbase Access',
    description:
      'Access complete member profiles, trainee lists, and generation data. Priority keys available for official fanbases with higher rate limits.',
    icon: UsersIcon,
    slug: 'members',
  },
  {
    title: 'Webhooks & Integrations',
    description:
      'Forward JKT48 events to your own systems or third-party tools. Connect JKT48Connect to Discord bots, your app, or any webhook endpoint.',
    icon: WebhookIcon,
    slug: 'integrations',
  },
];

export function Collaboration() {
  return (
    <Section className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <CollaborationChart />
        <div>
          <SectionHeader
            title="Everything you need to build JKT48 apps"
            description="Access live streams, member data, theater schedules, and events through a single unified API. JKT48Connect gives you the tools to build exactly what the community needs."
          />
          <GetStartedButton className="mt-6" />
          <div className="col gap-6 mt-16">
            {features.map((feature) => (
              <Link
                href={`/docs/${feature.slug}`}
                className="group relative col gap-2 pr-10 overflow-hidden"
                key={feature.title}
              >
                <h3 className="font-semibold">
                  <feature.icon className="size-6 inline-block mr-2 relative -top-0.5" />
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
                <ChevronRightIcon
                  className="absolute right-0 top-1/2 size-5 -translate-y-1/2 text-muted-foreground transition-transform duration-200 translate-x-full group-hover:translate-x-0"
                  aria-hidden
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
