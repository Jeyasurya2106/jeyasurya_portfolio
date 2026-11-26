import React from "react";

interface MarqueeProps {
  items: string[];
  reverse?: boolean;
  duration?: number;
  outlined?: boolean;
}

/** Endless ticker. The list is rendered twice and slid by exactly half its width. */
export function Marquee({ items, reverse = false, duration = 45, outlined = false }: MarqueeProps) {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {items.map((item) => (
        <li key={item} className="flex items-center">
          <span
            className={`whitespace-nowrap px-6 font-display text-[clamp(2rem,5.5vw,4.5rem)] font-semibold leading-none tracking-[-0.03em] sm:px-9 ${
              outlined ? "text-fg/25" : "text-fg"
            }`}
          >
            {item}
          </span>
          <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-glow sm:h-7 sm:w-7" aria-hidden>
            <path
              fill="currentColor"
              d="M12 0c.6 6.3 5.7 11.4 12 12-6.3.6-11.4 5.7-12 12-.6-6.3-5.7-11.4-12-12 6.3-.6 11.4-5.7 12-12Z"
            />
          </svg>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="marquee mask-fade-x overflow-hidden">
      <div
        className="marquee-track flex w-max animate-marquee"
        style={
          {
            "--marquee-duration": `${duration}s`,
            animationDirection: reverse ? "reverse" : "normal",
          } as React.CSSProperties
        }
      >
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
