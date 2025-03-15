import { Demo } from "@/src/components/landing/demo";
import { FAQ } from "@/src/components/landing/faq";
import { HowItWorks } from "@/src/components/landing/how-it-works";
import { CTA } from "@/src/components/landing/cta";
import { Hero } from "@/src/components/landing/hero";
import { Features } from "@/src/components/landing/features";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Demo />
      <HowItWorks />
      <CTA />
      <FAQ />
    </>
  );
}
