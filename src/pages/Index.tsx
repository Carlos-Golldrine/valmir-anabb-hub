import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Globe, Instagram } from "lucide-react";
import HeroAnimation from "@/components/HeroAnimation";
import ProfileSection from "@/components/ProfileSection";
import LinkCard from "@/components/LinkCard";
import Footer from "@/components/Footer";

const Index = () => {
  const [showHero, setShowHero] = useState(true);

  return (
    <div className="min-h-screen bg-background relative">
      
      <AnimatePresence mode="wait">
        {showHero ? (
          <HeroAnimation key="hero" onComplete={() => setShowHero(false)} />
        ) : (
          <div key="content" className="relative z-10">
            <ProfileSection />
            
            <div className="max-w-2xl mx-auto px-6 pb-12 space-y-4">
              <LinkCard
                icon={<Globe className="w-6 h-6" />}
                title="Site da ANABB"
                url="https://www.anabb.org.br/"
                delay={0.7}
              />
              <LinkCard
                icon={<Instagram className="w-6 h-6" />}
                title="Instagram"
                url="https://instagram.com/valmircamilo"
                delay={0.9}
              />
            </div>

            <Footer />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
