import { 
  Shield, 
  Users, 
  MapPin, 
  FileText, 
  Bell, 
  BarChart3,
  CheckCircle2,
  Zap
} from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Multi-perfil Inteligente',
    description: 'Sistema reconhece automaticamente o tipo de usuário: Administrador, Operário, UVIS ou Visualizador.',
  },
  {
    icon: MapPin,
    title: 'Integração com API dos Correios',
    description: 'Preenchimento automático de endereço via CEP, com coordenadas GPS precisas.',
  },
  {
    icon: FileText,
    title: 'Gestão de Solicitações de Voo',
    description: 'Controle completo de solicitações com status, protocolo DECEA e documentação.',
  },
  {
    icon: Bell,
    title: 'Notificações em Tempo Real',
    description: 'Acompanhamento de status e alertas automáticos para todas as partes envolvidas.',
  },
  {
    icon: BarChart3,
    title: 'Dashboards e Relatórios',
    description: 'Exportação inteligente em Excel e PDF com filtros avançados.',
  },
  {
    icon: Shield,
    title: 'Segurança e Permissões',
    description: 'Controle granular de acesso com diferentes níveis de permissão por perfil.',
  },
];

const IJASystem = () => {
  return (
    <section id="ijasystem" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dots-pattern opacity-30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Nosso Principal Produto</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Conheça o{' '}
            <span className="text-gradient-primary">IJASystem</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Sistema completo de Gestão de Solicitações de Voo desenvolvido para 
            otimizar operações com drones, garantindo agilidade, precisão e conformidade regulatória.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group glass-card p-6 border-gradient hover:bg-card/80 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:glow-effect transition-all duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight Box */}
        <div className="mt-16 glass-card p-8 md:p-12 border-gradient">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                ChatBot Integrado para{' '}
                <span className="text-gradient-accent">Suporte Inteligente</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                Assistente virtual disponível para tirar dúvidas sobre status, checklist, 
                dashboard, agendamentos e muito mais. Reduz erros e aumenta a produtividade das equipes.
              </p>
              
              <ul className="space-y-3">
                {['Respostas instantâneas', 'Integração completa', 'Suporte 24/7', 'Redução de erros'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="aspect-video rounded-xl bg-secondary/50 border border-border/50 overflow-hidden flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">Interface IJASystem</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IJASystem;
