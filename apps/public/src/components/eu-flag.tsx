export function EuFlag({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill="#CE1126" height="8" rx="0" width="24" y="0" />
      <rect fill="#FFFFFF" height="8" rx="0" width="24" y="8" />
      <rect fill="none" height="16" rx="1.5" stroke="#e5e7eb" strokeWidth="0.5" width="24" />
    </svg>
  );
}
