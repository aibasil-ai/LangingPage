import React from "react";
import Image from "next/image";
import { ExpandableSection } from "@/components/expandable-section";
import { ExternalLinkIcon } from "@/components/external-link-icon";
import { landingContent } from "@/data/landing-content";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="site-shell">
      <header className="hero" id="top">
        <div className="hero-logo">
          <Image
            src="/photo_2026-02-13_16-09-17.jpg"
            alt="Josh 個人照片"
            fill
            priority
            className="hero-logo-image"
            sizes="96px"
          />
        </div>
        <div className="hero-brand">{landingContent.brandName}</div>
        <h1 className="hero-title">{landingContent.heroTitle}</h1>
        <p className="hero-subtitle">{landingContent.heroSubtitle}</p>
      </header>

      <main className="container">
        <section className="section reveal" style={{ animationDelay: "50ms" }}>
          <article className="intro-card">
            <h3>{landingContent.intro.title}</h3>
            {landingContent.intro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="intro-note">{landingContent.intro.note}</p>
          </article>
        </section>

        {landingContent.sections.map((section, index) => (
          <ExpandableSection
            key={section.id}
            section={section}
            animationDelay={`${(index + 2) * 70}ms`}
            expandable={["systems", "tools", "games"].includes(section.id)}
          />
        ))}

        <section className="section reveal" style={{ animationDelay: "420ms" }}>
          <h2 className="section-title">外部網站</h2>
          <div className="external-links">
            {landingContent.externalLinks.map((link) => (
              <a
                key={link.label}
                className="ext-link"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="ext-link-icon">
                  <ExternalLinkIcon brand={link.icon} />
                </span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="section reveal" style={{ animationDelay: "500ms" }}>
          <h2 className="section-title">聯絡方式</h2>
          <div className="external-links">
            {landingContent.contacts.map((item) => (
              <a key={item.label} className="ext-link" href={item.href}>
                {item.label}｜{item.value}
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p className="footer-text">
          版權所有 © {currentYear} {landingContent.copyrightOwner}. All rights
          reserved.
        </p>
      </footer>

      <a href="#top" className="back-to-top" aria-label="回到頂部">
        ↑
      </a>
    </div>
  );
}
