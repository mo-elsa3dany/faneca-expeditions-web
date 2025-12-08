import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Faneca Expeditions | Liveaboard trip design & planning",
  description:
    "Liveaboard trip design and planning for divers. Trip matchmaker quiz, curated departure calendar and private concierge support.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased space-bg-debug">
        <div className="site-root">
          <header className="site-header">
            <div className="site-header-inner">
              <Link href="/" className="site-brand">
                <span className="site-brand-mark" aria-hidden="true">
                  <Image
                    src="/images/brand/ship-mark.png"
                    alt="Faneca Expeditions"
                    width={28}
                    height={28}
                    className="site-brand-logo"
                  />
                </span>
                <span className="site-brand-text">
                  <span className="site-brand-name">Faneca Expeditions</span>
                  <span className="site-brand-tagline">
                    Liveaboard trip design &amp; planning
                  </span>
                </span>
              </Link>

              <nav className="site-nav" aria-label="Main navigation">
                <Link href="/calendar" className="site-nav-link">
                  Calendar
                </Link>
                <Link href="/quiz" className="site-nav-link">
                  Trip matchmaker
                </Link>
                <Link href="/concierge" className="site-nav-link">
                  Concierge
                </Link>
              </nav>
            </div>
          </header>

          <main className="site-main-shell">
            {children}
          </main>

          <footer className="site-footer">
            <div className="site-footer-inner">
              <div className="site-footer-left">
                Based in Portugal (EU) · info@fanecaexpeditions.com
              </div>
              <div className="site-footer-right">
                Liveaboard routing, conditions &amp; trip design for divers.
                <a href="/admin/login" className="admin-link">
                  Admin
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
