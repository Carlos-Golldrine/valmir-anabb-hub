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
            Sobre
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-foreground/90 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
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
      </DialogContent>
    </Dialog>
  );
};

export default AboutDialog;
