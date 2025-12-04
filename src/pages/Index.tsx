import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProductsSection } from "@/components/ProductsSection";
import { TeamSection } from "@/components/TeamSection";
import { CasesSection } from "@/components/CasesSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProductsSection />
      <TeamSection />
      <CasesSection />
      <WhyUsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
