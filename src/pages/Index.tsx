import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Globe, Instagram, User, Linkedin, MessageCircle } from "lucide-react";
import HeroAnimation from "@/components/HeroAnimation";
import ProfileSection from "@/components/ProfileSection";
import LinkCard from "@/components/LinkCard";
import Footer from "@/components/Footer";
import AboutDialog from "@/components/AboutDialog";

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
                      Sobre
                    </span>
                  </div>
                </div>
              </button>

              <LinkCard
                icon={<MessageCircle className="w-6 h-6" style={{ color: '#25D366' }} />}
                title="WhatsApp"
                url="https://wa.me/5561981240674?text=ola%20vim%20pelo%20goldcard"
                delay={0.7}
                iconColor="#25D366"
              />
              <LinkCard
                icon={<Globe className="w-6 h-6" />}
                title="Site da ANABB"
                url="https://www.anabb.org.br/"
                delay={0.8}
              />
              <LinkCard
                icon={<Linkedin className="w-6 h-6" style={{ color: '#0A66C2' }} />}
                title="LinkedIn"
                url="https://www.linkedin.com/in/valmir-marques-camilo-798574a6"
                delay={0.9}
                iconColor="#0A66C2"
              />
              <LinkCard
                icon={<Instagram className="w-6 h-6" style={{ color: '#E4405F' }} />}
                title="Instagram"
                url="https://instagram.com/valmircamilo"
                delay={1.0}
                iconColor="#E4405F"
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
