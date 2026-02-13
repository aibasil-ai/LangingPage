"use client";

import React, { useMemo, useState } from "react";
import type { LandingSection } from "@/types/landing";

type ExpandableSectionProps = {
  section: LandingSection;
  animationDelay: string;
  expandable: boolean;
  initialVisible?: number;
  step?: number;
};

function CardIconGlyph({ code }: { code: string }) {
  const commonProps = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
    "aria-hidden": true,
    focusable: false,
  };

  switch (code) {
    case "SYS":
      return (
        <svg {...commonProps}>
          <rect x="3" y="3" width="8" height="8" rx="1.5" />
          <rect x="13" y="3" width="8" height="8" rx="1.5" />
          <rect x="3" y="13" width="8" height="8" rx="1.5" />
          <rect x="13" y="13" width="8" height="8" rx="1.5" />
        </svg>
      );
    case "DB":
      return (
        <svg {...commonProps}>
          <ellipse cx="12" cy="5.5" rx="7.5" ry="3" />
          <path d="M4.5 5.5v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6" />
          <path d="M4.5 11.5v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6" />
        </svg>
      );
    case "KB":
      return (
        <svg {...commonProps}>
          <path d="M4 5a2 2 0 0 1 2-2h5v18H6a2 2 0 0 0-2 2z" />
          <path d="M20 5a2 2 0 0 0-2-2h-5v18h5a2 2 0 0 1 2 2z" />
        </svg>
      );
    case "MSG":
      return (
        <svg {...commonProps}>
          <path d="M4 5h16v10H9l-5 4V5z" />
          <path d="M8 9h8" />
          <path d="M8 12h5" />
        </svg>
      );
    case "SSO":
      return (
        <svg {...commonProps}>
          <circle cx="8" cy="8" r="3" />
          <circle cx="16" cy="16" r="3" />
          <path d="M10.2 10.2l3.6 3.6" />
          <path d="M5 18v-1.2a3.8 3.8 0 0 1 3.8-3.8H9" />
          <path d="M19 6v1.2a3.8 3.8 0 0 1-3.8 3.8H15" />
        </svg>
      );
    case "SYNC":
      return (
        <svg {...commonProps}>
          <path d="M20 7h-4V3" />
          <path d="M4 17h4v4" />
          <path d="M5 9a7 7 0 0 1 11-3l1 1" />
          <path d="M19 15a7 7 0 0 1-11 3l-1-1" />
        </svg>
      );
    case "TRN":
      return (
        <svg {...commonProps}>
          <path d="M4 5h9v7H8l-4 3V5z" />
          <path d="M11 9h9v7h-4l-5 3V9z" />
          <path d="M7 9h3" />
          <path d="M14 13h3" />
        </svg>
      );
    case "PDF":
      return (
        <svg {...commonProps}>
          <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
          <path d="M14 3v5h5" />
          <path d="M9 14h6" />
          <path d="m10 18-2-2 2-2" />
          <path d="m14 14 2 2-2 2" />
        </svg>
      );
    case "PPT":
      return (
        <svg {...commonProps}>
          <rect x="3" y="4" width="14" height="10" rx="2" />
          <path d="M7 8h6" />
          <path d="M7 11h4" />
          <path d="M17 8h4v11H9" />
          <path d="M11 20h8" />
        </svg>
      );
    case "CAL":
      return (
        <svg {...commonProps}>
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path d="M8 7h8" />
          <path d="M8 11h2" />
          <path d="M12 11h2" />
          <path d="M16 11h0.01" />
          <path d="M8 15h2" />
          <path d="M12 15h2" />
          <path d="M16 14v2" />
          <path d="M15 15h2" />
        </svg>
      );
    case "GMK":
      return (
        <svg {...commonProps}>
          <path d="M5 5h14v14H5z" />
          <path d="M9.5 5v14" />
          <path d="M14.5 5v14" />
          <path d="M5 9.5h14" />
          <path d="M5 14.5h14" />
          <circle cx="9.5" cy="9.5" r="1.4" />
          <circle cx="14.5" cy="14.5" r="1.4" />
        </svg>
      );
    case "MINE":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="4.5" />
          <path d="M12 2v3" />
          <path d="M12 19v3" />
          <path d="M2 12h3" />
          <path d="M19 12h3" />
          <path d="M4.6 4.6l2.2 2.2" />
          <path d="M17.2 17.2l2.2 2.2" />
          <path d="M4.6 19.4l2.2-2.2" />
          <path d="M17.2 6.8l2.2-2.2" />
        </svg>
      );
    case "VOC":
      return (
        <svg {...commonProps}>
          <path d="M12 3 19 10 12 21 5 10z" />
          <circle cx="12" cy="11" r="1.5" />
          <path d="M9 14h6" />
        </svg>
      );
    case "OSP":
      return (
        <svg {...commonProps}>
          <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
          <path d="M14 3v5h5" />
          <path d="m10 11-2 2 2 2" />
          <path d="m14 11 2 2-2 2" />
        </svg>
      );
    case "SUP":
      return (
        <svg {...commonProps}>
          <path d="m5 19 8-8" />
          <path d="m4 20 2-5 3 3-5 2z" />
          <path d="M15 5l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" />
          <path d="M19 12l.5 1 1 .5-1 .5-.5 1-.5-1-1-.5 1-.5z" />
        </svg>
      );
    case "UIX":
      return (
        <svg {...commonProps}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 9h18" />
          <path d="M10 9v11" />
          <path d="m14 12 4 3-2 .8.8 3.2-1.2.5-1.1-3-2 .8z" />
        </svg>
      );
    case "LOG":
      return (
        <svg {...commonProps}>
          <path d="M6 3h9l3 3v15H6z" />
          <path d="M15 3v4h4" />
          <path d="M9 12h6" />
          <path d="M9 16h6" />
        </svg>
      );
    default:
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="6" />
        </svg>
      );
  }
}

export function ExpandableSection({
  section,
  animationDelay,
  expandable,
  initialVisible = 4,
  step = 4,
}: ExpandableSectionProps) {
  const [visibleCount, setVisibleCount] = useState(initialVisible);

  const cards = useMemo(() => {
    if (!expandable) {
      return section.cards;
    }

    return section.cards.slice(0, visibleCount);
  }, [expandable, section.cards, visibleCount]);

  const hasMore = expandable && visibleCount < section.cards.length;

  return (
    <section
      className="section reveal"
      aria-label={`section-${section.title}`}
      style={{ animationDelay }}
    >
      <h2 className="section-title">{section.title}</h2>
      <div className="card-grid">
        {cards.map((card) => (
          <a
            key={`${section.id}-${card.title}`}
            href={card.href}
            className={`card${card.fullWidth ? " card-full" : ""}`}
            target={card.external ? "_blank" : undefined}
            rel={card.external ? "noopener noreferrer" : undefined}
          >
            <div className={`card-icon ${card.iconTone}`}>
              <CardIconGlyph code={card.icon} />
            </div>
            <div className="card-title">{card.title}</div>
            <p className="card-desc">{card.description}</p>
            {card.badge ? (
              <span className={`card-badge ${card.badge.tone ?? "neutral"}`}>
                {card.badge.text}
              </span>
            ) : null}
          </a>
        ))}
      </div>
      {hasMore ? (
        <button
          type="button"
          className="show-more-button"
          onClick={() =>
            setVisibleCount((prev) => Math.min(prev + step, section.cards.length))
          }
        >
          顯示更多
        </button>
      ) : null}
    </section>
  );
}
