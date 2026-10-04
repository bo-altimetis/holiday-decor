"use client";

import { business } from "@/config/business";
import { QuoteLink } from "@/components/buttons";
import { useEffect, useId, useRef, useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#faq", label: "FAQ" },
];

function Logo() {
  return (
    <span className="block min-w-0">
      <span className="block font-serif text-[1.05rem] leading-none sm:text-xl">Holiday</span>
      <span className="mt-1 block text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-gold-soft sm:text-xs">
        Imaginarium
      </span>
    </span>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    function onPointer(event: PointerEvent) {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false);
    }

    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <header className="dark-section sticky top-0 z-50 border-b border-white/10 bg-evergreen-deep/95 text-cream backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 py-3 sm:px-8">
        <a href="#top" aria-label={business.businessName} className="min-w-0 flex-1 rounded-md">
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-cream/85 hover:text-gold-soft"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <QuoteLink className="shrink-0 px-3.5 text-[0.8rem] sm:px-6 sm:text-sm">
          Get a Quote
        </QuoteLink>

        <div className="relative lg:hidden" ref={wrapRef}>
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
              {open ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>

          {open ? (
            <nav
              id={menuId}
              aria-label="Mobile"
              className="absolute right-0 top-[calc(100%+0.6rem)] z-50 w-56 rounded-2xl border border-white/10 bg-evergreen p-2 shadow-2xl"
            >
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex min-h-12 items-center rounded-xl px-4 text-base font-semibold text-cream hover:bg-white/10"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          ) : null}
        </div>
      </div>
    </header>
  );
}
