import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="py-12 px-6 text-center border-t border-border/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
    >
      <p className="text-muted-foreground italic text-lg font-light max-w-2xl mx-auto leading-relaxed">
        "Liderança, experiência e compromisso com os associados do Banco do Brasil."
      </p>
      <div className="mt-6 flex justify-center">
        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-institutional-gold to-transparent rounded-full"></div>
      </div>
    </motion.footer>
  );
};

export default Footer;
