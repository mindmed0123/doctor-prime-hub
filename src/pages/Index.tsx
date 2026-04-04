import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProductSection from "@/components/landing/ProductSection";
import DemoSection from "@/components/landing/DemoSection";
import ComparisonSection from "@/components/landing/ComparisonSection";
import ROISection from "@/components/landing/ROISection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import SecuritySection from "@/components/landing/SecuritySection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import MobileCTA from "@/components/landing/MobileCTA";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <ProductSection />
    <DemoSection />
    <ComparisonSection />
    <ROISection />
    <SocialProofSection />
    <SecuritySection />
    <FinalCTASection />
    <Footer />
    <MobileCTA />
  </div>
);

export default Index;
