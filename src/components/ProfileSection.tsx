import { motion } from "framer-motion";
import valmirPhoto from "@/assets/valmir.jpg";

const ProfileSection = () => {
  return (
    <motion.section
      className="max-w-4xl mx-auto px-6 py-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-12">
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-institutional-gold/30 shadow-2xl box-glow">
            <img 
              src={valmirPhoto} 
              alt="Valmir Marques Camilo" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Valmir Marques Camilo
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-institutional-gold font-medium tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Presidente da ANABB
        </motion.p>
        <motion.p
          className="text-lg text-muted-foreground mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Associação Nacional dos Funcionários do Banco do Brasil
        </motion.p>
      </div>
    </motion.section>
  );
};

export default ProfileSection;
