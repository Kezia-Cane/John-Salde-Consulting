import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SectionStory from "@/components/SectionStory";
import SectionAuthority from "@/components/SectionAuthority";
import SectionPhilosophy from "@/components/SectionPhilosophy";
import SectionServices from "@/components/SectionServices";
import SectionExpertise from "@/components/SectionExpertise";
import SectionPortfolio from "@/components/SectionPortfolio";
import SectionCaseStudies from "@/components/SectionCaseStudies";
import SectionTestimonials from "@/components/SectionTestimonials";
import SectionProcess from "@/components/SectionProcess";
import SectionWhyChoose from "@/components/SectionWhyChoose";
import SectionCTA from "@/components/SectionCTA";

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
