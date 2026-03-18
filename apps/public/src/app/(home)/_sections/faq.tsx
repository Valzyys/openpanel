import { FaqItem, Faqs } from '@/components/faq';
import { GetStartedButton } from '@/components/get-started-button';
import { Section, SectionHeader } from '@/components/section';

const faqData = [
  {
    question: 'What is JKT48Connect?',
    answer:
      'JKT48Connect is a comprehensive API service built for developers and JKT48 fans. It provides real-time access to JKT48 data — including member profiles, theater schedules, live streams, and the latest news — through a REST API and npm package.',
  },
  {
    question: 'Is JKT48Connect free to use?',
    answer:
      'JKT48Connect offers multiple access tiers. You can get started with a standard API key for development purposes. For official fanbases and larger communities, Priority Access is available with higher rate limits and exclusive features.\n\nCheck our Pricing page for more details.',
  },
  {
    question: 'How do I get an API key?',
    answer:
      'You can sign up and get your API key through our documentation page. Once you have your key, include it in every request header:\n\n`x-api-key: YOUR_API_KEY`\n\nSee the Authentication guide in our docs for the full setup steps.',
  },
  {
    question: 'What data can I access through JKT48Connect?',
    answer:
      'JKT48Connect provides a wide range of data, including:\n- Full member & trainee profiles\n- Theater schedules and setlists\n- Real-time live stream data from IDN Live & Showroom\n- Latest JKT48 news and announcements\n- Off-air events and handshake schedules\n- Member birthday information',
  },
  {
    question: 'Is there an npm package for Node.js?',
    answer:
      'Yes! We provide the `@jkt48/core` package which you can install with:\n\n`npm install @jkt48/core`\n\nThe package has full TypeScript support and is compatible with React, Vue, Next.js, and other frameworks. It also includes built-in error handling and automatic request caching.',
  },
  {
    question: 'Can I use it to build a Discord bot?',
    answer:
      'Absolutely! JKT48Connect is a great fit for building JKT48 Discord bots. Our npm package is promise-based and lightweight, making it easy to integrate with Discord libraries like discord.js.\n\nMany developers in the community have already built live notification bots, theater schedule bots, and more using JKT48Connect.',
  },
  {
    question: 'What is a Priority Key and who can get one?',
    answer:
      'A Priority Key is an elevated access level granted to official JKT48 fanbases and verified communities. With a Priority Key, you get higher rate limits, priority queue access, and early access to new features.\n\nTo apply for Priority Access, your fanbase or organization will need to go through a verification process with valid supporting documents.',
  },
  {
    question: 'Is JKT48Connect an official JKT48 product?',
    answer:
      'JKT48Connect is a fan-made project built by fans, for fans — it is not an official product of JKT48 or its management. Data is aggregated from publicly available official JKT48 sources.\n\nJKT48Connect is developed and maintained by a community of JKT48 fan developers.',
  },
  {
    question: 'What platforms are supported?',
    answer:
      'JKT48Connect supports any platform capable of making HTTP requests. The REST API can be accessed from Node.js, Python, React, Vue, Next.js, mobile apps, and more.\n\nOur npm package is specifically optimized for the Node.js ecosystem with full TypeScript support.',
  },
  {
    question: 'How do I report a bug or contribute to the project?',
    answer:
      'JKT48Connect is an open-source project supported by the community. You can report bugs or request new features through GitHub Issues.\n\nPull request contributions are very welcome! Check our GitHub repository for the contribution guide.',
  },
  {
    question: 'Where can I get help if I run into issues?',
    answer:
      'You can get help through:\n- Official documentation at docs.jkt48connect.com\n- GitHub Issues for bug reports\n- Our Discord community\n\nOur team and the developer community are ready to help you integrate JKT48Connect into your project.',
  },
];

export function Faq() {
  return (
    <Section className="container">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="col gap-8">
          <SectionHeader
            description="Some of the most common questions we get asked about JKT48Connect."
            title="FAQ"
          />
          <GetStartedButton className="w-fit max-md:hidden" />
        </div>
        <Faqs>
          {faqData.map((faq) => (
            <FaqItem key={faq.question} question={faq.question}>
              {faq.answer}
            </FaqItem>
          ))}
        </Faqs>
      </div>
    </Section>
  );
}
