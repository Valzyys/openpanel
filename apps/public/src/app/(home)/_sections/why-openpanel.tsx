'use client';

import { QuoteIcon, StarIcon } from 'lucide-react';
import Image from 'next/image';
import Markdown from 'react-markdown';
import { FeatureCardBackground } from '@/components/feature-card';
import { Section, SectionHeader, SectionLabel } from '@/components/section';
import { cn } from '@/lib/utils';

const images = [
  {
    name: 'Cavallery',
    url: 'https://cavallery.id',
    logo: 'https://cavallery.id/wp-content/uploads/2025/05/cropped-cropped-LOGO-CAVA-150x150.png',
  },
  {
    name: 'FritzyForce',
    url: 'https://fritzyforce.com',
    logo: 'https://files.catbox.moe/i0qrcx.png',
  },
  {
    name: 'JKT48Connect APP',
    url: 'https://github.com/jkt48connect/jkt48connect-app',
    logo: 'https://files.catbox.moe/7x3l1y.png',
  },
  {
    name: 'Nayrakuen',
    url: 'https://nayrakuen.com',
    logo: 'https://files.catbox.moe/kmsod4.png',
  },
  {
    name: 'GISTREAM',
    url: 'https://gstreamlive.com',
    logo: 'https://files.catbox.moe/usad8o.png',
  },
  {
    name: 'comingsoon',
    url: '#',
    logo: 'https://files.catbox.moe/rguv3l.png',
  },
];

const quotes: {
  quote: string;
  author: string;
  site?: string;
}[] = [
  {
    quote:
      'API dari JKT48Connect ini **bener-bener ngebantu banget** buat yang mau bikin web atau aplikasi JKT48. Dokumentasinya jelas, gampang dipahami, dan langsung bisa dipakai tanpa ribet. Datanya juga cukup lengkap, mulai dari member sampai jadwal show, jadi nggak perlu cari manual lagi. Performanya cepat dan stabil, cocok buat berbagai kebutuhan project. Pokoknya **API recommended banget**, apalagi buat fans atau developer yang pengen bikin sesuatu tentang JKT48 🔥',
    author: 'Cavallery',
    site: 'https://cavallery.id',
  },
  {
    quote: `Sebelumnya scraping data JKT48 manual dan sering break kalau situsnya update. **Sejak pakai JKT48Connect, semua jadi jauh lebih mudah.** Endpoint-nya konsisten, response-nya bersih, dan tinggal langsung pakai di project tanpa drama. Data member, live stream, sampai jadwal teater semuanya ada. Ini yang selama ini dicari para developer JKT48! 🚀`,
    author: 'FritzyForce Developer',
    site: 'https://fritzyforce.com',
  },
  {
    quote: `JKT48Connect benar-benar mengubah cara kami membangun aplikasi JKT48. **Data yang tersedia sangat lengkap dan selalu up-to-date**, mulai dari profil member, generasi, hingga tracking live stream IDN dan Showroom secara real-time. TypeScript SDK-nya juga sangat membantu, type safety-nya solid dan autocomplete-nya bekerja sempurna.\n\nKami dulu harus maintain scraper sendiri yang sering rusak. Sekarang tinggal call API dan data langsung siap pakai. Waktu yang biasanya habis untuk maintenance scraper sekarang bisa fokus untuk fitur aplikasi. Sangat direkomendasikan untuk siapapun yang ingin membangun sesuatu di ekosistem JKT48.`,
    author: 'JKT48Connect App Team',
    site: 'https://github.com/jkt48connect/jkt48connect-app',
  },
];

export function WhyOpenPanel() {
  return (
    <Section className="container gap-16">
      <SectionHeader label="Trusted by official fanbase & developer" title="Who uses JKT48Connect?" />
      <div className="col overflow-hidden">
        <SectionLabel className="z-5 -mb-2 self-start bg-background pr-4 text-muted-foreground">
          USED BY
        </SectionLabel>
        <div className="-mx-4 grid grid-cols-3 border-y py-4 md:grid-cols-6">
          {images.map((image) => (
            <div className="border-r px-4 last:border-r-0" key={image.logo}>
              <a
                className={cn('group center-center relative aspect-square')}
                href={image.url}
                key={image.logo}
                rel="noopener noreferrer nofollow"
                target="_blank"
                title={image.name}
              >
                <FeatureCardBackground />
                <Image
                  alt={image.name}
                  className={cn('size-16 object-contain dark:invert')}
                  height={64}
                  src={image.logo}
                  width={64}
                />
              </a>
            </div>
          ))}
        </div>
        <div className="-mx-4 grid grid-cols-1 border-y py-4 md:grid-cols-2">
          {quotes.slice(0, 2).map((quote) => (
            <figure
              className="group px-4 py-4 md:odd:border-r"
              key={quote.author}
            >
              <div className="row items-center justify-between">
                <QuoteIcon className="mb-2 size-10 stroke-1 text-muted-foreground/50 transition-all group-hover:rotate-6 group-hover:text-foreground" />
                <div className="row gap-1">
                  <StarIcon className="size-4 fill-yellow-500 stroke-0 text-yellow-500" />
                  <StarIcon className="size-4 fill-yellow-500 stroke-0 text-yellow-500" />
                  <StarIcon className="size-4 fill-yellow-500 stroke-0 text-yellow-500" />
                  <StarIcon className="size-4 fill-yellow-500 stroke-0 text-yellow-500" />
                  <StarIcon className="size-4 fill-yellow-500 stroke-0 text-yellow-500" />
                </div>
              </div>
              <blockquote className="prose text-justify text-xl">
                <Markdown>{quote.quote}</Markdown>
              </blockquote>
              <figcaption className="row mt-4 justify-between text-muted-foreground text-sm">
                <span>{quote.author}</span>
                {quote.site && (
                  <cite className="not-italic">
                    <a
                      href={quote.site}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {quote.site.replace('https://', '')}
                    </a>
                  </cite>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </Section>
  );
}
