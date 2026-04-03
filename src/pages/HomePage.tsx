import ChatbotWidget from "../components/ChatbotWidget";
import Footer from "../components/Foooter";
import LandingNav from "../components/LandingNav";
import ContactUsSection from "../components/home/ContactUsSection";
import GlobalLocationsSection from "../components/home/GlobalLocationsSection";
import HeroSection from "../components/home/HeroSection";
import HomeFooter from "../components/home/HomeFooter";
import ProductAndMachines from "../components/home/ProductAndMachiens";
import ServicesAndSupport from "../components/home/ServicesAndSupport";
import StatsSection from "../components/home/StatsSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import WhatWeBuildSection from "../components/home/WhatWeBuildSection";
import WhoAreWeSection from "../components/home/WhoAreWeSection";
import WhyChooseSection from "../components/home/WhyChooseSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-charcoal antialiased">
      <div>
        <ChatbotWidget />
      </div>
      <LandingNav />
      <HeroSection />
      <StatsSection />
      <WhatWeBuildSection />
      <WhyChooseSection />
      <WhoAreWeSection />
      <ProductAndMachines />
      <ServicesAndSupport />
      <ContactUsSection />
      {/*<ElectricalServicesSection />*/}
      {/*<DarkServicesSection />*/}
      {/*<GlobalReachSection />*/}
      {/*<TestimonialsSection />*/}
      <GlobalLocationsSection />
      <Footer />
    </div>
  );
}
