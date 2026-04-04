import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import TestimonialMarquee from "@/components/landing/TestimonialMarquee";
import FeaturesSection from "@/components/landing/FeaturesSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import SecuritySection from "@/components/landing/SecuritySection";
import FAQSection from "@/components/landing/FAQSection";
import PricingSection from "@/components/landing/PricingSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import MobileCTA from "@/components/landing/MobileCTA";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <TestimonialMarquee />
    <FeaturesSection />
    <BenefitsSection />
    <SecuritySection />
    <PricingSection />
    <FAQSection />
    <FinalCTASection />
    <Footer />
    <MobileCTA />
  </div>
);

export default Index;
