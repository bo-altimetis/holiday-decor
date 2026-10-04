import { business, getMailtoHref, getTelHref } from "@/config/business";
import { Container } from "@/components/container";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const mailto = getMailtoHref();
  const socials = Object.entries(business.socialLinks).filter(([, url]) => url.startsWith("http"));

  return (
    <footer className="dark-section bg-evergreen-deep pb-28 text-cream lg:pb-12">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="font-serif text-2xl">{business.businessName}</p>
          <p className="mt-3 max-w-sm leading-relaxed text-cream/75">
            Outdoor holiday decorating in {business.regionName}.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-soft">Phone</p>
          <ul className="mt-4 space-y-3">
            <li>
              <a href={getTelHref()} className="inline-flex min-h-11 items-center font-semibold">
                {business.phone}
              </a>
            </li>
            <li>
              {mailto ? (
                <a href={mailto} className="inline-flex min-h-11 items-center break-all">
                  {business.email}
                </a>
              ) : (
                <span className="inline-flex min-h-11 items-center break-all">{business.email}</span>
              )}
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-soft">
            On this page
          </p>
          <ul className="mt-4 space-y-1">
            <li>
              <a href="#service-area" className="inline-flex min-h-11 items-center">
                Service Area
              </a>
            </li>
            <li>
              <a href="#quote" className="inline-flex min-h-11 items-center font-semibold">
                Get a Quote
              </a>
            </li>
          </ul>
          {socials.length > 0 ? (
            <ul className="mt-4 flex flex-wrap gap-4">
              {socials.map(([name, url]) => (
                <li key={name}>
                  <a href={url} className="underline capitalize" rel="noreferrer">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </Container>
      <Container className="border-t border-white/10 py-6 text-sm text-cream/70">
        <p>
          © {year} {business.businessName}
        </p>
      </Container>
    </footer>
  );
}
