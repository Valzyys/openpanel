import React from 'react';

type IllustrationProps = {
  className?: string;
};

export function DataOwnershipIllustration({
  className = '',
}: IllustrationProps) {
  return (
    <div>
      {/* Main layout */}
      <div className="relative grid aspect-2/1 grid-cols-5 gap-3">
        {/* Left: member data card */}
        <div
          className="
            col-span-3 rounded-2xl border border-border bg-card/80
            p-3 sm:p-4 shadow-xl backdrop-blur
            transition-all duration-300
            group-hover:-translate-y-1 group-hover:-translate-x-0.5
          "
        >
          <div className="flex items-center justify-between text-xs text-foreground">
            <span>Member Data</span>
            <span className="flex items-center gap-1 rounded-full bg-card/80 px-2 py-0.5 text-[10px] text-blue-300">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              Live
            </span>
          </div>

          {/* Member data visual */}
          <div className="mt-3 space-y-2">
            <div className="flex gap-1.5">
              <div className="flex-1 rounded-xl bg-card/80 border border-border px-3 py-2">
                <p className="text-[10px] text-muted-foreground">Members</p>
                <p className="text-xs font-medium text-foreground">
                  64 Active
                </p>
              </div>
              <div className="flex-1 rounded-xl bg-card/80 border border-border px-3 py-2">
                <p className="text-[10px] text-muted-foreground">Generation</p>
                <p className="text-xs font-medium text-foreground">
                  Gen 3 – 14
                </p>
              </div>
            </div>

            {/* Profiles strip */}
            <div className="mt-1 rounded-xl border border-border bg-card/90 px-3 py-2 text-[11px] text-foreground">
              <div className="flex items-center justify-between">
                <span>Profiles synced</span>
                <span className="text-[10px] text-muted-foreground">
                  real-time
                </span>
              </div>
              <div className="mt-2 flex gap-1.5">
                <div className="h-1.5 flex-1 rounded-full bg-blue-400/70" />
                <div className="h-1.5 flex-1 rounded-full bg-blue-400/40" />
                <div className="h-1.5 flex-1 rounded-full bg-blue-400/20" />
              </div>
            </div>
            <div className="mt-1 rounded-xl border border-border bg-card/90 px-3 py-2 text-[11px] text-foreground">
              <div className="flex items-center justify-between">
                <span>API Response</span>
                <span className="text-[10px] text-muted-foreground">~42ms</span>
              </div>
              <div className="mt-2 flex gap-1.5">
                <div className="h-1.5 flex-1 rounded-full bg-blue-400/70" />
                <div className="h-1.5 flex-1 rounded-full bg-blue-400/40" />
                <div className="h-1.5 flex-1 rounded-full bg-blue-400/20" />
              </div>
            </div>
          </div>
        </div>

        {/* Right: features list */}
        <div
          className="
            col-span-2 rounded-2xl border border-border/80 bg-card/40
            p-3 text-[11px] text-muted-foreground
            transition-all duration-300
            group-hover:translate-y-1 group-hover:translate-x-0.5 group-hover:opacity-70
          "
        >
          <p className="text-xs text-muted-foreground mb-2">what's included</p>

          <ul className="space-y-1.5">
            <li className="flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-blue-400" />
              Profiles & socials
            </li>
            <li className="flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-blue-400" />
              Birthday info
            </li>
            <li className="flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-blue-400" />
              Trainee data
            </li>
            <li className="flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-blue-400" />
              Generation history
            </li>
            <li className="flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-blue-400" />
              Always up to date
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
