import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { InterventionMapSection } from "@/components/InterventionMapSection";
import { RealisationsSection } from "@/components/RealisationsSection";
import { SavoirFaireSection } from "@/components/SavoirFaireSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingCallButton } from "@/components/FloatingCallButton";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <InterventionMapSection />
        <RealisationsSection />
        <SavoirFaireSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
}
