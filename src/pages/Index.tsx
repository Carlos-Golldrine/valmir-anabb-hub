import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Globe, User } from "lucide-react";
import HeroAnimation from "@/components/HeroAnimation";
import ProfileSection from "@/components/ProfileSection";
import LinkCard from "@/components/LinkCard";
import Footer from "@/components/Footer";
import AboutDialog from "@/components/AboutDialog";
import WhatsAppLogo from "@/assets/logos/WhatsAppLogo";
import LinkedInLogo from "@/assets/logos/LinkedInLogo";
import InstagramLogo from "@/assets/logos/InstagramLogo";
import FacebookLogo from "@/assets/logos/FacebookLogo";

const Index = () => {
  const [showHero, setShowHero] = useState(true);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background relative">
      
      <AnimatePresence mode="wait">
        {showHero ? (
          <HeroAnimation key="hero" onComplete={() => setShowHero(false)} />
        ) : (
          <div key="content" className="relative z-10">
            <ProfileSection />
            
            <div className="max-w-2xl mx-auto px-6 pb-12 space-y-4">
              <button
                onClick={() => setAboutOpen(true)}
                className="w-full group block bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 transition-all duration-300 hover:border-institutional-gold hover:shadow-lg hover:shadow-institutional-gold/20 hover:scale-[1.02] text-left"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-institutional-gold group-hover:text-institutional-glow transition-colors duration-300">
                      <User className="w-6 h-6" />
                    </div>
                    <span className="text-lg font-medium text-foreground group-hover:text-institutional-gold transition-colors duration-300">
                      Quem sou?
                    </span>
                  </div>
                </div>
              </button>

              <LinkCard
                icon={<Globe className="w-6 h-6" />}
                title="Conheça a ANABB"
                url="https://www.anabb.org.br/"
                delay={0.7}
              />
              <LinkCard
                icon={<WhatsAppLogo size={28} />}
                title="WhatsApp"
                url="https://wa.me/5561981240674?text=ola%20vim%20pelo%20goldcard"
                delay={0.8}
              />
              <LinkCard
                icon={<LinkedInLogo size={28} />}
                title="LinkedIn"
                url="https://www.linkedin.com/in/valmir-marques-camilo-798574a6"
                delay={0.9}
              />
              <LinkCard
                icon={<InstagramLogo size={28} />}
                title="Instagram"
                url="https://instagram.com/valmircamilo"
                delay={1.0}
              />
              <LinkCard
                icon={<FacebookLogo size={28} />}
                title="Facebook"
                url="https://www.facebook.com/profile.php?id=100000669888293&ref=_ig_profile_ac"
                delay={1.1}
              />
            </div>

            <AboutDialog open={aboutOpen} onOpenChange={setAboutOpen} />

            <Footer />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
