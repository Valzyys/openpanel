import { CtaBanner } from '@/app/(home)/_sections/cta-banner';
import { Section, SectionHeader } from '@/components/section';
import { WindowImage } from '@/components/window-image';
import { url } from '@/lib/layout.shared';
import { getOgImageUrl, getPageMetadata } from '@/lib/metadata';
import { compareSource } from '@/lib/source';
import type { Metadata } from 'next';
import { CompareHero } from './[slug]/_components/compare-hero';
import { CompareCard } from './_components/compare-card';

const title = 'Compare JKT48Connect with alternatives';
const description =
  'See detailed feature and pricing comparisons between JKT48Connect and other ways to access JKT48 data. Honest breakdowns showing what each solution does well and where JKT48Connect provides better value.';

export const metadata: Metadata = getPageMetadata({
  title,
  description,
  url: url('/compare'),
  image: getOgImageUrl('/compare'),
});

const heroData = {
  heading: 'Compare JKT48Connect with any alternative',
  subheading:
    'See detailed feature and pricing comparisons between JKT48Connect and other JKT48 data solutions. Honest breakdowns showing what each approach does well and where JKT48Connect provides better value for developers and fan projects.',
  badges: ['Free tier available', 'No scraping needed', 'Production-ready API'],
};

export default async function CompareIndexPage() {
  const comparisons = compareSource.sort((a, b) =>
    a.competitor.name.localeCompare(b.competitor.name),
  );

  return (
    <div>
      <CompareHero hero={heroData} />
      <div className="container my-16">
        <WindowImage
          srcDark="/screenshots/overview-dark.png"
          srcLight="/screenshots/overview-light.png"
          alt="JKT48Connect API Overview"
          caption="The JKT48Connect API dashboard — monitor your usage, explore endpoints, and integrate member, theater, and live stream data into your app in minutes."
        />
      </div>
      <Section className="container">
        <SectionHeader
          title="All product comparisons"
          description="Browse our complete list of detailed comparisons. See how JKT48Connect stacks up against each alternative on features, reliability, and value."
          variant="sm"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {comparisons.map((comparison) => (
            <CompareCard
              key={comparison.slug}
              url={comparison.url}
              name={comparison.competitor.name}
              description={comparison.competitor.short_description}
            />
          ))}
        </div>
      </Section>
      <CtaBanner
        title="Ready to start building?"
        description="Join developers and fan projects using JKT48Connect to power their apps."
        ctaText="Get Started Free"
        ctaLink="/docs"
      />
    </div>
  );
}
