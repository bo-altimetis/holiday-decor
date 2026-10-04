import { About } from "@/components/about";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Pricing } from "@/components/pricing";
import { Projects } from "@/components/projects";
import { QuoteBand } from "@/components/quote-band";
import { QuoteForm } from "@/components/quote-form";
import { Seasons } from "@/components/seasons";
import { ServiceArea } from "@/components/service-area";
import { Services } from "@/components/services";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Seasons />
      <Services />
      <Pricing />
      <HowItWorks />
      <Projects />
      <About />
      <ServiceArea />
      <Faq />
      <QuoteBand />
      <QuoteForm />
    </>
  );
}
