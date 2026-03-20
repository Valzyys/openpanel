'use client';

import { InfiniteMovingCards } from '@/components/infinite-moving-cards';
import { Section, SectionHeader } from '@/components/section';
import { TwitterCard } from '@/components/twitter-card';
import { useEffect, useMemo, useRef } from 'react';

const testimonials = [
  {
    verified: true,
    avatarUrl: '/twitter-steven.jpg',
    name: 'Rizky Pratama',
    handle: 'rizkypratama_dev',
    content: [
      'Baru integrasi @JKT48Connect ke fansite aku dan literally took less than 10 menit buat dapetin data member + jadwal teater sekaligus.',
      'No more scraping yang sering break. Ini yang selama ini dicari! 🔥',
    ],
    replies: 12,
    retweets: 34,
    likes: 287,
  },
  {
    verified: false,
    avatarUrl: '/twitter-pontus.jpg',
    name: 'Fadhil Hakim',
    handle: 'fadhildev48',
    content: [
      'JKT48Connect is a beast. Data member lengkap, live stream real-time, theater schedule — all in one API.',
      'Dulu habis waktu berhari-hari bikin scraper. Sekarang cukup satu npm install.',
    ],
    replies: 8,
    retweets: 21,
    likes: 194,
  },
  {
    verified: true,
    avatarUrl: '/twitter-piotr.jpg',
    name: 'Alicia Ramadhani',
    handle: 'alicia_wota',
    content: [
      'Sebagai fans yang juga developer, JKT48Connect benar-benar game changer.',
      'Birthday API-nya keren banget — bisa langsung bikin reminder ulang tahun oshi tanpa hitung manual. Dokumentasinya juga sangat jelas ✨',
    ],
    replies: 6,
    retweets: 18,
    likes: 176,
  },
  {
    verified: false,
    avatarUrl: '/twitter-greg.png',
    name: 'Bintang Nugroho',
    handle: 'bintang_codes',
    content: [
      'Discord bot JKT48 aku sekarang pakai JKT48Connect dan hasilnya jauh lebih stable.',
      'Webhook-nya works perfectly, langsung notif ke server kalau member lagi live di IDN.',
    ],
    replies: 5,
    retweets: 14,
    likes: 132,
  },
  {
    verified: true,
    avatarUrl: '/twitter-jacob.jpg',
    name: 'Kavya Indraswari',
    handle: 'kavya_jkt48fan',
    content: [
      '🤯 Baru deploy fansite pakai @JKT48Connect dan dalam 1 jam udah ada data member dari semua generasi, jadwal show minggu ini, dan live stream tracking.',
      'TypeScript SDK-nya autocomplete semua endpoint. Ini yang namanya developer experience! #jkt48 #webdev',
    ],
    replies: 9,
    retweets: 27,
    likes: 241,
  },
  {
    verified: false,
    avatarUrl: '/twitter-lee.jpg',
    name: 'Dimas Aryanto',
    handle: 'dimas_wr',
    content: [
      'Udah 3 bulan pakai JKT48Connect buat app tracker oshi aku.',
      'Belum pernah sekalipun data-nya salah atau API-nya down pas lagi dibutuhkan.',
      'Worth every rupiah. 🙌',
    ],
    replies: 4,
    retweets: 11,
    likes: 98,
  },
  {
    verified: true,
    avatarUrl: '/twitter-thomas.jpg',
    name: 'Naufal Keanu',
    handle: 'naufalkeanu',
    content: [
      'Fansite JKT48 tim kami sekarang fully powered by @JKT48Connect.',
      'Dari yang taunya scraping manual, sekarang data theater, live stream, dan news semua real-time.',
      'Kalau kamu mau bikin sesuatu tentang JKT48, ini wajib dipakai 🚀',
    ],
    replies: 7,
    retweets: 19,
    likes: 163,
  },
];

export function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>(0);
  const isPausedRef = useRef(false);

  const duplicatedTestimonials = useMemo(
    () => [...testimonials, ...testimonials],
    [],
  );

  useEffect(() => {
    const scrollerElement = scrollerRef.current;
    if (!scrollerElement) return;

    const handleScroll = () => {
      const scrollWidth = scrollerElement.scrollWidth;
      const clientWidth = scrollerElement.clientWidth;
      const scrollLeft = scrollerElement.scrollLeft;

      if (scrollLeft + clientWidth >= scrollWidth / 2) {
        scrollerElement.scrollLeft = scrollLeft - scrollWidth / 2;
      }
    };

    const autoScroll = () => {
      if (!isPausedRef.current && scrollerElement) {
        scrollerElement.scrollLeft += 0.5;
        animationFrameRef.current = requestAnimationFrame(autoScroll);
      }
    };

    scrollerElement.addEventListener('scroll', handleScroll);
    animationFrameRef.current = requestAnimationFrame(autoScroll);

    const handleMouseEnter = () => {
      isPausedRef.current = true;
    };
    const handleMouseLeave = () => {
      isPausedRef.current = false;
      animationFrameRef.current = requestAnimationFrame(autoScroll);
    };

    scrollerElement.addEventListener('mouseenter', handleMouseEnter);
    scrollerElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      scrollerElement.removeEventListener('scroll', handleScroll);
      scrollerElement.removeEventListener('mouseenter', handleMouseEnter);
      scrollerElement.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <Section className="overflow-hidden">
      <div className="container mb-16">
        <SectionHeader
          title="Loved by JKT48 developers everywhere"
          description="From personal fansites to large fan communities, JKT48Connect helps developers build better JKT48 apps — without the scraping headache."
        />
      </div>
      <div className="relative -mx-4 px-4">
        <div
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, hsl(var(--background)), transparent)',
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(to left, hsl(var(--background)), transparent)',
          }}
        />

        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          pauseOnHover
          speed="slow"
          className="gap-8"
          renderItem={(item) => (
            <TwitterCard
              name={item.name}
              handle={item.handle}
              content={item.content}
              avatarUrl={item.avatarUrl}
            />
          )}
        />
      </div>
    </Section>
  );
}
