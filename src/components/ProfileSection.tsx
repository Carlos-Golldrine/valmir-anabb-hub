import { motion } from "framer-motion";

const ProfileSection = () => {
  return (
    <motion.section
      className="max-w-4xl mx-auto px-6 py-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-12">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Valmir Marques Camilo
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-institutional-gold font-medium tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Presidente da ANABB
        </motion.p>
        <motion.p
          className="text-lg text-muted-foreground mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Associação Nacional dos Funcionários do Banco do Brasil
        </motion.p>
      </div>

      <motion.div
        className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-10 shadow-xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-2xl font-poppins font-semibold text-institutional-gold mb-6 flex items-center gap-3">
          <span className="w-1 h-8 bg-institutional-gold rounded-full"></span>
          Sobre
        </h2>
        <div className="space-y-4 text-foreground/90 leading-relaxed">
          <p>
            Advogado e jornalista. Pós-graduado em Administração de Instituições Financeiras pela Fundação Getulio Vargas de São Paulo e em Gestão de Fundos e Pensão pela The Wharton School, The University of Pennsylvania, Estados Unidos.
          </p>
          <p>
            Foi diretor (1993-1995) e presidente da ANABB (1996-2010). Fundador e primeiro presidente da ANABBPrev.
          </p>
          <p>
            Atuou como conselheiro deliberativo eleito da Previ (1998-2002; 2004-2008).
          </p>
          <p>
            Foi presidente do Conselho de Administração dos grupos Acesita, Beto Carrero World, Bombril e Paranapanema, além de conselheiro da Neoenergia.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ProfileSection;
