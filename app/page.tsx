import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SectionStory from "@/components/SectionStoryClient";
import SectionAuthority from "@/components/SectionAuthority";
import SectionPhilosophy from "@/components/SectionPhilosophy";

const SectionServices = dynamic(() => import("@/components/SectionServices"));
const SectionExpertise = dynamic(() => import("@/components/SectionExpertise"));
const SectionPortfolio = dynamic(() => import("@/components/SectionPortfolio"));
const SectionCaseStudies = dynamic(() => import("@/components/SectionCaseStudies"));
const SectionTestimonials = dynamic(() => import("@/components/SectionTestimonials"));
const SectionProcess = dynamic(() => import("@/components/SectionProcess"));
const SectionWhyChoose = dynamic(() => import("@/components/SectionWhyChoose"));
const SectionCTA = dynamic(() => import("@/components/SectionCTA"));

export default function Home() {
  return (
    <main>
      <Navigation />

      <Hero />
      <SectionStory />
      <SectionAuthority />
      <SectionPhilosophy />

      <SectionServices />
      <SectionExpertise />
      <SectionPortfolio />
      <SectionCaseStudies />
      <SectionTestimonials />
      <SectionProcess />
      <SectionWhyChoose />
      <SectionCTA />

      <Footer />
    </main>
  );
}
