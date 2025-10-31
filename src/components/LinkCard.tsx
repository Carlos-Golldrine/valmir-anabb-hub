import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { ReactNode } from "react";

interface LinkCardProps {
  icon: ReactNode;
  title: string;
  url: string;
  delay?: number;
  iconColor?: string;
}

const LinkCard = ({ icon, title, url, delay = 0, iconColor }: LinkCardProps) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 transition-all duration-300 hover:border-institutional-gold hover:shadow-lg hover:shadow-institutional-gold/20 hover:scale-[1.02]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ y: -2 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className={!iconColor ? "text-institutional-gold group-hover:text-institutional-glow transition-colors duration-300" : ""}>
            {icon}
          </div>
          <span className="text-lg font-medium text-foreground group-hover:text-institutional-gold transition-colors duration-300">
            {title}
          </span>
        </div>
        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-institutional-gold transition-colors duration-300" />
      </div>
    </motion.a>
  );
};

export default LinkCard;
