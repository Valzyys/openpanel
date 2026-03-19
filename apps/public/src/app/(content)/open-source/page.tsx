import { CtaBanner } from '@/app/(home)/_sections/cta-banner';
import { HeroContainer } from '@/app/(home)/_sections/hero';
import { FaqItem, Faqs } from '@/components/faq';
import { FeatureCard } from '@/components/feature-card';
import { Section, SectionHeader } from '@/components/section';
import { Button } from '@/components/ui/button';
import { url } from '@/lib/layout.shared';
import { getOgImageUrl, getPageMetadata } from '@/lib/metadata';
import {
  BarChartIcon,
  CheckIcon,
  CodeIcon,
  GlobeIcon,
  HeartHandshakeIcon,
  KeyRoundIcon,
  LinkIcon,
  MailIcon,
  MessageSquareIcon,
  SparklesIcon,
  UsersIcon,
  ZapIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = getPageMetadata({
  title: 'Free API Access for Fan Projects | JKT48Connect Developer Program',
  description:
    'Get free JKT48Connect API access for fan projects, Discord bots, and community tools. Apply to our developer program and start building today.',
  url: url('/developer-program'),
  image: getOgImageUrl('/developer-program'),
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Free API Access for Fan Projects | JKT48Connect Developer Program',
  description:
    'Get free JKT48Connect API access for fan projects, Discord bots, and community tools.',
  url: url('/developer-program'),
  publisher: {
    '@type': 'Organization',
    name: 'JKT48Connect',
    logo: {
      '@type': 'ImageObject',
      url: url('/logo.png'),
    },
  },
  mainEntity: {
    '@type': 'Offer',
    name: 'Free API Access for Fan Projects',
    description:
      'Free JKT48Connect API access for fan projects and community tools',
    price: '0',
    priceCurrency: 'IDR',
  },
};

export default function OpenSourcePage() {
  return (
    <div>
      <Script
        id="open-source-schema"
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
                Free API Access for
                <br />
                Fan Projects & Community Tools
              </>
            }
            description="Building a JKT48 fansite, Discord bot, birthday tracker, or community app? Apply to the JKT48Connect Developer Program and get free API access to power your project."
          />
          <div className="col gap-4 justify-center items-center mt-8">
            <Button size="lg" asChild>
              <Link href="mailto:dev@jkt48connect.my.id">
                Apply for Free Access
                <MailIcon className="size-4" />
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground">
              Up to 50.000 API calls/month • No credit card required
            </p>
          </div>
        </div>
      </HeroContainer>

      <div className="container">
        <div className="col gap-16">
          {/* What You Get Section */}
          <Section className="my-0">
            <SectionHeader
              title="What you get"
              description="Everything you need to build a great JKT48 fan project — for free."
            />
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <FeatureCard
                title="50.000 API Calls/Month"
                description="More than enough for most fan projects and community tools. Access member profiles, theater schedules, live streams, and event data without worrying about limits."
                icon={BarChartIcon}
              />
              <FeatureCard
                title="Full Endpoint Access"
                description="Same complete API access as paid plans — member profiles, generations, theater schedules, IDN Live and Showroom tracking, and event notifications."
                icon={ZapIcon}
              />
              <FeatureCard
                title="TypeScript SDK Included"
                description="Use our official TypeScript SDK to integrate JKT48Connect into your project faster, with full type safety and documented responses."
                icon={CodeIcon}
              />
              <FeatureCard
                title="Developer Support"
                description="Dedicated support for program members. Get help with integration, endpoint questions, and data issues directly from our team."
                icon={MessageSquareIcon}
              />
            </div>
          </Section>

          {/* Why We Do This Section */}
          <Section className="my-0">
            <SectionHeader
              title="Why we do this"
              description="JKT48Connect exists because of the JKT48 fan community. We want to give back to the people who make it thrive."
            />
            <div className="col gap-6 mt-8">
              <p className="text-muted-foreground">
                We built JKT48Connect because fan developers shouldn't have to
                waste hours scraping, parsing HTML, and maintaining brittle
                scripts just to show who's performing tonight. The JKT48
                community deserves reliable, production-grade tools — and that
                starts with giving fan projects access to the data they need.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <FeatureCard
                  title="Built for Fans"
                  description="JKT48Connect was built by fans, for fans. We understand what fan projects need."
                  icon={HeartHandshakeIcon}
                />
                <FeatureCard
                  title="No Barriers"
                  description="Reliable JKT48 data shouldn't be locked behind expensive subscriptions for community projects."
                  icon={KeyRoundIcon}
                />
                <FeatureCard
                  title="Community First"
                  description="We're giving back to the community that makes JKT48 fandom vibrant and creative."
                  icon={SparklesIcon}
                />
              </div>
            </div>
          </Section>

          {/* What We Ask In Return Section */}
          <Section className="my-0">
            <SectionHeader
              title="What we ask in return"
              description="We keep it simple. Just a small way to help more developers discover JKT48Connect."
            />
            <div className="row gap-6 mt-8">
              <div className="col gap-6">
                <FeatureCard
                  title="Credit JKT48Connect"
                  description="A simple mention on your project's website, README, or about page helps other developers discover JKT48Connect."
                  icon={LinkIcon}
                >
                  <p className="text-sm text-muted-foreground mt-2">
                    Example: "Powered by{' '}
                    <Link
                      href="https://jkt48connect.my.id"
                      className="text-primary hover:underline"
                    >
                      JKT48Connect
                    </Link>
                    "
                  </p>
                </FeatureCard>
                <FeatureCard
                  title="Keep It Non-Commercial"
                  description="Free access is for non-commercial fan projects and community tools. Commercial projects should use a paid plan."
                  icon={GlobeIcon}
                />
                <p className="text-muted-foreground">
                  That's it. No complicated requirements, no hidden conditions.
                  We just want to help fan projects succeed and the JKT48
                  community grow.
                </p>
              </div>
            </div>
          </Section>

          {/* Eligibility Criteria Section */}
          <Section className="my-0">
            <SectionHeader
              title="Eligibility criteria"
              description="We want to support genuine fan projects that contribute to the JKT48 community."
            />
            <div className="col gap-4 mt-8">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex gap-3">
                  <CheckIcon className="size-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">JKT48-Related Project</h3>
                    <p className="text-sm text-muted-foreground">
                      Your project must be directly related to JKT48 — fansites,
                      Discord bots, birthday trackers, schedule apps, etc.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckIcon className="size-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Non-Commercial Purpose</h3>
                    <p className="text-sm text-muted-foreground">
                      The project must be non-commercial. Fan tools and community
                      apps built without monetization intent qualify.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckIcon className="size-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Active or In Development</h3>
                    <p className="text-sm text-muted-foreground">
                      Your project should be actively developed or have a clear
                      plan to launch. We support projects at any stage.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckIcon className="size-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Community Benefit</h3>
                    <p className="text-sm text-muted-foreground">
                      The project should benefit the JKT48 fan community —
                      making data more accessible, shows easier to follow, or
                      members easier to discover.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* How to Apply Section */}
          <Section className="my-0">
            <SectionHeader
              title="How to apply"
              description="Getting started is simple. Just send us an email with a few details about your project."
            />
            <div className="col gap-6 mt-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="col gap-3">
                  <div className="size-10 rounded-full bg-primary/10 center-center text-primary font-semibold">
                    1
                  </div>
                  <h3 className="font-semibold">Send us an email</h3>
                  <p className="text-sm text-muted-foreground">
                    Reach out to{' '}
                    <Link
                      href="mailto:priority@jkt48connect.com"
                      className="text-primary hover:underline"
                    >
                      priority@jkt48connect.com
                    </Link>{' '}
                    with your project details
                  </p>
                </div>
                <div className="col gap-3">
                  <div className="size-10 rounded-full bg-primary/10 center-center text-primary font-semibold">
                    2
                  </div>
                  <h3 className="font-semibold">Describe your project</h3>
                  <p className="text-sm text-muted-foreground">
                    Share what you're building, who it's for, and how you plan
                    to use the JKT48Connect API
                  </p>
                </div>
                <div className="col gap-3">
                  <div className="size-10 rounded-full bg-primary/10 center-center text-primary font-semibold">
                    3
                  </div>
                  <h3 className="font-semibold">We'll review & respond</h3>
                  <p className="text-sm text-muted-foreground">
                    We'll evaluate your project and get back to you within a few
                    business days with your API key
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <Button size="lg" asChild>
                  <Link href="mailto:priority@jkt48connect.com?subject=Developer Program Application">
                    Apply Now
                    <MailIcon className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Section>

          {/* FAQ Section */}
          <Section className="my-0">
            <SectionHeader
              title="Frequently asked questions"
              description="Everything you need to know about the JKT48Connect Developer Program."
            />
            <div className="mt-8">
              <Faqs>
                <FaqItem question="What kinds of projects qualify?">
                  Any non-commercial JKT48 fan project qualifies — fansites,
                  Discord bots, birthday reminder apps, theater schedule
                  trackers, member directories, live stream notifiers, and
                  similar community tools. If you're building something for the
                  JKT48 fan community without monetization intent, you're likely
                  eligible.
                </FaqItem>
                <FaqItem question="What happens if I exceed 50.000 API calls per month?">
                  We understand fan projects can grow quickly. If you
                  consistently exceed the free limit, we'll reach out to discuss
                  options. In most cases we can upgrade you to a paid plan at a
                  discounted rate, or work out a solution that fits your
                  project's scale.
                </FaqItem>
                <FaqItem question="Can I monetize my project while using the free tier?">
                  No — the free developer program is for non-commercial projects
                  only. If your project generates revenue (ads, subscriptions,
                  donations above cost), please use a paid plan. We review
                  projects periodically and may reach out if a project's
                  commercial scope changes.
                </FaqItem>
                <FaqItem question="How long does free access last?">
                  As long as your project remains eligible and active, your free
                  access continues. We review projects periodically, but we're
                  committed to supporting genuine fan projects long-term.
                </FaqItem>
                <FaqItem question="Do I need to have a finished project to apply?">
                  No — we welcome projects at any stage, including early
                  development. Just describe what you're planning to build and
                  how you'll use the API. We're happy to support fan projects
                  from the start.
                </FaqItem>
                <FaqItem question="What if my project is very small?">
                  We welcome projects of all sizes. Whether you're building a
                  small personal Discord bot or a larger public fansite, if
                  you're creating something for the JKT48 community, we'd love
                  to help.
                </FaqItem>
              </Faqs>
            </div>
          </Section>

          <CtaBanner
            title="Ready to build your JKT48 fan project?"
            description="Join the JKT48Connect Developer Program and get free API access to member data, theater schedules, live streams, and events. Apply today and start building."
            ctaText="Apply for Free Access"
            ctaLink="mailto:priority@jkt48connect.com?subject=Priority Program Application"
          />
        </div>
      </div>
    </div>
  );
}
