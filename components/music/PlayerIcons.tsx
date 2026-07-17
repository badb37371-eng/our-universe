"use client";

interface IconProps {
  className?: string;
}

export function PlayIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export function PauseIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <rect x="6" y="5" width="4" height="14" rx="1.5" />
      <rect x="14" y="5" width="4" height="14" rx="1.5" />
    </svg>
  );
}

export function PreviousIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M6 5h2v14H6zM18 6l-8 6 8 6z" />
    </svg>
  );
}

export function NextIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M16 5h2v14h-2zM6 6l8 6-8 6z" />
    </svg>
  );
}

export function CloseIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={className}
    >
      <path d="M6 6L18 18" />
      <path d="M18 6L6 18" />
    </svg>
  );
}