'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';

function formatDownloads(n: number) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) {
    const k = n / 1000;
    return `${k.toFixed(k >= 10 ? 0 : 1)}k`;
  }
  return n.toString();
}

async function getNpmDownloads(pkg: string): Promise<number | null> {
  try {
    const res = await fetch(
      `https://api.npmjs.org/downloads/point/2000-01-01:${new Date().toISOString().slice(0, 10)}/${pkg}`,
    );
    const data = await res.json();
    return data?.downloads ?? null;
  } catch {
    return null;
  }
}

export function GithubButton({ pkg = '@jkt48connect-corp/sdk' }: { pkg?: string }) {
  const [downloads, setDownloads] = useState<number>(1_200);

  useEffect(() => {
    getNpmDownloads(pkg).then((n) => {
      if (n !== null) setDownloads(n);
    });
  }, [pkg]);

  return (
    <Button variant="secondary" asChild>
      <Link
        href={`https://www.npmjs.com/package/${pkg}`}
        className="hidden md:flex"
      >
        {/* npm logo */}
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M0 0v24h24V0H0zm19.2 19.2H12v-9.6H7.2v9.6H4.8V4.8h14.4v14.4z" />
        </svg>
        {formatDownloads(downloads)}/week
      </Link>
    </Button>
  );
}
