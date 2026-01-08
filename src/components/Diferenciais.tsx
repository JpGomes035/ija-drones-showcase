import { 
  Cpu, 
  Code2, 
  HeadphonesIcon, 
  Rocket,
  Settings,
  TrendingUp
} from 'lucide-react';

const diferenciais = [
  {
    icon: Cpu,
    title: 'Hardware Próprio',
    description: 'Desenvolvimento completo de hardware customizado para cada necessidade específica do cliente.',
    gradient: 'from-primary to-electric-cyan',
  },
  {
    icon: Code2,
    title: 'Software Integrado',
    description: 'Sistemas desenvolvidos do zero, perfeitamente integrados ao hardware para máxima eficiência.',
    gradient: 'from-accent to-golden',
  },
  {
    icon: HeadphonesIcon,
    title: 'Suporte Contínuo',
    description: 'Acompanhamento e suporte técnico permanente para garantir o funcionamento ideal das soluções.',
    gradient: 'from-primary to-glow-blue',
  },
  {
    icon: Settings,
    title: 'Soluções Personalizadas',
    description: 'Cada projeto é desenvolvido sob medida, considerando as particularidades de cada cliente.',
    gradient: 'from-accent to-primary',
  },
  {
    icon: TrendingUp,
    title: 'Escalabilidade',
    description: 'Sistemas projetados para crescer junto com o seu negócio, adaptando-se às novas demandas.',
    gradient: 'from-electric-cyan to-primary',
  },
  {
    icon: Rocket,
    title: 'Inovação Constante',
    description: 'Investimento contínuo em pesquisa e desenvolvimento para soluções cada vez mais avançadas.',
    gradient: 'from-golden to-accent',
  },
];

const Diferenciais = () => {
  return (
    <section id="diferenciais" className="relative py-24 md:py-32 bg-secondary/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      <div className="container relative mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Por que escolher a{' '}
            <span className="text-gradient-accent">IJA Drones</span>?
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Oferecemos uma abordagem completa e integrada, do desenvolvimento à manutenção, 
            garantindo soluções robustas e confiáveis.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diferenciais.map((item, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="glass-card p-8 h-full border-gradient hover:transform hover:-translate-y-2 transition-all duration-300">
                {/* Icon with gradient background */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} p-0.5 mb-6`}>
                  <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 glass-card px-8 py-4 border-gradient">
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
            <p className="text-foreground font-medium">
              Desenvolvimento integral de <span className="text-primary">hardware</span> e <span className="text-accent">software</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;
