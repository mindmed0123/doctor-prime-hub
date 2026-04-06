import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import TestimonialMarquee from "@/components/landing/TestimonialMarquee";
import ROISection from "@/components/landing/ROISection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import SecuritySection from "@/components/landing/SecuritySection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import MobileCTA from "@/components/landing/MobileCTA";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen bg-background pb-16 md:pb-0">
    <Navbar />
    <HeroSection />
    <TestimonialMarquee />
    <ROISection />
    <HowItWorksSection />
    <FeaturesSection />
    <BenefitsSection />
    <SocialProofSection />
    <SecuritySection />
    <PricingSection />
    <FAQSection />
    <FinalCTASection />
    <Footer />
    <MobileCTA />
  </div>
);

export default Index;
