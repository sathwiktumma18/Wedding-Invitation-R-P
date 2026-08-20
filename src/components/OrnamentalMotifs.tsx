import type { SVGProps } from "react";

/**
 * A shared, restrained set of line-art motifs (kalash, mango leaves, lotus,
 * temple-arch) that recur throughout the site as dividers, corner marks and
 * card illustrations. Everything uses currentColor so it inherits the gold
 * accent wherever it's placed. This is the site's visual signature — used
 * sparingly and consistently rather than mixed with unrelated iconography.
 */

export function ArchDivider(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 240 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M0 20H90" stroke="currentColor" strokeWidth="1" />
      <path d="M150 20H240" stroke="currentColor" strokeWidth="1" />
      <path
        d="M100 20c0-11 9-18 20-18s20 7 20 18-9 18-20 18-20-7-20-18Z"
        stroke="currentColor"
        strokeWidth="1"
      />
      <circle cx="120" cy="20" r="3.5" fill="currentColor" />
      <path d="M92 20l6-3v6l-6-3Z" fill="currentColor" />
      <path d="M148 20l-6-3v6l6-3Z" fill="currentColor" />
    </svg>
  );
}

export function SimpleDivider(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 160 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M0 12H68" stroke="currentColor" strokeWidth="1" />
      <path d="M92 12H160" stroke="currentColor" strokeWidth="1" />
      <circle cx="80" cy="12" r="4" stroke="currentColor" strokeWidth="1" />
      <circle cx="80" cy="12" r="1.4" fill="currentColor" />
    </svg>
  );
}

export function KalashMotif(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 84" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* mango-leaf sprigs */}
      <path
        d="M32 6C26 14 20 16 14 14c4 6 12 8 18 4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M32 6C38 14 44 16 50 14c-4 6-12 8-18 4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M32 4C28 10 24 12 20 11c3 5 9 7 13 3"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M32 4C36 10 40 12 44 11c-3 5-9 7-13 3"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      {/* coconut top */}
      <circle cx="32" cy="20" r="7" stroke="currentColor" strokeWidth="1.2" />
      {/* neck */}
      <path d="M27 26h10l-2 8h-6l-2-8Z" stroke="currentColor" strokeWidth="1.2" />
      {/* pot body */}
      <path
        d="M18 40c0-2 6-4 14-4s14 2 14 4c0 16-6 30-14 34-8-4-14-18-14-34Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      {/* swastik-inspired auspicious mark, simplified to a neutral dot lattice to avoid literal symbol reproduction */}
      <circle cx="32" cy="52" r="1.4" fill="currentColor" />
      <circle cx="26" cy="58" r="1.2" fill="currentColor" />
      <circle cx="38" cy="58" r="1.2" fill="currentColor" />
      <circle cx="32" cy="64" r="1.2" fill="currentColor" />
      {/* base line */}
      <path d="M14 74h36" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function LotusMotif(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M40 38c0-14-8-22-8-22s8 2 8 14c0-12 8-14 8-14s-8 8-8 22Z" stroke="currentColor" strokeWidth="1" />
      <path d="M40 38c-6-10-16-14-16-14s10 0 16 10c-2-11 4-19 4-19s6 8 4 19c6-10 16-10 16-10s-10 4-16 14" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
      <path d="M14 38h52" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function CornerMotif(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M4 4c22 0 40 6 52 18s18 30 18 52"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M4 20c17 0 30 5 40 15s15 23 15 40"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="round"
        opacity="0.6"
      />
      <circle cx="4" cy="4" r="2.6" fill="currentColor" />
      <path d="M14 4c4 3 4 7 0 10" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    </svg>
  );
}

export function MonogramArch({ initials = "R · P", ...props }: SVGProps<SVGSVGElement> & { initials?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M8 52V28c0-13 10.7-24 24-24s24 11 24 24v24"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M14 52V29c0-9.9 8.1-18 18-18s18 8.1 18 18v23"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.55"
      />
      <text
        x="32"
        y="42"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontSize="15"
        fill="currentColor"
      >
        {initials}
      </text>
    </svg>
  );
}

export function BellMotif(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 56" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M20 4v6" stroke="currentColor" strokeWidth="1" />
      <circle cx="20" cy="4" r="2" stroke="currentColor" strokeWidth="1" />
      <path
        d="M10 34c0-9 4.5-16 10-16s10 7 10 16"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path d="M8 34h24l-2 6H10l-2-6Z" stroke="currentColor" strokeWidth="1.2" />
      <path d="M20 40v6" stroke="currentColor" strokeWidth="1" />
      <circle cx="20" cy="48" r="2" fill="currentColor" />
    </svg>
  );
}

export function JasmineSprig(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="12" cy="6" r="2.4" stroke="currentColor" strokeWidth="0.9" />
      <circle cx="7" cy="10" r="2.1" stroke="currentColor" strokeWidth="0.9" />
      <circle cx="17" cy="10" r="2.1" stroke="currentColor" strokeWidth="0.9" />
      <circle cx="12" cy="13" r="1.8" stroke="currentColor" strokeWidth="0.9" />
      <path d="M12 15v6" stroke="currentColor" strokeWidth="0.9" />
    </svg>
  );
}
