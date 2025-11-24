import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface AboutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AboutDialog = ({ open, onOpenChange }: AboutDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl bg-card/95 backdrop-blur-md border-institutional-gold/30">
        <DialogHeader>
          <DialogTitle className="text-2xl font-poppins font-semibold text-institutional-gold mb-4 flex items-center gap-3">
            <span className="w-1 h-8 bg-institutional-gold rounded-full"></span>
            Quem sou eu?
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-foreground/90 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
          <p>
            Sou Valmir Marques Camilo, advogado e jornalista, com mais de três décadas dedicadas à defesa dos funcionários do Banco do Brasil e ao fortalecimento do associativismo.
          </p>
          <p>
            Atualmente, presido a ANABB, entidade que tem como missão proteger o Banco do Brasil como patrimônio público e defender os direitos de seus funcionários da ativa, aposentados e pensionistas.
          </p>
          <p>
            Minha trajetória sempre esteve ligada à construção coletiva de conquistas trabalhistas, previdenciárias e institucionais para essa comunidade.
          </p>
          <p>
            Minha formação inclui pós-graduação em Administração de Instituições Financeiras pela Fundação Getulio Vargas (FGV/SP) e em Gestão de Fundos de Pensão pela The Wharton School, da University of Pennsylvania, nos Estados Unidos. Atuei como diretor e presidente da ANABB entre 1993 e 2010, período marcado por importantes avanços na representação dos funcionários do Banco do Brasil. Fui fundador e primeiro presidente da ANABBPrev e, ao longo dos anos, integrei sua governança, além de ter sido conselheiro deliberativo eleito da PREVI nos mandatos de 1998–2002 e 2004–2008, aprofundando minha experiência em previdência complementar e gestão de fundos de pensão.
          </p>
          <p>
            Minha atuação também se estendeu de forma relevante ao setor privado, especialmente na governança de grandes companhias brasileiras. Fui presidente do Conselho de Administração da Acesita, do Grupo Beto Carrero World, da Bombril e da Paranapanema, além de ter exercido o cargo de conselheiro de administração da Neoenergia. Na Bombril, atuei ainda como interventor judicial, função que exigiu firmeza, responsabilidade e foco em recuperação e transparência.
          </p>
          <p>
            Essas experiências reforçaram minha visão sobre governança corporativa, responsabilidade fiduciária e compromisso com resultados sustentáveis.
          </p>
          <p>
            Acredito que o futuro dos funcionários do Banco do Brasil passa pela consciência da força coletiva. Por isso, meu compromisso é fortalecer a ANABB como espaço plural, independente e propositivo, capaz de influenciar o debate no Legislativo, no Executivo e no Judiciário, proteger a saúde e a previdência dos associados e ampliar a participação das novas gerações no movimento associativo.
          </p>
          <p>
            Minha motivação diária é retribuir, com trabalho e resultados, a confiança de quem escolhe caminhar ao lado da ANABB.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AboutDialog;
