import { getSmsHref } from "@/config/business";

export function MobileQuoteBar() {
  return (
    <div className="dark-section fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-evergreen-deep/95 px-4 pt-2.5 backdrop-blur-md lg:hidden pb-[max(0.65rem,env(safe-area-inset-bottom))]">
      <a
        href={getSmsHref()}
        className="mx-auto flex min-h-12 max-w-lg items-center justify-center gap-2 rounded-full bg-gold px-5 text-sm font-semibold text-evergreen-deep"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 18.5 4.5 20.5V6.5A2 2 0 0 1 6.5 4.5h11a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7Z" />
        </svg>
        Text Photo for Quote
      </a>
    </div>
  );
}
